(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n.n(c),a=n(2),s=n(3),i=n(5),r=n(4),l=n(1),u=(n(12),n(0)),m=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={date:new Date},e.timer=0,e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timer=window.setInterval((function(){var t=new Date;e.setState({date:t}),console.info(t.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=e.clockName,n=this.props.clockName;t!==n&&console.debug("Renamed from ".concat(t," to ").concat(n))}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timer)}},{key:"render",value:function(){var e=this.props.clockName,t=this.state.date;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:t.toLocaleTimeString()})]})}}]),n}(l.Component);function d(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var v=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={clockName:"Clock-0",isClock:!0},e.timerId=0,e.pressedRightMouse=function(t){t.preventDefault(),e.setState({isClock:!1})},e.pressedLeftmouse=function(){e.setState({isClock:!0})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("contextmenu",this.pressedRightMouse),document.addEventListener("click",this.pressedLeftmouse),this.timerId=window.setInterval((function(){e.setState({clockName:d()})}),3300)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.pressedRightMouse),document.removeEventListener("click",this.pressedLeftmouse),window.clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state.clockName,t=this.state.isClock;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),t&&Object(u.jsx)(m,{clockName:e})]})}}]),n}(l.Component);o.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e3a7eef9.chunk.js.map