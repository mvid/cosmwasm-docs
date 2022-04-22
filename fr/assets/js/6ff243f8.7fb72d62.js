"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9053],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3243:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],l={sidebar_position:2},p="Cosmic dApp logic",c={unversionedId:"frontend-dapp/cosmicdapp-logic",id:"frontend-dapp/cosmicdapp-logic",title:"Cosmic dApp logic",description:"The @cosmicdapp/logic package provides three kinds of",source:"@site/tutorials/frontend-dapp/cosmicdapp-logic.md",sourceDirName:"frontend-dapp",slug:"/frontend-dapp/cosmicdapp-logic",permalink:"/fr/tutorials/frontend-dapp/cosmicdapp-logic",editUrl:"https://github.com/InterWasm/docs/edit/main/tutorials/frontend-dapp/cosmicdapp-logic.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorials",previous:{title:"Introduction",permalink:"/fr/tutorials/frontend-dapp/intro"},next:{title:"Cosmic dApp design",permalink:"/fr/tutorials/frontend-dapp/cosmicdapp-design"}},s={},d=[{value:"Config",id:"config",level:2},{value:"Utils",id:"utils",level:2},{value:"Service",id:"service",level:2},{value:"Sdk provider",id:"sdk-provider",level:3},{value:"Account provider",id:"account-provider",level:3},{value:"ErrorProvider",id:"errorprovider",level:3},{value:"CW20",id:"cw20",level:3},{value:"ProtectedSwitch",id:"protectedswitch",level:3}],u={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cosmic-dapp-logic"},"Cosmic dApp logic"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/dApps/tree/master/packages/logic"},(0,o.kt)("inlineCode",{parentName:"a"},"@cosmicdapp/logic"))," package provides three kinds of\nresources that will make it easier to develop CosmJS based dApps: config, utils, and service. In order to better\nunderstand the example balance checker dApp that we'll be developing, we'll go over those utilities that will be used in\nthe app."),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("p",null,"The AppConfig definitions that configure the app to work for a given chain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface AppConfig {\n  readonly chainId: string;\n  readonly chainName: string;\n  readonly addressPrefix: string;\n  readonly rpcUrl: string;\n  readonly httpUrl: string;\n  readonly faucetUrl: string;\n  readonly feeToken: string;\n  readonly stakingToken: string;\n  readonly faucetToken: string;\n  readonly coinMap: CoinMap;\n  readonly gasPrice: number;\n  readonly codeId?: number;\n}\n")),(0,o.kt)("p",null,"In this tutorial we'll be using configuration for Heldernet."),(0,o.kt)("p",null,"The fields are pretty self-explanatory except ",(0,o.kt)("inlineCode",{parentName:"p"},"coinMap"),", which is a map of native coin names that will allow us to\npretty print the token amounts with ",(0,o.kt)("inlineCode",{parentName:"p"},"nativeCoinToDisplay()"),". It looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  ucosm: {\n    denom: "COSM", fractionalDigits\n  :\n    6\n  }\n,\n  ustake: {\n    denom: "STAKE", fractionalDigits\n  :\n    6\n  }\n,\n}\n')),(0,o.kt)("h2",{id:"utils"},"Utils"),(0,o.kt)("p",null,"Here you can find the definition for a ",(0,o.kt)("inlineCode",{parentName:"p"},"CoinMap")," like the one above, which will come in handy when defining it in your\nconfig file."),(0,o.kt)("p",null,"There are also several utility functions for working with errors and currencies. In this tutorial we'll only be\nusing ",(0,o.kt)("inlineCode",{parentName:"p"},"nativeCoinToDisplay()"),", which takes two parameters: a ",(0,o.kt)("inlineCode",{parentName:"p"},"@cosmjs/launchpad")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Coin")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"CoinMap"),"."),(0,o.kt)("p",null,"It makes use of those parameters and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Decimal")," class from ",(0,o.kt)("inlineCode",{parentName:"p"},"@cosmjs/math")," to return a ",(0,o.kt)("inlineCode",{parentName:"p"},"Coin")," with a more user\nfriendly ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," field, that will be used for printing native coins in the balance checker."),(0,o.kt)("h2",{id:"service"},"Service"),(0,o.kt)("p",null,"This resource offers several React context providers, some utility functions, and a ",(0,o.kt)("inlineCode",{parentName:"p"},"ProtectedSwitch")," React component."),(0,o.kt)("h3",{id:"sdk-provider"},"Sdk provider"),(0,o.kt)("p",null,"We'll be able to interact with this React context provider with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSdk")," hook, which will give us access to\na ",(0,o.kt)("inlineCode",{parentName:"p"},"SigningCosmWasmClient")," in order to query the chain."),(0,o.kt)("h3",{id:"account-provider"},"Account provider"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useAccount")," hook will expose this provider's state, which will be useful for getting the user address and balance."),(0,o.kt)("h3",{id:"errorprovider"},"ErrorProvider"),(0,o.kt)("p",null,"By making use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"useError")," hook, we will be able to query and change the value of a global error."),(0,o.kt)("h3",{id:"cw20"},"CW20"),(0,o.kt)("p",null,"This is a utility that will provide several methods for interacting with CW20 contracts. For the balance checker, we'll\nbe querying the balance of a given CW20 contract token."),(0,o.kt)("h3",{id:"protectedswitch"},"ProtectedSwitch"),(0,o.kt)("p",null,"A wrapper around ",(0,o.kt)("inlineCode",{parentName:"p"},"react-router-dom")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Switch"),", that only allows the user to visit the routes inside if the user has\nfinished the login process."))}f.isMDXComponent=!0}}]);