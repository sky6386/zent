webpackJsonp([111],{1563:function(a,n,s){"use strict";function t(a){return a&&a.__esModule?a:{default:a}}function p(a){return h.default.createElement(a.tag,(0,f.default)({},a.attributes,{dangerouslySetInnerHTML:{__html:a.html}}))}function e(a){return h.default.createElement(p,{tag:"section",html:a.html,attributes:{className:"zandoc-react-markdown"}})}function c(a){return h.default.createElement(p,{tag:"style",html:a.style})}function o(a,n){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(n+=a.offsetTop),o(a.parentNode,n);return n}Object.defineProperty(n,"__esModule",{value:!0});var l=s(1),u=t(l),k=s(4),i=t(k),r=s(2),d=t(r),g=s(3),m=t(g),v=s(7),f=t(v),b=s(0),h=t(b),A=s(232),z=t(A),E=s(359),y=function(){return h.default.createElement("div",null,h.default.createElement("div",{className:"zent-avatar-list"},h.default.createElement(E.Avatar,{size:"small"},"Y"),h.default.createElement(E.Avatar,{size:"small",icon:"customer"}),h.default.createElement(E.Avatar,{size:"small",src:"https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png"}),h.default.createElement(E.Avatar,{size:"small",shape:"square"},"Y"),h.default.createElement(E.Avatar,{size:"small",shape:"square",icon:"customer"}),h.default.createElement(E.Avatar,{size:"small",shape:"square",src:"https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png"})),h.default.createElement("div",{className:"zent-avatar-list"},h.default.createElement(E.Avatar,null,"Y"),h.default.createElement(E.Avatar,{icon:"customer"}),h.default.createElement(E.Avatar,{src:"https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png"}),h.default.createElement(E.Avatar,{shape:"square"},"Y"),h.default.createElement(E.Avatar,{shape:"square",icon:"customer"}),h.default.createElement(E.Avatar,{shape:"square",src:"https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png"})),h.default.createElement("div",{className:"zent-avatar-list"},h.default.createElement(E.Avatar,{size:"large"},"Y"),h.default.createElement(E.Avatar,{size:"large",icon:"customer"}),h.default.createElement(E.Avatar,{size:"large",src:"https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png"}),h.default.createElement(E.Avatar,{size:"large",shape:"square"},"Y"),h.default.createElement(E.Avatar,{size:"large",shape:"square",icon:"customer"}),h.default.createElement(E.Avatar,{size:"large",shape:"square",src:"https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png"})))},_=function(){return h.default.createElement("div",null,h.default.createElement("div",{className:"zent-avatar-list"},h.default.createElement(E.Avatar,null,"MJ"),h.default.createElement(E.Avatar,null,"Billie"),h.default.createElement(E.Avatar,null,"Jean"),h.default.createElement(E.Avatar,{shape:"square"},"MJ"),h.default.createElement(E.Avatar,{shape:"square"},"Beat"),h.default.createElement(E.Avatar,{shape:"square"},"It")))},q=function(){return h.default.createElement("div",null,h.default.createElement("div",{className:"zent-avatar-list"},h.default.createElement(E.Avatar,{style:{backgroundColor:"#a1b56c"}},"MJ"),h.default.createElement(E.Avatar,{style:{backgroundColor:"#f7ca88"}},"Billie"),h.default.createElement(E.Avatar,{style:{backgroundColor:"#ab4642"}},"Jean"),h.default.createElement(E.Badge,{dot:!0},h.default.createElement(E.Avatar,{style:{backgroundColor:"#ba8baf"}},"MJ")),h.default.createElement(E.Badge,{count:3},h.default.createElement(E.Avatar,{style:{backgroundColor:"#7cafc2"}},"Beat")),h.default.createElement(E.Avatar,{size:48,style:{fontSize:30,backgroundColor:"#e8e8e8",color:"#dc9656"}},"IT")))},N=function(a){function n(){var a,s,t,p;(0,u.default)(this,n);for(var e=arguments.length,c=Array(e),o=0;o<e;o++)c[o]=arguments[o];return s=t=(0,d.default)(this,(a=n.__proto__||Object.getPrototypeOf(n)).call.apply(a,[this].concat(c))),t.state={showCode:!1},t.toggle=function(){t.setState({showCode:!t.state.showCode})},p=s,(0,d.default)(t,p)}return(0,m.default)(n,a),(0,i.default)(n,[{key:"render",value:function(){var a=this.state.showCode,n=this.props,s=n.title,t=n.src,e=n.children;return h.default.createElement("div",{className:"zandoc-react-demo"},h.default.createElement("div",{className:"zandoc-react-demo__preview"},e),h.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},h.default.createElement("div",{className:"zandoc-react-demo__title"},h.default.createElement("p",null,s||"")),h.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(a?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),a&&h.default.createElement("pre",{className:"zandoc-react-demo__code"},h.default.createElement(p,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),n}(b.Component),C=function(a){function n(){return(0,u.default)(this,n),(0,d.default)(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return(0,m.default)(n,a),(0,i.default)(n,[{key:"componentDidMount",value:function(){var a=location.hash;if(a){var n=document.querySelector('a[href="'+a+'"]');n&&(0,z.default)(document.documentElement,0,o(n,-9))}}},{key:"render",value:function(){return h.default.createElement("div",{className:"zandoc-react-container",key:null},h.default.createElement(c,{style:".zent-avatar-list {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n\tmargin-top: 10px;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center\n}\n.zent-avatar-list:first-child {\n\tmargin-top: 0;\n}\n.zent-avatar-list .zent-avatar:not(:last-child), .zent-avatar-list .zent-badge:not(:last-child) {\n\t\tmargin-right: 10px\n}"}),h.default.createElement(e,{html:'<h2 class="anchor-heading"><a href="#avatar-tou-xiang">¶</a><a href="javascript:void(0)" id="avatar-tou-xiang" class="anchor-point"></a>Avatar 头像</h2>\n<p>用来代表用户或事物，支持图标，图片或字符。</p>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),h.default.createElement(N,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Avatar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-avatar-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Y<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>customer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span>\n        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>\n        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Y<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>customer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span>\n        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>\n        <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span>\n        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-avatar-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span><span class="token punctuation">></span></span>Y<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>customer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span>\n        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Y<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>customer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span>\n        <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span>\n        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-avatar-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>Y<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>customer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span>\n        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span>\n        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Y<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>customer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span>\n        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span>\n        <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span>\n        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png<span class="token punctuation">"</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},h.default.createElement(y)),h.default.createElement(N,{title:"自适应文字大小",id:"Demotext",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Avatar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-avatar-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span><span class="token punctuation">></span></span>MJ<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span><span class="token punctuation">></span></span>Billie<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span><span class="token punctuation">></span></span>Jean<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>MJ<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Beat<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>It<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},h.default.createElement(_)),h.default.createElement(N,{title:"自定义样式",id:"Democustom",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Avatar<span class="token punctuation">,</span> Badge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-avatar-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token operator">&lt;</span>Avatar style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#a1b56c\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>MJ<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n      <span class="token operator">&lt;</span>Avatar style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#f7ca88\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Billie<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n      <span class="token operator">&lt;</span>Avatar style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#ab4642\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Jean<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">dot</span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>Avatar style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#ba8baf\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>MJ<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>Avatar style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#7cafc2\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Beat<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n      <span class="token operator">&lt;</span>Avatar\n        size<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">48</span><span class="token punctuation">}</span>\n        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#e8e8e8\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'#dc9656\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token operator">></span>\n        IT\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Avatar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},h.default.createElement(q)),h.default.createElement(e,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>收否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>shape</td>\n<td>头像形状，圆形或正方形</td>\n<td><code>string</code></td>\n<td>否</td>\n<td><code>\'circle\'</code></td>\n<td><code>\'square\'</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>头像大小，可以传入自定义尺寸</td>\n<td><code>string</code>\n \n|\n \n<code>number</code></td>\n<td>否</td>\n<td><code>\'default\'</code></td>\n<td><code>\'small\'</code>\n \n|\n \n<code>\'large\'</code>\n \n|\n 像素值</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>图标名称</td>\n<td><code>string</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>src</td>\n<td>图片地址</td>\n<td><code>string</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>children</td>\n<td>文字内容</td>\n<td><code>string</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>bordered</td>\n<td>是否显示边框</td>\n<td><code>bool</code></td>\n<td>否</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>style</td>\n<td>自定义样式</td>\n<td><code>object</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义类名</td>\n<td><code>string</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义类前缀</td>\n<td><code>string</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p><strong>注意</strong>：<code>icon</code>, <code>src</code> 以及 <code>children</code> 是三选一互斥的，同时传入多个的行为未定义，请不要这样用。</p>'}))}}]),n}(b.Component);n.default=C}});