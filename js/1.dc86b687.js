(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{f2d6:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"flex flex-center"},t._l(t.posts,(function(t,e){return o("blog-post",{key:e,attrs:{post:t}})})),1)},s=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-card",[o("q-card-section",[o("h3",[t._v(t._s(t.post.title))])]),o("q-card-section",[o("div",{domProps:{innerHTML:t._s(t.computeMarkup)}})]),o("q-card-section",[o("p",[t._v("Posted by Arblick Spule on "+t._s(t.post.created_on))])])],1)},c=[],r={props:{preview:{type:Boolean,default:!0},post:{type:Object,default:function(){return{title:"...",body:"...",author:"...",created_on:"..."}}}},computed:{computeMarkup:function(){return this.post.body}}},i=r,p=o("2877"),l=o("f09f"),u=o("a370"),d=o("eebe"),f=o.n(d),b=Object(p["a"])(i,a,c,!1,null,"181766ab",null),h=b.exports;f()(b,"components",{QCard:l["a"],QCardSection:u["a"]});var m={name:"PageBlog",components:{blogPost:h},data:function(){return{posts:[],foo:"bar"}},mounted:function(){this.loadBlogPosts()},methods:{loadBlogPosts:function(){var t=this;this.$axios.get("https://api.arblickspule.co.uk/public/thebase/items/blog").then((function(e){t.posts=e.data.data})).catch((function(){t.$q.notify({color:"negative",position:"top",message:"Fuckargh!",icon:"report_problem"})}))}}},g=m,_=o("9989"),v=Object(p["a"])(g,n,s,!1,null,null,null);e["default"]=v.exports;f()(v,"components",{QPage:_["a"]})}}]);