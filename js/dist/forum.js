(()=>{var t={472:t=>{"use strict";t.exports=flarum.extensions["fof-user-directory"]}},s={};function e(n){var r=s[n];if(void 0!==r)return r.exports;var o=s[n]={exports:{}};return t[n](o,o.exports,e),o.exports}e.n=t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},e.d=(t,s)=>{for(var n in s)e.o(s,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:s[n]})},e.o=(t,s)=>Object.prototype.hasOwnProperty.call(t,s),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";e.r(n),e.d(n,{components:()=>ut,extend:()=>bt});const t=flarum.core.compat["forum/app"];var s=e.n(t);const r=flarum.core.compat["common/extend"],o=flarum.core.compat["forum/components/IndexPage"];var a=e.n(o);const i=flarum.core.compat["common/components/Dropdown"];var c=e.n(i);const u=flarum.core.compat["common/components/Button"];var f=e.n(u);const l=flarum.core.compat["forum/states/DiscussionListState"];var d=e.n(l);const p=flarum.core.compat["forum/components/DiscussionComposer"];var b=e.n(p);function w(t,s){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,s){return t.__proto__=s,t},w(t,s)}function h(t,s){t.prototype=Object.create(s.prototype),t.prototype.constructor=t,w(t,s)}const A=flarum.core.compat["forum/components/Notification"];var v=e.n(A),y=function(t){function e(){return t.apply(this,arguments)||this}h(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-comment-dots"},n.href=function(){var t=this.attrs.notification.subject();return s().route.discussion(t)},n.content=function(){return s().translator.trans("fof-best-answer.forum.notification.content")},n.excerpt=function(){return null},e}(v());const _=flarum.core.compat["forum/utils/PostControls"];var P=e.n(_);const x=flarum.core.compat["forum/components/DiscussionPage"];var B=e.n(x);const g=flarum.core.compat["forum/components/CommentPost"];var k=e.n(g);const C=flarum.core.compat["forum/components/Post"];var O=e.n(C);const N=flarum.core.compat["forum/components/PostMeta"];var S=e.n(N);const j=flarum.core.compat["common/helpers/username"];var U=e.n(j);const I=flarum.core.compat["common/helpers/userOnline"];var T=e.n(I);const D=flarum.core.compat["common/components/Link"];var M=e.n(D);const H=flarum.core.compat["common/utils/classList"];var Q=e.n(H);const q=flarum.core.compat["common/Component"];var L=e.n(q);const F=flarum.core.compat["common/helpers/icon"];var z=e.n(F);const G=flarum.core.compat["common/helpers/humanTime"];var E=e.n(G);const J=flarum.core.compat["common/utils/ItemList"];var K=e.n(J),R=function(t){function e(){return t.apply(this,arguments)||this}h(e,t);var n=e.prototype;return n.oninit=function(s){t.prototype.oninit.call(this,s);var e=this.attrs,n=e.post,r=e.discussion;this.post=n,this.discussion=r},n.view=function(){return m("li",{className:"Post--BestAnswer"},this.items().toArray())},n.getSetTime=function(t){if(null!==t.bestAnswerSetAt())return E()(t.bestAnswerSetAt())},n.items=function(){var t=this,e=new(K());return e.add("post",this.post?m("span",null,z()("fas fa-check"),s().translator.trans("fof-best-answer.forum.best_answer_button")):m(M(),{href:s().route.post(this.post),"data-number":this.post.number()},z()("fas fa-check"),s().translator.trans("fof-best-answer.forum.best_answer_button"))),e.add("user",m("span",{className:"BestAnswer--User"},s().translator.trans("fof-best-answer.forum.best_answer_label",{user:this.discussion.bestAnswerUser(),time_set:this.getSetTime(this.discussion),a:m("a",{onclick:function(){return m.route.set(s().route.user(t.discussion.bestAnswerUser()))}})}))),e},e}(L());const V=flarum.core.compat["common/components/Badge"];var W=e.n(V);const X=flarum.core.compat["common/models/Discussion"];var Y=e.n(X),Z=function(t){function e(){return t.apply(this,arguments)||this}h(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-check"},n.href=function(){var t=this.attrs.notification.subject();return s().route.discussion(t)},n.content=function(){var t=this.attrs.notification.fromUser();return s().translator.trans("fof-best-answer.forum.notification.awarded",{user:t})},n.excerpt=function(){return null},e}(v()),$=function(t){function e(){return t.apply(this,arguments)||this}h(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-check"},n.href=function(){var t=this.attrs.notification.subject();return s().route.discussion(t)},n.content=function(){var t=this.attrs.notification.fromUser();return s().translator.trans("fof-best-answer.forum.notification.best_answer_in_discussion",{user:t})},n.excerpt=function(){return null},e}(v());const tt=flarum.core.compat["forum/components/NotificationGrid"];var st=e.n(tt);const et=flarum.core.compat["common/Model"];var nt=e.n(et);const rt=flarum.core.compat["common/models/User"];var ot=e.n(rt);const at=flarum.core.compat["forum/components/UserCard"];var it=e.n(at);function ct(){return ct=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},ct.apply(this,arguments)}var ut={SelectBestAnswerItem:R};const mt=flarum.core.compat["common/extenders"];var ft=e.n(mt);const lt=flarum.core.compat["tags/models/Tag"];var dt=e.n(lt);const pt=[new(ft().Model)(dt()).attribute("isQnA").attribute("reminders")],bt=[].concat(pt,[new(ft().Model)(Y()).hasOne("bestAnswerPost").hasOne("bestAnswerUser").attribute("hasBestAnswer").attribute("canSelectBestAnswer").attribute("bestAnswerSetAt",nt().transformDate)]);s().initializers.add("fof/best-answer",(function(){var t,n,o,i,u,l;s().notificationComponents.selectBestAnswer=y,s().notificationComponents.awardedBestAnswer=Z,s().notificationComponents.bestAnswerInDiscussion=$,(0,r.extend)(Y().prototype,"badges",(function(t){this.hasBestAnswer()&&!t.has("hidden")&&t.add("bestAnswer",m(W(),{type:"bestAnswer",icon:"fas fa-check",label:s().translator.trans("fof-best-answer.forum.answered_badge")}))})),t=function(t,e){return e.isHidden()||1===e.number()||!t.canSelectBestAnswer()||!s().session.user},n=function(t){return!s().forum.attribute("canSelectBestAnswerOwnPost")&&t.user()&&t.user().id()===s().session.user.id()},o=function(t,s){return t.hasBestAnswer()&&t.bestAnswerPost()&&t.bestAnswerPost().id()===s.id()},i=function(t){return s().translator.trans(t?"fof-best-answer.forum.remove_best_answer":"fof-best-answer.forum.this_best_answer")},u=function(t,e,n){return t.save({bestAnswerPostId:e?n.id():0,bestAnswerUserId:s().session.user.id(),relationships:e?{bestAnswerPost:n,bestAnswerUser:s().session.user}:{bestAnswerPost:null}},{params:{include:"tags"}}).then((function(){e||(delete t.data.relationships.bestAnswerPost,delete t.data.relationships.bestAnswerUser),s().current.matches(B())&&s().current.get("stream").update(),m.redraw(),e&&m.route.set(s().route.discussion(t))}))},(0,r.extend)(P(),"moderationControls",(function(e,r){if(!s().forum.attribute("useAlternativeBestAnswerUi")){var a=r.discussion(),c=o(a,r);r.pushAttributes({isBestAnswer:c}),"comment"===r.contentType()&&(t(a,r)||n(r)||!s().current.matches(B())||e.add("bestAnswer",f().component({icon:"fa"+(c?"s":"r")+" fa-comment-dots",onclick:function(){u(a,c=!c,r).finally((function(){c=o(a,r)}))}},i(c))))}})),(0,r.extend)(k().prototype,"actionItems",(function(e){if(s().forum.attribute("useAlternativeBestAnswerUi")){var r=this.attrs.post,a=this.attrs.post.discussion(),c=o(a,r),m=!1!==a.bestAnswerPost();r.pushAttributes({isBestAnswer:c}),t(a,r)||n(r)||!s().current.matches(B())||e.add("bestAnswer",f().component({className:"Button Button--"+(!m||c?"primary":"link"),onclick:function(){m=!m,u(a,c=!c,r).finally((function(){m=a.hasBestAnswer()&&!1!==a.bestAnswerPost(),c=o(a,r)}))}},i(c)))}})),(0,r.extend)(k().prototype,"headerItems",(function(t){var s=this.attrs.post,e=s.discussion();null!=e&&e.hasBestAnswer()&&e.bestAnswerPost()&&e.bestAnswerPost().id()===s.id()&&!s.isHidden()&&t.add("isBestAnswer",R.component({post:s,discussion:s.discussion()}))})),(0,r.extend)(k().prototype,"footerItems",(function(t){var e=this.attrs.post,n=e.discussion(),r=n.hasBestAnswer()&&n.bestAnswerPost(),o=s().forum.attribute("fof-best-answer.show_max_lines");if(r&&!r.isHidden()&&1===e.number()&&!e.isHidden()){var a=r.user();t.add("bestAnswerPost",m("div",{className:"CommentPost",onclick:function(){return s().current.get("stream").goToNumber(r.number())}},m("div",{className:"Post-header"},m("ul",null,m("li",{className:"item-user"},m("div",{className:"PostUser"},a&&T()(a),m("h3",null,a?m(M(),{href:s().route.user(a)},U()(a)):U()(a)))),r.discussion()&&m("li",{className:"item-meta"},S().component({post:r})),R.component({post:r,discussion:n}))),m("div",{className:Q()("Post-body",o>0&&"Post-body--truncate"),style:{"--max-lines":o}},m.trust(r.contentHtml()))),-10)}})),(0,r.extend)(O().prototype,"elementAttrs",(function(t){var s=this.attrs.post,e=s.discussion();null!=e&&e.hasBestAnswer()&&e.bestAnswerPost()&&e.bestAnswerPost().id()===s.id()&&!s.isHidden()&&(t.className?t.className+=" Post--bestAnswer":t.className="Post--bestAnswer")})),ot().prototype.bestAnswerCount=nt().attribute("bestAnswerCount"),(0,r.extend)(it().prototype,"infoItems",(function(t){var e=this.attrs.user;t.add("best-answer-count",m("span",{className:"UserCard-bestAnswerCount"},z()("fas fa-check"),s().translator.trans("fof-best-answer.forum.user.best-answer-count",{count:e.bestAnswerCount()})),55)})),(l=e(472))&&(0,r.override)(l.SortMap.prototype,"sortMap",(function(t){return ct({},t(),{most_best_answers:"-bestAnswerCount",least_best_answers:"bestAnswerCount"})})),(0,r.extend)(st().prototype,"notificationTypes",(function(t){t.add("awardedBestAnswer",{name:"awardedBestAnswer",icon:"fas fa-check",label:s().translator.trans("fof-best-answer.forum.notification.preferences.awarded_best_answer")}),t.add("bestAnswerInDiscussion",{name:"bestAnswerInDiscussion",icon:"fas fa-check",label:s().translator.trans("fof-best-answer.forum.notification.preferences.best_answer_in_discussion")}),t.add("selectBestAnswer",{name:"selectBestAnswer",icon:"fas fa-stopwatch",label:s().translator.trans("fof-best-answer.forum.notification.preferences.select_best_answer")})})),(0,r.extend)(a().prototype,"sidebarItems",(function(t){var e=this.currentTag();if(null!=e&&null!=e.isQnA&&e.isQnA()){var n=s().forum.attribute("canStartDiscussion")||!s().session.user,r=t.get("newDiscussion");r.children=s().translator.trans(n?"fof-best-answer.forum.index.ask_question":"fof-best-answer.forum.index.cannot_ask_question"),t.has("startDiscussion")&&t.setContent("startDiscussion",r)}})),(0,r.extend)(a().prototype,"viewItems",(function(t){if(s().forum.attribute("showBestAnswerFilterUi")){var e=this.currentTag();if(null!=e&&null!=e.isQnA&&e.isQnA()){var n=["all","solved","unsolved"],r=s().discussions.bestAnswer;t.add("solved-filter",c().component({buttonClassName:"Button",label:s().translator.trans("fof-best-answer.forum.filter."+(n[r]||Object.keys(n).map((function(t){return n[t]}))[0])+"_label"),accessibleToggleLabel:s().translator.trans("fof-best-answer.forum.filter.accessible_label")},Object.keys(n).map((function(t){var e=n[t],o=(r||Object.keys(n)[0])===t;return f().component({icon:!o||"fas fa-check",active:o,onclick:function(){s().discussions.bestAnswer=t,"0"===t&&delete s().discussions.bestAnswer,s().discussions.refresh()}},s().translator.trans("fof-best-answer.forum.filter."+e+"_label"))}))))}else s().discussions.bestAnswer&&(delete s().discussions.bestAnswer,s().discussions.refresh())}})),(0,r.extend)(d().prototype,"requestParams",(function(t){if(s().discussions.bestAnswer){var e="2"===s().discussions.bestAnswer?"-":"";t.filter[e+"solved-discussions"]=!0,t.filter.q&&(t.filter.q+=" "+e+"is:solved")}})),(0,r.extend)(b().prototype,"headerItems",(function(t){var e=this.composer.fields.tags;void 0!==e&&e.some((function(t){return t.isQnA()}))&&(this.attrs.titlePlaceholder=s().translator.trans("fof-best-answer.forum.composer.titlePlaceholder"),t.has("discussionTitle")&&t.setContent("discussionTitle",m("h3",null,m("input",{className:"FormControl",bidi:this.title,placeholder:this.attrs.titlePlaceholder,disabled:!!this.attrs.disabled,onkeydown:this.onkeydown.bind(this)}))))}))}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map