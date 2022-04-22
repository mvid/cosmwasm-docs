"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[930],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3922:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},l="Cosmic dApp design",p={unversionedId:"frontend-dapp/cosmicdapp-design",id:"frontend-dapp/cosmicdapp-design",title:"Cosmic dApp design",description:"The @cosmicdapp/design package provides two kinds of",source:"@site/tutorials/frontend-dapp/cosmicdapp-design.md",sourceDirName:"frontend-dapp",slug:"/frontend-dapp/cosmicdapp-design",permalink:"/fr/tutorials/frontend-dapp/cosmicdapp-design",editUrl:"https://github.com/InterWasm/docs/edit/main/tutorials/frontend-dapp/cosmicdapp-design.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorials",previous:{title:"Cosmic dApp logic",permalink:"/fr/tutorials/frontend-dapp/cosmicdapp-logic"},next:{title:"Bootstrap dApp",permalink:"/fr/tutorials/frontend-dapp/bootstrap-dapp"}},c={},u=[{value:"Theme",id:"theme",level:2},{value:"Components",id:"components",level:2},{value:"Layout primitives",id:"layout-primitives",level:3},{value:"Stack",id:"stack",level:4},{value:"PageLayout",id:"pagelayout",level:4},{value:"Components with logic",id:"components-with-logic",level:3},{value:"Login",id:"login",level:4},{value:"YourAccount",id:"youraccount",level:4}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cosmic-dapp-design"},"Cosmic dApp design"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/dApps/tree/master/packages/design"},(0,a.kt)("inlineCode",{parentName:"a"},"@cosmicdapp/design"))," package provides two kinds of\nresources: theme and components. The theme provides global styles for visual consistency across the dApps, whereas the\ncomponents will give us layout primitives and reusable React components with internal logic."),(0,a.kt)("p",null,"The example balance checker dApp will make use of some resources from this package, so let's take a look at them."),(0,a.kt)("h2",{id:"theme"},"Theme"),(0,a.kt)("p",null,"We'll use the exported ",(0,a.kt)("inlineCode",{parentName:"p"},"GlobalStyle")," in order to have visual consistency with the rest of the dApps. This React\ncomponent includes a CSS reset; spacing, colors, and fonts CSS Custom Properties; and an override for some Ant Design\nclasses. This is seen at first glance if you look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"GlobalStyle")," code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export function GlobalStyle(): JSX.Element {\n  return (\n    <>\n      <GlobalReset/>\n      <GlobalSpacing/>\n      <GlobalColors/>\n      <GlobalFonts/>\n      <GlobalAntOverride/>\n    </>\n  );\n}\n")),(0,a.kt)("h2",{id:"components"},"Components"),(0,a.kt)("h3",{id:"layout-primitives"},"Layout primitives"),(0,a.kt)("p",null,"This resource offers some primitives based on the ",(0,a.kt)("a",{parentName:"p",href:"https://every-layout.dev"},"Every Layout")," book."),(0,a.kt)("h4",{id:"stack"},"Stack"),(0,a.kt)("p",null,"This React component displays its children as a stack with a configurable gap between them."),(0,a.kt)("h4",{id:"pagelayout"},"PageLayout"),(0,a.kt)("p",null,"This React component is used as the wrapper for every view. It establishes a max width of page and centers the stacked\nchildren inside."),(0,a.kt)("h3",{id:"components-with-logic"},"Components with logic"),(0,a.kt)("h4",{id:"login"},"Login"),(0,a.kt)("p",null,"The first view of the balance checker application. It offers three options for logging in: localStorage burner wallet,\nledger wallet, or Keplr wallet."),(0,a.kt)("h4",{id:"youraccount"},"YourAccount"),(0,a.kt)("p",null,"A useful component that lets the user copy their own address to clipboard, and optionally show their current native\nbalance."))}m.isMDXComponent=!0}}]);