(this["webpackJsonpmy-product"]=this["webpackJsonpmy-product"]||[]).push([[0],{23:function(e,t,a){e.exports=a(48)},28:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),c=a.n(i),o=(a(28),a(7)),l=a(8),s=a(10),u=a(9),m=a(11),d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"Footer"},r.a.createElement("p",null,"Copyright @ 2019")))},h=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"header"},r.a.createElement("div",{class:"nav"},"Product Hunt"),r.a.createElement("div",{class:"login"},r.a.createElement("button",{class:"btn"},"Login"),r.a.createElement("button",{class:"btn"},"Enroll"))))},g=a(22),p=a.n(g),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).sendback=function(){a.state.visible?a.setState({visible:!1}):a.setState({visible:!0})},a.onChange=function(e){a.setState({stateupdate:!1,date:e},(function(){var e=a.state.date,t=new Date(e),n=""+(t.getMonth()+1),r=""+t.getDate(),i=t.getFullYear();n.length<2&&(n="0"+n),r.length<2&&(r="0"+r);var c=[i,n,r].join("-");a.fetchupdateimage(c)}))},a.chngcolor=function(e,t){a.setState({noimage:!0});var n=t.makers[0]?t.makers[0].image_url.original:"https://ph-avatars.imgix.net/566629/original?auto=format&fit=crop&crop=faces&w=original&h=original)";a.state.LikedProduct.push(n),a.state.active===e?a.setState({active:null}):a.setState({active:e})},a.mycolor=function(e){return a.state.active===e?"#c9cf78":""},a.state={visible:!1,isLoading:!0,image:[],bgColor:"white",date:new Date,dateupdate:"",stateupdate:!0,particualrDateimage:[],active:null,LikedProduct:[],noimage:!1,greaterdate:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchimage(),this.fetchupdateimage()}},{key:"fetchimage",value:function(){var e=this,t=this.state.date.toISOString().slice(0,10);fetch("https://api.producthunt.com/v1/posts?day="+t+"&access_token=ec6K_AQNMuru2NyK819R1M3DEsLwKUGR4S87Wphusp0").then((function(e){return e.json()})).then((function(t){return e.setState({greaterdate:!0,image:t.posts})}))}},{key:"fetchupdateimage",value:function(e){var t=this;fetch("https://api.producthunt.com/v1/posts?day="+e+"&access_token=ec6K_AQNMuru2NyK819R1M3DEsLwKUGR4S87Wphusp0").then((function(e){return e.json()})).then((function(e){return t.setState({isLoading:!1,particualrDateimage:e.posts})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"wrap"},r.a.createElement("div",{class:"date-picker"},r.a.createElement("button",{class:"btn",onClick:this.sendback},"Filter Post via Date"),r.a.createElement("div",{class:"date-detector"},this.state.visible?r.a.createElement(p.a,{onChange:this.onChange,value:this.state.date}):r.a.createElement("p",null,"Please click above button to filter via date"))),this.state.isLoading?r.a.createElement("div",{className:"loading"},"Loading..."):r.a.createElement("div",{className:"product"},this.state.stateupdate?this.state.image.map((function(t,a,n){return r.a.createElement("div",null,r.a.createElement("a",{href:t.discussion_url},r.a.createElement("img",{src:t.makers[0]?t.makers[0].image_url.original:"https://ph-avatars.imgix.net/566629/original?auto=format&fit=crop&crop=faces&w=original&h=original"})),r.a.createElement("p",{onClick:function(){e.chngcolor(a,t)},style:{backgroundColor:e.mycolor(a)}},"Like"))})):this.state.greaterdate?this.state.particualrDateimage.map((function(t,a,n){return r.a.createElement("div",null,r.a.createElement("a",{href:t.discussion_url},r.a.createElement("img",{src:t.makers[0]?t.makers[0].image_url.original:"https://ph-avatars.imgix.net/566629/original?auto=format&fit=crop&crop=faces&w=original&h=original"})),r.a.createElement("p",{onClick:function(){e.chngcolor(a,t)},style:{backgroundColor:e.mycolor(a)}},"Like"))})):r.a.createElement("div",null,"not render")),r.a.createElement("div",{class:"likesection"},r.a.createElement("p",null,"Liked product by user"),r.a.createElement(r.a.Fragment,null,this.state.noimage?this.state.LikedProduct.map((function(e,t,a){return r.a.createElement("div",null,r.a.createElement("img",{className:"zoom",src:e}))})):r.a.createElement("div",{className:"noproduct"},"Give a like to see here !")))))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={visible:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(v,null),r.a.createElement(d,null))}}]),t}(n.Component);a(47);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.91cbba81.chunk.js.map