(this.webpackJsonpsimplict=this.webpackJsonpsimplict||[]).push([[0],{166:function(e,t,s){},167:function(e,t,s){},169:function(e,t,s){},170:function(e,t,s){},171:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s(0),i=s.n(r),c=s(26),n=s.n(c),o=(s(66),s(67),s(11)),h=s(12),d=s(3),l=s(14),b=s(13),u=s(175),j=s(176),f=s(56),m=s(18),k=(s(166),function(e){Object(l.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={record:[],ao5:0,ao12:0,ao50:0,best:0,worst:0,session_average:0,session_mean:0,full_record:[],x_axis:[],width:window.innerWidth},e.avg_of_5=e.avg_of_5.bind(Object(d.a)(e)),e.avg_of_12=e.avg_of_12.bind(Object(d.a)(e)),e.avg_of_50=e.avg_of_50.bind(Object(d.a)(e)),e.stringToInt=e.stringToInt.bind(Object(d.a)(e)),e.clearRecord=e.clearRecord.bind(Object(d.a)(e)),e.getBest=e.getBest.bind(Object(d.a)(e)),e.getWorst=e.getWorst.bind(Object(d.a)(e)),e.getSessionAvg=e.getSessionAvg.bind(Object(d.a)(e)),e.deleteLastSolve=e.deleteLastSolve.bind(Object(d.a)(e)),e.generateX=e.generateX.bind(Object(d.a)(e)),e.handleWindowSizeChange=e.handleWindowSizeChange.bind(Object(d.a)(e)),e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("spacebar",this.handleSpace,!0),window.addEventListener("resize",this.handleWindowSizeChange),setInterval((function(){return e.setState({ao5:e.avg_of_5(),ao12:e.avg_of_12(),ao50:e.avg_of_50(),best:e.getBest(),worst:e.getWorst(),session_average:e.getSessionAvg(),session_mean:e.getSessionMean(),x_axis:e.generateX(),width:window.innerWidth})}),500)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("spacebar",this.handleSpace,!0),window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"handleWindowSizeChange",value:function(){this.setState({width:window.innerWidth})}},{key:"stringToInt",value:function(e){return e.map(Number)}},{key:"generateX",value:function(){for(var e=[],t=1;t<=this.props.record.length;t++)e=e.concat(t);return e}},{key:"getBest",value:function(){var e=[];return(e=e.concat(this.props.record)).sort((function(e,t){return e-t})),e.shift()}},{key:"getWorst",value:function(){var e=[];return(e=e.concat(this.props.record)).sort((function(e,t){return e-t})),e.pop()}},{key:"avg_of_5",value:function(){if(this.props.record.length>=5){for(var e=this.props.record.length-1,t=[],s=e;e-s<5;s--)t=t.concat(this.props.record[s]);this.setState({record:t}),this.state.record.sort((function(e,t){return e-t})),this.state.record.shift(),this.state.record.pop(),this.setState({ao5:(this.stringToInt(this.state.record).reduce((function(e,t){return e+t}),0)/3).toFixed(2)})}else this.setState({ao5:""});return this.state.ao5}},{key:"avg_of_12",value:function(){if(this.props.record.length>=12){for(var e=this.props.record.length-1,t=[],s=e;e-s<12;s--)t=t.concat(this.props.record[s]);this.setState({record:t}),this.state.record.sort((function(e,t){return e-t})),this.state.record.shift(),this.state.record.pop(),this.setState({ao12:(this.stringToInt(this.state.record).reduce((function(e,t){return e+t}),0)/10).toFixed(2)})}else this.setState({ao12:""});return this.state.ao12}},{key:"avg_of_50",value:function(){if(this.props.record.length>=50){for(var e=this.props.record.length-1,t=[],s=e;e-s<50;s--)t=t.concat(this.props.record[s]);this.setState({record:t}),this.state.record.sort((function(e,t){return e-t})),this.state.record.shift(),this.state.record.pop(),this.setState({ao50:(this.stringToInt(this.state.record).reduce((function(e,t){return e+t}),0)/48).toFixed(2)})}else this.setState({ao50:""});return this.state.ao50}},{key:"getSessionAvg",value:function(){var e=[];return this.props.record.length>=3?((e=e=e.concat(this.props.record)).sort((function(e,t){return e-t})),e.shift(),e.pop(),this.setState({session_average:(this.stringToInt(e).reduce((function(e,t){return e+t}),0)/(this.props.record.length-2)).toFixed(2)})):this.setState({session_average:""}),this.state.session_average}},{key:"getSessionMean",value:function(){var e=[];return this.props.record.length>0?((e=e=e.concat(this.props.record)).sort((function(e,t){return e-t})),this.setState({session_mean:(this.stringToInt(e).reduce((function(e,t){return e+t}),0)/this.props.record.length).toFixed(2)})):this.setState({session_mean:""}),this.state.session_mean}},{key:"clearRecord",value:function(){this.props.clearRecord(),this.setState({ao5:"",ao12:"",ao50:"",best:"",worst:"",record:""})}},{key:"deleteLastSolve",value:function(){this.props.record.pop()}},{key:"render",value:function(){var e={labels:this.state.x_axis,datasets:[{label:"Solve Times",fill:!1,lineTension:.5,backgroundColor:"#FFFFFF",borderColor:"#939393",borderWidth:1,data:this.props.record}]},t=this.state.width,s=t<=768&&t>480,r=t>768&&t<1400;return t<=480?Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsxs)("div",{id:"avg-container",children:[Object(a.jsxs)("p",{id:"avg-text",children:[" ao5: ",this.state.ao5," "]}),Object(a.jsxs)("p",{id:"avg-text",children:[" ao12: ",this.state.ao12]}),Object(a.jsxs)("p",{id:"avg-text",children:[" ao50: ",this.state.ao50," "]})]}),Object(a.jsxs)(u.a,{id:"dashboard",children:[Object(a.jsxs)(j.a,{md:6,xs:12,id:"s_section",children:[Object(a.jsx)("p",{children:" Statistics "}),Object(a.jsxs)(u.a,{children:[Object(a.jsx)(j.a,{xs:6,id:"recorded_times",children:this.props.record}),Object(a.jsxs)(j.a,{xs:6,id:"main_stats",children:[Object(a.jsxs)("p",{children:[" Session Best: ",this.state.best," "]}),Object(a.jsxs)("p",{children:[" Session Worst: ",this.state.worst," "]}),Object(a.jsxs)("p",{children:[" Session Average:  ",this.state.session_average]}),Object(a.jsxs)("p",{children:[" Session Mean: ",this.state.session_mean," "]}),Object(a.jsx)(f.a,{variant:"outline-dark",id:"reset-button",onClick:this.deleteLastSolve,children:" X "}),Object(a.jsx)(f.a,{variant:"outline-dark",id:"reset-button",onClick:this.clearRecord,children:" Reset All "})]})]})]}),Object(a.jsxs)(j.a,{md:6,xs:12,id:"chart_section",children:[Object(a.jsx)("p",{children:" Performance Data "}),Object(a.jsx)(m.Line,{data:e,width:2,height:1,options:{maintainAspectRatio:!0,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})]})]}):s?Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsxs)("div",{id:"avg-container",children:[Object(a.jsxs)("p",{id:"avg-text",children:[" ao5: ",this.state.ao5," "]}),Object(a.jsxs)("p",{id:"avg-text",children:[" ao12: ",this.state.ao12]}),Object(a.jsxs)("p",{id:"avg-text",children:[" ao50: ",this.state.ao50," "]})]}),Object(a.jsxs)(u.a,{id:"dashboard",children:[Object(a.jsxs)(j.a,{md:6,xs:12,id:"s_section",children:[Object(a.jsx)("p",{children:" Statistics "}),Object(a.jsxs)(u.a,{children:[Object(a.jsx)(j.a,{md:8,xs:6,id:"recorded_times",children:this.props.record}),Object(a.jsxs)(j.a,{md:4,xs:6,id:"main_stats",children:[Object(a.jsxs)("p",{children:[" Session Best: ",this.state.best," "]}),Object(a.jsxs)("p",{children:[" Session Worst: ",this.state.worst," "]}),Object(a.jsxs)("p",{children:[" Session Average:  ",this.state.session_average]}),Object(a.jsxs)("p",{children:[" Session Mean: ",this.state.session_mean," "]}),Object(a.jsx)(f.a,{variant:"outline-dark",id:"reset-button",onClick:this.deleteLastSolve,children:" X "}),Object(a.jsx)(f.a,{variant:"outline-dark",id:"reset-button",onClick:this.clearRecord,children:" Reset All "})]})]})]}),Object(a.jsxs)(j.a,{md:6,xs:12,id:"chart_section",children:[Object(a.jsx)("p",{children:" Performance Data "}),Object(a.jsx)(m.Line,{data:e,width:4,height:2,options:{maintainAspectRatio:!0,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})]})]}):r?Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsxs)("div",{id:"avg-container",children:[Object(a.jsxs)("p",{id:"avg-text",children:[" ao5: ",this.state.ao5," "]}),Object(a.jsxs)("p",{id:"avg-text",children:[" ao12: ",this.state.ao12]}),Object(a.jsxs)("p",{id:"avg-text",children:[" ao50: ",this.state.ao50," "]})]}),Object(a.jsxs)(u.a,{id:"dashboard",children:[Object(a.jsxs)(j.a,{md:6,xs:12,id:"s_section",children:[Object(a.jsx)("p",{children:" Statistics "}),Object(a.jsxs)(u.a,{children:[Object(a.jsx)(j.a,{md:8,xs:6,id:"recorded_times",children:this.props.record}),Object(a.jsxs)(j.a,{md:4,xs:6,id:"main_stats",children:[Object(a.jsxs)("p",{children:[" Session Best: ",this.state.best," "]}),Object(a.jsxs)("p",{children:[" Session Worst: ",this.state.worst," "]}),Object(a.jsxs)("p",{children:[" Session Average:  ",this.state.session_average]}),Object(a.jsxs)("p",{children:[" Session Mean: ",this.state.session_mean," "]}),Object(a.jsx)(f.a,{variant:"outline-dark",id:"reset-button",onClick:this.deleteLastSolve,children:" X "}),Object(a.jsx)(f.a,{variant:"outline-dark",id:"reset-button",onClick:this.clearRecord,children:" Reset All "})]})]})]}),Object(a.jsxs)(j.a,{md:6,xs:12,id:"chart_section",children:[Object(a.jsx)("p",{children:" Performance Data "}),Object(a.jsx)(m.Line,{data:e,width:3,height:1,options:{maintainAspectRatio:!0,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})]})]}):Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsxs)("div",{id:"avg-container",children:[Object(a.jsxs)("p",{id:"avg-text",children:[" ao5: ",this.state.ao5," "]}),Object(a.jsxs)("p",{id:"avg-text",children:[" ao12: ",this.state.ao12]}),Object(a.jsxs)("p",{id:"avg-text",children:[" ao50: ",this.state.ao50," "]})]}),Object(a.jsxs)(u.a,{id:"dashboard",children:[Object(a.jsxs)(j.a,{md:6,xs:12,id:"s_section",children:[Object(a.jsx)("p",{children:" Statistics "}),Object(a.jsxs)(u.a,{children:[Object(a.jsx)(j.a,{md:8,id:"recorded_times",children:this.props.record}),Object(a.jsxs)(j.a,{md:4,id:"main_stats",children:[Object(a.jsxs)("p",{children:[" Session Best: ",this.state.best," "]}),Object(a.jsxs)("p",{children:[" Session Worst: ",this.state.worst," "]}),Object(a.jsxs)("p",{children:[" Session Average:  ",this.state.session_average]}),Object(a.jsxs)("p",{children:[" Session Mean: ",this.state.session_mean," "]}),Object(a.jsx)(f.a,{variant:"outline-dark",id:"reset-button",onClick:this.deleteLastSolve,children:" X "}),Object(a.jsx)(f.a,{variant:"outline-dark",id:"reset-button",onClick:this.clearRecord,children:" Reset All "})]})]})]}),Object(a.jsxs)(j.a,{md:6,xs:12,id:"chart_section",children:[Object(a.jsx)("p",{children:" Performance Data "}),Object(a.jsx)(m.Line,{data:e,width:5,height:1,options:{maintainAspectRatio:!0,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})]})]})}}]),s}(i.a.Component)),v=s.p+"static/media/Refresh_icon.a86495a5.png",p=(s(167),s(177)),x=s(178),g=function(e){Object(l.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={scramble:"",time:"",solve_started:!1,puzzle_type:"3x3"},e.shuffle=e.shuffle.bind(Object(d.a)(e)),e.scramble=e.scramble.bind(Object(d.a)(e)),e.removeDuplicates=e.removeDuplicates.bind(Object(d.a)(e)),e.getRandomInt=e.getRandomInt.bind(Object(d.a)(e)),e.refreshScramble=e.refreshScramble.bind(Object(d.a)(e)),e.refreshOnSolve=e.refreshOnSolve.bind(Object(d.a)(e)),e.remove4x4Error=e.remove4x4Error.bind(Object(d.a)(e)),e.get3Scramble=e.get3Scramble.bind(Object(d.a)(e)),e.get4Scramble=e.get4Scramble.bind(Object(d.a)(e)),e.get5Scramble=e.get5Scramble.bind(Object(d.a)(e)),e.getMScramble=e.getMScramble.bind(Object(d.a)(e)),e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.scramble(),document.addEventListener("refresh_scr",this.refreshOnSolve,!0)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.refreshScramble),document.removeEventListener("refresh_scr",this.refreshOnSolve,!0)}},{key:"refreshOnSolve",value:function(){!0===this.props.refresh&&(this.refreshScramble(),console.log("Refresh"))}},{key:"get3Scramble",value:function(){this.setState({puzzle_type:"3x3"}),this.refreshScramble()}},{key:"get4Scramble",value:function(){this.setState({puzzle_type:"4x4"}),this.refreshScramble()}},{key:"get5Scramble",value:function(){this.setState({puzzle_type:"5x5"}),this.refreshScramble()}},{key:"getMScramble",value:function(){this.setState({puzzle_type:"Megaminx"}),this.refreshScramble()}},{key:"shuffle",value:function(){for(var e,t,s=["R","U","D","L","F","B"],a=s.length;0!==a;)t=Math.floor(Math.random()*a),e=s[a-=1],s[a]=s[t],s[t]=e;return s}},{key:"removeDuplicates",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t<e.length){s&&(e.splice(t,1),t-=2);var a,r,i=e[t]===e[t+1];switch(e[t]){case"F":"B"===e[t+1]&&e[t]===e[t+2]&&(a=!0);break;case"B":"F"===e[t+1]&&e[t]===e[t+2]&&(a=!0);break;case"L":"R"===e[t+1]&&e[t]===e[t+2]&&(a=!0);break;case"R":"L"===e[t+1]&&e[t]===e[t+2]&&(a=!0);break;case"U":"D"===e[t+1]&&e[t]===e[t+2]&&(a=!0);break;case"D":"U"===e[t+1]&&e[t]===e[t+2]&&(a=!0);break;default:a=!1}return r=!(!i&&!a),this.removeDuplicates(e,t+1,r)}}},{key:"remove4x4Error",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t<e.length){var a;switch(s&&(e.splice(t,1),t--),e[t]){case"F":"B"!==e[t+1]&&"B"!==e[t-1]||(a=!0);break;case"B":"F"!==e[t+1]&&"F"!==e[t-1]||(a=!0);break;case"R":"L"!==e[t+1]&&"L"!==e[t-1]||(a=!0);break;case"L":"R"!==e[t+1]&&"R"!==e[t-1]||(a=!0);break;case"U":"D"!==e[t+1]&&"D"!==e[t-1]||(a=!0);break;case"D":"U"!==e[t+1]&&"U"!==e[t-1]||(a=!0);break;default:a=!1}return this.remove4x4Error(e,t+1,a)}}},{key:"getRandomInt",value:function(e){return Math.floor(Math.random()*Math.floor(e))}},{key:"scramble",value:function(){switch(this.state.puzzle_type){case"3x3":var e,t=this.shuffle(),s=this.shuffle(),a=this.shuffle(),r=this.shuffle(),i=t.concat(s,a,r);for(this.removeDuplicates(i),e=0;e<i.length;e++)switch(i[e]){case"R":switch(this.getRandomInt(3)){default:break;case 0:i[e]="R";break;case 1:i[e]="R'";break;case 2:i[e]="R2"}break;case"L":switch(this.getRandomInt(3)){default:break;case 0:i[e]="L";break;case 1:i[e]="L'";break;case 2:i[e]="L2"}break;case"U":switch(this.getRandomInt(3)){default:break;case 0:i[e]="U";break;case 1:i[e]="U'";break;case 2:i[e]="U2"}break;case"D":switch(this.getRandomInt(3)){default:break;case 0:i[e]="D";break;case 1:i[e]="D'";break;case 2:i[e]="D2"}break;case"F":switch(this.getRandomInt(3)){default:break;case 0:i[e]="F";break;case 1:i[e]="F'";break;case 2:i[e]="F2"}break;case"B":switch(this.getRandomInt(3)){default:break;case 0:i[e]="B";break;case 1:i[e]="B'";break;case 2:i[e]="B2"}}i=i.join(" "),this.setState({scramble:i});break;case"4x4":t=this.shuffle(),s=this.shuffle(),a=this.shuffle(),r=this.shuffle();var c=this.shuffle(),n=this.shuffle(),o=this.shuffle(),h=this.shuffle();for(i=t.concat(s,a,r,c,n,o,h),this.removeDuplicates(i),this.remove4x4Error(i),e=0;e<i.length;e++)switch(i[e]){case"R":switch(this.getRandomInt(6)){default:break;case 0:i[e]="R";break;case 1:i[e]="R'";break;case 2:i[e]="R2";break;case 3:i[e]="Rw";break;case 4:i[e]="Rw'";break;case 5:i[e]="Rw2"}break;case"L":switch(this.getRandomInt(6)){default:break;case 0:i[e]="L";break;case 1:i[e]="L'";break;case 2:i[e]="L2";break;case 3:i[e]="Lw";break;case 4:i[e]="Lw'";break;case 5:i[e]="Lw2"}break;case"U":switch(this.getRandomInt(6)){default:break;case 0:i[e]="U";break;case 1:i[e]="U'";break;case 2:i[e]="U2";break;case 3:i[e]="Uw";break;case 4:i[e]="Uw'";break;case 5:i[e]="Uw2"}break;case"D":switch(this.getRandomInt(6)){default:break;case 0:i[e]="D";break;case 1:i[e]="D'";break;case 2:i[e]="D2";break;case 3:i[e]="Dw";break;case 4:i[e]="Dw'";break;case 5:i[e]="Dw2"}break;case"F":switch(this.getRandomInt(6)){default:break;case 0:i[e]="F";break;case 1:i[e]="F'";break;case 2:i[e]="F2";break;case 3:i[e]="Fw";break;case 4:i[e]="Fw'";break;case 5:i[e]="Fw2"}break;case"B":switch(this.getRandomInt(6)){default:break;case 0:i[e]="B";break;case 1:i[e]="B'";break;case 2:i[e]="B2";break;case 3:i[e]="Bw";break;case 4:i[e]="Bw'";break;case 5:i[e]="Bw2"}}i=i.join(" "),this.setState({scramble:i});break;case"5x5":t=this.shuffle(),s=this.shuffle(),a=this.shuffle(),r=this.shuffle(),c=this.shuffle(),n=this.shuffle(),o=this.shuffle(),h=this.shuffle();var d=this.shuffle(),l=this.shuffle();for(i=t.concat(s,a,r,c,n,o,h,d,l),this.removeDuplicates(i),e=0;e<i.length;e++)switch(i[e]){case"R":switch(this.getRandomInt(6)){default:break;case 0:i[e]="R";break;case 1:i[e]="R'";break;case 2:i[e]="R2";break;case 3:i[e]="Rw";break;case 4:i[e]="Rw'";break;case 5:i[e]="Rw2"}break;case"L":switch(this.getRandomInt(6)){default:break;case 0:i[e]="L";break;case 1:i[e]="L'";break;case 2:i[e]="L2";break;case 3:i[e]="Lw";break;case 4:i[e]="Lw'";break;case 5:i[e]="Lw2"}break;case"U":switch(this.getRandomInt(6)){default:break;case 0:i[e]="U";break;case 1:i[e]="U'";break;case 2:i[e]="U2";break;case 3:i[e]="Uw";break;case 4:i[e]="Uw'";break;case 5:i[e]="Uw2"}break;case"D":switch(this.getRandomInt(6)){default:break;case 0:i[e]="D";break;case 1:i[e]="D'";break;case 2:i[e]="D2";break;case 3:i[e]="Dw";break;case 4:i[e]="Dw'";break;case 5:i[e]="Dw2"}break;case"F":switch(this.getRandomInt(6)){default:break;case 0:i[e]="F";break;case 1:i[e]="F'";break;case 2:i[e]="F2";break;case 3:i[e]="Fw";break;case 4:i[e]="Fw'";break;case 5:i[e]="Fw2"}break;case"B":switch(this.getRandomInt(6)){default:break;case 0:i[e]="B";break;case 1:i[e]="B'";break;case 2:i[e]="B2";break;case 3:i[e]="Bw";break;case 4:i[e]="Bw'";break;case 5:i[e]="Bw2"}}i=i.join(" "),this.setState({scramble:i});break;case"Megaminx":var b=["R","D","R","D","R","D","R","D","R","D","U"],u=b,j=b,f=b,m=b;for(i=b.concat(u,j,f,m),e=0;e<i.length;e++)switch(i[e]){case"R":switch(this.getRandomInt(2)){default:break;case 0:i[e]="R++";break;case 1:i[e]="R--"}break;case"D":switch(this.getRandomInt(2)){default:break;case 0:i[e]="D++";break;case 1:i[e]="D--"}break;case"U":switch(this.getRandomInt(2)){default:break;case 0:i[e]="U";break;case 1:i[e]="U'"}}i=i.join(" "),this.setState({scramble:i});break;default:return this.state.scramble}}},{key:"refreshScramble",value:function(){setTimeout(this.scramble,500)}},{key:"render",value:function(){return Object(a.jsxs)(p.a,{id:"scramble-container",children:[Object(a.jsxs)("p",{id:"scramble",children:[this.state.scramble,this.refreshOnSolve()]}),Object(a.jsxs)(x.a,{children:[Object(a.jsx)(x.a.Toggle,{variant:"outline-light",id:"dropdown-text",children:this.state.puzzle_type}),Object(a.jsxs)(x.a.Menu,{children:[Object(a.jsx)(x.a.Item,{id:"dropdown-text",onClick:this.get3Scramble,children:" 3x3 "}),Object(a.jsx)(x.a.Item,{id:"dropdown-text",onClick:this.get4Scramble,children:" 4x4 "}),Object(a.jsx)(x.a.Item,{id:"dropdown-text",onClick:this.get5Scramble,children:" 5x5 "}),Object(a.jsx)(x.a.Item,{id:"dropdown-text",onClick:this.getMScramble,children:" Megaminx "})]}),Object(a.jsx)("img",{src:v,onClick:this.refreshScramble,id:"refresh_icon",alt:"refresh_button"})]})]})}}]),s}(i.a.Component),O=s(60),S=s.n(O),w=(s(169),function(e){Object(l.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={time:0,start:0,isOn:!1,result:0,record:[],refresh:!1,width:""},e.startTimer=e.startTimer.bind(Object(d.a)(e)),e.stopTimer=e.stopTimer.bind(Object(d.a)(e)),e.resetTimer=e.resetTimer.bind(Object(d.a)(e)),e.handleSpace=e.handleSpace.bind(Object(d.a)(e)),e.clearRecord=e.clearRecord.bind(Object(d.a)(e)),e.refresh=e.refresh.bind(Object(d.a)(e)),e.msToTime=e.msToTime.bind(Object(d.a)(e)),e.handleHold=e.handleHold.bind(Object(d.a)(e)),e.handleWindowSizeChange=e.handleWindowSizeChange.bind(Object(d.a)(e)),e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){document.addEventListener("resize",this.handleWindowSizeChange),document.addEventListener("spacebar",this.handleSpace,!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("resize",this.handleWindowSizeChange),document.removeEventListener("spacebar",this.handleSpace,!0)}},{key:"handleWindowSizeChange",value:function(){this.setState({width:window.innerWidth})}},{key:"handleSpace",value:function(e){32===e.keyCode&&(0===this.state.time?this.startTimer():(this.stopTimer(),this.setState({refresh:!0}),setTimeout(this.refresh,500)))}},{key:"handleHold",value:function(e){0===this.state.time?setTimeout(this.startTimer(),1e3):(this.stopTimer(),this.setState({refresh:!0}),setTimeout(this.refresh,500))}},{key:"msToTime",value:function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return("00"+e).slice(-t)};return e<6e4?t(e%6e4/1e3|0)+"."+t(e%1e3,2)+"  ":e>=6e4&&e<36e5?t(e%36e5/6e4|0)+":"+t(e%6e4/1e3|0)+"."+t(e%1e3,2)+"  ":e>=36e5?t(e/36e5|0)+":"+t(e%36e5/6e4|0)+":"+t(e%6e4/1e3|0)+"."+t(e%1e3,2)+"  ":void alert("Wake up fool! You're taking too long to solve that cube!")}},{key:"startTimer",value:function(){var e=this;this.setState({time:this.state.time,start:Date.now()-this.state.time,isOn:!0}),this.timer=setInterval((function(){return e.setState({time:e.msToTime(Date.now()-e.state.start)})}),1)}},{key:"refresh",value:function(){this.setState({refresh:!1}),this.exportTime(),this.resetTimer()}},{key:"stopTimer",value:function(){this.setState({isOn:!1,refresh:!0}),clearInterval(this.timer)}},{key:"resetTimer",value:function(){this.setState({time:0,refresh:!1})}},{key:"exportTime",value:function(){this.setState({record:this.state.record.concat(this.state.time)})}},{key:"clearRecord",value:function(){this.setState({record:[]})}},{key:"render",value:function(){return this.state.width<=768?Object(a.jsxs)("div",{onKeyUp:this.handleSpace,tabIndex:"0",id:"timer-container",children:[Object(a.jsx)(u.a,{children:Object(a.jsx)(g,{refresh:this.state.refresh})}),Object(a.jsx)(S.a,{onTap:this.handleHold,children:Object(a.jsxs)("p",{id:"timer-text",children:[" ",this.state.time," "]})}),Object(a.jsx)(k,{record:this.state.record,clearRecord:this.clearRecord})]}):Object(a.jsxs)("div",{onKeyUp:this.handleSpace,tabIndex:"0",id:"timer-container",children:[Object(a.jsx)(u.a,{children:Object(a.jsx)(g,{refresh:this.state.refresh})}),Object(a.jsxs)("p",{id:"timer-text",children:[" ",this.state.time," "]}),Object(a.jsx)(k,{record:this.state.record,clearRecord:this.clearRecord})]})}}]),s}(i.a.Component));s(170);var R=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{id:"simplict",children:Object(a.jsx)(u.a,{children:Object(a.jsx)(w,{})})})})},_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,179)).then((function(t){var s=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),r(e),i(e),c(e)}))};n.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(R,{})}),document.getElementById("root")),_()},67:function(e,t,s){}},[[171,1,2]]]);
//# sourceMappingURL=main.f5f32a57.chunk.js.map