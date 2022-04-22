"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2797],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},921:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:3},c="Complex State and Maps",l={unversionedId:"smart-contracts/state/complex-state",id:"smart-contracts/state/complex-state",title:"Complex State and Maps",description:"Of course, for most non-trivial examples, additional data will need to be stored. You can serialise larger JSON data",source:"@site/docs/04-smart-contracts/03-state/03-complex-state.md",sourceDirName:"04-smart-contracts/03-state",slug:"/smart-contracts/state/complex-state",permalink:"/docs/1.0/smart-contracts/state/complex-state",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/04-smart-contracts/03-state/03-complex-state.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Simple State",permalink:"/docs/1.0/smart-contracts/state/simple-state"},next:{title:"Entry points",permalink:"/docs/1.0/smart-contracts/entry-points"}},p={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"complex-state-and-maps"},"Complex State and Maps"),(0,o.kt)("p",null,"Of course, for most non-trivial examples, additional data will need to be stored. You can serialise larger JSON data\nstructures, and use key-value lookups to access this data."),(0,o.kt)("p",null,"In CW20, the mapping of addresses to their CW20 balance is achieved through just such a map:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'pub const BALANCES: Map<&Addr, Uint128> = Map::new("balance");\n')),(0,o.kt)("p",null,"The code for this can be\nfound ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/main/contracts/cw20-base/src/state.rs#L35"},"here"),"."),(0,o.kt)("p",null,"You can see how it is interacted with\nin ",(0,o.kt)("inlineCode",{parentName:"p"},"contract.rs")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/main/contracts/cw20-base/src/contract.rs#L303"},"here"),". The\nrelevant snippet is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let rcpt_addr = deps.api.addr_validate( & recipient) ?;\nBALANCES.update(\ndeps.storage,\n& rcpt_addr,\n| balance: Option<Uint128> | -> StdResult<_ > { Ok(balance.unwrap_or_default() + amount) },\n) ?;\n")),(0,o.kt)("p",null,"There's a bit going on here, so let's unpack it."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"deps.storage")," is passed in. This is from the contract context. ",(0,o.kt)("inlineCode",{parentName:"li"},"deps")," is similar to the ",(0,o.kt)("inlineCode",{parentName:"li"},"ctx")," you will have seen in\nthe Cosmos SDK."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"&rcpt_addr")," is a borrowed reference to the validated recipient address - it is valid, or the ",(0,o.kt)("inlineCode",{parentName:"li"},"let")," statement would\nhave errored. This is the key half of the key/value pair."),(0,o.kt)("li",{parentName:"ol"},"The third statement is a lambda (anonymous function) returning ",(0,o.kt)("inlineCode",{parentName:"li"},"StdResult")," that does some computation based on the\ncurrent value of ",(0,o.kt)("inlineCode",{parentName:"li"},"balance"),", where ",(0,o.kt)("inlineCode",{parentName:"li"},"balance")," is the value half, and ",(0,o.kt)("inlineCode",{parentName:"li"},"&rcpt_addr")," is the key.")),(0,o.kt)("p",null,"More sophisticated contracts, such as CW1155, allow for the creation and management of multiple coins."),(0,o.kt)("p",null,"For more advanced usage, indexing and more, check out:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.cosmwasm.com/tutorials/storage/indexes"},"Indexes in CosmWasm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.cosmwasm.com/tutorials/storage/state-modeling"},"Advanced State Modeling in CosmWasm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.cosmwasm.com/tutorials/storage/key-value-store"},"How CW Storage Works"))))}d.isMDXComponent=!0}}]);