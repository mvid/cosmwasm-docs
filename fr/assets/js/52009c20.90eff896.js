"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1965],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5722:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),s=["components"],i={sidebar_position:3},l="Smart Contracts Over Governance",c={unversionedId:"governance",id:"governance",title:"Smart Contracts Over Governance",description:"CosmWasm proves the potential of a smart contract container at the heart of the Cosmos Hub.",source:"@site/tutorials/governance.md",sourceDirName:".",slug:"/governance",permalink:"/fr/tutorials/governance",editUrl:"https://github.com/InterWasm/docs/edit/main/tutorials/governance.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorials",previous:{title:"Next Steps",permalink:"/fr/tutorials/simple-option/next-steps"},next:{title:"Introduction",permalink:"/fr/tutorials/name-service/intro"}},p={},m=[{value:"Wasmd Authorization Settings",id:"wasmd-authorization-settings",level:2},{value:"Enable Governance Proposals at Compile Time",id:"enable-governance-proposals-at-compile-time",level:3},{value:"Init Parameters Via Genesis",id:"init-parameters-via-genesis",level:3},{value:"Available configurations",id:"available-configurations",level:3},{value:"Get Sample cw-subkeys Contract",id:"get-sample-cw-subkeys-contract",level:2},{value:"Submit Proposal",id:"submit-proposal",level:2},{value:"Vote",id:"vote",level:2},{value:"Instantiate",id:"instantiate",level:2},{value:"Interact",id:"interact",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-contracts-over-governance"},"Smart Contracts Over Governance"),(0,r.kt)("p",null,"CosmWasm proves the potential of a smart contract container at the heart of the Cosmos Hub. {synopsis}"),(0,r.kt)("p",null,"One of the promises of CosmWasm is to enable flexible smart contract execution on Cosmos Hub. With CosmWasm on the Hub,\nnetwork participants can propose to deploy smart contracts, vote in governance to enable them."),(0,r.kt)("p",null,"In this section you will learn all the knowledge required to experience smart contract on the hub. If you are interested\nin smart contract development, digest the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/0.14/getting-started/intro"},"Getting Started"),"\ndocumentation."),(0,r.kt)("h2",{id:"wasmd-authorization-settings"},"Wasmd Authorization Settings"),(0,r.kt)("p",null,"CosmWasm provides on-chain smart contract deployment authorization mechanisms that can be configured many ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Free for all, meaning fully without an admin. Anyone can deploy."),(0,r.kt)("li",{parentName:"ul"},"Fully permissioned, meaning only an admin can deploy."),(0,r.kt)("li",{parentName:"ul"},"By on-chain governance. Deployment of a contract is determined by governance votes."),(0,r.kt)("li",{parentName:"ul"},"By owner, contract by contract basis.")),(0,r.kt)("h3",{id:"enable-governance-proposals-at-compile-time"},"Enable Governance Proposals at Compile Time"),(0,r.kt)("p",null,"As gov proposals bypass the existing authorization policy they are disabled and require to be enabled at compile time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-X github.com/CosmWasm/wasmd/app.ProposalsEnabled=true - enable all x/wasm governance proposals (default false)\n-X github.com/CosmWasm/wasmd/app.EnableSpecificProposals=MigrateContract,UpdateAdmin,ClearAdmin - enable a subset of the x/wasm governance proposal types (overrides ProposalsEnabled)\n")),(0,r.kt)("p",null,"If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"gaiaflex")," binary executable you don't need to build using flags above since it is already included in\nthe binary build."),(0,r.kt)("h3",{id:"init-parameters-via-genesis"},"Init Parameters Via Genesis"),(0,r.kt)("p",null,"Initial authorization configuration is in genesis file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"wasm": {\n"params": {\n"code_upload_access": {\n"permission": "Nobody"\n},\n"instantiate_default_permission": "Nobody"\n}\n}\n')),(0,r.kt)("p",null,"These configurations in gaiaflex testnet means only governance can upload and init smart contracts."),(0,r.kt)("h3",{id:"available-configurations"},"Available configurations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"code_upload_access")," - who can upload a wasm binary: ",(0,r.kt)("inlineCode",{parentName:"li"},"Nobody"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Everybody"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"OnlyAddress"),". Needs to be defined in the\ngenesis. can be changed later by governance votes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"instantiate_default_permission")," - platform default, who can instantiate a wasm binary when the code owner has not set\nit In this tutorial, we will show you deploying a smart contract on a governed network.")),(0,r.kt)("p",null,"CosmWasm extends Cosmos SDK governance module to enable deployment of smart contracts after proposals."),(0,r.kt)("h2",{id:"get-sample-cw-subkeys-contract"},"Get Sample cw-subkeys Contract"),(0,r.kt)("p",null,"There are two options to get the sample contract:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/tree/v0.1.1/contracts/cw20-base"},"source code"),",\nand ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/getting-started/compile-contract"},"compile")," it your self.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/releases/download/v0.1.1/cw20_base.wasm"},"pre-compiled binary"),"."))),(0,r.kt)("h2",{id:"submit-proposal"},"Submit Proposal"),(0,r.kt)("p",null,"Deployment command is down below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'wasmcli tx gov submit-proposal wasm-store cw1-subkeys.wasm \\\n --source \u201chttps://github.com/CosmWasm/cw-plus" \\\n \u2014-builder \u201ccosmwasm/workspace-optimizer:0.10.3\u201d \\\n \u2014-title \u201cEnable cw1-subkeys functionality\u201d \\\n \u2014-description \u201cDAO and DSOs need this!\u201d \\\n \u2014-instantiate-everybody \u201ctrue\u201d \\\n \u2014-run-as $(wasmcli keys show -a account)\n \u2014-deposit \u201c10000umuon\u201d\n --from account\n')),(0,r.kt)("p",null,"If you run ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmcli tx gov submit-proposal wasm-store -h"),", you will notice two more important flags:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"--instantiate-everybody string      Everybody can instantiate a contract from the code, optional\n--instantiate-only-address string   Only this address can instantiate a contract instance from the code, optional\n")),(0,r.kt)("p",null,"By default, the first flag is enabled. If you want only one address to be able to initiate the contract, set\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"instantiate-only-address")," flag."),(0,r.kt)("p",null,"If either of these flags are set, the voting committee should decide if that is acceptable for the given contract.\nInstantiate-everybody might make sense for a multisig (everyone makes their own), but not for creating a new token."),(0,r.kt)("h2",{id:"vote"},"Vote"),(0,r.kt)("p",null,"After the proposal creation, it needs to be approved by governance voting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasmcli tx gov vote [proposal-id] yes --from account\n")),(0,r.kt)("h2",{id:"instantiate"},"Instantiate"),(0,r.kt)("p",null,"After the proposal passes the code will be deployed. Now you can instantiate the contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"INIT=\u2019{\u201cadmins\u201d: [\u201ccosmos12at9uplen85jt2vrfc5fs36s9ed4ahgduclk5a\u201d,\u201dcosmos1v7mjgfyxvlqt7tzj2j9fwee82fh6ra0jvhrxyp\u201d,\u201dcosmos18rkzfn65485wq68p3ylv4afhgguq904djepfkk\u201d,\u201dcosmos1xxkueklal9vejv9unqu80w9vptyepfa95pd53u\u201d], \u201cmutable\u201d: true}\u2019\nwasmcli tx wasm instantiate [code_id] \u201c$INIT\u201d \\\n --label \u201cUP-101 Funding Account\u201d\n \u2014-amount 2000000uatom\n --from account\n")),(0,r.kt)("h2",{id:"interact"},"Interact"),(0,r.kt)("p",null,"If you have admin access to the contract you can add or remove admins by running the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export UPDATE_ADMINS_MSG=\u2019{\u201cupdate_admins\u201d: {\u201cadmins\u201d:[\u201ccosmos1u3nufc2kjslj2t3pugxhjv4zc8adw5thuwu0tm\u201d, \u201ccosmos1fp9qlazkm8kgq304kalev6e69pyp5kmdd5pcgj\u201d]}}\u2019\nwasmcli tx wasm execute $CONTRACT_ADDRESS \u201c$UPDATE_ADMINS_MSG\u201d \\\n--from account\n")),(0,r.kt)("p",null,"Subkey allowances can execute send token transaction using the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'export SEND_MSG=\u2019{\u201cexecute\u201d:{\u201cmsgs\u201d:[{\u201cbank\u201d:{\u201csend\u201d:{\u201camount\u201d:[{\u201cdenom\u201d:\u201dumuon\u201d,\u201damount\u201d:\u201d1000"}],\u201dfrom_address\u201d:\u201dcosmos18vd8fpwxzck93qlwghaj6arh4p7c5n89uzcee5",\u201dto_address\u201d:\u201dcosmos1cs63ehtq6lw86vc87t42cnhcmydtnrffzdjhkz\u201d}}}]}}\u2019\nwasmcli tx wasm execute $CONTRACT_ADDRESS \u201c$SEND_MSG\u201d --from account\n')))}d.isMDXComponent=!0}}]);