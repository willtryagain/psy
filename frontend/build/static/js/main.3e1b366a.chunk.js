(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},59:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(31),i=n.n(c),r=(n(38),n(13)),s=n(14),l=n(16),p=n(15),h=n(9),j=n(2),d=(n(39),n(32)),u=n(8),b=n.n(u),m=n(0),x=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).onChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var n={name:e.state.name,gender:e.state.age,age:e.state.gender,occupation:e.state.occupation};b.a.post("http://localhost:5000/api/experiment",n).then((function(t){e.setState({name:"",age:"",gender:"",occupation:""}),console.log(t),0==t.data.experiment_type||1==t.data.experiment_type?window.location.href="/game/"+t.data._id:window.location.href="/video/"+t.data._id})).catch((function(e){console.log("Error in Creating Experiment!",e)}))},e.state={name:"",gender:"",age:"",occupation:""},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"container text-center p-5",children:[Object(m.jsx)("h1",{children:"WELCOME TO THE EXPERIMENT"}),Object(m.jsx)("p",{children:" Thank you for being part of this experiment. The experiment is a part of a project being done by IIIT-H students to study the effects of word memorability. The experiment will take around 5 minutes to complete. We appreciate your patience and time taken to be part of this experiment."}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"Please follow the instructions on the screen and complete the said tasks. Fill the form below once you are ready. "}),Object(m.jsxs)("form",{noValidate:!0,onSubmit:this.onSubmit,children:[Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"text",placeholder:"Your Name (Not Necessary)",name:"name",className:"form-control",value:this.state.name,onChange:this.onChange})}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"text",placeholder:"Your Age",name:"age",className:"form-control",value:this.state.age,onChange:this.onChange})}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"text",placeholder:"Your Gender",name:"gender",className:"form-control",value:this.state.gender,onChange:this.onChange})}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"text",placeholder:"Your Occupation",name:"occupation",className:"form-control",value:this.state.occupation,onChange:this.onChange})}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{type:"submit",className:"btn btn-success",children:" PROCEED "})]})]})}}]),n}(a.Component);n(59);var O=function(){var e=Object(j.g)().id;return console.log(e),Object(m.jsxs)("div",{className:"container text-center p-5",children:[Object(m.jsx)("h1",{children:"STEP 1/4: PLAY THE FOLLOWING GAME"}),Object(m.jsx)("p",{children:" Thank you for being part of this experiment. The experiment is a part of a project being done by IIIT-H students to study the effects of word memorability. The experiment will take around 5 minutes to complete. We appreciate your patience and time taken to be part of this experiment."}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"Please play the following game once. Press the PROCEED Button once you are done."}),Object(m.jsx)("iframe",{className:"gameArea",src:"https://snake.io/",frameBorder:"0",scrolling:"no"}),Object(m.jsx)("button",{className:"btn btn-success",onClick:function(){window.location.href="/video/"+e},children:" PROCEED "})]})},f=n(7),g=n(10),y=n.n(g);var v=function(){var e=Object(j.g)().id;console.log(e);var t=Object(a.useState)(""),n=Object(f.a)(t,2),o=n[0],c=n[1];return b.a.post("http://localhost:5000/api/experiment/getEt",{id:e}).then((function(e){c(e.data.experiment_type)})).catch((function(e){console.log("Error in Submitting Game!",e)})),Object(m.jsxs)("div",{className:"container text-center p-5",children:[Object(m.jsxs)("h1",{children:[2==o||3==o?"STEP 1/3":"STEP 2/4"," : WATCH THE FOLLOWING VIDEO"]}),Object(m.jsx)("p",{children:" Thank you for being part of this experiment. The experiment is a part of a project being done by IIIT-H students to study the effects of word memorability. The experiment will take around 5 minutes to complete. We appreciate your patience and time taken to be part of this experiment."}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"Please view the following video once. Try to remember as many words as you can. Press the PROCEED Button once you are done."}),Object(m.jsx)("div",{className:"m-5",children:1==o||3==o?Object(m.jsx)(y.a,{className:"videoPlayer",url:"https://youtu.be/RhqYtiwEn2Q"}):Object(m.jsx)(y.a,{className:"videoPlayer",url:"https://youtu.be/fxUvN8O8dX0"})}),Object(m.jsx)("button",{className:"btn btn-success",onClick:function(){window.location.href="/input/"+e},children:" PROCEED "})]})},E=n(19),w=n.n(E),T=n(33);var N=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],o=t[1],c=Object(j.g)().id;console.log(c);var i=Object(a.useState)(""),r=Object(f.a)(i,2),s=r[0],l=r[1];function p(){return(p=Object(T.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t.target.value);case 2:console.log(n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return b.a.post("http://localhost:5000/api/experiment/getEt",{id:c}).then((function(e){l(e.data.experiment_type)})).catch((function(e){console.log("Error in Submitting Game!",e)})),Object(m.jsxs)("div",{className:"container text-center p-5",children:[Object(m.jsxs)("h1",{children:[2==s||3==s?"STEP 2/3":"STEP 3/4",": RECALL WORDS"]}),Object(m.jsx)("p",{children:" Thank you for being part of this experiment. The experiment is a part of a project being done by IIIT-H students to study the effects of word memorability. The experiment will take around 5 minutes to complete. We appreciate your patience and time taken to be part of this experiment."}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"Try to recall as many words as you can and enter them in the box below (space separated). Press the PROCEED Button once you are done."}),Object(m.jsx)("div",{className:"m-5",children:Object(m.jsx)("textarea",{className:"input-area",value:n,onChange:function(e){return p.apply(this,arguments)}})}),Object(m.jsx)("button",{className:"btn btn-success",onClick:function(){b.a.post("http://localhost:5000/api/experiment/updateWords",{id:c,words:n}).then((function(e){o(""),console.log(e),window.location.href="/final/"+c})).catch((function(e){console.log("Error in Submitting Words!",e)})),window.location.href="/final/"+c},children:" PROCEED "})]})};var k=function(){var e=Object(j.g)().id;console.log(e);var t=Object(a.useState)(""),n=Object(f.a)(t,2),o=n[0],c=n[1];return b.a.post("http://localhost:5000/api/experiment/getEt",{id:e}).then((function(e){c(e.data.experiment_type)})).catch((function(e){console.log("Error in Submitting Game!",e)})),Object(m.jsxs)("div",{className:"container text-center p-5",children:[Object(m.jsxs)("h1",{children:[2==o||3==o?"STEP 3/3":"STEP 4/4",": CHOOSE A GAME"]}),Object(m.jsx)("p",{children:" Thank you for being part of this experiment. The experiment is a part of a project being done by IIIT-H students to study the effects of word memorability. The experiment will take around 5 minutes to complete. We appreciate your patience and time taken to be part of this experiment."}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"If you had to choose one of the games to play, which one will you choose? Select a game by clicking on the radio button below and click on the proceed button"}),Object(m.jsx)("div",{className:"m-5",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-lg-6",children:[Object(m.jsx)("img",{src:"/Bling.jpeg",width:"100%"}),Object(m.jsx)("input",{type:"radio",id:"bling",name:"game",value:"BLING"})," BLING"]}),Object(m.jsxs)("div",{className:"col-lg-6",children:[Object(m.jsx)("img",{src:"/Tingo.jpeg",width:"100%"}),Object(m.jsx)("input",{type:"radio",id:"tingo",name:"game",value:"TINGO"})," TINGO"]})]})}),Object(m.jsx)("button",{className:"btn btn-success",onClick:function(){for(var t="",n=document.getElementsByName("game"),a=0;a<n.length;a++)if(n[a].checked){t=n[a].value;break}""!=t&&(b.a.post("http://localhost:5000/api/experiment/updateGame",{id:e,game_chosen:t}).then((function(e){console.log(e),window.location.href="/thanks/"})).catch((function(e){console.log("Error in Submitting Game!",e)})),window.location.href="/thanks/")},children:" PROCEED "})]})};var C=function(){return Object(m.jsxs)("div",{className:"container text-center p-5",children:[Object(m.jsx)("h1",{children:"THANK YOU!"}),Object(m.jsx)("p",{children:" Thank you for being part of this experiment. The experiment is a part of a project being done by IIIT-H students to study the effects of word memorability. The experiment will take around 5 minutes to complete. We appreciate your patience and time taken to be part of this experiment."}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"YOU HAVE COMPLETED THIS EXPERIMENT! Please share the link with as many people as you can:"})]})},I=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsx)(h.a,{children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{path:"/",element:Object(m.jsx)(x,{}),exact:!0}),Object(m.jsx)(j.a,{path:"/game/:id",element:Object(m.jsx)(O,{}),exact:!0}),Object(m.jsx)(j.a,{path:"/video/:id",element:Object(m.jsx)(v,{}),exact:!0}),Object(m.jsx)(j.a,{path:"/input/:id",element:Object(m.jsx)(N,{}),exact:!0}),Object(m.jsx)(j.a,{path:"/final/:id",element:Object(m.jsx)(k,{}),exact:!0}),Object(m.jsx)(j.a,{path:"/thanks",element:Object(m.jsx)(C,{}),exact:!0})]})})}}]),n}(a.Component),P=I,S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),c(e),i(e)}))};n(83);i.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root")),S()}},[[84,1,2]]]);
//# sourceMappingURL=main.3e1b366a.chunk.js.map