"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[1449],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||n;return r?o.createElement(m,l(l({ref:t},c),{},{components:r})):o.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<n;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8236:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:20},l="What board should I get?",i={unversionedId:"Tutorial - Quickstart/What Board",id:"Tutorial - Quickstart/What Board",title:"What board should I get?",description:"There are lots of different flight controller boards designed for Betaflight. Most of these are compatible with Rotorflight; however, there are some issues to be aware of before you make a purchase.",source:"@site/docs/Tutorial - Quickstart/What Board.md",sourceDirName:"Tutorial - Quickstart",slug:"/Tutorial - Quickstart/What Board",permalink:"/docs/Tutorial - Quickstart/What Board",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tutorial - Quickstart/What Board.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/Tutorial - Quickstart/Introduction"},next:{title:"Converting from RF1 to RF2",permalink:"/docs/Tutorial - Quickstart/Converting from RF1 to RF2"}},s={},u=[{value:"Processors",id:"processors",level:2},{value:"Gyros",id:"gyros",level:2},{value:"Size",id:"size",level:2},{value:"How many pads are available?",id:"how-many-pads-are-available",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-board-should-i-get"},"What board should I get?"),(0,a.kt)("p",null,"There are lots of different flight controller boards designed for Betaflight. Most of these are compatible with Rotorflight; however, there are some issues to be aware of before you make a purchase.          "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"There are currently three ways to get a controller suitable for Rotorflight. "),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Build a DIY controller based on a Drone flight controller."),(0,a.kt)("li",{parentName:"ol"},"Purchase a 'Wing' controller (Must have a Betaflight Target. Not just iNav or Ardupilot."),(0,a.kt)("li",{parentName:"ol"},"Purchase one of the ready built Rotorflight Controllers such as:  ")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Flywoo F405  "),(0,a.kt)("li",{parentName:"ul"},"Flywing F722     "))),(0,a.kt)("h2",{id:"processors"},"Processors"),(0,a.kt)("p",null,"We recommend use of a board that has an H743, F7 (F745, F722 etc) or F405 processor for best results. An F411 can (and has) been used but may not be able to run all of the newer features. The newest H7 processors are yet to be supported/fully tested. Please avoid these (or help us with the testing!!) "),(0,a.kt)("h2",{id:"gyros"},"Gyros"),(0,a.kt)("p",null,"Rotorflight 2.xx is built on the Betaflight 4.3 platform. This is several releases behind the current Betaflight version so as a result there may be some new hardware additions that are not yet supported.\nCurrently the gyros on all common boards designed for Betaflight are supported. These include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MPU6000, MPU6050, MPU6500"),(0,a.kt)("li",{parentName:"ul"},"BMI270"),(0,a.kt)("li",{parentName:"ul"},"IMC42688")),(0,a.kt)("h2",{id:"size"},"Size"),(0,a.kt)("p",null,"How big is your helicopter. Standard sizes are 16mmx16mm, 20mmx20mm, 25.5mm.25.5mm (whoop), 30.5mmx30.5mm. There are also AIO (All in one) boards which contain the flight controller and 4x ESC's on the one board."),(0,a.kt)("h2",{id:"how-many-pads-are-available"},"How many pads are available?"),(0,a.kt)("p",null,"We need to have pads available on the board to connect to our devices such as Servos, Motors, Frequency input, External logger, Receiver etc (GPS in the future)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Receiver:")," This will require a UART RX and TX if we want to use telemetry (this will be documented by the manufacturer) "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Servos, Motor, Frequency:")," These items can be allocated to any free UART RX, UART TX, SDA, SCL, LED or Motor pad. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Logger:")," An OpenLarger requires on free UART RX "),(0,a.kt)("p",null,"You will need to choose a board that has enough pins to enable all of your connections."))}p.isMDXComponent=!0}}]);