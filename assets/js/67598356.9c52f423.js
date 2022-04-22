"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1530],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},590:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:4},c="Downloading and Compiling Contract",l={unversionedId:"getting-started/compile-contract",id:"version-0.14/getting-started/compile-contract",title:"Downloading and Compiling Contract",description:"In this section, we will download a sample contract, compile to it to wasm binary executable.",source:"@site/docs_versioned_docs/version-0.14/02-getting-started/04-compile-contract.md",sourceDirName:"02-getting-started",slug:"/getting-started/compile-contract",permalink:"/docs/0.14/getting-started/compile-contract",editUrl:"https://github.com/InterWasm/docs/edit/main/docs_versioned_docs/version-0.14/02-getting-started/04-compile-contract.md",tags:[],version:"0.14",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"version-0.14/docsSidebar",previous:{title:"Setting Up Environment",permalink:"/docs/0.14/getting-started/setting-env"},next:{title:"Uploading and Interacting",permalink:"/docs/0.14/getting-started/interact-with-contract"}},p={},u=[{value:"Compiling and Testing Contract",id:"compiling-and-testing-contract",level:2},{value:"Unit Tests",id:"unit-tests",level:2},{value:"Optimized Compilation",id:"optimized-compilation",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"downloading-and-compiling-contract"},"Downloading and Compiling Contract"),(0,a.kt)("p",null,"In this section, we will download a sample contract, compile to it to wasm binary executable."),(0,a.kt)("p",null,"Please first review the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.14/getting-started/setting-env"},"client setup instructions"),", and configure and verify a client, either Go CLI or\nNode.js console."),(0,a.kt)("h2",{id:"compiling-and-testing-contract"},"Compiling and Testing Contract"),(0,a.kt)("p",null,"Let's download the repo in which we collect\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-examples"},(0,a.kt)("inlineCode",{parentName:"a"},"cw-examples"))," and try out an existing simple escrow contract that\ncan hold some native tokens and gives the power to an arbiter to release them to a pre-defined beneficiary. First, clone\nthe repo and try to build the wasm bundle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# get the code\ngit clone https://github.com/CosmWasm/cw-examples\ncd cw-examples\ngit fetch --tags\ngit checkout escrow-0.10.0\ncd escrow\n\n# compile the wasm contract with stable toolchain\nrustup default stable\ncargo wasm\n")),(0,a.kt)("p",null,"After this compiles, it should produce a file in\n",(0,a.kt)("inlineCode",{parentName:"p"},"target/wasm32-unknown-unknown/release/cw_escrow.wasm"),". A quick ",(0,a.kt)("inlineCode",{parentName:"p"},"ls -l")," should show around 2MB. This is a release build,\nbut not stripped of all unneeded code. To produce a much smaller version, you can run this which tells the compiler to\nstrip all unused code out:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"RUSTFLAGS='-C link-arg=-s' cargo wasm\n")),(0,a.kt)("p",null,"This produces a file about 174kB. We use this and another optimizer in the next ",(0,a.kt)("a",{parentName:"p",href:"#optimized-compilation"},"last section"),"\nto produce the final product uploaded to the blockchain. You don't need to worry about running this yourself (unless you\nare curious), but you should have an idea of the final size of your contract this way."),(0,a.kt)("h2",{id:"unit-tests"},"Unit Tests"),(0,a.kt)("p",null,"Let's try running the unit tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"RUST_BACKTRACE=1 cargo unit-test\n")),(0,a.kt)("p",null,"After some compilation steps, you should see:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"running 5 tests\ntest contract::tests::cannot_initialize_expired ... ok\ntest contract::tests::proper_initialization ... ok\ntest contract::tests::init_and_query ... ok\ntest contract::tests::handle_refund ... ok\ntest contract::tests::handle_approve ... ok\n\ntest result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE=1")," will provide you with full stack traces on any error, which is super useful. This only works for unit\ntests (which test native rust code, not the compiled wasm). Also, if you want to know where ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo wasm"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo unit-test")," come from, they are just aliases defined in\n",(0,a.kt)("inlineCode",{parentName:"p"},".cargo/config"),". Take a look there to understand the cargo flags more."),(0,a.kt)("h2",{id:"optimized-compilation"},"Optimized Compilation"),(0,a.kt)("p",null,"Smart contract binary size must be as small as possible for reduced gas cost. This will not only cost less on\ndeployment, also for every single interaction. Simply, ",(0,a.kt)("strong",{parentName:"p"},"optimize production code"),"\nusing ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/rust-optimizer"},"cosmwasm/rust-optimizer"),".\n",(0,a.kt)("strong",{parentName:"p"},"rust-optimizer")," also produces reproducible builds of cosmwasm smart contracts. This means third parties can verify\nthe contract is the actually the claimed code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'docker run --rm -v "$(pwd)":/code \\\n  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \\\n  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n  cosmwasm/rust-optimizer:0.11.3\n')))}m.isMDXComponent=!0}}]);