---
sidebar_position: 3
---

# State and Instantiate

Within this section of the tutorial we will be defining the state of our contract, state is
everything that will be stored on chain in the contract's storage. After this is setup we will
define our contract's instantiate entry point which performs the initial setup of our contract
(similarly) to a constructor in object-oriented programming.

## State

All state definitions for our contract will be located within the `src/state.rs` file, let's open
this file and see what boilerplate state has already been generated for us. Upon opening the file
you should see:

```rust
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use cosmwasm_std::Addr;
use cw_storage_plus::Item;

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct State {
    pub count: i32,
    pub owner: Addr,
}

pub const STATE: Item<State> = Item::new("state");
```

Before we make any changes, let's describe what each component of this file does:

- `JsonSchema` allows a struct to be used when generating JSON Schema, this is useful when
  outputting types for a frontend using `examples/schema.rs`
- `Serialize` and `Deserialize` allow the struct to be serialized and deserialized to and from
  base64 (the `Binary` Cosmwasm type)
- `Clone` allows us to call `.clone()` on instances of the struct to perform a deepcopy
- `Debug` allows us to debug print the struct to the console easily
- `PartialEq` allows us to compare equality of the struct using partial equivalence relations
- `Addr` is a bech32 encoded Cosmos address, although under the hood it performs no validation and is
  simply a `String`
- `Item` is a helper provided by `cw-storage-plus` it represents a single item in storage. In the code above it can store a struct of type `State` under the `storage_key` state

### Config

Now we can make some modifications to this code, firstly let's rename the `State` struct to `Config` as this item will store our overall contract configuration. We also need to remove the `count` and `owner` variables within the struct as we will be adding our own. The file should now appear as follows:

```rust
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use cosmwasm_std::Addr;
use cw_storage_plus::Item;

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct Config {

}

pub const CONFIG: Item<Config> = Item::new("config");
```

Now we need to fill out our `Config` struct, let's define an admin of type `Addr`. In future
this contract could be expanded to allow the admin to delete polls. Our `Config` struct should
now look like this:

```rust
// Previous code omitted
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct Config {
    pub admin: Addr
}
// Following code omitted
```

With the global configuration complete, let's define the state for our polls.

### Polls and Ballots

Before we start writing code, let's think about what a poll is built up of. We can simply describe a
poll as a question asked by a specific person, with a set list of responses each with a corresponding vote count. Let's see how we can translate this to Rust code.

- Poll creator
  - We know user's will need to submit a TX with a given wallet to create a poll on chain
  - This means we can use the user's `Addr` which is associated with the create poll message sent
- Poll question
  - A question is simply a string of characters
  - We can simply use the Rust `String` type to store this
- Options
  - In other languages we may use a `Map` however a `HashMap` in Rust cannot be saved to chain due to
    consensus issues
  - This mean we need to store our options in a list of tuples
    - These tuples will be in the format of `(String, u64)` where the `String` is the textual name of
      the option and the `u64` is the number of votes for that option
  - In Rust we can represent this as a `Vec<(String, u64)>` which is simply a list of these tuples

Now that we have a specification for a singular poll, let's create the struct for it. Ensure to
include all the `derive` macros `Config` also has defined.

```rust
// Previous code omitted
// Derive the necessary features
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct Poll {
    pub creator: Addr,
    pub question: String,
    pub options: Vec<(String, u64)>,
}
// Following code omitted
```

With this poll defined it exposes a hole in our model, as we simply store an option and its vote count
as a tuple within the `Poll` how do we determine if a user has already voted (so we can
decrement their old vote prior to incrementing their new vote). To do this we need to store a users
vote, let's call it a ballot. All this ballot needs to store is the option they vote for.

```rust
// Previous code omitted
// Derive the necessary features
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct Ballot {
    pub option: String,
}
// Following code omitted
```

As explained above an `Item` stores a singular item in storage, however due to our defined model we
can have multiple polls and a user can have multiple ballots. To store these we will use another
`cw-storage-plus` helper, `Map`. A map simply maps keys of a given type, to a value of another type.

Firstly we need to import it, we can do this by modifying the `Item` import at the top of the file to
also import `Map`.

```rust
// Currently the import should look like this
use cw_storage_plus::Item;
// Update it to look like this
// This now imports both Item and Map
use cw_storage_plus::{Item, Map};
```

Now we need to define a `Map`, to do this we need to give it the type of our key and the type of our
value, as well as a `storage_key` similarly to `Item`. This is how this looks for our polls.

```rust
// Previous code omitted
pub const CONFIG: Item<Config> = Item::new("config");

// A map with a String key and Poll value.
// The key must be unique, this could be a UUID or a generated slug
pub const POLLS: Map<String, Poll> = Map::new("polls");
```

We also need to store the user's ballots, the key for this `Map` will be more complex as one user can
have many ballots. To achieve this using `Map` we can use a tuple key, this key will be of the type
`(Addr, String)` where `Addr` is the voter's address and `String` is the polls ID. This `Map` will of
course have the value type of `Ballot`.

```rust
// Previous code omitted
pub const CONFIG: Item<Config> = Item::new("config");

// A map with a String key and Poll value
// The key must be unique, this could be a UUID or a generated slug
pub const POLLS: Map<String, Poll> = Map::new("polls");

// A map with a tuple key (Addr, String) and a Ballot value
// The tuple is made up of the voter's address and the polls ID
// Example:
// A key of ("wasm1xxx", "1") will point to the vote of address
// wasm1xxx for poll 1
pub const BALLOTS: Map<(Addr, String), Ballot> = Map::new("ballots");
```

We have successfully outlined the state for our contract, however we have broken some of the build
commands (`cargo test`, `cargo wasm`, and `cargo schema`). In the next section we will focus on fixing
these before moving on.

## Fixing the Errors

Due to use renaming the `State` struct this broke our schema output as the non-existent `State` struct
is still imported in `examples/schema.rs`. To fix this we need to replace the import and update the
schema export.

```rust
// The import should look like this
use cw_starter::state::State;

// Modify it to import Config instead
use cw_starter::state::Config;
```

Further down the file there will be a usage of the `State` struct which is also now incorrect, let's
replace this with our `Config` struct.

```rust
// The export_schema line should look like this
// Previous code omitted
export_schema(&schema_for!(State), &out_dir);
// Following code omitted

// Modify it to export Config instead
// Previous code omitted
export_schema(&schema_for!(Config), &out_dir);
// Following code omitted
```

We also defined two new structs (`Poll` and `Ballot`) we should export the schema of these as well
to allow frontends to generate types for our structs. To do this we need to import them and then
export the schema.

```rust
// The import should look like this
use cw_starter::state::Config;

// Modify it to import Config, Poll, Ballot instead
use cw_starter::state::{Config, Poll, Ballot};
```

Now we can export the schema.

```rust
// Previous code omitted
export_schema(&schema_for!(Config), &out_dir);
export_schema(&schema_for!(Poll), &out_dir);
export_schema(&schema_for!(Ballot), &out_dir);
// Following code omitted
```

This has now fixed the errors, run the following commands to verify this:

```bash
# this will generate new JSON files, for our config, poll and ballot
cargo schema
# still 0 tests but should pass
cargo test
# will generate the wasm under target/
cargo wasm
```

## Instantiate

### InstantiateMsg

### Instantiate Entry Point

### Instantiate Tests
