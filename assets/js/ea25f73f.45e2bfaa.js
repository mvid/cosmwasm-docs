"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1077],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1027:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),c=["components"],o={title:"cw20-base Spec",sidebar_position:2},s="CW20 Basic",l={unversionedId:"cw20/cw20-base-spec",id:"cw20/cw20-base-spec",title:"cw20-base Spec",description:"This is a basic implementation of a cw20 contract. It implements the cw20 spec and is designed to be deployed",source:"@site/cw-plus/cw20/cw20-base-spec.md",sourceDirName:"cw20",slug:"/cw20/cw20-base-spec",permalink:"/cw-plus/0.9.0/cw20/cw20-base-spec",editUrl:"https://github.com/InterWasm/docs/edit/main/cw-plus/cw20/cw20-base-spec.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"cw20-base Spec",sidebar_position:2},sidebar:"cwPlus",previous:{title:"CW20 Spec: Fungible Tokens",permalink:"/cw-plus/0.9.0/cw20/spec"},next:{title:"cw20-base Tutorial",permalink:"/cw-plus/0.9.0/cw20/cw20-base-tutorial"}},p={},u=[{value:"Importing this contract",id:"importing-this-contract",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cw20-basic"},"CW20 Basic"),(0,a.kt)("p",null,"This is a basic implementation of a cw20 contract. It implements the ",(0,a.kt)("a",{parentName:"p",href:"/cw-plus/0.9.0/cw20/spec"},"cw20 spec")," and is designed to be deployed\nas is, or imported into other contracts to easily build cw20-compatible tokens with custom logic."),(0,a.kt)("p",null,"Implements:"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","cw20 Base"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Mintable extension"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Allowances extension")),(0,a.kt)("h2",{id:"importing-this-contract"},"Importing this contract"),(0,a.kt)("p",null,"You can also import much of the logic of this contract to build another ERC20-contract, such as a bonding curve,\noverriding or extending what you need."),(0,a.kt)("p",null,"Basically, you just need to write your handle function and import\n",(0,a.kt)("inlineCode",{parentName:"p"},"cw20_base::contract::handle_transfer"),", etc and dispatch to them. This allows you to use custom ",(0,a.kt)("inlineCode",{parentName:"p"},"HandleMsg"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryMsg")," with your additional calls, but then use the underlying implementation for the standard cw20 messages you\nwant to support. The same with ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryMsg"),". You ",(0,a.kt)("em",{parentName:"p"},"could")," reuse ",(0,a.kt)("inlineCode",{parentName:"p"},"init"),"\nas it, but it is likely you will want to change it. And it is rather simple."))}d.isMDXComponent=!0}}]);