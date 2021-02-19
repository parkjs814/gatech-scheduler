(this["webpackJsonpgt-scheduler"]=this["webpackJsonpgt-scheduler"]||[]).push([[0],{278:function(e,t,a){e.exports=a(624)},300:function(e,t,a){},307:function(e,t,a){},308:function(e,t,a){},414:function(e,t,a){},415:function(e,t,a){},416:function(e,t,a){},417:function(e,t,a){},418:function(e,t,a){},419:function(e,t,a){},420:function(e,t,a){},421:function(e,t,a){},422:function(e,t,a){},423:function(e,t,a){},424:function(e,t,a){},444:function(e,t){},458:function(e,t){},460:function(e,t){},621:function(e,t,a){},623:function(e,t,a){},624:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(67),r=a.n(s),i=a(5),o=a(1),l=a(68),d=a.n(l);const u=["M","T","W","R","F"],m=[["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF"],["#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF"],["#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"]],p={"Hybrid Course":"Hybrid","Remote Synchronous Course":"Remote Synchronous","Remote Asynchronous Course":"Remote Asynchronous","Residential Course":"Residential"},b={"Georgia Tech-Atlanta *":"Atlanta","GT Lorraine-Undergrad Programs":"Lorraine Undergrad","GT Lorraine-Graduate Programs":"Lorraine Graduate","Georgia Tech - Shenzhen":"Shenzhen",Video:"Video",Online:"Online","MBA Evening Program":"MBA Evening"},h=e=>{const t=/(\d{1,2}):(\d{2}) (a|p)m/.exec(e),a=Object(o.a)(t,4),n=a[1],c=a[2];return 60*(("p"===a[3]?12:0)+ +n%12)+ +c},f=(e,t=!0)=>{const a=e/60|0,n=a>12?a-12:a,c="".concat(e%60).padStart(2,"0"),s="".concat(a<12?"a":"p","m");return t?"".concat(n,":").concat(c," ").concat(s):"".concat(n,":").concat(c)},E=e=>e?"".concat(f(e.start,!1)," - ").concat(f(e.end)):"TBA",g=()=>{const e=m.flat();return e[Math.random()*e.length|0]},v=e=>.299*parseInt(e.substring(1,3),16)+.587*parseInt(e.substring(3,5),16)+.114*parseInt(e.substring(5,7),16)>128?"light-content":"dark-content",O=(e,t)=>e.meetings.some(e=>t.meetings.some(t=>e.period&&t.period&&u.some(a=>e.days.includes(a)&&t.days.includes(a))&&e.period.start<t.period.end&&t.period.start<e.period.end)),C=(...e)=>e.filter(e=>e).join(" "),j=()=>window.innerWidth<1024,y=e=>{const t=e.split(" ");return[t.shift(),t.pop()].join(" ")},N=e=>[...new Set(e)],k=e=>["Lab","Studio"].some(t=>e.scheduleType.includes(t)),w=e=>e.scheduleType.includes("Lecture"),S=e=>{const t=e.substring(0,4),a=(()=>{switch(Number.parseInt(e.substring(4))){case 1:return"Winter";case 2:case 3:return"Spring";case 5:case 6:return"Summer";case 8:case 9:return"Fall";default:return"Unknown"}})();return"".concat(a," ").concat(t)},x=(e,t="and")=>{if(e.length<=2)return e.join(" ".concat(t," "));const a=[...e],n=a.pop();return"".concat(a.join(", "),", ").concat(t," ").concat(n)};var A=a(70),T=(a(300),a(15));function M(e){let t=e.className,a=e.label,n=e.children,s=e.actions,r=Object(A.a)(e,["className","label","children","actions"]);return c.a.createElement("div",Object.assign({className:C("ActionRow",t)},r),c.a.createElement("div",{className:"action-row-header"},c.a.createElement("div",{className:"label"},a),c.a.createElement("div",{className:C("actions","default")},s.filter(e=>e).map((e,t)=>{let a=e.icon,n=Object(A.a)(e,["icon"]);return c.a.createElement(R,Object.assign({className:"action"},n,{key:t}),c.a.createElement(T.a,{fixedWidth:!0,icon:a}))}))),n)}var D=a(271),L=a.n(D);a(307);function R({className:e,disabled:t,text:a,href:n,onClick:s,children:r}){return t?c.a.createElement("div",{className:C("Button","disabled")},r):n?c.a.createElement("a",{className:C("Button",e),href:n,rel:"noopener noreferrer",target:"_blank"},r):a?c.a.createElement(L.a,{text:a},c.a.createElement("div",{className:C("Button",e)},r)):c.a.createElement("div",{className:C("Button",e),onClick:s},r)}a(308);const F=c.a.createContext(null),B=c.a.createContext(null),I=c.a.createContext(null),W=c.a.createContext(null);function U({className:e,overlayCrns:t,preview:a,capture:s}){const r=Object(n.useContext)(I),i=Object(o.a)(r,1)[0].pinnedCrns;return c.a.createElement("div",{className:C("Calendar",s&&"capture",a&&"preview",e)},!a&&c.a.createElement("div",{className:"times"},new Array(13).fill(0).map((e,t)=>{const a=480+60*t;return c.a.createElement("div",{className:"time",key:a},c.a.createElement("span",{className:"label"},(e=>{const t=e/60|0;return"".concat(t>12?t-12:t).concat(t<12?"a":"p","m")})(a)))})),!a&&c.a.createElement("div",{className:"days"},u.map(e=>c.a.createElement("div",{className:"day",key:e},c.a.createElement("span",{className:"label"},e)))),c.a.createElement("div",{className:"meetings"},i.map(e=>c.a.createElement(oe,{key:e,crn:e,preview:a,capture:s})),t&&t.filter(e=>!i.includes(e)).map(e=>c.a.createElement(oe,{key:e,crn:e,overlay:!a,preview:a,capture:s}))))}var G=a(160);a(78),a(414);function H(e){const t=Object(n.useContext)(I),a=Object(o.a)(t,2),s=a[0],r=s.oscar,i=s.desiredCourses,l=s.pinnedCrns,d=s.excludedCrns,u=s.sortingOptionIndex,m=a[1].patchTermData,p=Object(n.useContext)(W),b=Object(o.a)(p,2)[1],h=Object(n.useCallback)(()=>{window.confirm("Are you sure to reset sections you selected?")&&m({pinnedCrns:[]})},[m]),f=Object(n.useMemo)(()=>r.getCombinations(i,l,d),[r,i,l,d]),E=Object(n.useMemo)(()=>r.sortCombinations(f,u),[r,f,u]);return c.a.createElement("div",{className:"CombinationContainer"},c.a.createElement(ie,{onChange:e=>m({sortingOptionIndex:e}),value:u,options:r.sortingOptions.map((e,t)=>({value:t,label:e.label}))}),c.a.createElement(R,{className:"reset",onClick:h,disabled:0===l.length},"Reset Sections"),c.a.createElement("div",{className:"scroller"},c.a.createElement(G.AutoSizer,null,({width:e,height:t})=>c.a.createElement(G.List,{width:e,height:t,style:{outline:"none"},rowCount:E.length,rowHeight:108,rowRenderer:({index:e,key:t,style:a})=>{const n=E[e].crns;return c.a.createElement("div",{className:"list-item",style:a,key:t},c.a.createElement("div",{className:"combination",onMouseEnter:()=>b(n),onMouseLeave:()=>b([]),onClick:()=>m({pinnedCrns:[...l,...n]})},c.a.createElement("div",{className:"number"},e+1),c.a.createElement(U,{className:"calendar-preview",overlayCrns:n,preview:!0})))}}))))}var _=a(3);a(415);function P({className:e,courseId:t,onAddCourse:a}){const s=Object(n.useState)(!1),r=Object(o.a)(s,2),l=r[0],d=r[1],u=Object(n.useState)(!1),m=Object(o.a)(u,2),p=m[0],b=m[1],h=Object(n.useState)({}),f=Object(o.a)(h,2),E=f[0],g=f[1],O=Boolean(a),j=Object(n.useContext)(I),y=Object(o.a)(j,2),N=y[0],k=N.oscar,w=N.term,S=N.desiredCourses,x=N.pinnedCrns,A=N.excludedCrns,T=N.colorMap,D=y[1].patchTermData;Object(n.useEffect)(()=>{if(!O){k.findCourse(t).fetchGpa().then(g)}},[O,k,t]);const L=Object(n.useCallback)(e=>{D({desiredCourses:S.filter(t=>t!==e.id),pinnedCrns:x.filter(t=>!e.sections.some(e=>e.crn===t)),excludedCrns:A.filter(t=>!e.sections.some(e=>e.crn===t)),colorMap:Object(i.a)(Object(i.a)({},T),{},{[e.id]:void 0})})},[S,x,A,T,D]),R=Object(n.useCallback)(e=>{const t=e.map(e=>e.crn);D({excludedCrns:A.filter(e=>!t.includes(e))})},[A,D]),F=k.findCourse(t),B=T[F.id],W=B&&v(B),U={};F.sections.forEach(e=>{const t=Object(o.a)(e.instructors,1)[0],a=void 0===t?"Not Assigned":t;a in U||(U[a]=[]),U[a].push(e)});const G=Object.keys(U),H=G.filter(e=>U[e].every(e=>A.includes(e.crn))),P=G.filter(e=>!H.includes(e)),Y={icon:_.h,href:"https://oscar.gatech.edu/pls/bprod/bwckctlg.p_disp_course_detail?cat_term_in=".concat(w,"&subj_code_in=").concat(F.subject,"&crse_numb_in=").concat(F.number)},V=F.sections.filter(e=>x.includes(e.crn)),q=V.reduce((e,t)=>e+t.credits,0);return c.a.createElement("div",{className:C("Course",W,"default",e),style:{backgroundColor:B},key:F.id},c.a.createElement(M,{label:[F.id,V.map(e=>e.id).join(", ")].join(" "),actions:O?[{icon:_.k,onClick:a},Y]:[{icon:l?_.c:_.b,onClick:()=>d(!l)},Y,{icon:_.i,onClick:()=>b(!p)},{icon:_.n,onClick:()=>L(F)}]},c.a.createElement("div",{className:"course-row"},c.a.createElement("span",{className:"course-title",dangerouslySetInnerHTML:{__html:F.title}}),c.a.createElement("span",{className:"section-crns"},V.map(e=>e.crn).join(", "))),!O&&c.a.createElement("div",{className:"course-row"},c.a.createElement("span",{className:"gpa"},"Course GPA: ",E.averageGpa||"N/A"),q>0&&c.a.createElement("span",{className:"credits"},q," Credits")),p&&c.a.createElement(se,{className:"palette",onSelectColor:e=>D({colorMap:Object(i.a)(Object(i.a)({},T),{},{[t]:e})}),color:B,onMouseLeave:()=>b(!1)})),l&&c.a.createElement("div",{className:C("instructor-container","nested")},P.map(e=>c.a.createElement(ce,{key:e,color:B,name:e,sections:U[e],gpa:E[e]})),H.length>0&&c.a.createElement("div",{className:"excluded-instructor-container"},H.map(e=>c.a.createElement("span",{className:"excluded-instructor",key:e,onClick:()=>R(U[e])},e)))))}a(416);function Y({className:e}){const t=Object(n.useContext)(I),a=Object(o.a)(t,2),s=a[0],r=s.oscar,l=s.desiredCourses,d=s.excludedCrns,u=s.colorMap,m=a[1].patchTermData,h=Object(n.useState)(""),f=Object(o.a)(h,2),E=f[0],v=f[1],O=Object(n.useState)({deliveryMode:[],campus:[]}),j=Object(o.a)(O,2),y=j[0],N=j[1],k=Object(n.useState)(0),w=Object(o.a)(k,2),S=w[0],x=w[1],A=Object(n.useRef)(null),M=Object(n.useCallback)(e=>{let t=e.target.value.trim();const a=t.match(/^([A-Z]+)(\d.*)$/i);if(a){const e=Object(o.a)(a,3),n=e[1],c=e[2];t="".concat(n," ").concat(c)}v(t)},[]),D=Object(n.useMemo)(()=>{const e=/^([A-Z]+) ?((\d.*)?)$/i.exec(E.toUpperCase());if(!e)return[];const t=Object(o.a)(e,3),a=t[1],n=t[2];return x(0),r.courses.filter(e=>{const t=e.subject===a&&e.number.startsWith(n),c=Object.entries(y).every(([t,a])=>0===a.length||e.sections.some(e=>a.includes(e[t])));return t&&c}).filter(e=>!l.includes(e.id))},[r,E,y,l]),L=Object(n.useCallback)(e=>{if(l.includes(e.id))return;const t=e.sections.filter(e=>{const t="Remote Asynchronous Course"===e.deliveryMode||e.meetings.length&&e.meetings.every(e=>e.days.length&&e.period),a=Object.entries(y).every(([t,a])=>0===a.length||a.includes(e[t]));return!t||!a}).map(e=>e.crn);m({desiredCourses:[...l,e.id],excludedCrns:[...d,...t],colorMap:Object(i.a)(Object(i.a)({},u),{},{[e.id]:g()})}),v(""),A.current.focus()},[y,l,d,u,A,m]),R=Object(n.useCallback)(e=>{switch(e.key){case"Enter":const e=D[S];e&&L(e);break;case"ArrowDown":x(Math.min(S+1,D.length-1));break;case"ArrowUp":x(Math.max(S-1,0));break;default:return}e.preventDefault()},[D,L,S]),F=Object(n.useCallback)((e,t)=>{const a=y[e];N(Object(i.a)(Object(i.a)({},y),{},{[e]:a.includes(t)?a.filter(e=>e!==t):[...a,t]}))},[y]),B=Object(n.useCallback)(e=>{N(Object(i.a)(Object(i.a)({},y),{},{[e]:[]}))},[y]),W=D[S];return c.a.createElement("div",{className:C("CourseAdd",e)},c.a.createElement("div",{className:"add"},c.a.createElement("div",{className:"primary"},c.a.createElement(T.a,{className:C("icon",D.length&&"active"),fixedWidth:!0,icon:_.k}),c.a.createElement("div",{className:"keyword-wrapper"},W&&c.a.createElement("div",{className:C("keyword","autocomplete")},W.id),c.a.createElement("input",{type:"text",ref:A,value:E,onChange:M,className:"keyword",placeholder:"XX 0000",onKeyDown:R}))),[["Delivery Mode","deliveryMode",p],["Campus","campus",b]].map(([e,t,a])=>c.a.createElement(J,{key:t,name:e,labels:a,selectedTags:y[t],onReset:()=>B(t),onToggle:e=>F(t,e)}))),D.length>0?D.map(e=>c.a.createElement(P,{key:e.id,className:e===W&&"active",courseId:e.id,pinnedCrns:[],onAddCourse:()=>L(e)})):c.a.createElement("div",{className:"disclaimer"},"Disclaimer: GT Scheduler should be used as general reference only, and users are solely responsible for ensuring any information including registration restrictions."))}var V=a(272),q=a.n(V);a(417);function z(e){const t=Object(n.useContext)(I),a=Object(o.a)(t,1)[0],s=a.oscar,r=a.desiredCourses;return c.a.createElement("div",{className:"CourseContainer"},c.a.createElement("div",{className:"scroller"},c.a.createElement("div",{className:"course-list"},r.map(e=>c.a.createElement(P,{courseId:e,expandable:!0,key:e}))),c.a.createElement(Y,{className:"course-add"})),c.a.createElement(R,{className:"updated-at",href:"https://github.com/64json/gt-schedule-crawler"},"Course data fetched ",q()(s.updatedAt)))}a(418);function J({name:e,labels:t,selectedTags:a,onReset:s,onToggle:r}){const i=Object(n.useState)(!1),l=Object(o.a)(i,2),d=l[0],u=l[1];return c.a.createElement("div",{className:"CourseFilter"},c.a.createElement("div",{className:C("header",a.length>0&&"active"),onClick:()=>u(!d)},!d&&a.length>0?c.a.createElement("div",{className:"name",dangerouslySetInnerHTML:{__html:x(a.map(e=>t[e]),'<span class="or">or</span>')}}):c.a.createElement("div",{className:"name"},e),c.a.createElement(T.a,{fixedWidth:!0,icon:d?_.c:_.b})),d&&c.a.createElement("div",{className:"tag-container"},c.a.createElement("div",{className:C("tag",0===a.length&&"active"),onClick:s},"All"),Object.keys(t).map(e=>c.a.createElement("div",{key:e,className:C("tag",a.includes(e)&&"active"),property:e,onClick:()=>r(e)},t[e]))))}a(419);var K=a(275),X=a(69),$=a.n(X);var Z=function(e,t){if(!(navigator.userAgent.indexOf("MSIE")>-1&&-1===navigator.userAgent.indexOf("MSIE 10"))){"undefined"===typeof e&&(e="default"),"undefined"===typeof t&&(t="Calendar");var a=-1!==navigator.appVersion.indexOf("Win")?"\r\n":"\n",n=[],c=["BEGIN:VCALENDAR","PRODID:"+t,"VERSION:2.0"].join(a),s=a+"END:VCALENDAR",r=["SU","MO","TU","WE","TH","FR","SA"];return{events:function(){return n},calendar:function(){return c+a+n.join(a)+s},addEvent:function(t,c,s,i,o,l){if("undefined"===typeof t||"undefined"===typeof c||"undefined"===typeof s||"undefined"===typeof i||"undefined"===typeof o)return!1;if(l&&!l.rrule){if("YEARLY"!==l.freq&&"MONTHLY"!==l.freq&&"WEEKLY"!==l.freq&&"DAILY"!==l.freq)throw new Error("Recurrence rrule frequency must be provided and be one of the following: 'YEARLY', 'MONTHLY', 'WEEKLY', or 'DAILY'");if(l.until&&isNaN(Date.parse(l.until)))throw new Error("Recurrence rrule 'until' must be a valid date string");if(l.interval&&isNaN(parseInt(l.interval)))throw new Error("Recurrence rrule 'interval' must be an integer");if(l.count&&isNaN(parseInt(l.count)))throw new Error("Recurrence rrule 'count' must be an integer");if("undefined"!==typeof l.byday){if("[object Array]"!==Object.prototype.toString.call(l.byday))throw new Error("Recurrence rrule 'byday' must be an array");if(l.byday.length>7)throw new Error("Recurrence rrule 'byday' array must not be longer than the 7 days in a week");for(var d in l.byday=l.byday.filter((function(e,t){return l.byday.indexOf(e)===t})),l.byday)if(r.indexOf(l.byday[d])<0)throw new Error("Recurrence rrule 'byday' values must include only the following: 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'")}}var u=new Date(i),m=new Date(o),p=new Date,b=("0000"+u.getFullYear().toString()).slice(-4),h=("00"+(u.getMonth()+1).toString()).slice(-2),f=("00"+u.getDate().toString()).slice(-2),E=("00"+u.getHours().toString()).slice(-2),g=("00"+u.getMinutes().toString()).slice(-2),v=("00"+u.getSeconds().toString()).slice(-2),O=("0000"+m.getFullYear().toString()).slice(-4),C=("00"+(m.getMonth()+1).toString()).slice(-2),j=("00"+m.getDate().toString()).slice(-2),y=("00"+m.getHours().toString()).slice(-2),N=("00"+m.getMinutes().toString()).slice(-2),k=("00"+m.getSeconds().toString()).slice(-2),w="",S="";E+g+v+y+N+k!==0&&(w="T"+E+g+v,S="T"+y+N+k);var x,A=b+h+f+w,T=O+C+j+S,M=("0000"+p.getFullYear().toString()).slice(-4)+("00"+(p.getMonth()+1).toString()).slice(-2)+("00"+p.getDate().toString()).slice(-2)+("T"+("00"+p.getHours().toString()).slice(-2)+("00"+p.getMinutes().toString()).slice(-2)+("00"+p.getSeconds().toString()).slice(-2));if(l)if(l.rrule)x=l.rrule;else{if(x="RRULE:FREQ="+l.freq,l.until){var D=new Date(Date.parse(l.until)).toISOString();x+=";UNTIL="+D.substring(0,D.length-13).replace(/[-]/g,"")+"000000Z"}l.interval&&(x+=";INTERVAL="+l.interval),l.count&&(x+=";COUNT="+l.count),l.byday&&l.byday.length>0&&(x+=";BYDAY="+l.byday.join(","))}var L=["BEGIN:VEVENT","UID:"+n.length+"@"+e,"CLASS:PUBLIC","DESCRIPTION:"+c,"DTSTAMP;VALUE=DATE-TIME:"+M,"DTSTART;VALUE=DATE-TIME:"+A,"DTEND;VALUE=DATE-TIME:"+T,"LOCATION:"+s,"SUMMARY;LANGUAGE=en-us:"+t,"TRANSP:TRANSPARENT","END:VEVENT"];return x&&L.splice(4,0,x),L=L.join(a),n.push(L),L},download:function(e,t){if(n.length<1)return!1;t="undefined"!==typeof t?t:".ics",e="undefined"!==typeof e?e:"calendar";var r,i=c+a+n.join(a)+s;if(-1===navigator.userAgent.indexOf("MSIE 10"))r=new Blob([i]);else{var o=new BlobBuilder;o.append(i),r=o.getBlob("text/x-vCalendar;charset="+document.characterSet)}return saveAs(r,e+t),i},build:function(){return!(n.length<1)&&c+a+n.join(a)+s}}}console.log("Unsupported Browser")},Q=a(273),ee=a.n(Q),te=a(274),ae=a.n(te);function ne(e){const t=Object(n.useContext)(I),a=Object(o.a)(t,2),s=a[0],r=s.term,i=s.oscar,l=s.pinnedCrns,d=a[1].setTerm,u=Object(n.useContext)(B),m=Object(o.a)(u,1)[0],p=Object(n.useContext)(F),b=Object(o.a)(p,2),h=b[0],f=b[1],E=Object(n.useRef)(null),g=Object(n.useCallback)(()=>{const e="light"===h?"dark":"light";$.a.set("theme",e,{expires:1460}),f(e)},[h,f]),v=Object(n.useMemo)(()=>l.reduce((e,t)=>e+i.findSection(t).credits,0),[l,i]),O=Object(n.useCallback)(()=>{const e=Z();l.forEach(t=>{const a=i.findSection(t);a.meetings.forEach(t=>{if(!t.period||!t.days.length)return;const n=t.dateRange,c=n.from,s=n.to,r=a.course.id,i=a.course.title,o=t.where,l=new Date(c.getTime());for(;!t.days.includes(["-","M","T","W","R","F","-"][l.getDay()]);)l.setDate(l.getDate()+1);l.setHours(t.period.start/60|0,t.period.start%60);const d=new Date(l.getTime());d.setHours(t.period.end/60|0,t.period.end%60);const u={freq:"WEEKLY",until:s,byday:t.days.map(e=>({M:"MO",T:"TU",W:"WE",R:"TH",F:"FR"}[e]))};e.addEvent(r,i,o,l,d,u)})}),e.download("gt-scheduler")},[i,l]),C=Object(n.useCallback)(()=>{const e=E.current;if(null==e)return;const t=window.getComputedStyle(e).getPropertyValue("left");ee.a.toBlob(e,{width:2*e.offsetWidth,height:2*e.offsetHeight,style:{transform:"scale(".concat(2,")"),"transform-origin":"".concat(t," 0px"),"background-color":"light"===h?"#FFFFFF":"#333333"}}).then(e=>ae()(e,"schedule.png"))},[E,h]);return c.a.createElement("div",{className:"Header"},c.a.createElement(R,{className:"logo"},c.a.createElement("span",{className:"gt"},"GT "),c.a.createElement("span",{className:"scheduler"},"Scheduler")),c.a.createElement(ie,{onChange:d,value:r,options:m.map(e=>({value:e,label:S(e)})),className:"semester"}),c.a.createElement("span",{className:"credits"},v," Credits"),c.a.createElement("div",{className:"menu"},c.a.createElement(R,{onClick:C,disabled:0===l.length},c.a.createElement(T.a,{className:"icon",fixedWidth:!0,icon:_.g}),c.a.createElement("div",{className:"text"},"Download")),c.a.createElement(R,{onClick:O,disabled:0===l.length},c.a.createElement(T.a,{className:"icon",fixedWidth:!0,icon:_.e}),c.a.createElement("div",{className:"text"},"Export")),c.a.createElement(R,{text:l.join(", "),disabled:0===l.length},c.a.createElement(T.a,{className:"icon",fixedWidth:!0,icon:_.j}),c.a.createElement("div",{className:"text"},"CRNs")),c.a.createElement(R,{onClick:g},c.a.createElement(T.a,{className:"icon",fixedWidth:!0,icon:_.a}),c.a.createElement("div",{className:"text"},"Theme")),c.a.createElement(R,{href:"https://github.com/64json/gt-scheduler"},c.a.createElement(T.a,{className:"icon",fixedWidth:!0,icon:K.a}),c.a.createElement("div",{className:"text"},"GitHub"))),c.a.createElement("div",{className:"capture-container",ref:E},c.a.createElement(U,{className:"fake-calendar",capture:!0})))}a(420);function ce({className:e,color:t,name:a,sections:s,gpa:r}){const i=Object(n.useContext)(I),l=Object(o.a)(i,2),d=l[0],u=d.pinnedCrns,m=d.excludedCrns,p=l[1].patchTermData,b=Object(n.useState)(!0),h=Object(o.a)(b,2),f=h[0],E=h[1],g=Object(n.useCallback)(e=>{p({excludedCrns:m.filter(t=>t!==e.crn)})},[m,p]),v=Object(n.useCallback)(e=>{const t=e.map(e=>e.crn);p({excludedCrns:N([...m,...t]),pinnedCrns:u.filter(e=>!t.includes(e))})},[m,u,p]),O=s.some(e=>u.includes(e.crn)),j=s.filter(e=>!m.includes(e.crn)),k=s.filter(e=>m.includes(e.crn));return c.a.createElement("div",{className:C("Instructor",!f&&"divider-bottom",e)},c.a.createElement(M,{label:a||"Not Assigned",actions:[{icon:f?_.c:_.b,onClick:()=>E(!f)},!["TBA","Not Assigned"].includes(a)&&{icon:_.h,href:"http://www.ratemyprofessors.com/search.jsp?queryBy=teacherName&schoolName=Georgia+Institute+of+Technology&query=".concat(encodeURIComponent(y(a)))},{icon:_.d,onClick:()=>v(s)}],style:O?{backgroundColor:t}:void 0},c.a.createElement("div",{className:"instructor-row"},c.a.createElement("span",{className:"gpa"},"Instructor GPA: ",r||"N/A"))),f&&c.a.createElement("div",{className:C("section-container","nested")},j.map(e=>{const a=u.includes(e.crn);return c.a.createElement(re,{key:e.id,className:"divider-bottom",section:e,color:t,pinned:a})}),k.length>0&&c.a.createElement("div",{className:"excluded-section-container"},k.map(e=>c.a.createElement("span",{className:"excluded-section",key:e.id,onClick:()=>g(e)},e.id)))))}a(421);function se(e){let t=e.className,a=e.color,n=e.onSelectColor,s=Object(A.a)(e,["className","color","onSelectColor"]);return c.a.createElement("div",Object.assign({className:C("Palette",t)},s),m.map((e,t)=>c.a.createElement("div",{className:"palette-row",key:t},e.map(e=>c.a.createElement("div",{className:C("color",e===a&&"frame"),key:e,style:{backgroundColor:e},onClick:()=>n(e)})))))}a(422);function re({className:e,section:t,pinned:a,color:s}){const r=Object(n.useContext)(I),i=Object(o.a)(r,2),l=i[0],d=l.term,u=l.pinnedCrns,m=l.excludedCrns,b=i[1].patchTermData,h=Object(n.useContext)(W),f=Object(o.a)(h,2)[1],g=Object(n.useCallback)(e=>{b({excludedCrns:[...m,e.crn],pinnedCrns:u.filter(t=>t!==e.crn)})},[u,m,b]),v=Object(n.useCallback)(e=>{u.includes(e.crn)?b({pinnedCrns:u.filter(t=>t!==e.crn)}):b({pinnedCrns:[...u,e.crn],excludedCrns:m.filter(t=>t!==e.crn)})},[u,m,b]);return c.a.createElement(M,{label:t.id,className:C("Section",e),onMouseEnter:()=>f([t.crn]),onMouseLeave:()=>f([]),actions:[{icon:a?_.m:_.l,onClick:()=>v(t)},{icon:_.h,href:"https://oscar.gatech.edu/pls/bprod/bwckschd.p_disp_detail_sched?term_in=".concat(d,"&crn_in=").concat(t.crn)},{icon:_.d,onClick:()=>g(t)}],style:a?{backgroundColor:s}:void 0},c.a.createElement("div",{className:"section-details"},c.a.createElement("div",{className:"delivery-mode"},p[t.deliveryMode]),c.a.createElement("div",{className:"meeting-container"},t.meetings.map((e,t)=>c.a.createElement("div",{className:"meeting",key:t},c.a.createElement("span",{className:"days"},e.days.join("")),c.a.createElement("span",{className:"period"},E(e.period)))))))}a(423);function ie({className:e,value:t,onChange:a,options:s}){const r=Object(n.useState)(!1),i=Object(o.a)(r,2),l=i[0],d=i[1],u=s.find(e=>e.value===t),m=u?u.label:"-";return c.a.createElement("div",{className:C("Button","Select",e),onClick:()=>d(!l)},c.a.createElement("div",{className:"text"},m),c.a.createElement(T.a,{fixedWidth:!0,icon:_.f}),l&&c.a.createElement("div",{className:"intercept",onClick:()=>d(!1)}),l&&c.a.createElement("div",{className:"option-container"},s.map(({value:e,label:t})=>c.a.createElement(R,{className:"option",key:e,onClick:()=>a(e)},t))))}a(424);function oe({className:e,crn:t,overlay:a,preview:s,capture:r}){const i=Object(n.useContext)(I),l=Object(o.a)(i,1)[0],d=l.oscar,u=l.colorMap,m=d.findSection(t),p=u[m.course.id],b=v(p);return c.a.createElement("div",{className:C("TimeBlocks",r&&"capture",a&&"overlay",e)},m.meetings.map((e,t)=>e.period&&e.days.map(a=>c.a.createElement("div",{className:C("meeting",b,"default",a),key:[t,a].join("-"),style:{top:(e.period.start-480)/780*100+"%",height:(e.period.end-e.period.start)/780*100+"%",backgroundColor:p}},!s&&c.a.createElement("div",{className:"meeting-wrapper"},c.a.createElement("div",{className:"ids"},c.a.createElement("span",{className:"course-id"},m.course.id),c.a.createElement("span",{className:"section-id"},"\xa0",m.id)),c.a.createElement("span",{className:"period"},E(e.period)),c.a.createElement("span",{className:"where"},e.where),c.a.createElement("span",{className:"instructors"},e.instructors.join(", ")))))))}var le=class{constructor(e){const t=e.courses,a=e.caches,n=e.updatedAt;this.periods=a.periods.map(e=>{if("TBA"!==e)return{start:h(e.split(" - ")[0]),end:h(e.split(" - ")[1])}}),this.dateRanges=a.dateRanges.map(e=>{const t=e.split(" - ").map(e=>new Date(e)),a=Object(o.a)(t,2),n=a[0],c=a[1];return n.setHours(0),c.setHours(23,59,59,999),{from:n,to:c}}),this.scheduleTypes=a.scheduleTypes,this.campuses=a.campuses,this.attributes=a.attributes,this.gradeBases=a.gradeBases,this.updatedAt=new Date(n),this.courses=Object.keys(t).map(e=>new fe(this,e,t[e])),this.courseMap={},this.crnMap={},this.courses.forEach(e=>{this.courseMap[e.id]=e,e.sections.forEach(e=>{this.crnMap[e.crn]=e})}),this.sortingOptions=[new ge("Most Compact",e=>{const t=e.startMap,a=e.endMap;return+Object.keys(t).map(e=>a[e]-t[e]).reduce((e,t)=>e+t,0)}),new ge("Earliest Ending",e=>{const t=e.endMap,a=Object.values(t);return+(a.reduce((e,t)=>e+t,0)/a.length)}),new ge("Latest Beginning",e=>{const t=e.startMap,a=Object.values(t);return-(a.reduce((e,t)=>e+t,0)/a.length)})]}findCourse(e){return this.courseMap[e]}findSection(e){return this.crnMap[e]}getCombinations(e,t,a){const n=[],c=(s=0,r=[])=>{if(s===e.length)return void n.push(r);const i=this.findCourse(e[s]),o=e=>!a.includes(e.crn),l=e=>t.includes(e.crn),d=e=>[...t,...r].some(t=>O(this.findSection(t),e));if(i.hasLab){const e=i.onlyLectures.find(l),t=i.onlyLabs.find(l),a=i.allInOnes.find(l);e&&t||a?c(s+1,r):e?e.associatedLabs.filter(o).forEach(e=>{d(e)||c(s+1,[...r,e.crn])}):t?t.associatedLectures.filter(o).forEach(e=>{d(e)||c(s+1,[...r,e.crn])}):(i.onlyLectures.filter(o).forEach(e=>{d(e)||e.associatedLabs.filter(o).forEach(t=>{d(t)||c(s+1,[...r,e.crn,t.crn])})}),i.allInOnes.filter(o).forEach(e=>{d(e)||c(s+1,[...r,e.crn])}))}else i.sections.some(l)?c(s+1,r):Object.values(i.sectionGroups).forEach(e=>{const t=e.sections.find(o);t&&!d(t)&&c(s+1,[...r,t.crn])})};return c(),n.map(e=>{const a={},n={};return this.iterateTimeBlocks([...t,...e],(e,t)=>{(!(e in a)||a[e]>t.start)&&(a[e]=t.start),(!(e in n)||n[e]<t.end)&&(n[e]=t.end)}),{crns:e,startMap:a,endMap:n}})}sortCombinations(e,t){const a=this.sortingOptions[t];return e.map(e=>Object(i.a)(Object(i.a)({},e),{},{factor:a.calculateFactor(e)})).sort((e,t)=>e.factor-t.factor)}iterateTimeBlocks(e,t){e.forEach(e=>{this.findSection(e).meetings.forEach(e=>e.period&&e.days.forEach(a=>{t(a,e.period)}))})}},de=a(161),ue=a.n(de),me=a(276),pe=a(71),be=a(277),he=a.n(be);var fe=class{constructor(e,t,a){const n=Object(o.a)(a,2),c=n[0],s=n[1];this.id=t;var r=this.id.split(" "),i=Object(o.a)(r,2);this.subject=i[0],this.number=i[1],this.title=c,this.sections=Object.keys(s).map(t=>new Ee(e,this,t,s[t]));const l=this.sections.filter(e=>w(e)&&!k(e)),d=this.sections.filter(e=>k(e)&&!w(e));if(this.hasLab=l.length&&d.length,this.hasLab){var u,m=Object(pe.a)(l);try{for(m.s();!(u=m.n()).done;){const e=u.value;e.associatedLabs=d.filter(t=>t.id.startsWith(e.id))}}catch(v){m.e(v)}finally{m.f()}var p,b=Object(pe.a)(d);try{for(b.s();!(p=b.n()).done;){const e=p.value;e.associatedLectures=l.filter(t=>e.id.startsWith(t.id))}}catch(v){b.e(v)}finally{b.f()}const e=l.filter(e=>!e.associatedLabs.length),t=d.filter(e=>!e.associatedLectures.length);var h,f=Object(pe.a)(e);try{for(f.s();!(h=f.n()).done;){const e=h.value;e.associatedLabs=t.filter(t=>!O(e,t))}}catch(v){f.e(v)}finally{f.f()}var E,g=Object(pe.a)(t);try{for(g.s();!(E=g.n()).done;){const t=E.value;t.associatedLectures=e.filter(e=>!O(e,t))}}catch(v){g.e(v)}finally{g.f()}this.onlyLectures=l,this.onlyLabs=d,this.allInOnes=this.sections.filter(e=>w(e)&&k(e))}else this.sectionGroups=this.distinct(this.sections)}distinct(e){let t={};return e.forEach(e=>{const a=e.meetings.map(({days:e,period:t})=>({days:e,period:t})),n=JSON.stringify(a),c=t[n];c?c.sections.push(e):t[n]={hash:n,meetings:a,sections:[e]}}),t}fetchGpa(){var e=this;return Object(me.a)(ue.a.mark((function t(){var a;return ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://critique.gatech.edu/course.php?id=".concat(encodeURIComponent(e.id)),t.next=3,d()({url:"https://cors-anywhere.herokuapp.com/".concat(a),method:"get",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"text/html"}}).then(e=>{const t=he.a.load(e.data),a={averageGpa:Number(t("div.center-table > table.table > tbody > tr :nth-child(2)").text())};return t("table#dataTable > tbody > tr").each((e,n)=>{const c=t(n).find("td:nth-child(1)").text().split(", "),s=Object(o.a)(c,2),r=s[0],i=s[1],l="".concat(i," ").concat(r);a[l]=Number(t(n).find("td:nth-child(3)").text())}),a});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()}};var Ee=class{constructor(e,t,a,n){const c=Object(o.a)(n,7),s=c[0],r=c[1],i=c[2],l=c[3],d=c[4],u=c[5],m=c[6];this.course=t,this.id=a,this.crn=s,this.credits=i,this.scheduleType=e.scheduleTypes[l],this.campus=e.campuses[d];const b=u.map(t=>e.attributes[t]);this.deliveryMode=b.find(e=>e in p),this.gradeBasis=e.gradeBases[m],this.meetings=r.map(([t,a,n,c,s])=>({period:e.periods[t],days:"&nbsp;"===a?[]:[...a],where:n,instructors:c.map(e=>e.replace(/ \(P\)$/,"")),dateRange:e.dateRanges[s]})),this.instructors=N(this.meetings.reduce((e,t)=>[...e,...t.instructors],[]))}};var ge=class{constructor(e,t){this.label=e,this.calculateFactor=t}};a(621);function ve(e,t){const a=Object(n.useState)(t),c=Object(o.a)(a,2),s=c[0],r=c[1],i=Object(n.useCallback)(t=>{r(t),$.a.set(e,t,{expires:1460})},[e,r]);return Object(n.useEffect)(()=>{let a;void 0!==e&&(a=$.a.get(e)),r(void 0===a?t:a)},[e,t]),[s,i]}const Oe={desiredCourses:[],pinnedCrns:[],excludedCrns:[],colorMap:{},sortingOptionIndex:0};function Ce(e){const t=ve("theme","dark"),a=Object(o.a)(t,2),s=a[0],r=a[1],l=ve("term"),u=Object(o.a)(l,2),m=u[0],p=u[1],b=function(e,t){const a=ve(e),c=Object(o.a)(a,2),s=c[0],r=c[1],l=Object(n.useMemo)(()=>{if(void 0!==s){const e=JSON.parse(s);return Object(i.a)(Object(i.a)({},t),e)}return t},[s,t]),d=Object(n.useCallback)(e=>{const t=JSON.stringify(Object(i.a)(Object(i.a)({},l),e));r(t)},[l,r]);return[l,d]}(m,Oe),h=Object(o.a)(b,2),f=h[0],E=h[1],g=Object(n.useState)([]),v=Object(o.a)(g,2),O=v[0],y=v[1],N=Object(n.useState)(null),k=Object(o.a)(N,2),w=k[0],S=k[1],x=Object(n.useState)(0),A=Object(o.a)(x,2),T=A[0],M=A[1],D=Object(n.useState)(j()),L=Object(o.a)(D,2),G=L[0],_=L[1],P=Object(n.useState)([]),Y=Object(o.a)(P,2),V=Y[0],q=Y[1],J=Object(n.useMemo)(()=>[s,r],[s,r]),K=Object(n.useMemo)(()=>[O,y],[O,y]),X=Object(n.useMemo)(()=>[Object(i.a)({term:m,oscar:w},f),{setTerm:p,setOscar:S,patchTermData:E}],[m,w,f,p,S,E]),$=Object(n.useMemo)(()=>[V,q],[V,q]);Object(n.useEffect)(()=>{S(null),m&&d.a.get("https://jasonpark.me/gt-schedule-crawler/".concat(m,".json")).then(e=>{const t=new le(e.data);S(t)})},[m]),Object(n.useEffect)(()=>{d.a.get("https://api.github.com/repos/64json/gt-schedule-crawler/contents?ref=gh-pages").then(e=>{const t=e.data.map(e=>e.name).filter(e=>/\d{6}\.json/.test(e)).map(e=>e.replace(/\.json$/,"")).sort().reverse();y(t)})},[y]),Object(n.useEffect)(()=>{if(!m){const e=Object(o.a)(O,1)[0];p(e)}},[O,m,p]),Object(n.useEffect)(()=>{const e=e=>{const t=j();G!==t&&_(t)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[G]);const Z=C("App",G&&"mobile",s);return w?c.a.createElement(F.Provider,{value:J},c.a.createElement(B.Provider,{value:K},c.a.createElement(I.Provider,{value:X},c.a.createElement(W.Provider,{value:$},c.a.createElement("div",{className:Z},c.a.createElement(ne,null),G&&c.a.createElement("div",{className:"tab-container"},["Courses","Combinations","Calendar"].map((e,t)=>c.a.createElement(R,{key:e,className:C("tab",T===t&&"active"),onClick:()=>M(t)},e))),c.a.createElement("div",{className:"main"},(!G||0===T)&&c.a.createElement(z,null),(!G||1===T)&&c.a.createElement(H,null),(!G||2===T)&&c.a.createElement("div",{className:"calendar-container"},c.a.createElement(U,{className:"calendar",overlayCrns:V})))))))):c.a.createElement("div",{className:Z})}a(622),a(623);r.a.render(c.a.createElement(Ce,null),document.getElementById("root"))}},[[278,1,2]]]);
//# sourceMappingURL=main.f113183a.chunk.js.map