(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/background.f9115592.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/pika_run.6e190eb7.gif"},39:function(e,t,a){e.exports=a(79)},45:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(12),l=a.n(s),r=(a(45),a(6)),o=a(7),i=a(9),m=a(8),d=a(10),u=a(81),h=a(82),p=a(83),E=(a(47),a(49),a(31)),f=a.n(E),g=(a(51),a(80));var v=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"navbar-container container"},c.a.createElement(g.a,{to:"/",style:{color:"#ffc75e",textDecoration:"none"}},c.a.createElement("h1",{className:"navbar-logo",align:"center"},"Pokemon x React")))))},b=a(22),N=a(15),k=a(16),w=a(32),y=a.n(w);function j(){var e=Object(N.a)(["\n  text-decoration: none;\n  color: black;\n\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n"]);return j=function(){return e},e}function x(){var e=Object(N.a)(["\n  opacity: 0.95;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  &:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n  -moz-user-select: none;\n  -website-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -o-user-select: none;\n"]);return x=function(){return e},e}function O(){var e=Object(N.a)(["\n  width: 5em;\n  height: 5em;\n  display: none;\n"]);return O=function(){return e},e}var C=k.a.img(O()),A=k.a.div(x()),D=Object(k.a)(g.a)(j()),W=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={name:"",imageUrl:"",pokemonIndex:"",imageLoading:!0,toManyRequests:!1},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.name,a=e.url,n=a.split("/")[a.split("/").length-2],c="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/".concat(n,".png?raw=true");this.setState({name:t,imageUrl:c,pokemonIndex:n})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"col-md-3 col-sm-6 mb-5"},c.a.createElement(D,{to:"pokemon/".concat(this.state.pokemonIndex)},c.a.createElement(A,{className:"card"},c.a.createElement("h5",{className:"card-header"},this.state.pokemonIndex),this.state.imageLoading?c.a.createElement("img",{src:y.a,style:{width:"5em",height:"5em"},className:"card-img-top rounded mx-auto d-block mt-2"}):null,c.a.createElement(C,{className:"card-img-top rounded mx-auto mt-2",src:this.state.imageUrl,onLoad:function(){return e.setState({imageLoading:!1})},onError:function(){return e.setState({toManyRequests:!0})},style:this.state.toManyRequests?{display:"none"}:this.state.imageLoading?null:{display:"block"}}),this.state.toManyRequests?c.a.createElement("h6",{className:"mx-auto"},c.a.createElement("span",{className:"badge badge-danger mt-2"},"To Many Requests")):null,c.a.createElement("div",{className:"card-body mx-auto"},c.a.createElement("h6",{className:"card-title"},this.state.name.toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" "))))))}}]),t}(n.Component),S=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h5",null,"Getting Pokemon..."))}}]),t}(n.Component),_=a(11),B=a.n(_),P=a(35),L=a.n(P),M=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={url:"https://pokeapi.co/api/v2/pokemon?limit=20",pokemon:[],itemsCountPerPage:20,activePage:1},a.loadPokemon=function(){B.a.get(a.state.url).then(function(e){a.setState(function(t){t.pokemon;return{pokemon:Object(b.a)(t.pokemon).concat(Object(b.a)(e.data.results)),url:e.data.next}})}).catch(function(e){console.log(e)})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.state.pokemon?c.a.createElement(L.a,{pageStart:0,loadMore:this.loadPokemon,hasMore:this.state.url,loader:c.a.createElement("div",{className:"loader",key:0},"Load Data.....")},c.a.createElement("div",{className:"row"},this.state.pokemon.map(function(e){return c.a.createElement(W,{key:e.name,name:e.name,url:e.url})}))):c.a.createElement(S,null))}}]),t}(n.Component),U=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(M,null)))}}]),t}(n.Component),F=a(21),I=a.n(F),R=a(36),T={bug:"B1C12E",dark:"4F3A2D",dragon:"755EDF",electric:"FCBC17",fairy:"F4B1F4",fighting:"823551D",fire:"E73B0C",flying:"A3B3F7",ghost:"6060B2",grass:"74C236",ground:"D3B357",ice:"A3E7FD",normal:"C8C4BC",poison:"934594",psychic:"ED4882",rock:"B9A156",steel:"B5B5C3",water:"3295F6"},q=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={name:"",pokemonIndex:"",imageUrl:"",types:[],description:"",statTitleWidth:2,ststWidth:2,stats:{hp:"",attack:"",defense:"",speed:"",specialAttack:"",specialDefense:""},height:"",weight:"",eggGroups:"",catchRate:"",abilities:"",evs:"",hatchSteps:""},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(R.a)(I.a.mark(function e(){var t,a,n,c,s,l,r,o,i,m,d,u,h,p,E,f,g,v=this;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.pokemonIndex,a="https://pokeapi.co/api/v2/pokemon/".concat(t,"/"),n="https://pokeapi.co/api/v2/pokemon-species/".concat(t,"/"),e.next=5,B.a.get(a);case 5:return c=e.sent,s=c.data.name,l=c.data.sprites.front_default,"",r="".hp,o="".attack,i="".defense,m="".speed,d="".specialAttack,u="".specialDefense,c.data.stats.map(function(e){switch(e.stat.name){case"hp":r=e.base_stat;break;case"attack":o=e.base_stat;break;case"defense":i=e.base_stat;break;case"speed":m=e.base_stat;break;case"special-attack":d=e.base_stat;break;case"special-defense":u=e.base_stat}}),h=Math.round(10*c.data.height),p=Math.round(10*c.data.weight),E=c.data.types.map(function(e){return e.type.name}),f=c.data.abilities.map(function(e){return e.ability.name.toLowerCase().split("-").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ")}).join(", "),g=c.data.stats.filter(function(e){return e.effort>0}).map(function(e){return"".concat(e.effort," ").concat(e.stat.name.toLowerCase().split("-").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" "))}).join(", "),e.next=17,B.a.get(n).then(function(e){var t="";e.data.flavor_text_entries.some(function(e){"en"!==e.language.name||(t=e.flavor_text)});var a=Math.round(100/255*e.data.capture_rate),n=e.data.egg_groups.map(function(e){return e.name.toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ")}).join(", "),c=255*(e.data.hatch_counter+1);v.setState({description:t,catchRate:a,eggGroups:n,hatchSteps:c})});case 17:this.setState({imageUrl:l,pokemonIndex:t,name:s,types:E,stats:{hp:r,attack:o,defense:i,speed:m,specialAttack:d,specialDefense:u},height:h,weight:p,abilities:f,evs:g});case 18:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-5"},c.a.createElement("h2",null,this.state.name.toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" "))),c.a.createElement("div",{className:"col-7"},c.a.createElement("div",{className:"float-right"},this.state.types.map(function(e){return c.a.createElement("span",{key:e,className:"badge badge-pill mr-1",style:{backgroundColor:"#".concat(T[e]),color:"white",fontSize:"15px"}},e.toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" "))}))))),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:" col-md-3 "},c.a.createElement("img",{src:this.state.imageUrl,className:"card-img-top rounded mx-auto mt-2"})),c.a.createElement("div",{className:"col-md-9"},c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statTitleWidth)},c.a.createElement("b",null,"HP ")),c.a.createElement("div",{className:"col-12 col-md-".concat(this.state.ststWidth)},c.a.createElement("div",null,c.a.createElement("medium",null,this.state.stats.hp,"/100")))),c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statTitleWidth)},c.a.createElement("b",null,"Attack")),c.a.createElement("div",{className:"col-12 col-md-".concat(this.state.ststWidth)},c.a.createElement("medium",null,this.state.stats.attack,"/100"))),c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statTitleWidth)},c.a.createElement("b",null,"Defense")),c.a.createElement("div",{className:"col-12 col-md-".concat(this.state.ststWidth)},c.a.createElement("medium",null,this.state.stats.defense,"/100"))),c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statTitleWidth)},c.a.createElement("b",null,"Speed")),c.a.createElement("div",{className:"col-12 col-md-".concat(this.state.ststWidth)},c.a.createElement("medium",null,this.state.stats.speed,"/100"))),c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statTitleWidth)},c.a.createElement("b",null,"Sp Atk")),c.a.createElement("div",{className:"col-12 col-md-".concat(this.state.ststWidth)},c.a.createElement("medium",null,this.state.stats.specialAttack,"/100"))),c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"col-12 col-md-".concat(this.state.statTitleWidth)},c.a.createElement("b",null,"Sp Def")),c.a.createElement("div",{className:"col-12 col-md-".concat(this.state.ststWidth)},c.a.createElement("medium",null,this.state.stats.specialDefense,"/100"))))),c.a.createElement("div",{className:"row mt-1"},c.a.createElement("div",{className:"col"},c.a.createElement("p",{className:"",align:"center"},this.state.description)))),c.a.createElement("hr",null),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{class:"card-title text-center"},"Profile"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-right"},"Height:")),c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-left"},this.state.height," cm")),c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-right"},"Weight:")),c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-left"},this.state.weight," kg")),c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-right"},"Catch Rate:")),c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-left"},this.state.catchRate,"%")),c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-right"},"Egg Groups:")),c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-left"},this.state.eggGroups," ")))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-right"},"Hatch Steps:")),c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-left"},this.state.hatchSteps)),c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-right"},"Abilities:")),c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-left"},this.state.abilities)),c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-right"},"EVs:")),c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-left"},this.state.evs)))))),c.a.createElement("div",{class:"card-footer text-muted",align:"center"},"Data Source"," ",c.a.createElement("a",{href:"https://pokeapi.co/",target:"_blank",className:"card-link"},"PokeAPI.co"))),c.a.createElement("br",null),c.a.createElement("br",null))}}]),t}(n.Component),G=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("div",{className:"App",style:{background:"url(".concat(f.a,")")}},c.a.createElement(v,null),c.a.createElement("div",{className:"container",style:{marginTop:"150px"}},c.a.createElement(h.a,null,c.a.createElement(p.a,{exact:!0,path:"/",component:U}),c.a.createElement(p.a,{exact:!0,path:"/pokemon/:pokemonIndex",component:q})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,2,1]]]);
//# sourceMappingURL=main.05acb461.chunk.js.map