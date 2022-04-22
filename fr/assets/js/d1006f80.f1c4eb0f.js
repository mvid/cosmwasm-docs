"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9128],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(f,i(i({ref:e},m),{},{components:n})):r.createElement(f,i({ref:e},m))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1940:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:6},s="Compatibility",c={unversionedId:"COMPATIBILITY",id:"version-0.16/COMPATIBILITY",title:"Compatibility",description:"Wasm VM can support one or more contract-VM interface versions. The interface version is communicated by the contract",source:"@site/docs_versioned_docs/version-0.16/06-COMPATIBILITY.md",sourceDirName:".",slug:"/COMPATIBILITY",permalink:"/fr/docs/0.16/COMPATIBILITY",editUrl:"https://github.com/InterWasm/docs/edit/main/docs_versioned_docs/version-0.16/06-COMPATIBILITY.md",tags:[],version:"0.16",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"version-0.16/docsSidebar",previous:{title:"CW20 ICS20",permalink:"/fr/docs/0.16/ibc/cw20-ics20"},next:{title:"Migrating Contracts",permalink:"/fr/docs/0.16/MIGRATING"}},m={},p=[],u={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compatibility"},"Compatibility"),(0,o.kt)("p",null,"Wasm VM can support one or more contract-VM interface versions. The interface version is communicated by the contract\nvia a Wasm export. This is the current compatibility list:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"cosmwasm-std"),(0,o.kt)("th",{parentName:"tr",align:null},"cosmwasm-vm"),(0,o.kt)("th",{parentName:"tr",align:null},"x/wasm"),(0,o.kt)("th",{parentName:"tr",align:null},"@cosmjs/cosmwasm-stargate"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0.16"),(0,o.kt)("td",{parentName:"tr",align:null},"0.16"),(0,o.kt)("td",{parentName:"tr",align:null},"0.18"),(0,o.kt)("td",{parentName:"tr",align:null},"^0.26.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0.15"),(0,o.kt)("td",{parentName:"tr",align:null},"0.15"),(0,o.kt)("td",{parentName:"tr",align:null},"0.18"),(0,o.kt)("td",{parentName:"tr",align:null},"^0.25.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0.14"),(0,o.kt)("td",{parentName:"tr",align:null},"0.14"),(0,o.kt)("td",{parentName:"tr",align:null},"0.16-0.17"),(0,o.kt)("td",{parentName:"tr",align:null},"^0.25.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0.13"),(0,o.kt)("td",{parentName:"tr",align:null},"0.13"),(0,o.kt)("td",{parentName:"tr",align:null},"0.16"),(0,o.kt)("td",{parentName:"tr",align:null},"^0.24.0")))),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmwasm-std")," version defines which contracts are compatible with this system. The wasm code uploaded must\nhave been compiled with one of the supported ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmwasm-std"),' versions, or will be rejeted upon upload (with some error\nmessage about "contract too old?" or "contract too new?"). ',(0,o.kt)("inlineCode",{parentName:"p"},"cosmwasm-vm")," version defines the runtime used. It is a\nbreaking change to switch runtimes (you will need to organize a chain upgrade). As of ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmwasm-vm 0.13")," we are\nusing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasmerio/wasmer/"},"wasmer")," 1.0, which is significantly more performant than the older versions.\n",(0,o.kt)("inlineCode",{parentName:"p"},"@cosmjs/cosmwasm-stargate")," follows the compatible ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmjs"},"CosmJS")," version."))}d.isMDXComponent=!0}}]);