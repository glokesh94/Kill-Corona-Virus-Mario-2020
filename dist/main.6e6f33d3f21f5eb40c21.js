webpackJsonp([1],{"0EcA":function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),s=r("GiK3"),u=o(s),c=r("KSGD"),f=o(c),p=function(e){function t(e){n(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.boardDetails=r.props.boardDetails,r.mushrooms=r.props.mushrooms,r.startTime=(new Date).getTime(),r.steps=0,r.shiftDirection=function(e){r.intervalId&&clearInterval(r.intervalId),r.intervalId=setInterval(function(){switch(e){case 37:r.setState({top:r.state.top,left:r.state.left-1}),r.checkDirection(e);break;case 38:r.setState({top:r.state.top-1,left:r.state.left}),r.checkDirection(e);break;case 39:r.setState({top:r.state.top,left:r.state.left+1}),r.checkDirection(e);break;case 40:r.setState({top:r.state.top+1,left:r.state.left}),r.checkDirection(e);break;default:return}},50);var t=r.props.mushrooms.find(function(e){return e.x===r.state.left&&e.y===r.state.top&&e.remaining});t&&r.props.eatMushroom(t,r.startTime,r.steps)},r.checkDirection=function(e){e.keyCode&&(r.steps+=1);var t=e.keyCode||e,o=r.state,n=o.left,a=o.top,i=r.boardDetails.verticalBlocks-1;n>r.boardDetails.horizontalBlocks-1-1&&39===t?r.shiftDirection(37):a>i-1&&40===t?r.shiftDirection(38):a<1&&38===t?r.shiftDirection(40):n<1&&37===t?r.shiftDirection(39):r.shiftDirection(t)},r.state={top:0,left:0},r}return i(t,e),l(t,[{key:"componentDidMount",value:function(){window.onkeydown=this.checkDirection}},{key:"componentWillUnmount",value:function(){this.intervalId&&clearInterval(this.intervalId)}},{key:"render",value:function(){var e={height:this.boardDetails.blockHeight+"px",width:this.boardDetails.blockWidth+"px",marginTop:this.state.top*this.boardDetails.blockHeight+"px",marginLeft:this.state.left*this.boardDetails.blockWidth+"px"};return u.default.createElement("div",null,u.default.createElement("div",{className:"entity player",style:e}))}}]),t}(s.Component);p.propTypes={boardDetails:f.default.object.isRequired,mushrooms:f.default.array.isRequired,eatMushroom:f.default.func.isRequired},t.default=p},"7BGO":function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),u=r("GiK3"),c=o(u),f=r("CIox"),p=r("KSGD"),d=o(p),h=r("0EcA"),b=o(h),m=r("Mk2L"),y=o(m),k=function(e){function t(e){a(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.totalMushrooms=Math.round((r.props.horizontalBlocks+r.props.verticalBlocks)/2),r.eatMushroom=function(e,t,o){var a=[].concat(n(r.state.mushrooms));a[e.key].remaining=!1,r.setState({mushrooms:a,score:r.state.score+1}),r.totalMushrooms===r.state.score&&(r.props.setTotalTime(t,o),r.props.history.push("/score"))},r.state={blockWidth:30,blockHeight:30,mushrooms:[],score:0},r.props.horizontalBlocks||r.props.verticalBlocks||r.props.history.push("/");for(var o=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},l=r.props.horizontalBlocks,s=r.props.verticalBlocks,u=0;u<r.totalMushrooms;u++)r.state.mushrooms.push({key:u,x:o(0,l-1),y:o(0,s-1),remaining:!0});return r}return l(t,e),s(t,[{key:"render",value:function(){var e=this,t={width:this.props.horizontalBlocks*this.state.blockWidth+"px",height:this.props.verticalBlocks*this.state.blockHeight+"px"};return c.default.createElement("div",null,c.default.createElement("h2",{className:"funky"},"🙂 Kill-Corona-Virus-Mario 🙂 Develop by ",c.default.createElement("a",{class:"navbar-brand",href:"https://www.linkedin.com/in/me-gupta-lokesh/",target:"_blank"},"Lokesh")," 🙂 "),c.default.createElement("p",null,"Score: ",this.state.score," / ",this.totalMushrooms),c.default.createElement("p",null,"Start with any of the arrow keys"),c.default.createElement("div",{className:"board",style:t},c.default.createElement(b.default,{boardDetails:{blockWidth:this.state.blockWidth,blockHeight:this.state.blockHeight,horizontalBlocks:this.props.horizontalBlocks,verticalBlocks:this.props.verticalBlocks},mushrooms:this.state.mushrooms,eatMushroom:this.eatMushroom}),this.state.mushrooms.filter(function(e){return e.remaining}).map(function(t){return c.default.createElement(y.default,{key:t.key,x:t.x,y:t.y,blockWidth:e.state.blockWidth,blockHeight:e.state.blockHeight})})))}}]),t}(u.Component);k.propTypes={horizontalBlocks:d.default.number.isRequired,verticalBlocks:d.default.number.isRequired,setTotalTime:d.default.func.isRequired,history:d.default.any.isRequired},t.default=(0,f.withRouter)(k)},Mk2L:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),s=r("GiK3"),u=o(s),c=r("KSGD"),f=o(c),p=function(e){function t(e){n(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={x:r.props.x,y:r.props.y,blockWidth:r.props.blockWidth,blockHeight:r.props.blockHeight},r}return i(t,e),l(t,[{key:"render",value:function(){var e={width:this.state.blockWidth+"px",height:this.state.blockHeight+"px",marginLeft:this.state.x*this.state.blockWidth+"px",marginTop:this.state.y*this.state.blockHeight+"px"};return u.default.createElement("div",null,u.default.createElement("div",{className:"entity mushroom",style:e}))}}]),t}(s.Component);p.propTypes={x:f.default.number.isRequired,y:f.default.number.isRequired,blockWidth:f.default.number.isRequired,blockHeight:f.default.number.isRequired},t.default=p},"XgI/":function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,'body{text-align:center;background-color:#fff;font-family:Nunito,sans-serif}h1{font-size:130px;font-color:white}h2{color:#711c09}.navbar-brand{color:#711c09;text-decoration:none}.notesContent,.notesOtherContent{color:red;font-size:30px}.flat{width:285px;font-size:30px;font-family:inherit;text-align:center;border:1px solid #bdc3c7;outline:none;border-radius:5px;padding:5px;margin:10px}.btn{text-decoration:none;color:#fff;background-color:#2ecc71}.btn:hover{color:#fff;background-color:#58d68d;border-color:#58d68d}.btn:disabled{background-color:#bdc3c7;border-color:#bdc3c7;color:hsla(0,0%,100%,.75)}.btn:active{background:#27ad60;border-color:#27ad60}.board{background:#fff;border:10px solid grey;border-radius:20px;top:30px;bottom:0;left:0;right:0;margin:auto}.board,.entity{position:absolute}.entity{background-repeat:no-repeat;background-size:contain;background-position:50%;border-radius:10px}.player{z-index:1;transition:all .06s ease 0s;background-image:url("/mario.png")}.mushroom{background-image:url("/mushroom.png")}',""])},"Yq+E":function(e,t,r){var o=r("XgI/");"string"==typeof o&&(o=[[e.i,o,""]]);var n={hmr:!0};n.transform=void 0;r("MTIv")(o,n);o.locals&&(e.exports=o.locals)},ewcn:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),u=r("GiK3"),c=o(u),f=r("F8kA"),p=r("ziJz"),d=o(p),h=r("7BGO"),b=o(h),m=r("ukzJ"),y=o(m),k=function(e){function t(e){n(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.setBlocks=function(e,t){r.setState({horizontalBlocks:e,verticalBlocks:t})},r.setTotalTime=function(e,t){var o=(new Date).getTime()-e;r.setState({totalTime:o,steps:t})},r.renderHome=function(){return c.default.createElement(d.default,l({setBlocks:r.setBlocks},r.state))},r.renderBoard=function(){return c.default.createElement(b.default,l({setTotalTime:r.setTotalTime},r.state))},r.renderScore=function(){return c.default.createElement(y.default,r.state)},r.state={horizontalBlocks:0,verticalBlocks:0,totalTime:0,steps:0},r}return i(t,e),s(t,[{key:"render",value:function(){return c.default.createElement(f.BrowserRouter,null,c.default.createElement("div",null,c.default.createElement(f.Route,{path:"/",render:this.renderHome,exact:!0}),c.default.createElement(f.Route,{path:"/board",render:this.renderBoard}),c.default.createElement(f.Route,{path:"/score",render:this.renderScore})))}}]),t}(u.Component);t.default=k},qYAe:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var n=r("GiK3"),a=o(n),i=r("O27J"),l=r("ewcn"),s=o(l);r("Yq+E"),(0,i.render)(a.default.createElement(s.default,null),document.getElementById("root"))},ukzJ:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),s=r("GiK3"),u=o(s),c=r("F8kA"),f=r("CIox"),p=r("KSGD"),d=o(p),h=function(e){function t(e){n(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.props.totalTime||r.props.history.push("/"),r}return i(t,e),l(t,[{key:"render",value:function(){var e=Math.floor(this.props.totalTime%36e5/6e4),t=Math.floor(this.props.totalTime%6e4/1e3);return u.default.createElement("div",{className:"funky"},u.default.createElement("h2",{className:"funky"},"🙂 Kill-Corona-Virus-Mario 🙂 Develop by ",u.default.createElement("a",{class:"navbar-brand",href:"https://www.linkedin.com/in/me-gupta-lokesh/",target:"_blank"},"Lokesh")," 🙂 "),u.default.createElement("h2",null,u.default.createElement("p",null,e?e+" minute(s), ":"",t||0," second(s)"),u.default.createElement("p",null,this.props.steps||0," Steps taken")),u.default.createElement("br",null),u.default.createElement(c.Link,{className:"btn flat",to:"/board"},"Restart"),u.default.createElement(c.Link,{className:"btn flat",to:"/"},"Home"))}}]),t}(s.Component);h.propTypes={totalTime:d.default.number.isRequired,steps:d.default.number.isRequired,history:d.default.any.isRequired},t.default=(0,f.withRouter)(h)},ziJz:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),s=r("GiK3"),u=o(s),c=r("CIox"),f=r("KSGD"),p=o(f),d=function(e){function t(e){n(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.play=function(){r.props.setBlocks(parseInt(r.state.width,10),parseInt(r.state.height,10)),r.props.history.push("/board")},r.handleChangeWidth=function(e){r.setState({width:e.target.value},function(){r.areValuesValid()})},r.handleChangeHeight=function(e){r.setState({height:e.target.value},function(){r.areValuesValid()})},r.state={width:void 0,height:void 0,isValid:!1},r}return i(t,e),l(t,[{key:"areValuesValid",value:function(){this.setState({isValid:this.state.width>0&&this.state.height>0&&this.state.width<=20&&this.state.height<=10})}},{key:"render",value:function(){return u.default.createElement("div",{className:"coronaVirus"},u.default.createElement("h2",{className:"funky"},"🙂 Kill-Corona-Virus-Mario 🙂 Develop by ",u.default.createElement("a",{class:"navbar-brand",href:"https://www.linkedin.com/in/me-gupta-lokesh/",target:"_blank"},"Lokesh")," 🙂 "),u.default.createElement("p",{className:"notesOtherContent"},"Kill Your Lockdown Time"),u.default.createElement("div",{class:"Player"}),u.default.createElement("p",{className:"notesContent"},"Enter dimensions Width: 1-20 & Height: 1-10"),u.default.createElement("input",{type:"number",min:"1",max:"20",className:"flat",onChange:this.handleChangeWidth,placeholder:"Width 1 - 20"}),u.default.createElement("input",{type:"number",min:"1",max:"10",className:"flat",onChange:this.handleChangeHeight,placeholder:"Height 1 - 10"}),u.default.createElement("br",null),u.default.createElement("button",{className:"btn flat funky",onClick:this.play,disabled:!this.state.isValid},"Play"))}}]),t}(s.Component);d.propTypes={setBlocks:p.default.func.isRequired,history:p.default.any.isRequired},t.default=(0,c.withRouter)(d)}},["qYAe"]);