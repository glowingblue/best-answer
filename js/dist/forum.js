module.exports=function(t){var e={};function s(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=18)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["models/Discussion"]},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["helpers/username"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},,function(t,e){t.exports=flarum.core.compat["components/Notification"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["utils/PostControls"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["components/Post"]},function(t,e){t.exports=flarum.core.compat["components/PostMeta"]},function(t,e){t.exports=flarum.core.compat["helpers/userOnline"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["components/Badge"]},,function(t,e,s){"use strict";s.r(e);var n=s(1),o=s.n(n),r=s(2),a=s.n(r);function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var c=s(7),u=function(t){function e(){return t.apply(this,arguments)||this}i(e,t);var s=e.prototype;return s.icon=function(){return"fas fa-comment-dots"},s.href=function(){var t=this.props.notification.subject();return app.route.discussion(t)},s.content=function(){return app.translator.trans("fof-best-answer.forum.notification.content")},e}(s.n(c).a),p=s(0),f=s(8),d=s.n(f),l=s(9),b=s.n(l),w=s(10),h=s.n(w),A=s(3),P=s.n(A),y=s(11),x=s.n(y),v=s(12),_=s.n(v),O=s(4),j=s.n(O),B=s(13),g=s.n(B),N=s(14),U=s.n(N),S=s(5),I=s.n(S),C=function(t){function e(){return t.apply(this,arguments)||this}return i(e,t),e.prototype.view=function(){var t=this.props,e=t.post,s=t.discussion;return m("div",{className:"Post--BestAnswer"},e?m("span",null,I()("fas fa-check"),app.translator.trans("fof-best-answer.forum.best_answer_button")):m("a",{href:app.route.post(e),config:m.route,"data-number":e.number()},I()("fas fa-check"),app.translator.trans("fof-best-answer.forum.best_answer_button")),m("span",{className:"BestAnswer--User"},app.translator.trans("fof-best-answer.forum.best_answer_label",{user:s.bestAnswerUser(),a:m("a",{onclick:function(){return m.route(app.route.user(s.bestAnswerUser()))}})})))},e}(U.a),H=s(15),M=s.n(H),k=s(16),D=s.n(k);app.initializers.add("fof/best-answer",(function(){o.a.prototype.bestAnswerPost=a.a.hasOne("bestAnswerPost"),o.a.prototype.bestAnswerUser=a.a.hasOne("bestAnswerUser"),o.a.prototype.hasBestAnswer=a.a.attribute("hasBestAnswer"),o.a.prototype.startUserId=a.a.attribute("startUserId",Number),o.a.prototype.firstPostId=a.a.attribute("firstPostId",Number),o.a.prototype.canSelectBestAnswer=a.a.attribute("canSelectBestAnswer"),app.notificationComponents.selectBestAnswer=u,Object(p.extend)(o.a.prototype,"badges",(function(t){this.hasBestAnswer()&&!t.has("hidden")&&t.add("bestAnswer",D.a.component({type:"bestAnswer",icon:"fas fa-check",label:M.a.translator.trans("fof-best-answer.forum.answered_badge")}))})),Object(p.extend)(b.a,"moderationControls",(function(t,e){var s=e.discussion(),n=s.bestAnswerPost()&&s.bestAnswerPost().id()===e.id();e.pushAttributes({isBestAnswer:n}),!e.isHidden()&&1!==e.number()&&s.canSelectBestAnswer()&&app.session.user&&(!app.forum.attribute("canSelectBestAnswerOwnPost")&&e.user()&&e.user().id()===app.session.user.id()||t.add("bestAnswer",d.a.component({children:app.translator.trans(n?"fof-best-answer.forum.remove_best_answer":"fof-best-answer.forum.this_best_answer"),icon:"fa"+(n?"s":"r")+" fa-comment-dots",onclick:function(){n=!n,s.save({bestAnswerPostId:n?e.id():0,bestAnswerUserId:app.session.user.id(),relationships:n?{bestAnswerPost:e,bestAnswerUser:app.session.user}:delete s.data.relationships.bestAnswerPost}).then((function(){app.current instanceof h.a&&app.current.stream.update(),m.redraw(),n&&m.route(app.route.discussion(s))}))}})))})),Object(p.extend)(P.a.prototype,"headerItems",(function(t){var e=this.props.post;e.discussion().bestAnswerPost()&&e.discussion().bestAnswerPost().id()===e.id()&&!e.isHidden()&&t.add("isBestAnswer",C.component({post:e,discussion:e.discussion()}))})),Object(p.extend)(P.a.prototype,"footerItems",(function(t){var e=this.props.post,s=e.discussion(),n=s.bestAnswerPost();if(n&&!n.isHidden()&&1===e.number()&&!e.isHidden()){var o=n.user();t.add("bestAnswerPost",m("div",{className:"CommentPost"},m("div",{className:"Post-header"},m("ul",null,m("li",{className:"item-user"},m("div",{className:"PostUser"},o&&g()(o),m("h3",null,o?m("a",{href:app.route.user(o),config:m.route},j()(o)):j()(o)))),m("li",{className:"item-meta"},_.a.component({post:n})),C.component({post:n,discussion:s}))),m("div",{className:"Post-body"},m.trust(n.contentHtml()))),-10)}})),Object(p.extend)(x.a.prototype,"attrs",(function(t){var e=this.props.post;e.discussion().bestAnswerPost()&&e.discussion().bestAnswerPost().id()===e.id()&&!e.isHidden()&&(t.className+=" Post--bestAnswer")}))}))}]);
//# sourceMappingURL=forum.js.map