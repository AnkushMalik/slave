(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{MN1z:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return d}));var n=a("q1tI"),r=a.n(n),o=a("vrFN"),l=a("yBb5"),i=a("cgSC"),u=a("u2mt");t.default=function(e){var t=e.data,a=e.pageContext.tag,n=t.allMarkdownRemark,d=n.edges,s=n.totalCount,c=s+" post"+(1===s?"":"s")+' tagged with "'+a+'"';return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:c+" | Anurag Hazra"}),r.a.createElement(u.a,null,r.a.createElement("h1",null,c),r.a.createElement("br",null),r.a.createElement("br",null),d.map((function(e){var t=e.node,a=t.fields.slug,n=t.frontmatter,o=n.title,l=n.date,u=n.tags;return r.a.createElement(i.b,{tags:u,key:t.id,slug:a,title:o,date:l,readtime:t.timeToRead,excerpt:t.excerpt})}))))};var d="412273481"},PBHM:function(e,t,a){a("Ll4R");e.exports=function(e){return e&&e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-")}},XoyE:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"group":[{"fieldValue":"CI / CD","totalCount":1},{"fieldValue":"CSS","totalCount":1},{"fieldValue":"design-patterns","totalCount":1},{"fieldValue":"dev-ops","totalCount":1},{"fieldValue":"github","totalCount":1},{"fieldValue":"javascript","totalCount":7},{"fieldValue":"like a pro","totalCount":2},{"fieldValue":"physics","totalCount":1},{"fieldValue":"react","totalCount":1},{"fieldValue":"reactjs","totalCount":1},{"fieldValue":"tricks","totalCount":3},{"fieldValue":"verlet","totalCount":1}]}}}')},cWGT:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"title":"Using a tool vs. knowing how a tool works internally"},"fields":{"slug":"/blog/using-a-tool-vs-knowing-how-a-tool-works-internally"}}},{"node":{"frontmatter":{"title":"Making a Verlet Physics Engine in Javascript"},"fields":{"slug":"/blog/making-a-verlet-physics-engine-in-javascript"}}},{"node":{"frontmatter":{"title":"Unknown parts of CSS - The \'all\' property"},"fields":{"slug":"/blog/unknown-parts-of-css-the-all-property"}}},{"node":{"frontmatter":{"title":"Mapping Arrays Like A Pro"},"fields":{"slug":"/blog/mapping-arrays-like-a-pro"}}},{"node":{"frontmatter":{"title":"Filtering Arrays Like A Pro"},"fields":{"slug":"/blog/filtering-arrays-like-a-pro"}}},{"node":{"frontmatter":{"title":"Exciting New Features In Javascript"},"fields":{"slug":"/blog/exciting-new-features-in-javascript"}}},{"node":{"frontmatter":{"title":"Building A React Folder Tree Component"},"fields":{"slug":"/blog/building-a-react-folder-tree-component"}}},{"node":{"frontmatter":{"title":"Executing Markdown Codeblocks With Github Actions"},"fields":{"slug":"/blog/executing-markdown-codeblocks-with-github-actions"}}},{"node":{"frontmatter":{"title":"Design Patterns Everyday"},"fields":{"slug":"/blog/design-patterns-everyday"}}}],"totalCount":9}}}')},cgSC:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("q1tI"),r=a.n(n),o=a("+ZDr"),l=a.n(o),i=a("vOnD"),u=a("IP2g"),d=a("kByy"),s=a("PBHM"),c=a.n(s),m=i.d.article.withConfig({displayName:"BlogCard__PostWrapper",componentId:"sc-4iowlm-0"})(["overflow:auto;margin-bottom:70px;padding:30px 30px;border-top:5px solid ",";border-radius:10px;box-shadow:",";background-color:",";&:hover{box-shadow:0 5px 10px rgba(0,0,0,0.1);}span{font-size:13px;color:gray;}"],(function(e){return e.theme.dark?e.theme.accentColor:e.theme.primaryColor}),(function(e){return e.theme.shadowSmall}),(function(e){return e.theme.secondaryColor})),p=function(e){var t=e.date,a=e.readtime;return r.a.createElement("span",{style:{fontSize:13,color:"gray"}},r.a.createElement("span",{"aria-label":"publish date "+t},r.a.createElement(u.a,{color:"gray",icon:"calendar-alt"}),"  ",t),"   ",r.a.createElement("span",{"aria-label":a+" minutes read"},r.a.createElement(u.a,{color:"gray",icon:"clock"}),"  ",a,"min read"))};t.b=function(e){var t=e.date,a=e.readtime,n=e.title,o=e.excerpt,i=e.slug,u=e.tags;return r.a.createElement(l.a,{to:i,"aria-label":n+" - read time "+a+" minutes"},r.a.createElement(m,null,r.a.createElement(p,{date:t,readtime:a}),r.a.createElement("h2",null,n),r.a.createElement("p",null,o),r.a.createElement("div",{style:{marginTop:20}},u.map((function(e){return r.a.createElement(d.a,{key:e,"aria-label":e+" tag",to:"/blog/tags/"+c()(e)+"/"},e)})))))}},how0:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("vOnD").d.section.withConfig({displayName:"SplitLayout__SplitLayoutWrapper",componentId:"ymx62k-0"})(["",";& article:first-of-type{margin-top:15px;}display:grid;grid-template-columns:minmax(750px,1fr) 1fr;grid-column-gap:30px;grid-template-areas:'post side';.layout__content{grid-area:post;}.layout__aside{grid-area:side;}@media ","{grid-template-columns:1fr 1fr;grid-column-gap:0px;grid-row-gap:30px;grid-template-areas:'post post' 'side side';}.sticky__aside{position:sticky;top:100px;}"],(function(e){return e.theme.spacing.sectionBottom}),(function(e){return e.theme.media.fablet}));t.a=function(e){var t=e.content,a=e.aside;return r.a.createElement(o,null,r.a.createElement("section",{className:"layout__content"},t&&t),r.a.createElement("section",{className:"layout__aside"},r.a.createElement("aside",{className:"sticky__aside"},a&&a)))}},kByy:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("XoyE"),r=a("q1tI"),o=a.n(r),l=a("vOnD"),i=a("Wbzz"),u=a("PBHM"),d=a.n(u),s=Object(l.d)(i.Link).withConfig({displayName:"Tags__TagBreadcrumb",componentId:"p98pqd-0"})(["float:left;border:1px solid ",";border-radius:50px;padding:8px 13px;line-height:10px;margin:5px;font-size:12px;&:hover{background:",";color:",";}"],(function(e){return e.theme.dark?e.theme.primaryColor:"#d9e0ff"}),(function(e){return e.theme.dark?e.theme.primaryColor:"#d9e0ff"}),(function(e){return e.theme.dark?"#d9e0ff":"#6D83F2"}));t.b=function(){var e=n.data;return o.a.createElement("section",{style:{overflow:"auto"}},e.allMarkdownRemark.group.map((function(e){return o.a.createElement(s,{key:e.fieldValue,to:"/blog/tags/"+d()(e.fieldValue)+"/","aria-label":e.totalCount+" posts tagged with "+e.fieldValue},e.fieldValue,", ",e.totalCount)})))}},u2mt:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("+ZDr"),l=a.n(o),i=a("kByy"),u=a("how0"),d=a("cWGT"),s=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},c=function(){var e=d.data,t=e.allMarkdownRemark.edges[s(0,e.allMarkdownRemark.totalCount-1)];if("undefined"!=typeof window)for(;t.node.fields.slug===window.location.pathname;){t=e.allMarkdownRemark.edges[s(0,e.allMarkdownRemark.totalCount-1)];break}return{randomSlug:t.node.fields.slug,randomTitle:t.node.frontmatter.title}};t.a=function(e){var t=e.children,a=e.sharerSection,n=c(),o=n.randomSlug,d=n.randomTitle;return r.a.createElement(u.a,{content:t,aside:r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement("h4",null,"Random post"),r.a.createElement(l.a,{style:{fontSize:"16px"},to:o},d),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("section",null,r.a.createElement("h4",null,"Tags"),r.a.createElement(i.b,null),r.a.createElement("br",null)),a&&a)})}}}]);
//# sourceMappingURL=component---src-templates-tags-js-6ef363f023972bc8f597.js.map