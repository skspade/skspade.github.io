(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1GPU":function(t,e,a){"use strict";a.r(e);a("E5k/");var n=a("m+UM"),r=a("q1tI"),l=a.n(r),i=a("vzgc"),o=a("HTie");e.default=function(){var t=n.data,e=t.allMarkdownRemark.nodes,a=t.allImageSharp;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(o.a,null)),l.a.createElement("div",{className:"flex justify-around"},e.map((function(t,e){if(!t.frontmatter.draft)return l.a.createElement(i.a,Object.assign({key:t.frontmatter.title,image:a.nodes[e]&&a.nodes[e].original.src},t.frontmatter))}))))}},HTie:function(t,e,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=function(t){var e=t.to,a=t.children;return r.a.createElement(l.Link,{to:e,className:"block mt-4 inline-block mt-0 text-green-300 hover:text-black font-mono mr-4 no-underline",activeClassName:"text-black",partiallyActive:!0},a)};a.d(e,"a",(function(){return o}));var o=function(){return r.a.createElement("nav",{className:"flex justify-center p-6 text-lg"},r.a.createElement(i,{to:"/"},"About"),r.a.createElement(i,{to:"/projects/"},"Projects"),r.a.createElement(i,{to:"/blog/"},"Blog"))}},"m+UM":function(t){t.exports=JSON.parse('{"data":{"allMarkdownRemark":{"nodes":[{"frontmatter":{"draft":false,"title":"Generating Blog Posts from Markdown Part 1","description":"We will be utilizing a nice CLI utility called plop that will help keep our Markdown metadata consistent.","createdDate":"2020-02-24","tags":"tutorial,plop","path":"/blog/generating-blog-posts-pt-1"}},{"frontmatter":{"draft":true,"title":"Customizing Amplify\'s Auth Component","description":"We will modify the Auth component from AWS Amplify to fit our UI needs without tocuhing the authentication logic.","createdDate":"2020-02-25","tags":"AWS,Amplify,React","path":"/blog/customizing-aws-auth-component"}}]},"allImageSharp":{"nodes":[{"original":{"src":"/static/person-holding-piece-of-biscuit-with-milk-in-glass-3252138-a5c469261458014aa520e27e8a798f1e.jpg"}}]}}}')},vzgc:function(t,e,a){"use strict";a("HQhv");var n=a("q1tI"),r=a.n(n),l=function(t){var e=t.title;return r.a.createElement("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},"#",e)},i=a("Wbzz");a.d(e,"a",(function(){return o}));var o=function(t){return r.a.createElement("div",{className:"container max-w-md mt-10"},r.a.createElement("div",{className:"rounded overflow-hidden shadow-lg"},r.a.createElement("img",{className:"w-full cursor-pointer",src:t.image||"https://tailwindcss.com/img/card-top.jpg",alt:"Sunset in the mountains",onClick:function(){t.path?Object(i.navigate)(t.path):window.open(t.url)}}),r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("div",{className:"font-bold text-xl mb-2"},t.title),r.a.createElement("p",{className:"text-gray-700 text-base"},t.description)),r.a.createElement("div",{className:"px-6 py-4"},t.tags&&t.tags.split(",").map((function(t){return r.a.createElement(l,{title:t})})))))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-b3c483febf9c53b3909c.js.map