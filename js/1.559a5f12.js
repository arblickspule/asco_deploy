(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"4e2d":function(t,e,o){},f2d6:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"flex-grow"},[o("div",{staticClass:"q-pa-md q-gutter-sm"},[o("q-breadcrumbs",[o("q-breadcrumbs-el",{attrs:{label:"Home"}}),t._l(t.splitRoute,(function(t){return o("q-breadcrumbs-el",{key:t,attrs:{label:t}})}))],2)],1),t.isSlugged?t._e():o("q-toolbar",[o("q-toolbar-title",[o("strong",[t._v("Blog")])]),o("q-btn-dropdown",{attrs:{label:"Sort by date",icon:"sort"}},[o("q-toggle",{attrs:{label:"Descending"},on:{input:t.loadBlogPosts},model:{value:t.sortDateDescending,callback:function(e){t.sortDateDescending=e},expression:"sortDateDescending"}})],1),o("q-btn-dropdown",{attrs:{label:"Filter Tags",icon:"filter"}},t._l(t.tags,(function(e){return o("q-toggle",{key:e.name,attrs:{label:e.name},on:{input:t.loadBlogPosts},model:{value:e.filtered,callback:function(o){t.$set(e,"filtered",o)},expression:"tag.filtered"}})})),1)],1),t.loading?o("q-card",[o("q-card-section",[o("q-spinner-ball",{staticClass:"flex-centre",attrs:{color:"primary",size:"8em"}})],1)],1):t._e(),t.loading?t._e():o("q-virtual-scroll",{staticStyle:{"max-height":"100%",width:"100%"},attrs:{items:t.posts,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.item;return[o("q-item",{key:a.slug,staticStyle:{width:"100%"}},[o("blog-post",{attrs:{post:a,mode:!t.isSlugged}})],1)]}}],null,!1,750994126)})],1)},s=[],n=(o("7f7f"),o("20d6"),o("551c"),o("06db"),o("097d"),o("28a5"),o("c197")),r=o.n(n),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-card",{staticClass:"post",class:{teaser:t.mode}},[o("q-card-section",[o("router-link",{attrs:{to:t.computeLink}},[o("h4",[t._v(t._s(t.post.title))])])],1),o("q-card-section",[o("div",{domProps:{innerHTML:t._s(t.computeMarkup)}})]),o("q-card-section",[o("p",[t._v("Posted by Arblick Spule on "+t._s(t.post.created_on))])])],1)},l=[],c={props:{preview:{type:Boolean,default:!0},mode:{type:Boolean,default:!0},post:{type:Object,default:function(){return{title:"...",body:"...",author:"...",created_on:"..."}}}},computed:{computeMarkup:function(){return this.post.body},computeLink:function(){return"/blog/"+this.post.slug}}},u=c,d=(o("fb60"),o("2877")),p=o("f09f"),f=o("a370"),g=o("eebe"),b=o.n(g),m=Object(d["a"])(u,i,l,!1,null,"fd4cc9e8",null),h=m.exports;b()(m,"components",{QCard:p["a"],QCardSection:f["a"]});var q={name:"PageBlog",components:{blogPost:h},props:["query"],data:function(){return{posts:[],foo:"bar",prism:r.a,sortDateDescending:!0,tags:[],filters:[{name:"status",value:"Published"}],loading:!1}},computed:{isSlugged:function(){return"undefined"!==typeof this.$route.params.slug},splitRoute:function(){return console.log(this.$route),this.$route.path.substring(1).split("/")}},watch:{$route:"loadBlogPosts"},mounted:function(){this.loadBlogPosts()},methods:{loadBlogPosts:function(){var t=this;this.loading=!0,this.$axios.get(this.pathToApi()).then((function(e){t.posts=e.data.data,t.tags.forEach((function(t){t.count=0})),t.posts.forEach((function(e){e.tags.forEach((function(e){var o=t.tags.findIndex((function(t){return t.name===e}));o>=0?t.tags[o].count++:(t.tags.push({name:e,count:1,filtered:!1}),t.loading=!1)}))}))})).catch((function(){t.$q.notify({color:"negative",position:"top",message:"Nowt from the server!",icon:"report_problem"})})).finally((function(){setTimeout((function(){t.prism.highlightAll()}),1e3)}))},pathToApi:function(){var t="";if(this.isSlugged)return t="filter[slug][eq]="+this.$route.params.slug,"https://api.arblickspule.co.uk/public/thebase/items/blog?"+t;for(var e=0;e<this.filters.length;e++)t=t+"filter["+this.filters[e].name+"][eq]="+this.filters[e].value+"&";for(var o=0;o<this.tags.length;o++)this.tags[o].filtered&&(t=t+"filter[tags][contains]="+this.tags[o].name+"&");var a=this.sortDateDescending?"-":"";return"https://api.arblickspule.co.uk/public/thebase/items/blog?"+t+"sort="+a+"created_on"}}},v=q,_=o("9989"),k=o("ead5"),y=o("079e"),w=o("65c6"),Q=o("6ac5"),B=o("f20b"),S=o("9564"),D=o("a403"),P=o("a12b"),$=o("66e5"),x=Object(d["a"])(v,a,s,!1,null,null,null);e["default"]=x.exports;b()(x,"components",{QPage:_["a"],QBreadcrumbs:k["a"],QBreadcrumbsEl:y["a"],QToolbar:w["a"],QToolbarTitle:Q["a"],QBtnDropdown:B["a"],QToggle:S["a"],QCard:p["a"],QCardSection:f["a"],QSpinnerBall:D["a"],QVirtualScroll:P["a"],QItem:$["a"]})},fb60:function(t,e,o){"use strict";var a=o("4e2d"),s=o.n(a);s.a}}]);