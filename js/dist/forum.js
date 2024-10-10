/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={493:t=>{"use strict";t.exports=flarum.extensions["fof-user-directory"]},24:(t,e,n)=>{var r=n(735).default;function s(){"use strict";t.exports=s=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var e,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function m(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{m({},"")}catch(e){m=function(t,e,n){return t[e]=n}}function h(t,e,n,r){var s=e&&e.prototype instanceof A?e:A,o=Object.create(s.prototype),i=new C(r||[]);return a(o,"_invoke",{value:k(t,n,i)}),o}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var p="suspendedStart",v="suspendedYield",w="executing",b="completed",y={};function A(){}function g(){}function x(){}var _={};m(_,c,(function(){return this}));var P=Object.getPrototypeOf,S=P&&P(P(T([])));S&&S!==o&&i.call(S,c)&&(_=S);var B=x.prototype=A.prototype=Object.create(_);function N(t){["next","throw","return"].forEach((function(e){m(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(s,o,a,u){var c=d(t[s],t,o);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==r(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}var s;a(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,s){n(t,r,e,s)}))}return s=s?s.then(o,o):o()}})}function k(t,n,r){var s=p;return function(o,i){if(s===w)throw Error("Generator is already running");if(s===b){if("throw"===o)throw i;return{value:e,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=j(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(s===p)throw s=b,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);s=w;var c=d(t,n,r);if("normal"===c.type){if(s=r.done?b:v,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(s=b,r.method="throw",r.arg=c.arg)}}}function j(t,n){var r=n.method,s=t.iterator[r];if(s===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var o=d(s,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var s=-1,o=function n(){for(;++s<t.length;)if(i.call(t,s))return n.value=t[s],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}throw new TypeError(r(t)+" is not iterable")}return g.prototype=x,a(B,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:g,configurable:!0}),g.displayName=m(x,f,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,m(t,f,"GeneratorFunction")),t.prototype=Object.create(B),t},n.awrap=function(t){return{__await:t}},N(L.prototype),m(L.prototype,l,(function(){return this})),n.AsyncIterator=L,n.async=function(t,e,r,s,o){void 0===o&&(o=Promise);var i=new L(h(t,e,r,s),o);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},N(B),m(B,f,"Generator"),m(B,c,(function(){return this})),m(B,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=T,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,s){return a.type="throw",a.arg=t,n.next=r,s&&(n.method="next",n.arg=e),!!s}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var s=r;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=t,o.arg=e,s?(this.method="next",this.next=s.finallyLoc,y):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var s=r.arg;I(n)}return s}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},n}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},735:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},183:(t,e,n)=>{var r=n(24)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var s=e[r];if(void 0!==s)return s.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{components:()=>yt,extend:()=>kt});const t=flarum.core.compat["forum/app"];var e=n.n(t);function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,s(t,e)}const i=flarum.core.compat["forum/components/Notification"];var a=n.n(i),u=function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var r=n.prototype;return r.icon=function(){return"fas fa-comment-dots"},r.href=function(){var t=this.attrs.notification.subject();return e().route.discussion(t)},r.content=function(){return e().translator.trans("fof-best-answer.forum.notification.content")},r.excerpt=function(){return null},n}(a());const c=flarum.core.compat["common/extend"],l=flarum.core.compat["common/components/Button"];var f=n.n(l);const h=flarum.core.compat["forum/utils/PostControls"];var d=n.n(h);const p=flarum.core.compat["forum/components/DiscussionPage"];var v=n.n(p);const w=flarum.core.compat["forum/components/CommentPost"];var b=n.n(w);const y=flarum.core.compat["forum/components/Post"];var A=n.n(y);const g=flarum.core.compat["common/Component"];var x=n.n(g);const _=flarum.core.compat["common/helpers/icon"];var P=n.n(_);const S=flarum.core.compat["common/helpers/humanTime"];var B=n.n(S);const N=flarum.core.compat["common/components/Link"];var L=n.n(N);const k=flarum.core.compat["common/utils/ItemList"];var j=n.n(k),O=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))||this).post=void 0,e.discussion=void 0,e}o(n,t);var r=n.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.post=this.attrs.post,this.discussion=this.attrs.discussion},r.view=function(){return m("li",{className:"Post--BestAnswer"},this.items().toArray())},r.getSetTime=function(t){if(null!=t.bestAnswerSetAt&&t.bestAnswerSetAt())return B()(null==t.bestAnswerSetAt?void 0:t.bestAnswerSetAt())},r.items=function(){var t,n,r=this,s=new(j());return s.add("post",this.post?m("span",null,P()("fas fa-check"),e().translator.trans("fof-best-answer.forum.best_answer_button")):m(L(),{href:e().route.post(this.post),"data-number":this.post.number()},P()("fas fa-check"),e().translator.trans("fof-best-answer.forum.best_answer_button"))),s.add("user",m("span",{className:"BestAnswer--User"},e().translator.trans("fof-best-answer.forum.best_answer_label",{user:null==(t=(n=this.discussion).bestAnswerUser)?void 0:t.call(n),time_set:this.getSetTime(this.discussion),a:m("a",{onclick:function(){return m.route.set(e().route.user(null==r.discussion.bestAnswerUser?void 0:r.discussion.bestAnswerUser()))}})}))),s},n}(x());const I=flarum.core.compat["common/helpers/username"];var C=n.n(I);const T=flarum.core.compat["common/helpers/userOnline"];var E=n.n(T);const q=flarum.core.compat["common/utils/classList"];var D=n.n(q),R=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))||this).user=void 0,e.post=void 0,e.discussion=void 0,e}o(n,t);var r=n.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.user=this.attrs.user,this.post=this.attrs.post,this.discussion=this.attrs.discussion},r.view=function(){var t=this,n=e().forum.attribute("fof-best-answer.show_max_lines");return m("div",{className:"CommentPost",onclick:function(){return e().current.get("stream").goToNumber(t.post.number())}},m("div",{className:"Post-header"},m("ul",null,this.headerItems().toArray())),m("div",{className:D()("Post-body",n>0&&"Post-body--truncate"),style:{"--max-lines":n}},m.trust(this.postContent())))},r.postContent=function(){return this.post.contentHtml()},r.headerItems=function(){var t=new(j());return t.add("user",this.userItem()),t.add("meta",this.metaItem()),t.add("bestAnswer",m(O,{post:this.post,discussion:this.discussion}),-100),t},r.userItem=function(){return m("li",{className:"item-user"},m("div",{className:"PostUser"},this.user&&E()(this.user),m("h3",null,this.user?m(L(),{href:e().route.user(this.user)},C()(this.user)):C()(this.user))))},r.metaItem=function(){var t=this.post;return m("li",{className:"item-meta"},m("span",{className:"PostMeta-time"},B()(t.createdAt())))},n}(x());const M=flarum.core.compat["common/models/Discussion"];var U=n.n(M);const F=flarum.core.compat["common/components/Badge"];var G=function(t){function n(){return t.apply(this,arguments)||this}return o(n,t),n.initAttrs=function(t){t.type="bestAnswer",t.icon="fas fa-check",t.label=e().translator.trans("fof-best-answer.forum.answered_badge")},n}(n.n(F)()),H=function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var r=n.prototype;return r.icon=function(){return"fas fa-check"},r.href=function(){var t=this.attrs.notification.subject();return e().route.discussion(t)},r.content=function(){var t=this.attrs.notification.fromUser();return e().translator.trans("fof-best-answer.forum.notification.awarded",{user:t})},r.excerpt=function(){return null},n}(a()),Q=function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var r=n.prototype;return r.icon=function(){return"fas fa-check"},r.href=function(){var t=this.attrs.notification.subject();return e().route.discussion(t)},r.content=function(){var t=this.attrs.notification.fromUser();return e().translator.trans("fof-best-answer.forum.notification.best_answer_in_discussion",{user:t})},r.excerpt=function(){return null},n}(a());const Y=flarum.core.compat["forum/components/NotificationGrid"];var z=n.n(Y);const J=flarum.core.compat["forum/components/UserCard"];var K=n.n(J);function V(){return V=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},V.apply(null,arguments)}const W=flarum.core.compat["forum/components/Search"];var X=n.n(W);function Z(t,e,n,r,s,o,i){try{var a=t[o](i),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,s)}var $=n(183),tt=n.n($);const et=flarum.core.compat["common/components/LinkButton"];var nt=n.n(et);const rt=flarum.core.compat["common/helpers/highlight"];var st=n.n(rt);const ot=flarum.core.compat["tags/helpers/tagsLabel"];var it=n.n(ot),at=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))||this).query=void 0,e.discussion=void 0,e.bestAnswerPost=void 0,e.mostRelevantPost=void 0,e.tags=void 0,e}o(n,t);var r=n.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.query=this.attrs.query,this.discussion=this.attrs.discussion,this.bestAnswerPost=this.attrs.bestAnswerPost,this.mostRelevantPost=this.attrs.mostRelevantPost,this.tags=this.attrs.tags},r.view=function(){return m("li",{className:"SolutionSearchResult DiscussionSearchResult","data-index":"discussions"+this.discussion.id()},m(L(),{href:e().route.discussion(this.discussion,this.bestAnswerPost&&this.bestAnswerPost.number()||0)},this.viewItems().toArray()))},r.discussionTitle=function(){return this.discussion.title()},r.bestAnswerContent=function(){var t;return null==(t=this.bestAnswerPost)?void 0:t.contentPlain()},r.mostRelevantContent=function(){var t;return null==(t=this.mostRelevantPost)?void 0:t.contentPlain()},r.viewItems=function(){var t,n,r=new(j());return e().forum.attribute("showTagsInSearchResults")&&r.add("tags",m("div",{className:"SolutionSearchResult-tags"},it()(this.tags)),100),r.add("discussion-title",m("div",{className:"DiscussionSearchResult-title"},st()(this.discussionTitle(),this.query)),90),this.mostRelevantPost&&r.add("most-relevant",m("div",{className:"DiscussionSearchResult-excerpt"},st()(null!=(t=this.mostRelevantContent())?t:"",this.query,100)),80),this.bestAnswerPost&&r.add("best-answer",m("div",{className:"DiscussionSearchResult-excerpt SolutionSearchResult-bestAnswer"},st()(null!=(n=this.bestAnswerContent())?n:"",this.query,100)),70),r},n}(x()),ut=function(){function t(){this.results=new Map,this.queryString=null}var n=t.prototype;return n.search=function(){var t,n=(t=tt().mark((function t(n){var r,s=this;return tt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=n.toLowerCase(),this.results.set(n,[]),this.setQueryString(n),r={filter:{q:this.queryString||n},page:{limit:this.limit()},include:this.includes().join(",")},t.abrupt("return",e().store.find("discussions",r).then((function(t){s.results.set(n,t),m.redraw()})));case 5:case"end":return t.stop()}}),t,this)})),function(){var e=this,n=arguments;return new Promise((function(r,s){var o=t.apply(e,n);function i(t){Z(o,r,s,i,a,"next",t)}function a(t){Z(o,r,s,i,a,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}(),n.view=function(t){t=t.toLowerCase();var n=(this.results.get(t)||[]).map((function(e){var n=e.bestAnswerPost(),r=e.mostRelevantPost(),s=e.tags();return m(at,{query:t,discussion:e,bestAnswerPost:n,mostRelevantPost:r,tags:s})}));return[m("li",{className:"Dropdown-header"},m(G,null)," ",e().translator.trans("fof-best-answer.forum.search.discussions_solutions_heading")),m("li",null,m(nt(),{icon:"fas fa-search",href:e().route("index",{q:this.queryString})},e().translator.trans("fof-best-answer.forum.search.all_discussions_solutions_button",{query:t})))].concat(n)},n.includes=function(){return["mostRelevantPost","bestAnswerPost","tags"]},n.limit=function(){return 3},n.queryMutators=function(){return["is:solved"]},n.setQueryString=function(t){this.queryString=t+" "+this.queryMutators().join(" ")},t}();const ct=flarum.core.compat["forum/components/DiscussionsSearchSource"];var lt=n.n(ct);const ft=flarum.core.compat["forum/components/IndexPage"];var mt=n.n(ft);const ht=flarum.core.compat["common/components/Dropdown"];var dt=n.n(ht);const pt=flarum.core.compat["forum/states/DiscussionListState"];var vt=n.n(pt);const wt=flarum.core.compat["forum/components/DiscussionComposer"];var bt=n.n(wt),yt={SelectBestAnswerItem:O,SolutionSearchSource:ut,BestAnswerFooterPreview:R,AwardedBestAnswerNotification:H,BestAnswerBadge:G,BestAnswerInDiscussionNotification:Q,SelectBestAnswerNotification:u,SolutionSearchItem:at};const At=flarum.core.compat["common/extenders"];var gt=n.n(At);const xt=flarum.core.compat["tags/models/Tag"];var _t=n.n(xt);const Pt=[new(gt().Model)(_t()).attribute("isQnA").attribute("reminders")],St=flarum.core.compat["common/models/User"];var Bt=n.n(St);const Nt=flarum.core.compat["common/Model"];var Lt=n.n(Nt);const kt=[].concat(Pt,[new(gt().Model)(U()).hasOne("bestAnswerPost").hasOne("bestAnswerUser").attribute("hasBestAnswer").attribute("canSelectBestAnswer").attribute("bestAnswerSetAt",Lt().transformDate),new(gt().Model)(Bt()).attribute("bestAnswerCount")]);e().initializers.add("fof/best-answer",(function(){var t,r,s,o,i,a;e().notificationComponents.selectBestAnswer=u,e().notificationComponents.awardedBestAnswer=H,e().notificationComponents.bestAnswerInDiscussion=Q,(0,c.extend)(U().prototype,"badges",(function(t){this.hasBestAnswer()&&!t.has("hidden")&&t.add("bestAnswer",m(G,null))})),t=function(t,n){return n.isHidden()||1===n.number()||!t.canSelectBestAnswer()||!e().session.user},r=function(t){return!e().forum.attribute("canSelectBestAnswerOwnPost")&&t.user()&&t.user().id()===e().session.user.id()},s=function(t,e){return t.hasBestAnswer()&&t.bestAnswerPost()&&t.bestAnswerPost().id()===e.id()},o=function(t){return e().translator.trans(t?"fof-best-answer.forum.remove_best_answer":"fof-best-answer.forum.this_best_answer")},i=function(t,n,r){return t.save({bestAnswerPostId:n?r.id():0,bestAnswerUserId:e().session.user.id(),relationships:n?{bestAnswerPost:r,bestAnswerUser:e().session.user}:{bestAnswerPost:null}},{params:{include:"tags"}}).then((function(){n||(delete t.data.relationships.bestAnswerPost,delete t.data.relationships.bestAnswerUser),e().current.matches(v())&&e().current.get("stream").update(),m.redraw(),n&&m.route.set(e().route.discussion(t))}))},(0,c.extend)(d(),"moderationControls",(function(n,a){if(!e().forum.attribute("useAlternativeBestAnswerUi")){var u=a.discussion(),c=s(u,a);a.pushAttributes({isBestAnswer:c}),"comment"===a.contentType()&&(t(u,a)||r(a)||!e().current.matches(v())||n.add("bestAnswer",f().component({icon:"fa"+(c?"s":"r")+" fa-comment-dots",onclick:function(){i(u,c=!c,a).finally((function(){c=s(u,a)}))}},o(c))))}})),(0,c.extend)(b().prototype,"actionItems",(function(n){if(e().forum.attribute("useAlternativeBestAnswerUi")){var a=this.attrs.post,u=this.attrs.post.discussion(),c=s(u,a),l=!1!==u.bestAnswerPost();a.pushAttributes({isBestAnswer:c}),t(u,a)||r(a)||!e().current.matches(v())||n.add("bestAnswer",f().component({className:"Button Button--"+(!l||c?"primary":"link"),onclick:function(){l=!l,i(u,c=!c,a).finally((function(){l=u.hasBestAnswer()&&!1!==u.bestAnswerPost(),c=s(u,a)}))}},o(c)))}})),(0,c.extend)(b().prototype,"headerItems",(function(t){var e=this.attrs.post,n=e.discussion();null!=n&&n.hasBestAnswer()&&n.bestAnswerPost()&&n.bestAnswerPost().id()===e.id()&&!e.isHidden()&&t.add("isBestAnswer",m(O,{post:e,discussion:n}),-100)})),(0,c.extend)(b().prototype,"footerItems",(function(t){var e=this.attrs.post,n=e.discussion(),r=n.hasBestAnswer()&&n.bestAnswerPost();if(r&&!r.isHidden()&&1===e.number()&&!e.isHidden()){var s=r.user();t.add("bestAnswerPost",m(R,{post:r,user:s,discussion:n}),-10)}})),(0,c.extend)(A().prototype,"elementAttrs",(function(t){var e=this.attrs.post,n=e.discussion();null!=n&&n.hasBestAnswer()&&n.bestAnswerPost()&&n.bestAnswerPost().id()===e.id()&&!e.isHidden()&&(t.className?t.className+=" Post--bestAnswer":t.className="Post--bestAnswer")})),(0,c.extend)(v().prototype,"sidebarItems",(function(t){if(e().forum.attribute("bestAnswerDiscussionSidebarJumpButton")){var n=this.discussion;if(n){var r=n.hasBestAnswer()&&n.bestAnswerPost();!r||r.isHidden()||1===r.number()||n.bestAnswerPost().isHidden()||t.add("jumpToBestAnswer",m(f(),{className:"Button Button-jumpBestAnswer",icon:"fas fa-check",onclick:function(){return e().current.get("stream").goToNumber(r.number())}},e().translator.trans("fof-best-answer.forum.discussion.jump_to_best_answer_button")),90)}}})),(0,c.extend)(K().prototype,"infoItems",(function(t){var n=this.attrs.user;t.add("best-answer-count",m("span",{className:"UserCard-bestAnswerCount"},P()("fas fa-check"),e().translator.trans("fof-best-answer.forum.user.best-answer-count",{count:n.bestAnswerCount()})),55)})),(a=n(493))&&(0,c.override)(a.SortMap.prototype,"sortMap",(function(t){return V({},t(),{most_best_answers:"-bestAnswerCount",least_best_answers:"bestAnswerCount"})})),(0,c.extend)(z().prototype,"notificationTypes",(function(t){t.add("awardedBestAnswer",{name:"awardedBestAnswer",icon:"fas fa-check",label:e().translator.trans("fof-best-answer.forum.notification.preferences.awarded_best_answer")}),t.add("bestAnswerInDiscussion",{name:"bestAnswerInDiscussion",icon:"fas fa-check",label:e().translator.trans("fof-best-answer.forum.notification.preferences.best_answer_in_discussion")}),t.add("selectBestAnswer",{name:"selectBestAnswer",icon:"fas fa-stopwatch",label:e().translator.trans("fof-best-answer.forum.notification.preferences.select_best_answer")})})),(0,c.extend)(X().prototype,"sourceItems",(function(t){e().forum.attribute("solutionSearchEnabled")&&t.add("solution",new ut,110)})),(0,c.extend)(lt().prototype,"queryMutators",(function(t){e().forum.attribute("solutionSearchEnabled")&&t.push("-is:solved")})),(0,c.extend)(mt().prototype,"sidebarItems",(function(t){var n=this.currentTag();if(null!=n&&null!=n.isQnA&&n.isQnA()){var r=e().forum.attribute("canStartDiscussion")||!e().session.user,s=t.get("newDiscussion");s.children=e().translator.trans(r?"fof-best-answer.forum.index.ask_question":"fof-best-answer.forum.index.cannot_ask_question"),t.has("startDiscussion")&&t.setContent("startDiscussion",s)}})),(0,c.extend)(mt().prototype,"viewItems",(function(t){if(e().forum.attribute("showBestAnswerFilterUi")){var n=this.currentTag();if(null!=n&&null!=n.isQnA&&n.isQnA()){var r=["all","solved","unsolved"],s=e().discussions.bestAnswer;t.add("solved-filter",dt().component({buttonClassName:"Button",label:e().translator.trans("fof-best-answer.forum.filter."+(r[s]||Object.keys(r).map((function(t){return r[t]}))[0])+"_label"),accessibleToggleLabel:e().translator.trans("fof-best-answer.forum.filter.accessible_label")},Object.keys(r).map((function(t){var n=r[t],o=(s||Object.keys(r)[0])===t;return f().component({icon:!o||"fas fa-check",active:o,onclick:function(){e().discussions.bestAnswer=t,"0"===t&&delete e().discussions.bestAnswer,e().discussions.refresh()}},e().translator.trans("fof-best-answer.forum.filter."+n+"_label"))}))))}else e().discussions.bestAnswer&&(delete e().discussions.bestAnswer,e().discussions.refresh())}})),(0,c.extend)(vt().prototype,"requestParams",(function(t){if(e().discussions.bestAnswer){var n="2"===e().discussions.bestAnswer?"-":"";t.filter[n+"solved-discussions"]=!0,t.filter.q&&(t.filter.q+=" "+n+"is:solved")}})),(0,c.extend)(bt().prototype,"headerItems",(function(t){var n=this.composer.fields.tags;void 0!==n&&n.some((function(t){return t.isQnA()}))&&(this.attrs.titlePlaceholder=e().translator.trans("fof-best-answer.forum.composer.titlePlaceholder"),t.has("discussionTitle")&&t.setContent("discussionTitle",m("h3",null,m("input",{className:"FormControl",bidi:this.title,placeholder:this.attrs.titlePlaceholder,disabled:!!this.attrs.disabled,onkeydown:this.onkeydown.bind(this)}))))}))}))})(),module.exports=r})();
//# sourceMappingURL=forum.js.map