"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8799],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1774:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],i={sidebar_position:1},l="Contract Semantics",c={unversionedId:"smart-contracts/contract-semantics",id:"smart-contracts/contract-semantics",title:"Contract Semantics",description:"This document aims to clarify the semantics of how a CosmWasm contract interacts",source:"@site/docs/04-smart-contracts/01-contract-semantics.md",sourceDirName:"04-smart-contracts",slug:"/smart-contracts/contract-semantics",permalink:"/docs/1.0/smart-contracts/contract-semantics",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/04-smart-contracts/01-contract-semantics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Comparison with Solidity Contracts",permalink:"/docs/1.0/architecture/smart-contracts"},next:{title:"Result and Option",permalink:"/docs/1.0/smart-contracts/result-option"}},p=[{value:"Execution",id:"execution",children:[{value:"SDK Context",id:"sdk-context",children:[],level:3},{value:"Basic Execution",id:"basic-execution",children:[],level:3},{value:"Dispatching Messages",id:"dispatching-messages",children:[],level:3},{value:"Submessages",id:"submessages",children:[{value:"Handling the Reply",id:"handling-the-reply",children:[],level:4},{value:"Order and Rollback",id:"order-and-rollback",children:[],level:4}],level:3}],level:2},{value:"Query Semantics",id:"query-semantics",children:[],level:2}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"contract-semantics"},"Contract Semantics"),(0,s.kt)("p",null,"This document aims to clarify the semantics of how a CosmWasm contract interacts\nwith its environment. There are two main types of actions: ",(0,s.kt)("em",{parentName:"p"},"mutating")," actions,\nwhich receive ",(0,s.kt)("inlineCode",{parentName:"p"},"DepsMut")," and are able to modify the state of the blockchain, and\n",(0,s.kt)("em",{parentName:"p"},"query")," actions, which are run on a single node with read-only access to the\ndata."),(0,s.kt)("h2",{id:"execution"},"Execution"),(0,s.kt)("p",null,"In the section below, we will discuss how the ",(0,s.kt)("inlineCode",{parentName:"p"},"execute")," call works, but the same\nsemantics apply to any other ",(0,s.kt)("em",{parentName:"p"},"mutating")," action - ",(0,s.kt)("inlineCode",{parentName:"p"},"instantiate"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"migrate"),",\n",(0,s.kt)("inlineCode",{parentName:"p"},"sudo"),", etc."),(0,s.kt)("h3",{id:"sdk-context"},"SDK Context"),(0,s.kt)("p",null,"Before looking at CosmWasm, we should look at the (somewhat under-documented)\nsemantics enforced by the blockchain framework we integrate with - the\n",(0,s.kt)("a",{parentName:"p",href:"https://v1.cosmos.network/sdk"},"Cosmos SDK"),". It is based upon the\n",(0,s.kt)("a",{parentName:"p",href:"https://tendermint.com/core/"},"Tendermint BFT")," Consensus Engine. Let us first\nlook how they process transactions before they arrive in CosmWasm (and after\nthey leave)."),(0,s.kt)("p",null,"First, the Tendermint engine will seek 2/3+ consensus on a list of transactions\nto be included in the next block. This is done ",(0,s.kt)("em",{parentName:"p"},"without executing them"),". They\nare simply subjected to a minimal pre-filter by the Cosmos SDK module, to ensure\nthey are validly formatted transactions, with sufficient gas fees, and signed by\nan account with sufficient fees to pay it. Notably, this means many transactions\nthat error may be included in a block."),(0,s.kt)("p",null,"Once a block is committed (typically every 5s or so), the transactions are then\nfed to the Cosmos SDK sequentially in order to execute them. Each one returns a\nresult or error along with event logs, which are recorded in the ",(0,s.kt)("inlineCode",{parentName:"p"},"TxResults"),"\nsection of the next block. The ",(0,s.kt)("inlineCode",{parentName:"p"},"AppHash")," (or merkle proof or blockchain state)\nafter executing the block is also included in the next block."),(0,s.kt)("p",null,"The Cosmos SDK ",(0,s.kt)("inlineCode",{parentName:"p"},"BaseApp"),' handles each transaction in an isolated context. It\nfirst verifies all signatures and deducts the gas fees. It sets the "Gas Meter"\nto limit the execution to the amount of gas paid for by the fees. Then it makes\nan isolated context to run the transaction. This allows the code to read the\ncurrent state of the chain (after the last transaction finished), but it only\nwrites to a cache, which may be committed or rolled back on error.'),(0,s.kt)("p",null,"A transaction may consist of multiple messages and each one is executed in turn\nunder the same context and same gas limit. If all messages succeed, the context\nwill be committed to the underlying blockchain state and the results of all\nmessages will be stored in the ",(0,s.kt)("inlineCode",{parentName:"p"},"TxResult"),". If one message fails, all later\nmessages are skipped and all state changes are reverted. This is very important\nfor atomicity. That means Alice and Bob can both sign a transaction with 2\nmessages: Alice pays Bob 1000 ATOM, Bob pays Alice 50 ETH, and if Bob doesn't\nhave the funds in his account, Alice's payment will also be reverted. This is\njust like a DB Transaction typically works."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/tree/master/x/wasm"},(0,s.kt)("inlineCode",{parentName:"a"},"x/wasm"))," is a custom\nCosmos SDK module, which processes certain messages and uses them to upload,\ninstantiate, and execute smart contracts. In particular, it accepts a properly\nsigned\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/v0.23.0/proto/cosmwasm/wasm/v1/tx.proto#L73-L86"},(0,s.kt)("inlineCode",{parentName:"a"},"MsgExecuteContract")),",\nroutes it to\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/v0.23.0/x/wasm/keeper/keeper.go#L328-L369"},(0,s.kt)("inlineCode",{parentName:"a"},"Keeper.Execute")),",\nwhich loads the proper smart contract and calls ",(0,s.kt)("inlineCode",{parentName:"p"},"execute")," on it. Note that this\nmethod may either return a success (with data and events) or an error. In the\ncase of an error here, it will revert the entire transaction in the block. This\nis the context we find ourselves in when our contract receives the ",(0,s.kt)("inlineCode",{parentName:"p"},"execute"),"\ncall."),(0,s.kt)("h3",{id:"basic-execution"},"Basic Execution"),(0,s.kt)("p",null,"When we implement a contract, we provide the following entry point:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn execute(\n    deps: DepsMut,\n    env: Env,\n    info: MessageInfo,\n    msg: ExecuteMsg,\n) -> Result<Response, ContractError> { }\n")),(0,s.kt)("p",null,"With ",(0,s.kt)("inlineCode",{parentName:"p"},"DepsMut"),", this can read and write to the backing ",(0,s.kt)("inlineCode",{parentName:"p"},"Storage"),", as well as use\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"Api")," to validate addresses, and ",(0,s.kt)("inlineCode",{parentName:"p"},"Query")," the state of other contracts or\nnative modules. Once it is done, it returns either ",(0,s.kt)("inlineCode",{parentName:"p"},"Ok(Response)")," or\n",(0,s.kt)("inlineCode",{parentName:"p"},"Err(ContractError)"),". Let's examine what happens next:"),(0,s.kt)("p",null,"If it returns ",(0,s.kt)("inlineCode",{parentName:"p"},"Err"),", this error is converted to a string representation\n(",(0,s.kt)("inlineCode",{parentName:"p"},"err.to_string()"),"), and this is returned to the SDK module. ",(0,s.kt)("em",{parentName:"p"},"All state changes\nare reverted")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"x/wasm")," returns this error message, which will ",(0,s.kt)("em",{parentName:"p"},"generally"),"\n(see submessage exception below) abort the transaction, and return this same\nerror message to the external caller."),(0,s.kt)("p",null,"If it returns ",(0,s.kt)("inlineCode",{parentName:"p"},"Ok"),", the ",(0,s.kt)("inlineCode",{parentName:"p"},"Response")," object is parsed and processed. Let's look at\nthe parts here:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'pub struct Response<T = Empty>\nwhere\n    T: Clone + fmt::Debug + PartialEq + JsonSchema,\n{\n    /// Optional list of "subcalls" to make. These will be executed in order\n    /// (and this contract\'s subcall_response entry point invoked)\n    /// *before* any of the "fire and forget" messages get executed.\n    pub submessages: Vec<SubMsg<T>>,\n    /// After any submessages are processed, these are all dispatched in the host blockchain.\n    /// If they all succeed, then the transaction is committed. If any fail, then the transaction\n    /// and any local contract state changes are reverted.\n    pub messages: Vec<CosmosMsg<T>>,\n    /// The attributes that will be emitted as part of a "wasm" event\n    pub attributes: Vec<Attribute>,\n    pub data: Option<Binary>,\n}\n')),(0,s.kt)("p",null,'In the Cosmos SDK, a transaction returns a number of events to the user, along\nwith an optional data "result". This result is hashed into the next block hash\nto be provable and can return some essential state (although in general client\napps rely on Events more). This result is more commonly used to pass results\nbetween contracts or modules in the sdk. Note that the ',(0,s.kt)("inlineCode",{parentName:"p"},"ResultHash")," includes\nonly the ",(0,s.kt)("inlineCode",{parentName:"p"},"Code")," (non-zero meaning error) and ",(0,s.kt)("inlineCode",{parentName:"p"},"Result")," (data) from the\ntransaction. Events and log are available via queries, but there are no\nlight-client proofs possible."),(0,s.kt)("p",null,"If the contract sets ",(0,s.kt)("inlineCode",{parentName:"p"},"data"),", this will be returned in the ",(0,s.kt)("inlineCode",{parentName:"p"},"result")," field.\n",(0,s.kt)("inlineCode",{parentName:"p"},"attributes")," is a list of ",(0,s.kt)("inlineCode",{parentName:"p"},"{key, value}")," pairs which will be\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/master/x/wasm/types/types.go#L302-L321"},"appended to a default event"),".\nThe final result looks like this to the client:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "wasm",\n  "attributes": [\n    { "key": "contract_addr", "value": "cosmos1234567890qwerty" },\n    { "key": "custom-key-1", "value": "custom-value-1" },\n    { "key": "custom-key-2", "value": "custom-value-2" }\n  ]\n}\n')),(0,s.kt)("h3",{id:"dispatching-messages"},"Dispatching Messages"),(0,s.kt)("p",null,"Now let's move onto the ",(0,s.kt)("inlineCode",{parentName:"p"},"messages")," field. Some contracts are fine only talking\nwith themselves, such as a cw20 contract just adjusting its balances on\ntransfers. But many want to move tokens (native or cw20) or call into other\ncontracts for more complex actions. This is where messages come in. We return\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/v0.14.0-beta4/packages/std/src/results/cosmos_msg.rs#L18-L40"},(0,s.kt)("inlineCode",{parentName:"a"},"CosmosMsg"),", which is a serializable representation"),"\nof any external call the contract can make. It looks something like this (with\n",(0,s.kt)("inlineCode",{parentName:"p"},"stargate")," feature flag enabled):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum CosmosMsg<T = Empty>\nwhere\n    T: Clone + fmt::Debug + PartialEq + JsonSchema,\n{\n    Bank(BankMsg),\n    /// This can be defined by each blockchain as a custom extension\n    Custom(T),\n    Staking(StakingMsg),\n    Distribution(DistributionMsg),\n    Stargate {\n        type_url: String,\n        value: Binary,\n    },\n    Ibc(IbcMsg),\n    Wasm(WasmMsg),\n}\n")),(0,s.kt)("p",null,"If a contract returns two messages - M1 and M2, these will both be parsed and\nexecuted in ",(0,s.kt)("inlineCode",{parentName:"p"},"x/wasm")," ",(0,s.kt)("em",{parentName:"p"},"with the permissions of the contract")," (meaning\n",(0,s.kt)("inlineCode",{parentName:"p"},"info.sender")," will be the contract not the original caller). If they return\nsuccess, they will emit a new event with the custom attributes, the ",(0,s.kt)("inlineCode",{parentName:"p"},"data")," field\nwill be ignored, and any messages they return will also be processed. If they\nreturn an error, the parent call will return an error, thus rolling back state\nof the whole transaction."),(0,s.kt)("p",null,"Note that the messages are executed ",(0,s.kt)("em",{parentName:"p"},"depth-first"),". This means if contract A\nreturns M1 (",(0,s.kt)("inlineCode",{parentName:"p"},"WasmMsg::Execute"),") and M2 (",(0,s.kt)("inlineCode",{parentName:"p"},"BankMsg::Send"),"), and contract B (from\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"WasmMsg::Execute"),") returns N1 and N2 (eg. ",(0,s.kt)("inlineCode",{parentName:"p"},"StakingMsg")," and\n",(0,s.kt)("inlineCode",{parentName:"p"},"DistributionMsg"),"), the order of execution would be ",(0,s.kt)("strong",{parentName:"p"},"M1, N1, N2, M2"),"."),(0,s.kt)("p",null,"This may be hard to understand at first. \"Why can't I just call another\ncontract?\", you may ask. However, we do this to prevent one of most widespread\nand hardest to detect security holes in Ethereum contracts - reentrancy. We do\nthis by following the actor model, which doesn't nest function calls, but\nreturns messages that will be executed later. This means all state that is\ncarried over between one call and the next happens in storage and not in memory.\nFor more information on this design, I recommend you read\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/docs/1.0/architecture/actor"},"our docs on the Actor Model"),"."),(0,s.kt)("h3",{id:"submessages"},"Submessages"),(0,s.kt)("p",null,"As of CosmWasm 0.14 (April 2021), we have added yet one more way to dispatch\ncalls from the contract. A common request was the ability to get the result from\none of the messages you dispatched. For example, you want to create a new\ncontract with ",(0,s.kt)("inlineCode",{parentName:"p"},"WasmMsg::Instantiate"),", but then you need to store the address of\nthe newly created contract in the caller. With ",(0,s.kt)("inlineCode",{parentName:"p"},"submessages"),", this is now\npossible. It also solves a similar use-case of capturing the error results, so\nif you execute a message from eg. a cron contract, it can store the error\nmessage and mark the message as run, rather than aborting the whole transaction.\nIt also allows for limiting the gas usage of the submessage (this is not\nintended to be used for most cases, but is needed for eg. the cron job to\nprotect it from an infinite loop in the submessage burning all gas and aborting\nthe transaction)."),(0,s.kt)("p",null,"This makes use of ",(0,s.kt)("inlineCode",{parentName:"p"},"CosmosMsg")," as above, but it wraps it inside a ",(0,s.kt)("inlineCode",{parentName:"p"},"SubMsg"),"\nenvelope:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct SubMsg<T = Empty>\nwhere\n    T: Clone + fmt::Debug + PartialEq + JsonSchema,\n{\n    pub id: u64,\n    pub msg: CosmosMsg<T>,\n    pub gas_limit: Option<u64>,\n    pub reply_on: ReplyOn,\n}\n\npub enum ReplyOn {\n    /// Always perform a callback after SubMsg is processed\n    Always,\n    /// Only callback if SubMsg returned an error, no callback on success case\n    Error,\n    /// Only callback if SubMsg was successful, no callback on error case\n    Success,\n}\n")),(0,s.kt)("p",null,"What are the semantics of a submessage execution. First, we create a\nsub-transaction context around the state, allowing it to read the latest state\nwritten by the caller, but write to yet-another cache. If ",(0,s.kt)("inlineCode",{parentName:"p"},"gas_limit")," is set, it\nis sandboxed to how much gas it can use until it aborts with ",(0,s.kt)("inlineCode",{parentName:"p"},"OutOfGasError"),".\nThis error is caught and returned to the caller like any other error returned\nfrom contract execution (unless it burned the entire gas limit of the\ntransaction). What is more interesting is what happens on completion."),(0,s.kt)("p",null,"If it return success, the temporary state is committed (into the caller's\ncache), and the ",(0,s.kt)("inlineCode",{parentName:"p"},"Response")," is processed as normal (an event is added to the\ncurrent EventManager, messages and submessages are executed). Once the\n",(0,s.kt)("inlineCode",{parentName:"p"},"Response")," is fully processed, this may then be intercepted by the calling\ncontract (for ",(0,s.kt)("inlineCode",{parentName:"p"},"ReplyOn::Always")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"ReplyOn::Success"),"). On an error, the\nsubcall will revert any partial state changes due to this message, but not\nrevert any state changes in the calling contract. The error may then be\nintercepted by the calling contract (for ",(0,s.kt)("inlineCode",{parentName:"p"},"ReplyOn::Always")," and\n",(0,s.kt)("inlineCode",{parentName:"p"},"ReplyOn::Error"),"). ",(0,s.kt)("em",{parentName:"p"},"In this case, the messages error doesn't abort the whole\ntransaction")),(0,s.kt)("h4",{id:"handling-the-reply"},"Handling the Reply"),(0,s.kt)("p",null,"In order to make use of ",(0,s.kt)("inlineCode",{parentName:"p"},"submessages"),", the calling contract must have an extra\nentry point:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[entry_point]\npub fn reply(deps: DepsMut, env: Env, msg: Reply) -> Result<Response, ContractError> { }\n\npub struct Reply {\n    pub id: u64,\n    /// ContractResult is just a nicely serializable version of `Result<SubcallResponse, String>`\n    pub result: ContractResult<SubcallResponse>,\n}\n\npub struct SubcallResponse {\n    pub events: Vec<Event>,\n    pub data: Option<Binary>,\n}\n")),(0,s.kt)("p",null,"After the ",(0,s.kt)("inlineCode",{parentName:"p"},"submessage")," is finished, the caller will get a chance to handle the\nresult. It will get the original ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," of the subcall so it can switch on how to\nprocess this, and the ",(0,s.kt)("inlineCode",{parentName:"p"},"Result")," of the execution, both success and error. Note\nthat it includes all events returned by the submessage, which applies to native\nsdk modules as well (like Bank) as well as the data returned from below. This\nand the original call id provide all context to continue processing it. If you\nneed more state, you must save some local context to the store (under the ",(0,s.kt)("inlineCode",{parentName:"p"},"id"),")\nbefore returning the ",(0,s.kt)("inlineCode",{parentName:"p"},"submessage")," in the original ",(0,s.kt)("inlineCode",{parentName:"p"},"execute"),", and load it in\n",(0,s.kt)("inlineCode",{parentName:"p"},"reply"),". We explicitly prohibit passing information in contract memory, as that\nis the key vector for reentrancy attacks, which are a large security surface\narea in Ethereum."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"reply")," call may return ",(0,s.kt)("inlineCode",{parentName:"p"},"Err")," itself, in which case it is treated like the\ncaller errored, and aborting the transaction. However, on successful processing,\n",(0,s.kt)("inlineCode",{parentName:"p"},"reply")," may return a normal ",(0,s.kt)("inlineCode",{parentName:"p"},"Response"),", which will be processed as normal -\nevents added to the EventManager, and all ",(0,s.kt)("inlineCode",{parentName:"p"},"messages")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"submessages"),"\ndispatched as described above."),(0,s.kt)("p",null,"The one ",(0,s.kt)("em",{parentName:"p"},"critical difference")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"reply"),", is that we ",(0,s.kt)("em",{parentName:"p"},"do not drop data"),". If\n",(0,s.kt)("inlineCode",{parentName:"p"},"reply")," returns ",(0,s.kt)("inlineCode",{parentName:"p"},"data: Some(value)")," in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Response")," object, we will overwrite\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"data")," field returned by the caller. That is, if ",(0,s.kt)("inlineCode",{parentName:"p"},"execute")," returns\n",(0,s.kt)("inlineCode",{parentName:"p"},'data: Some(b"first thought")')," and the ",(0,s.kt)("inlineCode",{parentName:"p"},"reply")," (with all the extra information\nit is privy to) returns ",(0,s.kt)("inlineCode",{parentName:"p"},'data: Some(b"better idea")'),", then this will be returned\nto the caller of ",(0,s.kt)("inlineCode",{parentName:"p"},"execute")," (either the client or another transaction), just as\nif the original ",(0,s.kt)("inlineCode",{parentName:"p"},"execute")," and returned ",(0,s.kt)("inlineCode",{parentName:"p"},'data: Some(b"better idea")'),". If ",(0,s.kt)("inlineCode",{parentName:"p"},"reply"),"\nreturns ",(0,s.kt)("inlineCode",{parentName:"p"},"data: None"),", it will not modify any previously set data state. If there\nare multiple submessages all setting this, only the last one is used (they all\noverwrite any previous ",(0,s.kt)("inlineCode",{parentName:"p"},"data")," value). As a consequence, you can use\n",(0,s.kt)("inlineCode",{parentName:"p"},'data: Some(b"")')," to clear previously set data. This will be represented as a\nJSON string instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," and handled as any other ",(0,s.kt)("inlineCode",{parentName:"p"},"Some")," value."),(0,s.kt)("h4",{id:"order-and-rollback"},"Order and Rollback"),(0,s.kt)("p",null,"Submessages (and their replies) are all executed before any ",(0,s.kt)("inlineCode",{parentName:"p"},"messages"),". They\nalso follow the ",(0,s.kt)("em",{parentName:"p"},"depth first")," rules as with ",(0,s.kt)("inlineCode",{parentName:"p"},"messages"),". Here is a simple\nexample. Contract A returns submessages S1 and S2, and message M1. Submessage S1\nreturns message N1. The order will be: ",(0,s.kt)("strong",{parentName:"p"},"S1, N1, reply(S1), S2, reply(S2), M1")),(0,s.kt)("p",null,"Please keep in mind that submessage ",(0,s.kt)("inlineCode",{parentName:"p"},"execution")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"reply")," can happen within\nthe context of another submessage. For example\n",(0,s.kt)("inlineCode",{parentName:"p"},"contract-A--submessage --\x3e contract-B--submessage --\x3e contract-C"),". Then\n",(0,s.kt)("inlineCode",{parentName:"p"},"contract-B")," can revert the state for ",(0,s.kt)("inlineCode",{parentName:"p"},"contract-C")," and itself by returning ",(0,s.kt)("inlineCode",{parentName:"p"},"Err"),"\nin the submessage ",(0,s.kt)("inlineCode",{parentName:"p"},"reply"),", but not revert contract-A or the entire transaction.\nIt just ends up returning ",(0,s.kt)("inlineCode",{parentName:"p"},"Err")," to contract-A's ",(0,s.kt)("inlineCode",{parentName:"p"},"reply")," function."),(0,s.kt)("p",null,"Note that errors are not handled with ",(0,s.kt)("inlineCode",{parentName:"p"},"ReplyOn::Success"),", meaning, in such a\ncase, an error will be treated just like a normal ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," returning an error.\nThis diagram may help explain. Imagine a contract returned two submesssage - (a)\nwith ",(0,s.kt)("inlineCode",{parentName:"p"},"ReplyOn::Success")," and (b) with ",(0,s.kt)("inlineCode",{parentName:"p"},"ReplyOn::Error"),":"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"processing a)"),(0,s.kt)("th",{parentName:"tr",align:null},"processing b)"),(0,s.kt)("th",{parentName:"tr",align:null},"reply called"),(0,s.kt)("th",{parentName:"tr",align:null},"may overwrite result from reply"),(0,s.kt)("th",{parentName:"tr",align:null},"note"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"ok"),(0,s.kt)("td",{parentName:"tr",align:null},"ok"),(0,s.kt)("td",{parentName:"tr",align:null},"a)"),(0,s.kt)("td",{parentName:"tr",align:null},"a)"),(0,s.kt)("td",{parentName:"tr",align:null},"returns success")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"err"),(0,s.kt)("td",{parentName:"tr",align:null},"err"),(0,s.kt)("td",{parentName:"tr",align:null},"none"),(0,s.kt)("td",{parentName:"tr",align:null},"none"),(0,s.kt)("td",{parentName:"tr",align:null},"returns error (abort parent transaction)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"err"),(0,s.kt)("td",{parentName:"tr",align:null},"ok"),(0,s.kt)("td",{parentName:"tr",align:null},"none"),(0,s.kt)("td",{parentName:"tr",align:null},"none"),(0,s.kt)("td",{parentName:"tr",align:null},"returns error (abort parent transaction)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"ok"),(0,s.kt)("td",{parentName:"tr",align:null},"err"),(0,s.kt)("td",{parentName:"tr",align:null},"a)b)"),(0,s.kt)("td",{parentName:"tr",align:null},"a)b)"),(0,s.kt)("td",{parentName:"tr",align:null},"if both a) and b) overwrite, only b) will be used")))),(0,s.kt)("h2",{id:"query-semantics"},"Query Semantics"),(0,s.kt)("p",null,"Until now, we have focused on the ",(0,s.kt)("inlineCode",{parentName:"p"},"Response")," object, which allows us to execute\ncode in other contracts via the actor model. That is, each contract is run\nsequentially, one after another, and no nested calls are possible. This is\nessential to avoid reentrancy, which is when calling into another contract can\nchange my state while I am in the middle of a transaction."),(0,s.kt)("p",null,"However, there are many times we need access to information from other contracts\nin the middle of processing, such as determining the contract's bank balance\nbefore sending funds. To enable this, we have exposed the ",(0,s.kt)("em",{parentName:"p"},"read only")," ",(0,s.kt)("inlineCode",{parentName:"p"},"Querier"),"\nto enable ",(0,s.kt)("em",{parentName:"p"},"synchronous")," calls in the middle of the execution. By making it\nread-only (and enforcing that in the VM level), we can prevent the possibility\nof reentrancy, as the query cannot modify any state or execute our contract."),(0,s.kt)("p",null,'When we "make a query", we serialize a\n',(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/v0.14.0-beta4/packages/std/src/query/mod.rs#L27-L48"},(0,s.kt)("inlineCode",{parentName:"a"},"QueryRequest")," struct"),"\nthat represents all possible calls, and then pass that over FFI to the runtime,\nwhere it is interpretted in the ",(0,s.kt)("inlineCode",{parentName:"p"},"x/wasm")," SDK module. This is extensible with\nblockchain-specific custom queries just like ",(0,s.kt)("inlineCode",{parentName:"p"},"CosmosMsg"),' accepts custom results.\nAlso note the ability to perform raw protobuf "Stargate" queries:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum QueryRequest<C: CustomQuery> {\n    Bank(BankQuery),\n    Custom(C),\n    Staking(StakingQuery),\n    Stargate {\n        /// this is the fully qualified service path used for routing,\n        /// eg. custom/cosmos_sdk.x.bank.v1.Query/QueryBalance\n        path: String,\n        /// this is the expected protobuf message type (not any), binary encoded\n        data: Binary,\n    },\n    Ibc(IbcQuery),\n    Wasm(WasmQuery),\n}\n")),(0,s.kt)("p",null,"While this is flexible and needed encoding for the cross-language\nrepresentation, this is a bit of mouthful to generate and use when I just want\nto find my bank balance. To help that, we often use\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/v0.14.0-beta4/packages/std/src/traits.rs#L148-L314"},(0,s.kt)("inlineCode",{parentName:"a"},"QuerierWrapper")),",\nwhich wraps a ",(0,s.kt)("inlineCode",{parentName:"p"},"Querier")," and exposes a lot of convenience methods that just use\n",(0,s.kt)("inlineCode",{parentName:"p"},"QueryRequest")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Querier.raw_query")," under the hood."),(0,s.kt)("p",null,"You can read a longer explanation of the\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/0.13/architecture/query.html"},(0,s.kt)("inlineCode",{parentName:"a"},"Querier")," design in our docs"),"."))}u.isMDXComponent=!0}}]);