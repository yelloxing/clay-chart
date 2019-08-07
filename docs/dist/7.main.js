(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{46:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var l=a(1),n=a.n(l),i=a(39),r=a.n(i);class m extends n.a.Component{componentDidMount(){prettyPrint();let e=document.getElementById("api-nav").getElementsByTagName("li");for(let t=0;t<e.length;t++)e[t].setAttribute("active","no");r()(".apimenu-item").attr("active","no"),r()("#how-to-use").attr("active","yes"),window.image2d_docs_api_navHelper={small:[],little:[],type:"how-to-use"};let t=r()(".title.small"),a=r()(".title.little");for(let e=0;e<t.length;e++)window.image2d_docs_api_navHelper.small[e]={top:t[e].offsetTop};for(let e=0;e<a.length;e++)window.image2d_docs_api_navHelper.little[e]={top:a[e].offsetTop}}render(){return n.a.createElement("div",{className:"container"},n.a.createElement("p",null,"首先，让我们来了解一个这个库主要解决的问题是什么，如何使用以及问题反馈等基本信息。"),n.a.createElement("h4",{className:"title small"},"关注的问题"),n.a.createElement("p",null,"本库致力于提供更简单的Web端二维绘图接口，主要包括这些方面：画笔、辅助计算、结点操作和一些零碎的小工具方法。我们希望绘图是简单而有趣的、高效而愉悦的！"),n.a.createElement("p",null,"主要是在svg和canvas2D上绘图，虽然有提供比如Maritx4坐标变换等三维相关方法，这是考虑到一些潜在的需求。"),n.a.createElement("h4",{className:"title small"},"使用"),n.a.createElement("p",null,"如果你开发的是一个web项目，直接在页面引入打包后的文件后即可（在代码中通过image2D或$$调用）："),n.a.createElement("pre",{className:"prettyprint lang-html"},'<script src="./build/image2D.min.js" type="text/javascript"><\/script>'),n.a.createElement("p",null,"如果你想通过npm方式管理，首先你需要通过命令行安装image2D，就像这样："),n.a.createElement("pre",{className:"prettyprint lang-js"},"npm install --save image2d"),n.a.createElement("p",null,"安装好了以后，在需要的地方引入即可："),n.a.createElement("pre",{className:"prettyprint lang-js"},"// ESMAScript6+规范引入\nimport $$ from 'image2d';"),n.a.createElement("p",null,"或者"),n.a.createElement("pre",{className:"prettyprint lang-js"},'// CommonJS / AMD规范引入\nconst $$ = require("image2d");'),n.a.createElement("h4",{className:"title small"},"获取帮助"),n.a.createElement("p",null,"在使用image2D的时候，如果遇到任何疑惑或问题，包括建议或对未来版本的想法，请先在",n.a.createElement("a",{target:"_blank",href:"https://github.com/yelloxing/image2D/issues"},"Github issue"),"上查找是否存在相似内容，然后进行补充或追问，当然也可以增加新的话题进行交流，除非特殊情况，你会在48小时内获得",n.a.createElement("a",{href:"mailto:yelloxing@gmail.com"},"作者"),"回复。"))}}}}]);