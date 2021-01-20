(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{197:function(e,t,n){},198:function(e,t,n){},346:function(e,t,n){},347:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(0),o=n.n(r),s=n(52),c=n.n(s),i=(n(197),n(21)),u=n(28),l=n(23),h=n(22),d=(n(198),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={event:{},showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.showDetails,t=this.props.event;return Object(a.jsxs)("div",{className:"event",children:[Object(a.jsxs)("div",{className:"event-container",children:[Object(a.jsx)("h2",{className:"event-title",children:t.summary}),Object(a.jsx)("p",{className:"event-location",children:t.location}),Object(a.jsx)("p",{className:"event-date",children:t.start.dateTime}),!e&&Object(a.jsx)("button",{className:"details-button",onClick:this.handleShowDetails,children:"Show Details"}),e&&Object(a.jsx)("button",{className:"details-button",onClick:this.handleShowDetails,children:"Hide Details"})]}),e&&Object(a.jsx)("div",{className:"event-details",id:"eventDetails",children:Object(a.jsx)("p",{className:"description",children:t.description})})]})}}]),n}(r.Component)),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(a.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(d,{event:e})},e.id)}))})}}]),n}(r.Component),v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Alert",children:Object(a.jsx)("p",{className:"alert-text",style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(v),m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(v),b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="orange",a}return n}(v),j=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"CitySearchAndAlert",children:[Object(a.jsx)(p,{text:this.state.infoText}),Object(a.jsxs)("div",{className:"CitySearch",children:[Object(a.jsx)("input",{type:"text",placeholder:"Search city",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(a.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(a.jsx)("b",{children:"See all cities"})})]})]})]})}}]),n}(r.Component),g=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.handleInputChanged=function(t){var n=t.target.value;e.props.updateEvents(null,n),e.setState({numberOfEvents:n}),n<1||n>32?e.setState({infoText:"Please choose a number of events between 1 and 32"}):e.setState({infoText:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"numberOfEventsandAlert",children:[Object(a.jsx)(m,{text:this.state.infoText}),Object(a.jsx)("div",{className:"number-of-events",children:Object(a.jsx)("input",{type:"number",className:"event-number-input",value:this.state.numberOfEvents,onChange:this.handleInputChanged})})]})}}]),n}(r.Component),w=n(27),O=n(354),x=n(355),y=n(176),k=n(91),S=function(e){var t=e.events,n=Object(r.useState)([]),o=Object(w.a)(n,2),s=o[0],c=o[1];Object(r.useEffect)((function(){c((function(){return i()}))}),[t]);var i=function(e){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))},u=["#8886d5","#85a7ea","#8fd1e0","#84c99e","#a5dc72"];return Object(a.jsx)(O.a,{height:400,children:Object(a.jsx)(x.a,{height:400,children:Object(a.jsx)(y.a,{data:s,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:s.map((function(e,t){return Object(a.jsx)(k.a,{fill:u[t]},"cell-".concat(t))}))})})})},T=n(31),C=n.n(T),N=n(74),E=n(118),Z=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}}],A=n(117),D=n.n(A),W=n(75),I=n.n(W),J=function(e){var t=e.map((function(e){return e.location}));return Object(E.a)(new Set(t))},L=function(){var e=Object(N.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(N.a)(C.a.mark((function e(){var t,n,a,r,o;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I.a.start(),navigator.onLine||window.location.href.startsWith("http://localhost")){e.next=5;break}return t=localStorage.getItem("lastEvents"),I.a.done(),e.abrupt("return",JSON.parse(t).events);case 5:if(!window.location.href.startsWith("http://localhost")){e.next=8;break}return I.a.done(),e.abrupt("return",Z);case 8:return e.next=10,R();case 10:if(!(n=e.sent)){e.next=20;break}return q(),a="https://j0uvphcgcg.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,D.a.get(a);case 16:return(r=e.sent).data&&(o=J(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),I.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(N.a)(C.a.mark((function e(){var t,n,a,r,o,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,L(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,D.a.get("https://j0uvphcgcg.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&U(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},U=function(){var e=Object(N.a)(C.a.mark((function e(t){var n,a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://j0uvphcgcg.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=(n(346),n(351)),z=n(352),H=n(181),F=n(182),_=n(97),P=n(185),Y=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,currentLocation:"all",alertText:""},e.updateEvents=function(t,n){navigator.onLine?e.setState({alertText:""}):e.setState({alertText:"It seems you've lost connection! Please reconnect to see an updated list of events."});var a=e.state,r=a.currentLocation,o=a.numberOfEvents;t?M().then((function(n){var a=("all"===t?n:n.filter((function(e){return e.location===t}))).slice(0,o);e.setState({events:a,currentLocation:t})})):M().then((function(t){var a=("all"===r?t:t.filter((function(e){return e.location===r}))).slice(0,n);e.setState({events:a,numberOfEvents:n})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(" ").shift(),number:t}}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,M().then((function(t){e.mounted&&e.setState({events:t,locations:J(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Meet App"}),Object(a.jsx)("h4",{children:"Choose your nearest city:"}),Object(a.jsx)(j,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(a.jsx)("h4",{children:"Number of events (max. 32):"}),Object(a.jsx)(g,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"data-vis-wrapper",children:[Object(a.jsx)(S,{events:this.state.events}),Object(a.jsx)(O.a,{height:400,children:Object(a.jsxs)(B.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(a.jsx)(z.a,{}),Object(a.jsx)(H.a,{type:"category",dataKey:"city",name:"city"}),Object(a.jsx)(F.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(a.jsx)(_.a,{cursor:{strokeDasharray:"3 3"}}),Object(a.jsx)(P.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(a.jsx)(b,{text:this.state.alertText}),Object(a.jsx)(f,{events:this.state.events})]})}}]),n}(r.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var V=n(183);c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(Y,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(t,e)}))}}(),V.config("f86fc2e5e5cb4dadb06d7486c677ef51").install()}},[[347,1,2]]]);
//# sourceMappingURL=main.1ad5f7f2.chunk.js.map