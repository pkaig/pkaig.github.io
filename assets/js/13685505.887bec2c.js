"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[2642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=u(n),f=o,g=c["".concat(l,".").concat(f)]||c[f]||p[f]||a;return n?r.createElement(g,i(i({ref:t},h),{},{components:n})):r.createElement(g,i({ref:t},h))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},i="Profile (Bank) switching example",s={unversionedId:"Tutorial - Walkthroughs/Profile switching example",id:"Tutorial - Walkthroughs/Profile switching example",title:"Profile (Bank) switching example",description:"Purpose",source:"@site/docs/Tutorial - Walkthroughs/Profile switching example.md",sourceDirName:"Tutorial - Walkthroughs",slug:"/Tutorial - Walkthroughs/Profile switching example",permalink:"/docs/Tutorial - Walkthroughs/Profile switching example",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tutorial - Walkthroughs/Profile switching example.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"LUA Scripts",permalink:"/docs/Tutorial - Walkthroughs/LUA Scripts"},next:{title:"Tuning using Adjustments",permalink:"/docs/Tutorial - Walkthroughs/Tuning using Adjustments"}},l={},u=[{value:"Purpose",id:"purpose",level:2},{value:"Aim",id:"aim",level:2},{value:"Configure the Tx",id:"configure-the-tx",level:3},{value:"Configure flight controller",id:"configure-flight-controller",level:3}],h={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"profile-bank-switching-example"},"Profile (Bank) switching example"),(0,o.kt)("h2",{id:"purpose"},"Purpose"),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("h2",{parentName:"blockquote",id:"we-often-configure-several-flight-modes-to-suit-our-own-flying-requirements-eg-futaba---normal-iu1-iu2opentx---fm1-fm2-fm3-it-is-quite-possible-that-with-each-of-these-flight-modes-we-would-want-to-adjust-and-tune-the-model-independently-we-can-do-this-through-the-adjustments-tab-this-is-a-similar-feature-to-v-bar-bank-switching-the-following-example-is-just-a-suggestion-and-is-one-way-to-go-about-using-the-adjustments-tab-the-same-process-can-be-used-to-switch-rates-if-required"},"We often configure several flight modes to suit our own flying requirements e.g. (Futaba - Normal, IU1, IU2)(OpenTx - FM1, FM2, FM3). It is quite possible that with each of these flight modes we would want to adjust and tune the model independently. We can do this through the Adjustments tab. This is a similar feature to V-bar 'Bank switching'. The following example is just a suggestion and is one way to go about using the adjustments tab. The same process can be used to switch rates if required.")),(0,o.kt)("h2",{id:"aim"},"Aim"),(0,o.kt)("p",null,"My helicopter has already been set up to have a 3 position switch (SwE) which selects between 3 headspeeds (I use the governor so my 'curves' are just flat). The following example will add switching of tuning parameters (",(0,o.kt)("strong",{parentName:"p"},"Profile")," Tab) for each of these headspeeds. "),(0,o.kt)("h3",{id:"configure-the-tx"},"Configure the Tx"),(0,o.kt)("p",null,"We need to assign a spare channel to your 3 position switch (SwE) (can be any channel or switch). "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")," This example shows the process for EdgeTx (same for OpenTX) but is really the same process for any transmitter."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1:")," Assign Ch9 to the SwE in the ",(0,o.kt)("strong",{parentName:"p"},"Mixers")," tab"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Change Profiles",src:n(6261).Z,width:"937",height:"475"})),(0,o.kt)("h3",{id:"configure-flight-controller"},"Configure flight controller"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2:")," looking at the channels in the ",(0,o.kt)("strong",{parentName:"p"},"receiver")," tab we can see that Aux4 is the ninth channel. This matches our TX assignment from step 1.  Confirm the 3 position switch changes the value seen on Aux4,  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Change Profiles",src:n(278).Z,width:"1138",height:"416"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3:")," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Adjustments")," tab. Enable an adjustment slot and select Aux4 as the control channel. "),(0,o.kt)("li",{parentName:"ul"},"Stretch the range slider across the entire channel range. This covers the positions for each of the three switch positions.  "),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Profile Selection")," from the dropdown. This means we want to change the 'Profile selection' by the switch position."),(0,o.kt)("li",{parentName:"ul"},"Set the apply channel to Aux4. "),(0,o.kt)("li",{parentName:"ul"},"Set Min = 1 and Max = 3. This means over the defined range a value of 1-3 will be chosen based on the switch position. (e.g. SwE down = 0, SwE middle = 1, SwE up = 2). These values are added to the Profile so will result in (e.g. SwE down = Profile 1, SwE middle = Profile 2, SwE up = Profile 3).     ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Change Profiles",src:n(7261).Z,width:"1135",height:"295"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4:")," Go to the ",(0,o.kt)("strong",{parentName:"p"},"Profiles")," tab and test and confirm that changing the switch position results in changing of the current Profile."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Change Profiles",src:n(6071).Z,width:"1047",height:"654"})))}p.isMDXComponent=!0},6261:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Change_Profiles_1-ef198abf82c5424f4646f879d98638ad.png"},278:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Change_Profiles_2-c5ded5dda14325eb61b07f7379ca8465.png"},7261:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Change_Profiles_3-8aacb826f7aba970eb5d073be4ef5531.png"},6071:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Change_Profiles_4-16e8827ff3f14f47c961b9db20ca04b7.png"}}]);