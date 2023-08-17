"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[8233],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>g});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(i),d=o,g=h["".concat(s,".").concat(d)]||h[d]||p[d]||r;return i?n.createElement(g,a(a({ref:t},c),{},{components:i})):n.createElement(g,a({ref:t},c))}));function g(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<r;u++)a[u]=i[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},7704:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=i(7462),o=(i(7294),i(3905));const r={sidebar_position:10},a="Tuning Guide for 0602 version controller (Gyro D)",l={unversionedId:"Tuning/Tuning description",id:"Tuning/Tuning description",title:"Tuning Guide for 0602 version controller (Gyro D)",description:"This guide assumes no super low frequency (< 60Hz) global LPF",source:"@site/docs/Tuning/Tuning description.md",sourceDirName:"Tuning",slug:"/Tuning/Tuning description",permalink:"/docs/Tuning/Tuning description",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tuning/Tuning description.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tuningSidebar",previous:{title:"Tune Feedforward",permalink:"/docs/Tuning/Tune Feedforward"},next:{title:"First Flight & Filter Tuning",permalink:"/docs/Tuning/First Flight & Filter Tuning"}},s={},u=[{value:"How should I start tuning?",id:"how-should-i-start-tuning",level:2},{value:"Roll tuning",id:"roll-tuning",level:2},{value:"Pitch tuning",id:"pitch-tuning",level:2},{value:"Yaw tuning",id:"yaw-tuning",level:2},{value:"Rates smoothness",id:"rates-smoothness",level:2},{value:"Other notes",id:"other-notes",level:2}],c={toc:u},h="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(h,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tuning-guide-for-0602-version-controller-gyro-d"},"Tuning Guide for 0602 version controller (Gyro D)"),(0,o.kt)("p",null,"This guide assumes no super low frequency (< 60Hz) global LPF"),(0,o.kt)("h2",{id:"how-should-i-start-tuning"},"How should I start tuning?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The default value of the PIDF control loop is very conservative. You may notice that the helicopter is difficult to fly because the controller is not doing much.  "),(0,o.kt)("li",{parentName:"ul"},"After confirming that the filters have cleaned up the gyro readout, the first step is simply increase the P and I gain on all three axis until they hold their position relatively well. The P value usually range from 20 to 60 and the I value usually range from 120 to 300.  ")),(0,o.kt)("h2",{id:"roll-tuning"},"Roll tuning"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tune the roll axis first. Increase the P gain until roll feels solid at stops.  "),(0,o.kt)("li",{parentName:"ul"},"Increase I gain until the helicopter stop significant drifting during long pitch pumps. You would find that the drift may never go away. Therefore, the I gain should be around when diminishing return begins."),(0,o.kt)("li",{parentName:"ul"},"Finally, tune the Feed Forward (FF) gain using continuous rolls. Lower the FF gain until there I windup occurs when stopping after a few continuous flips at max rate, then dial the FF gain back to when it just disappear."),(0,o.kt)("li",{parentName:"ul"},"Usually the roll axis does not require a lot of D-gain because the relatively low inertia. Add D gain if the helicopter oscillates at aileron hard stops.")),(0,o.kt)("h2",{id:"pitch-tuning"},"Pitch tuning"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The pitch axis is usually more difficult to tune due to the inherently high inertia and underdamping. This results I-term oscillation during stops and high disturbance (rainbow / tick-tock stops). The main solution to this problem is the D-gain. However, D-gain is very sensitive to noise, therefore it is advised to find the upper limit of D gain first before adjusting other parameters. "),(0,o.kt)("li",{parentName:"ul"},"Increase D-gain until the helicopter just start to fast oscillate like a dog shaking water which usually happens around 600-700 with good filters. Then dial-back by around 30%. This D gain would be the limiter of other gains on pitch axis.  "),(0,o.kt)("li",{parentName:"ul"},"Next, Increase P gain until a relatively good response time. Increase I gain until the helicopter stops significant drifting during long pitch pumps.  "),(0,o.kt)("li",{parentName:"ul"},"It is very likely that after this procedure, you will see large but slow oscillations at hard stops. If the oscillation is fast, tune down the P gain.\nTo fix the slow oscillation, it is time to use a new parameter: I-relax. DECREASE I-relax on pitch until there is little oscillation during stops."),(0,o.kt)("li",{parentName:"ul"},"Finally, Tune the FF gain by watching the stop after continuous flips. Tune to a value that the I-windup just disappears.")),(0,o.kt)("h2",{id:"yaw-tuning"},"Yaw tuning"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The yaw tuning is relatively simple. First try to find the maximum P gain on the tail by increasing until fast oscillation and dial back by roughly 20%. Then increase I gain so that it holds position well when hovering, and maintains a good constant rotation speed. D-gain and FF-gain are usually set to zero on tail.  "),(0,o.kt)("li",{parentName:"ul"},"Next, tune the CW and CCW stop gains. Too high may results oscillation during stops, too low may result wandering or slow bounce back during stops.  "),(0,o.kt)("li",{parentName:"ul"},"Then, tune the collective feedforward gain by watching the tail during climb up and fast pitch pumps. The helicopter should not rotate CW (tail goes left) right after pitch pump, and it should maintain a relatively good position during climb ups (there might be a little CCW after it starts climbing and slow bounce back at the end, this is normal)  "),(0,o.kt)("li",{parentName:"ul"},"Finally, decrease the cyclic feedforward if CW initial motion is observed when applying cyclic stick inputs, and increase if CCW initial motion is observed.")),(0,o.kt)("h2",{id:"rates-smoothness"},"Rates smoothness"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"During piroflips, one may feel that the cyclic has slight wobbles. Increasing ",(0,o.kt)("inlineCode",{parentName:"li"},"rates_smoothness")," in CLI would help with that given the PID loop is tuned well.")),(0,o.kt)("h2",{id:"other-notes"},"Other notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The best tuning one could achieve in this version should be stable on the cyclic during stationary flips with a little tail wag. The cyclic should give confidence as it will very accurately follow the command, making flying very low easier. It could have some wobbles at stops of pirouetting pitch pumps. It also could have large wobbles during tick-tock stops.  "),(0,o.kt)("li",{parentName:"ul"},'If you feel that the helicopter is "flighting you" or "doesn\'t want to move" on the cyclic input during tail-down tick-tocks, increase I gain on pitch.')))}p.isMDXComponent=!0}}]);