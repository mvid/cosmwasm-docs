"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7046],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,g=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9665:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:11},c="Migration",l={unversionedId:"smart-contracts/migration",id:"smart-contracts/migration",title:"Migration",description:"Migration is the process through which a given smart contracts code can be swapped out or 'upgraded'.",source:"@site/docs/04-smart-contracts/11-migration.md",sourceDirName:"04-smart-contracts",slug:"/smart-contracts/migration",permalink:"/fr/docs/1.0/smart-contracts/migration",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/04-smart-contracts/11-migration.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"docsSidebar",previous:{title:"Verifying Smart Contracts",permalink:"/fr/docs/1.0/smart-contracts/verify"},next:{title:"Code Pinning",permalink:"/fr/docs/1.0/smart-contracts/code-pinning"}},m={},p=[{value:"Setting up a contract for migrations",id:"setting-up-a-contract-for-migrations",level:2},{value:"Basic Contract Migration",id:"basic-contract-migration",level:3},{value:"Restricted Migration by code version and name",id:"restricted-migration-by-code-version-and-name",level:3},{value:"Migrate which updates the version only if newer",id:"migrate-which-updates-the-version-only-if-newer",level:3},{value:"Using migrate to update otherwise immutable state",id:"using-migrate-to-update-otherwise-immutable-state",level:3},{value:"Using migrations to &#39;burn&#39; a contract",id:"using-migrations-to-burn-a-contract",level:3},{value:"Platform Specific Variations",id:"platform-specific-variations",level:2},{value:"Terra",id:"terra",level:3}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migration"},"Migration"),(0,o.kt)("p",null,"Migration is the process through which a given smart contracts code can be swapped out or 'upgraded'."),(0,o.kt)("p",null,"CosmWasm made contract migration a first-class experience. When instantiating a contract, there is an optional admin field that you can set. If it is left empty, the contract is immutable. If it is set (to an external account or governance contract), that account can trigger a migration. The admin can also change admin or even make the contract fully immutable after some time. However, when we wish to migrate from contract A to contract B, contract B needs to be aware somehow of how the state was encoded."),(0,o.kt)("p",null,"This is where CW2 specification comes in. It specifies one special ",(0,o.kt)("inlineCode",{parentName:"p"},"Singleton")," to be stored on disk by all contracts on instantiate. When the migrate function is called, then the new contract can read that data and see if this is an expected contract we can migrate from. And also contain extra version information if we support multiple migrate paths."),(0,o.kt)("p",null,"Working with CW2 is quite straightforward in that, as a smart contract developer you need only perform a couple of steps."),(0,o.kt)("p",null,"The CW2 Spec provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"set_contract_version")," which should be used in instantiate to store the original version of a contract. It is important to also set_contract_version again after a successful migration to update it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'const CONTRACT_NAME: &str = "crates.io:my-crate-name";\nconst CONTRACT_VERSION: &str = env!("CARGO_PKG_VERSION");\n\n\n#[cfg_attr(not(feature = "library"), entry_point)]\npub fn instantiate(deps: DepsMut, env: Env, info: MessageInfo, msg: InstantiateMsg) -> Response {\n    // Use CW2 to set the contract version, this is needed for migrations\n    set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;\n}\n')),(0,o.kt)("p",null,"Additionally, ",(0,o.kt)("inlineCode",{parentName:"p"},"get_contract_version")," is provided in CW2 which can and should be used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"migrate")," function of the contract when you need to know the previous version of the contract. Both methods work on a ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," data structure from ",(0,o.kt)("inlineCode",{parentName:"p"},"cw_storage_plus")," which operates over this object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]\npub struct ContractVersion {\n    /// contract is the crate name of the implementing contract, eg. `crate:cw20-base`\n    /// we will use other prefixes for other languages, and their standard global namespacing\n    pub contract: String,\n    /// version is any string that this implementation knows. It may be simple counter "1", "2".\n    /// or semantic version on release tags "v0.7.0", or some custom feature flag list.\n    /// the only code that needs to understand the version parsing is code that knows how to\n    /// migrate from the given contract (and is tied to it\'s implementation somehow)\n    pub version: String,\n}\n')),(0,o.kt)("h2",{id:"setting-up-a-contract-for-migrations"},"Setting up a contract for migrations"),(0,o.kt)("p",null,"Performing a contract migration is a three step process. First, you must write a newer version of the contract you wish to update. Second, you can upload the new code as you did before, but don\u2019t instantiate it. Third, you use a dedicated ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/v0.20.0/proto/cosmwasm/wasm/v1/tx.proto#L94-L104"},"MsgMigrateContract")," transaction to point this contract to use the new code. And you are done!"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"migrate")," function itself, exposes the ability to make any granular changes needed to the State, akin to a database migration or any other things you might want to do."),(0,o.kt)("p",null,"If the migrate function returns an error, the transaction aborts, all state changes are reverted and the migration is not performed."),(0,o.kt)("p",null,"Provided below are a few variants on migrations you could do ranging from a very simple one, to a more restricted one by code iD and type."),(0,o.kt)("h3",{id:"basic-contract-migration"},"Basic Contract Migration"),(0,o.kt)("p",null,"This migration will be the most common you may see. It simply is used to swap out the code of a contract. Safety checks may not be performed if you do not also use ",(0,o.kt)("inlineCode",{parentName:"p"},"cw2::set_contract_version"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'const CONTRACT_NAME: &str = "crates.io:my-crate-name";\nconst CONTRACT_VERSION: &str = env!("CARGO_PKG_VERSION");\n\n#[entry_point]\npub fn migrate(deps: DepsMut, _env: Env, msg: MigrateMsg) -> Result<Response, ContractError> {\n    // No state migrations performed, just returned a Response\n    Ok(Response::default())\n}\n')),(0,o.kt)("h3",{id:"restricted-migration-by-code-version-and-name"},"Restricted Migration by code version and name"),(0,o.kt)("p",null,"This migration is a more complete and restricted example where the ",(0,o.kt)("inlineCode",{parentName:"p"},"cw2")," package is used and the ",(0,o.kt)("inlineCode",{parentName:"p"},"migrate")," function ensures that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We are migration from the same type of contract; checking its name"),(0,o.kt)("li",{parentName:"ul"},"We are upgrading from an older version of the contract; checking its version")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'const CONTRACT_NAME: &str = "crates.io:my-crate-name";\nconst CONTRACT_VERSION: &str = env!("CARGO_PKG_VERSION");\n\n#[entry_point]\npub fn migrate(deps: DepsMut, _env: Env, msg: MigrateMsg) -> Result<Response, ContractError> {\n    let ver = cw2::get_contract_version(deps.storage)?;\n    // ensure we are migrating from an allowed contract\n    if ver.contract != CONTRACT_NAME {\n        return Err(StdError::generic_err("Can only upgrade from same type").into());\n    }\n    // note: better to do proper semver compare, but string compare *usually* works\n    if ver.version >= CONTRACT_VERSION {\n        return Err(StdError::generic_err("Cannot upgrade from a newer version").into());\n    }\n\n    // set the new version\n    cw2::set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;\n\n    // do any desired state migrations...\n\n    Ok(Response::default())\n}\n')),(0,o.kt)("h3",{id:"migrate-which-updates-the-version-only-if-newer"},"Migrate which updates the version only if newer"),(0,o.kt)("p",null,"This migration is a less restrictive example than above. In this case the ",(0,o.kt)("inlineCode",{parentName:"p"},"cw2")," package is used and the ",(0,o.kt)("inlineCode",{parentName:"p"},"migrate")," function ensures that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the contract version has incremented from the stored one, perform needed migrations but store the new contract version"),(0,o.kt)("li",{parentName:"ul"},"Uses Semver instead of String compare")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'const CONTRACT_NAME: &str = "crates.io:my-crate-name";\nconst CONTRACT_VERSION: &str = env!("CARGO_PKG_VERSION");\n\n#[entry_point]\npub fn migrate(deps: DepsMut, _env: Env, msg: MigrateMsg) -> Result<Response, ContractError> {\n    let version: Version = CONTRACT_VERSION.parse()?;\n    let storage_version: Version = get_contract_version(deps.storage)?.version.parse()?;\n\n    if storage_version < version {\n        set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;\n\n        // If state structure changed in any contract version in the way migration is needed, it\n        // should occur here\n    }\n    Ok(Response::default())\n}\n')),(0,o.kt)("p",null,"This example uses Semver to help with version checks, you would also need to add the semver dependency to your cargo deps:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nsemver = "1"\n')),(0,o.kt)("p",null,"And also implement Semver custom errors for your contract package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Error, Debug, PartialEq)]\npub enum ContractError {\n\n    #[error("Semver parsing error: {0}")]\n    SemVer(String),\n\n}\nimpl From<semver::Error> for ContractError {\n    fn from(err: semver::Error) -> Self {\n        Self::SemVer(err.to_string())\n    }\n}\n')),(0,o.kt)("h3",{id:"using-migrate-to-update-otherwise-immutable-state"},"Using migrate to update otherwise immutable state"),(0,o.kt)("p",null,"This example shows how a migration can be used to update a value that generally should not be changed. This allows for the immutable value to be changed only during a migration if that functionality is needed by your team."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[entry_point]\npub fn migrate(deps: DepsMut, _env: Env, msg: MigrateMsg) -> Result<Response, HackError> {\n    let data = deps\n        .storage\n        .get(CONFIG_KEY)\n        .ok_or_else(|| StdError::not_found("State"))?;\n    let mut config: State = from_slice(&data)?;\n    config.verifier = deps.api.addr_validate(&msg.verifier)?;\n    deps.storage.set(CONFIG_KEY, &to_vec(&config)?);\n\n    Ok(Response::default())\n}\n')),(0,o.kt)("p",null,"In the above example, our ",(0,o.kt)("inlineCode",{parentName:"p"},"MigrateMsg")," has a ",(0,o.kt)("inlineCode",{parentName:"p"},"verifier")," field which contains the new value for our contracts ",(0,o.kt)("inlineCode",{parentName:"p"},"verifier")," field located in the State. Provided your contract does not also expose an ",(0,o.kt)("inlineCode",{parentName:"p"},"UpdateState")," or something like ",(0,o.kt)("inlineCode",{parentName:"p"},"UpdateVerifier")," ExecuteMsgs then this provides the only method to change the ",(0,o.kt)("inlineCode",{parentName:"p"},"verifier")," value."),(0,o.kt)("h3",{id:"using-migrations-to-burn-a-contract"},"Using migrations to 'burn' a contract"),(0,o.kt)("p",null,"Migrations can also be used to completely abandon an old contract and burn its state. This has varying uses but in the event you need it you can find an example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/main/contracts/burner/src/contract.rs#L20"},"here"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[entry_point]\npub fn migrate(deps: DepsMut, env: Env, msg: MigrateMsg) -> StdResult<Response> {\n    // delete all state\n    let keys: Vec<_> = deps\n        .storage\n        .range(None, None, Order::Ascending)\n        .map(|(k, _)| k)\n        .collect();\n    let count = keys.len();\n    for k in keys {\n        deps.storage.remove(&k);\n    }\n\n    // get balance and send all to recipient\n    let balance = deps.querier.query_all_balances(env.contract.address)?;\n    let send = BankMsg::Send {\n        to_address: msg.payout.clone(),\n        amount: balance,\n    };\n\n    let data_msg = format!("burnt {} keys", count).into_bytes();\n\n    Ok(Response::new()\n        .add_message(send)\n        .add_attribute("action", "burn")\n        .add_attribute("payout", msg.payout)\n        .set_data(data_msg))\n}\n\n')),(0,o.kt)("p",null,"In the above example, when the migration occurs the State is completely deleted. Additionally all the balance of contract is send to a nominated ",(0,o.kt)("inlineCode",{parentName:"p"},"payout")," address provided in the ",(0,o.kt)("inlineCode",{parentName:"p"},"MigrationMsg"),". In this case all funds are drained and all state removed effectively burning the contract."),(0,o.kt)("h2",{id:"platform-specific-variations"},"Platform Specific Variations"),(0,o.kt)("p",null,"Different chains and hubs in the Cosmos ecosystem may have some variations on how migrations are done on their respective networks. This section will attempt to outline those."),(0,o.kt)("h3",{id:"terra"},"Terra"),(0,o.kt)("p",null,"Terra has some specific differences in how they manage migrations. Firstly; the contract must have been set as migratable on instantiation. The contract needs to have an admin for migratability similar to the standard procedure for migrations.\nSpecifically migration in this case for Terra refers to swapping out the code id for a new one that is considered 'compatible' (CW2 helps with this). ",(0,o.kt)("a",{parentName:"p",href:"https://docs.terra.money/Reference/Terra-core/Module-specifications/spec-wasm.html#interaction"},"Source"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: In Terra, it is also possible to migrate a code_id across chains (COL4->5 for example). This operation is atomic and can only be performed once. Its intention is to migrate your code to the new chain and preserve its old code ID. This process helps to prevent downstream breakages of other contracts on the new network which depend on your old code ID.\nExample command for migrating across chains :"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"terrad tx wasm store ./{code.wasm} --from {keyname} \\\n--migrate-code-id {codeID}\n"))))}u.isMDXComponent=!0}}]);