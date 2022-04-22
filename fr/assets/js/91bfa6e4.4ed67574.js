"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6295],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2276:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(3117),a=n(102),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:13},c="Testing",l={unversionedId:"smart-contracts/testing",id:"smart-contracts/testing",title:"Testing",description:"At some point in Smart Contract development, everyone will arrive at tests. Tests are what give you and your protocol sleep at night and ensure changes can be rapidly deployed to the contracts codebase without breaking everything else.",source:"@site/docs/04-smart-contracts/13-testing.md",sourceDirName:"04-smart-contracts",slug:"/smart-contracts/testing",permalink:"/fr/docs/1.0/smart-contracts/testing",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/04-smart-contracts/13-testing.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"docsSidebar",previous:{title:"Code Pinning",permalink:"/fr/docs/1.0/smart-contracts/code-pinning"},next:{title:"Sudo Execution",permalink:"/fr/docs/1.0/smart-contracts/sudo"}},u={},p=[{value:"Unit Testing",id:"unit-testing",level:2},{value:"Integration Testing with <code>cw-multi-test</code>",id:"integration-testing-with-cw-multi-test",level:2},{value:"<code>cw-multi-test</code> concepts",id:"cw-multi-test-concepts",level:2},{value:"App",id:"app",level:3},{value:"Mocking contracts",id:"mocking-contracts",level:3},{value:"Storing and Instantiating a Contract:",id:"storing-and-instantiating-a-contract",level:3},{value:"Putting it all together",id:"putting-it-all-together",level:3},{value:"Mocking 3rd party contracts",id:"mocking-3rd-party-contracts",level:4},{value:"Platform Specific Variations",id:"platform-specific-variations",level:2},{value:"Juno",id:"juno",level:3},{value:"Terra",id:"terra",level:3},{value:"Using a forked <code>cw-multi-test</code>",id:"using-a-forked-cw-multi-test",level:4}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testing"},"Testing"),(0,r.kt)("p",null,"At some point in Smart Contract development, everyone will arrive at tests. Tests are what give you and your protocol sleep at night and ensure changes can be rapidly deployed to the contracts codebase without breaking everything else."),(0,r.kt)("p",null,"A great set of contracts will have a great set of tests generally divided into two areas of testing. Unit testing and Integration testing. "),(0,r.kt)("h2",{id:"unit-testing"},"Unit Testing"),(0,r.kt)("p",null,"See here for a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/tutorials/simple-option/testing"},"guide on unit testing")),(0,r.kt)("h2",{id:"integration-testing-with-cw-multi-test"},"Integration Testing with ",(0,r.kt)("inlineCode",{parentName:"h2"},"cw-multi-test")),(0,r.kt)("p",null,"The cw-multi-test package offered in the cw-plus repo provides an interesting way to test your smart contracts without going all the way to deploying them on a testnet. Before using multi-test the flow to me was to have some pipeline which would set up your contracts on a given chain (maybe testnet, maybe local) perform some tests and then if possible destroy/self-destruct the contracts."),(0,r.kt)("p",null,"All of that can be taken away almost in preference of cw-multi-test-based integration tests which enable you to test the flows and interactions between smart contracts. There is still a place for the flow described above but I have had a better experience writing these integration tests once you figure out the intricacies of multi-test. I hope to clear some of those intricacies up here with some tips, resources and steps."),(0,r.kt)("h2",{id:"cw-multi-test-concepts"},(0,r.kt)("inlineCode",{parentName:"h2"},"cw-multi-test")," concepts"),(0,r.kt)("p",null,"There are a few main concepts to understand before you will be able to  simulate a blockchain environment in Rust and run tests that involve contract -> contract,\nand contract -> bank interactions."),(0,r.kt)("p",null,"In this section we will take a step-by-step look through writing a test with cw-multi-test, explaining some important concepts along the way.\nTo start we need a specimen contract such as the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/InterWasm/cw-template/blob/main/src/contract.rs"},"cw-template")," which is a simple boilerplate contract containing two functions: ",(0,r.kt)("inlineCode",{parentName:"p"},"Increment")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Reset"),"."),(0,r.kt)("p",null,"We start as we always start with a new test file with a few imports: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use cosmwasm_std::testing::{mock_env, MockApi, MockQuerier, MockStorage, MOCK_CONTRACT_ADDR};\nuse cw_multi_test::{App, BankKeeper, Contract, ContractWrapper};\n")),(0,r.kt)("p",null,"The above imports will give us a wide pallette of tools to start crafting a test from. The first import to look at here is ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," which will become the simulated blockchain environment in which our tests will be executed."),(0,r.kt)("h3",{id:"app"},"App"),(0,r.kt)("p",null,"The main entry point to the system is called ",(0,r.kt)("inlineCode",{parentName:"p"},"App"),", which represents a blockchain app.\nIt maintains an idea of block height and time, which you can update to simulate multiple\nblocks. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"app.update_block(next_block)")," to increment timestamp by 5s and height by 1\n(simulating a new block) or you can write any other mutator to advance more."),(0,r.kt)("p",null,"It exposes an entry point ",(0,r.kt)("inlineCode",{parentName:"p"},"App.execute")," that allows us to execute any ",(0,r.kt)("inlineCode",{parentName:"p"},"CosmosMsg"),"\nand it wraps it as an atomic transaction. That is, only if ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," returns success, will the state\nbe committed. It returns the data and a list of Events on successful execution or an ",(0,r.kt)("inlineCode",{parentName:"p"},"Err(String)"),"\non error. There are some helper methods tied to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Executor")," trait that create the ",(0,r.kt)("inlineCode",{parentName:"p"},"CosmosMsg")," for\nyou to provide a less verbose API. ",(0,r.kt)("inlineCode",{parentName:"p"},"instantiate_contract"),",",(0,r.kt)("inlineCode",{parentName:"p"},"execute_contract"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"send_tokens")," are exposed\nfor your convenience in writing tests. Each execute one ",(0,r.kt)("inlineCode",{parentName:"p"},"CosmosMsg")," atomically as if it was submitted by a user.\n(You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"execute_multi")," if you wish to run multiple message together that revert all state if any fail)."),(0,r.kt)("p",null,"The other key entry point to ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Querier")," interface that it implements. In particular, you\ncan use ",(0,r.kt)("inlineCode",{parentName:"p"},"App.wrap()")," to get a ",(0,r.kt)("inlineCode",{parentName:"p"},"QuerierWrapper"),", which provides all kinds of nice APIs to query the\nblockchain, like ",(0,r.kt)("inlineCode",{parentName:"p"},"all_balances")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"query_wasm_smart"),". Putting this together, you have one ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage")," wrapped\ninto an application, where you can execute contracts and bank, query them easily, and update the current\n",(0,r.kt)("inlineCode",{parentName:"p"},"BlockInfo"),', in an API that is not very verbose or cumbersome. Under the hood it will process all messages\nreturned from contracts, move "bank" tokens and call into other contracts.'),(0,r.kt)("p",null,"You can create an App for use in your test code like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn mock_app() -> App {\n    let env = mock_env();\n    let api = Box::new(MockApi::default());\n    let bank = BankKeeper::new();\n\n    App::new(api, env.block, bank, Box::new(MockStorage::new()))\n}\n")),(0,r.kt)("h3",{id:"mocking-contracts"},"Mocking contracts"),(0,r.kt)("p",null,"Mocking your contracts is one of the mantras of multi-test but also one of the main obstacles to getting yourself a working test. First consider that whatever contract you want to test needs to be either mocked or wrapped up. ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-multi-test")," provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractWrapper")," which allows you to wrap up the logical pieces of your contract (instantiate, executors, queries) and deploy it to a mocked network."),(0,r.kt)("p",null,"Mocking all your contracts and then testing one can be done in a scripting fashion but for maintainability I recommend trying to define all your wrapped contracts a functions so you can reuse them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use crate::contract::{execute, instantiate, query, reply};\n\n\npub fn contract_stablecoin_exchanger() -> Box<dyn Contract<Empty>>{\n    let contract = ContractWrapper::new_with_empty(\n        execute,\n        instantiate,\n        query,\n    ).with_reply(reply);\n    Box::new(contract)\n}\n")),(0,r.kt)("p",null,"The above is a more complex example but lets break it down real quick.\nWe import the execute, instantiate, query and reply functions which are used at runtime by the contract and then make our own wrapper from them to be used in the tests. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To reply or not reply"),(0,r.kt)("p",{parentName:"blockquote"},"  Depending on the make up of your contract, when you go to create a ContractWrapper you may not need ",(0,r.kt)("inlineCode",{parentName:"p"},"with_reply")," if your contract does not implement a ",(0,r.kt)("inlineCode",{parentName:"p"},"reply")," function.")),(0,r.kt)("p",null,"After mocking out a contract, two more steps follow which are; storing the code and then setting up a contract from the code object. You will notice this is the exact same process for deploying to a testnet or mainnet chain whereas in unit tests you work with a mocked_env, using ",(0,r.kt)("inlineCode",{parentName:"p"},"mock_dependencies")," and passing in ",(0,r.kt)("inlineCode",{parentName:"p"},"mock_info"),"."),(0,r.kt)("h3",{id:"storing-and-instantiating-a-contract"},"Storing and Instantiating a Contract:"),(0,r.kt)("p",null,"Before a contract can be instantiated in a ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-multi-test")," environment, the contract first has to be stored. Once stored the contract can be instantiated using its associated ",(0,r.kt)("inlineCode",{parentName:"p"},"code_id")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let contract_code_id = router.store_code(contract_stablecoin_exchanger());\n")),(0,r.kt)("p",null,"Instantiating from the new code object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let mocked_contract_addr = router\n        .instantiate_contract(contract_code_id, owner.clone(), &msg, &[], "super-contract", None)\n        .unwrap();\n')),(0,r.kt)("p",null,"All the above gives you 1 mocked contract. As you start to test you may see errors like"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"No ContractData")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Contract '<contract>' does not exist"))),(0,r.kt)("p",null,"If you get any of these theres a good chance you a missing a mock. When in multi test land, everything you interact with that can be considered a contract needs to be mocked out. That includes your own simple little utility contract you don't intend to test right now as well as any services your contract interacts with."),(0,r.kt)("p",null,"Look at your contract and see if you are passing in any dummy contract addresses, thats the most likely cause. If you find any you must; mock it out with the above method; instantiate it with the above method; capture the address and pass that instead of a dummy one.\nTook me a while to get a complex contract fully mocked out but hopefully this helps you. Now for the next glaring problem I faced. Mocking other services!!"),(0,r.kt)("h3",{id:"putting-it-all-together"},"Putting it all together"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use cosmwasm_std::testing::{mock_env, MockApi, MockQuerier, MockStorage, MOCK_CONTRACT_ADDR};\nuse cw_multi_test::{App, BankKeeper, Contract, ContractWrapper};\nuse crate::contract::{execute, instantiate, query, reply};\nuse crate::msg::{InstantiateMsg, QueryMsg}\n\nfn mock_app() -> App {\n    let env = mock_env();\n    let api = Box::new(MockApi::default());\n    let bank = BankKeeper::new();\n\n    App::new(api, env.block, bank, Box::new(MockStorage::new()))\n}\n\npub fn contract_counter() -> Box<dyn Contract<Empty>>{\n    let contract = ContractWrapper::new_with_empty(\n        execute,\n        instantiate,\n        query,\n    );\n    Box::new(contract)\n}\n\npub fn counter_instantiate_msg(count: Uint128) -> InstantiateMsg {\n    InstantiateMsg {\n        count: count\n    }\n}\n\n#[test]\nfn counter_contract_multi_test() {\n    // Create the owner account\n    let owner = Addr::unchecked("owner");\n    let mut router = mock_app();\n\n    let counter_contract_code_id = router.store_code(contract_counter());\n    // Setup the counter contract with an initial count of zero\n    let init_msg = InstantiateMsg {\n        count: Uint128::zero()\n    }\n    // Instantiate the counter contract using its newly stored code id \n    let mocked_contract_addr = router\n        .instantiate_contract(counter_contract_code_id, owner.clone(), &init_msg, &[], "counter", None)\n        .unwrap();\n\n    // We can now start executing actions on the contract and querying it as needed\n    let msg = ExecuteMsg::Increment {}\n    // Increment the counter by executing the above prepared msg on the previously setup contract\n    let _ = router.execute_contract(\n            owner.clone(),\n            mocked_contract_addr.clone(),\n            &msg,\n            &[],\n        )\n        .unwrap();\n    // Query the contract to verify the counter was incremented\n    let config_msg =  QueryMsg::Count{};\n    let count_response: CountResponse = router\n        .wrap()\n        .query_wasm_smart(mocked_contract_addr.clone(), &config_msg)\n        .unwrap();\n    asserteq!(count_response.count, 1)\n\n    // Now lets reset the counter with the other ExecuteMsg\n    let msg = ExecuteMsg::Reset {}\n    let _ = router.execute_contract(\n            owner.clone(),\n            mocked_contract_addr.clone(),\n            &msg,\n            &[],\n        )\n        .unwrap();\n\n    // And again use the available contract query to verify the result \n    // Query the contract to verify the counter was incremented\n    let config_msg =  QueryMsg::Count{};\n    let count_response: CountResponse = router\n        .wrap()\n        .query_wasm_smart(mocked_contract_addr.clone(), &config_msg)\n        .unwrap();\n    asserteq!(count_response.count, 0)\n}\n\n')),(0,r.kt)("h4",{id:"mocking-3rd-party-contracts"},"Mocking 3rd party contracts"),(0,r.kt)("p",null,"If you read the above section you will have a gist of the amount of setup work you will have to do by mocking out your contracts as your mocking and trying to progress with a test you may get caught up when you realise your contracts interact with Terraswap, Anchor or some other service out in the IBC. No biggie right?"),(0,r.kt)("p",null,"You'll start off just trying to mock out one of these services in the exact same way as we did above only to realise, wait, we need access to the code.. the contract code is what we import to get ",(0,r.kt)("inlineCode",{parentName:"p"},"execute, instantiate, query"),". But then you notice protocols don't include their contract code in their rust packages! They only include what you need to interact with them i.e msgs and some helpers."),(0,r.kt)("p",null,"All hope is not lost however you can still progress by trying to make a thin mock of whatever service you interact with. The process of doing so is similar to what you will do with mocking your own contracts (described above) except you will need to fill in all the functionality. This is made easier because you can also a smaller ExecuteMsg with only the func you use or a MockQuery handler with only the queries for example. Here is an example of our own mock third-party contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn contract_ping_pong_mock() -> Box<dyn Contract<Empty>> {\n    let contract = ContractWrapper::new(\n        |deps, _, info, msg: MockExecuteMsg| -> StdResult<Response> {\n            match msg {\n                MockExecuteMsg::Receive(Cw20ReceiveMsg {\n                    sender: _,\n                    amount: _,\n                    msg,\n                }) => {\n                    let received: PingMsg = from_binary(&msg)?;\n                    Ok(Response::new()\n                        .add_attribute("action", "pong")\n                        .set_data(to_binary(&received.payload)?))\n                }\n                }})}\n\n        |_, _, msg: MockQueryMsg| -> StdResult<Binary> {\n            match msg {\n                MockQueryMsg::Pair {} => Ok(to_binary(&mock_pair_info())?),\n\n')),(0,r.kt)("p",null,"You get a lot of flexibility when you are defining your own mocked contract. You can throw away things like deps, env, info with ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," if you never use them and return any responses you want for a given execute msg or query. The challenge then becomes how do I mock out all these services? See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xFable/cw-terra-test-mocks"},"cw-terra-test-mocks")," for some Terra-based mocks."),(0,r.kt)("h2",{id:"platform-specific-variations"},"Platform Specific Variations"),(0,r.kt)("p",null,"Different chains and hubs in the Cosmos ecosystem may have some variations on how migrations are done on their respective networks. This section will attempt to outline those."),(0,r.kt)("h3",{id:"juno"},"Juno"),(0,r.kt)("p",null,"Juno uses one of the more recent editions of CosmWasm. As a general practice it is good to keep your ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-multi-test")," version close to the CosmWasm one but this is not required. Note if you do use different versions you may get varying experiences and things may still change in the most recent version. "),(0,r.kt)("h3",{id:"terra"},"Terra"),(0,r.kt)("h4",{id:"using-a-forked-cw-multi-test"},"Using a forked ",(0,r.kt)("inlineCode",{parentName:"h4"},"cw-multi-test")),(0,r.kt)("p",null,"For a lot of use cases, ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-multi-test")," will work as-is for you and you will have a great time. When writing tests for certain contracts which are UST focused, you may run into issues either sending or querying NativeTokens. The problem here is ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-multi-test")," is a generic testing tool and Terra has some add-ons needed in order to properly mock it."),(0,r.kt)("p",null,"In later versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-multi-test")," it is possible to register your own querier so if you have the latest you could try to solve this issue yourself alternatively there is a repo here you can depend on which is simply a fork of ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-multi-test")," with a TerraQuerier added on. This allows for Terra Native coin transactions and is defined as ",(0,r.kt)("inlineCode",{parentName:"p"},"terra-multi-test"),"."),(0,r.kt)("p",null,"To use ",(0,r.kt)("inlineCode",{parentName:"p"},"terra-multi-test")," fork follow these steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add this dep to your cargo.toml: ",(0,r.kt)("inlineCode",{parentName:"li"},'terra-multi-test = {git="https://github.com/astroport-fi/terra-plus", version="1.0.0", package = "terra-multi-test"}')),(0,r.kt)("li",{parentName:"ul"},"Update your tests to now use ",(0,r.kt)("inlineCode",{parentName:"li"},"terra_multi_test")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"cw_multi_test")),(0,r.kt)("li",{parentName:"ul"},"Away you go")))}d.isMDXComponent=!0}}]);