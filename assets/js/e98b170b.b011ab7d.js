"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8430],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3604:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),c=["components"],i={sidebar_position:8},s="Compilation",p={unversionedId:"smart-contracts/compilation",id:"smart-contracts/compilation",title:"Compilation",description:"Before your contract can be used, it has to be compiled, and then stored on chain.",source:"@site/docs/04-smart-contracts/08-compilation.md",sourceDirName:"04-smart-contracts",slug:"/smart-contracts/compilation",permalink:"/docs/1.0/smart-contracts/compilation",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/04-smart-contracts/08-compilation.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docsSidebar",previous:{title:"Math",permalink:"/docs/1.0/smart-contracts/math"},next:{title:"Deployment",permalink:"/docs/1.0/smart-contracts/deployment"}},l={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"compilation"},"Compilation"),(0,a.kt)("p",null,"Before your contract can be used, it has to be compiled, and then stored on chain."),(0,a.kt)("p",null,"The easiest way of compiling is of course with ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cargo wasm\n")),(0,a.kt)("p",null,"This is sufficient for dev use. However, this will not be optimised, and in production gas costs matter. It's possible\nto strip unnecessary code and produce a more lean build like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"RUSTFLAGS='-C link-arg=-s' cargo wasm\n")),(0,a.kt)("p",null,"In most cases, however, you will want to use the optimiser docker image. Note that you might need to change the paths in\nthe snippet below to better fit your code paths."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'sudo docker run --rm -v "$(pwd)":/code \\\n  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \\\n  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n  cosmwasm/workspace-optimizer:0.12.4\n')))}d.isMDXComponent=!0}}]);