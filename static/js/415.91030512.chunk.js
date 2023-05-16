"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{545:function(n,t,e){e.d(t,{O:function(){return b}});var r,c,o,a,i,s,u=e(168),p=e(934),h=e(87),l=p.Z.h2(r||(r=(0,u.Z)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 800;\n  font-size: 40px;\n  color: black;\n"]))),f=(0,p.Z)(h.rU)(c||(c=(0,u.Z)(["\n  color: black;\n"]))),v=p.Z.ul(o||(o=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  color: black;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    justify-content: space-around;\n    flex-wrap: wrap;\n  }\n"]))),d=p.Z.li(a||(a=(0,u.Z)(["\n  margin-top: 10px;\n  padding: 20px;\n  width: 100%;\n  background-color: #20b2aa;\n  border-radius: 10px;\n  box-sizing: border-box;\n  @media screen and (min-width: 768px) {\n    width: 375px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    margin-top: 28px;\n  }\n"]))),x=p.Z.div(i||(i=(0,u.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n"]))),m=p.Z.img(s||(s=(0,u.Z)(["\n  border-radius: 10px;\n"]))),y=e(184);function b(n){var t=n.title,e=n.movies,r=n.goBack;return(0,y.jsxs)(y.Fragment,{children:[t&&(0,y.jsx)(l,{children:t}),(0,y.jsx)(v,{children:e.map((function(n){return(0,y.jsx)(d,{children:(0,y.jsxs)(f,{to:"/movies/".concat(n.id),state:{from:r},children:[(0,y.jsx)(m,{src:n.poster_path?"https://www.themoviedb.org/t/p/original/".concat(n.poster_path):"https://i.ibb.co/z703XMd/film-plug.png",alt:n.title}),(0,y.jsxs)(x,{children:[(0,y.jsx)("h3",{children:n.title}),(0,y.jsx)("p",{children:n.release_date})]})]})},n.id)}))})]})}},415:function(n,t,e){e.r(t),e.d(t,{Home:function(){return s}});var r=e(439),c=e(791),o=e(545),a=e(172),i=e(184);function s(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1];return(0,c.useEffect)((function(){a.E.getMostPopularMovies().then((function(n){return s(n)}))}),[]),(0,i.jsx)(o.O,{title:"Trending today",movies:e,goBack:"/"})}},172:function(n,t,e){function r(n,t,e,r,c,o,a){try{var i=n[o](a),s=i.value}catch(u){return void e(u)}i.done?t(s):Promise.resolve(s).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,o){var a=n.apply(t,e);function i(n){r(a,c,o,i,s,"next",n)}function s(n){r(a,c,o,i,s,"throw",n)}i(void 0)}))}}e.d(t,{E:function(){return p}});var o=e(671),a=e(144),i=e(687),s=e.n(i),u=function(){function n(){(0,o.Z)(this,n),this.apiKey="3310740c123ce509202cf05650ab41d5",this.baseUrl="https://api.themoviedb.org/3",this.mostPopularUrl="/trending/movie/day",this.byKeyWordUrl="/search/company",this.wholeMovieInformationUrl="/movie/",this.actorsUrl="/movies/",this.viewsUrl="/movie/"}return(0,a.Z)(n,[{key:"getMostPopularMovies",value:function(){var n=c(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=[],n.prev=1,n.next=4,fetch("".concat(this.baseUrl).concat(this.mostPopularUrl,"?api_key=").concat(this.apiKey)).then((function(n){return n.json()})).then((function(n){t=n.results}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log("fetch error: ".concat(n.t0));case 9:return n.abrupt("return",t);case 10:case"end":return n.stop()}}),n,this,[[1,6]])})));return function(){return n.apply(this,arguments)}}()},{key:"getMoviesByKeyWord",value:function(){var n=c(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=null,n.prev=1,n.next=4,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(this.apiKey,"&query=").concat(t)).then((function(n){return n.json()})).then((function(n){return e=n}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log("fetch error: ".concat(n.t0));case 9:return console.log(e),n.abrupt("return",e);case 11:case"end":return n.stop()}}),n,this,[[1,6]])})));return function(t){return n.apply(this,arguments)}}()},{key:"getWholeMovieInformation",value:function(){var n=c(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=null,n.prev=1,n.next=4,fetch("".concat(this.baseUrl).concat(this.wholeMovieInformationUrl).concat(t,"?api_key=").concat(this.apiKey)).then((function(n){return n.json()})).then((function(n){return e=n}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log(n.t0);case 9:return n.abrupt("return",e);case 10:case"end":return n.stop()}}),n,this,[[1,6]])})));return function(t){return n.apply(this,arguments)}}()},{key:"getMovieCast",value:function(){var n=c(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=null,n.prev=1,n.next=4,fetch("".concat(this.baseUrl).concat(this.wholeMovieInformationUrl).concat(t,"?api_key=").concat(this.apiKey)).then((function(n){return n.json()})).then((function(n){return e=n}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log(n.t0);case 9:return n.abrupt("return",e);case 10:case"end":return n.stop()}}),n,this,[[1,6]])})));return function(t){return n.apply(this,arguments)}}()},{key:"getMovieReviews",value:function(){var n=c(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=null,n.prev=1,n.next=4,fetch("".concat(this.baseUrl,"/movie/").concat(t,"/reviews?api_key=").concat(this.apiKey)).then((function(n){return n.json()})).then((function(n){return e=n}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log(n.t0);case 9:return n.abrupt("return",e);case 10:case"end":return n.stop()}}),n,this,[[1,6]])})));return function(t){return n.apply(this,arguments)}}()},{key:"getMovieActors",value:function(){var n=c(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=null,n.prev=1,n.next=4,fetch("".concat(this.baseUrl,"/movie/").concat(t,"/credits?api_key=").concat(this.apiKey)).then((function(n){return n.json()})).then((function(n){return e=n}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log(n.t0);case 9:return n.abrupt("return",e);case 10:case"end":return n.stop()}}),n,this,[[1,6]])})));return function(t){return n.apply(this,arguments)}}()}]),n}(),p=new u}}]);
//# sourceMappingURL=415.91030512.chunk.js.map