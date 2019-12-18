(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){prettyPrint(),1==arguments.length?((0,i.default)("li",document.getElementById("topHeader")).attr("active","no"),(0,i.default)("#"+t).attr("active","yes")):2==arguments.length&&"api"==t&&((0,i.default)("li.apimenu-item",document.getElementById("api-nav")).attr("active","no"),(0,i.default)("#"+e).attr("active","yes"))};var n,i=(n=a(4))&&n.__esModule?n:{default:n}},15:function(t,e,a){"use strict";a.r(e);var n=a(16),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e.default=i.a},16:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=(n=a(1))&&n.__esModule?n:{default:n};e.default={mounted:function(){(0,i.default)("api","painter")}}},37:function(t,e,a){"use strict";function n(){var t=this;return t.$createElement,t._self._c,t._m(0)}var i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("p",[t._v("\n            画笔是image2D的主体部分，根据当前绑定的结点不同，获取的是不同类型的画笔，目前支持svg和canvas2D画笔：\n        ")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("var painter=imageObject.painter();")]),t._v(" "),a("p",[t._v("\n            如果维护的第一个结点是canvas，返回的就是专门在canvas上绘图的位图画笔，svg等别的类似。\n        ")]),t._v(" "),a("p",[t._v("\n            获取画笔后就可以调用painter上的方法进行绘图了，不过在这之前，你还可以对画笔进行属性（文字大小，颜色等）配置：\n        ")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.config();")]),t._v(" "),a("p",[t._v("\n            考虑到属性设置可能有多个或单个，为了方便，提供二种参数类型：\n        ")]),t._v(" "),a("ul",[a("li",[t._v("(json):一次配置多个属性，键值对的方式。")]),t._v(" "),a("li",[t._v("(key, value):对属性key设置为value。")])]),t._v(" "),a("p",[t._v("\n            不同画笔的使用大体和上面的类似，差异的部分会在具体的绘图工具下说明，下面我们来看看画笔可配置属性有哪些：\n        ")]),t._v(" "),a("ul",[a("li",[t._v('"fillStyle":填充色或图案，默认"#000"。')]),t._v(" "),a("li",[t._v('"strokeStyle":轮廓色或图案，默认"#000"。')]),t._v(" "),a("li",[t._v('"lineWidth":线条宽度，默认1(单位px，下同)。')]),t._v(" "),a("li",[t._v('"textAlign":文字水平对齐方式，默认"left"左对齐（还有"center"居中和"right"右对齐）。')]),t._v(" "),a("li",[t._v('"textBaseline":文字垂直对齐方式，默认"middle"垂直居中（还有"top"上对齐和"bottom"下对齐）。')]),t._v(" "),a("li",[t._v('"font-size":文字大小，默认16。')]),t._v(" "),a("li",[t._v('"font-family":字体，默认"sans-serif"。')]),t._v(" "),a("li",[t._v("\"arc-start-cap\":圆弧开始端闭合方式，默认'butt'直线闭合（还有'round'圆帽闭合）。")]),t._v(" "),a("li",[t._v('"arc-end-cap":圆弧结束端闭合方式，和上一个类似。')])]),t._v(" "),a("h4",{staticClass:"title small"},[t._v("canvas2D")]),t._v(" "),a("p",[t._v("\n            除了上面列出的可配置项，因为canvas2D的配置是直接连原始画笔的（不是全部），因此其自身的2d画笔原来可配置的属性依旧可以配置，请知悉。这种绘图方法相对比较简单，下面我们来看看其特有的一些简单的绘图方法。\n        ")]),t._v(" "),a("p",{staticClass:"warn"},[t._v("\n            原始画笔的意思是2d上下文，不是我们抽象的painter，因此不同的painter如果管理的是同一个canvas，属性配置不是完全独立的（后面要说明的svg就是独立的）。\n        ")]),t._v(" "),a("p",[t._v("把当前绘制的图形变成base64返回：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("var base64=painter.toDataURL();")]),t._v(" "),a("p",[t._v("擦除画布上正方形大小是width*height的区域(正方形左上角坐标(x, y))，x和y默认0，width和height默认就是画布的尺寸，都是可选的：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.clearRect(x, y, width, height);")]),t._v(" "),a("p",[t._v("把图像、画布或视频绘制到画布的指定位置上：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.drawImage();")]),t._v(" "),a("ul",[a("li",[t._v("(img, x, y):在画布上定位图像。")]),t._v(" "),a("li",[t._v("(img, x, y, width, height):在画布上定位图像，并规定图像的宽度和高度。")]),t._v(" "),a("li",[t._v("(img, sx, sy, swidth, sheight, x, y, width, height):剪切图像，并在画布上定位被剪切的部分。")])]),t._v(" "),a("h4",{staticClass:"title small"},[t._v("svg")]),t._v(" "),a("p",[t._v("\n            这种画笔比较特殊，画笔是绑定在维护了svg结点的结点对象上的，不过具体的绘制（比如文字是text标签）却需要对应更具体的标签，因此获取painter方法的时候可以传递一个选择器selector来绑定本次绘制目标（可选）：\n        ")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("var painter=imageObject.painter(selector);")]),t._v(" "),a("p",[t._v("\n            因为绘制文字、圆形和圆弧等对应的目标标签不一样，并且一个结点只可以绘制一个图形，因此在每次绘制前都需要明确目标结点：\n        ")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.bind(selector);")]),t._v(" "),a("p",[t._v('\n            大部分情况下，selector应该都是模板字符串，比如"<text>"，绘制结束需要追加到svg中去，我们提供了四种追加方法：\n        ')]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.appendTo|prependTo|afterTo|beforeTo(selector);")]),t._v(" "),a("p",[t._v("\n            因为限制了查找上下文是获取画笔的svg，只需要传递一个参数，具体方法和前面常规的结点操作一样。\n        ")]),t._v(" "),a("p",[t._v("\n            鉴于svg绘图的特殊性，下面以绘制文字举一个例子来看看绘制整体代码：\n        ")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("// 获取画笔\nvar painter=$$('svg').painter('<text>');\n\n// 配置画笔\npainter.config({\n    \"fillStyle\":\"red\",\n    \"font-size\":30\n});\n\n// 绘制文字并追加到画布\npainter.fillText('Step By Step', 100, 100).appendTo('g.text');")]),t._v(" "),a("h4",{staticClass:"title small"},[t._v("绘图方法")]),t._v(" "),a("p",[t._v("\n            上面说明的绘图方法都是具体画笔特有的（因为不同的画笔存在差异），除此之外，大部分方法是通用的。\n        ")]),t._v(" "),a("p",[t._v("在点(x, y)处绘制填充的文字text；deg表示文字旋转角度，可选：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.fillText(text, x, y[, deg]);")]),t._v(" "),a("p",[t._v("在点(x, y)处绘制轮廓的文字text；deg表示文字旋转角度，可选：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.strokeText(text, x, y[, deg]);")]),t._v(" "),a("p",[t._v("以(cx, cy)为圆心，内外半径分别是r1和r2，从弧度beginDeg开始，跨越弧度deg，绘制填充圆弧：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.fillArc(cx, cy, r1, r2, beginDeg, deg);")]),t._v(" "),a("p",{staticClass:"warn"},[t._v("\n            除非特别说明，角度全部采用弧度值，这是为了方便记忆，别的地方一样。\n        ")]),t._v(" "),a("p",[t._v("和fillArc方法类似，只不过绘制的是轮廓圆弧：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.strokeArc(cx, cy, r1, r2, beginDeg, deg);")]),t._v(" "),a("p",[t._v("以(cx, cy)为圆心，半径r绘制填充圆形：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.fillCircle(cx, cy, r);")]),t._v(" "),a("p",[t._v("以(cx, cy)为圆心，半径r绘制轮廓圆形：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.strokeCircle(cx, cy, r);")]),t._v(" "),a("p",[t._v("以(x, y)为左上角，宽width，高height绘制填充矩形：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.fillRect(x, y, width, height);")]),t._v(" "),a("p",[t._v("以(x, y)为左上角，宽width，高height绘制轮廓矩形：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.strokeRect(x, y, width, height);")]),t._v(" "),a("h6",{staticClass:"title little"},[t._v("路径")]),t._v(" "),a("p",[t._v("\n            基于路径可以绘制几乎大部分图形，这里独立一小段来说明。\n        ")]),t._v(" "),a("p",[t._v("开始一段独立的路径：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.beginPath();")]),t._v(" "),a("p",[t._v("闭合当前路径，也就是路径首尾闭合：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.closePath();")]),t._v(" "),a("p",[t._v("画笔移动到点(x, y)，此时笔离开了画布：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.moveTo(x, y);")]),t._v(" "),a("p",[t._v("画笔移动到点(x, y)，此时笔没有离开画布：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.lineTo(x, y);")]),t._v(" "),a("p",[t._v("以(cx, cy)为圆心，半径r，从弧度beginDeg开始，跨越弧度deg画弧，此时笔没有离开画布：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.arc(cx, cy, r, beginDeg, deg);")]),t._v(" "),a("p",[t._v("二次贝塞尔曲线到：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.quadraticCurveTo(cpx, cpy, x, y);")]),t._v(" "),a("p",{staticClass:"warn"},[t._v("\n            只有一个控制点p(cpx, cpy),画笔当前的位置和p(x, y)分别的起点和终点。\n        ")]),t._v(" "),a("p",[t._v("三次贝塞尔曲线到：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);")]),t._v(" "),a("p",{staticClass:"warn"},[t._v("\n            有二个控制点p(cp1x, cp1y)和p(cp2x, cp2y),画笔当前的位置和p(x, y)分别的起点和终点。\n        ")]),t._v(" "),a("p",[t._v("把当前路径包裹的区域填充颜色：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.fill();")]),t._v(" "),a("p",[t._v("把当前路径上色（轮廓线）：")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.stroke();")]),t._v(" "),a("h4",{staticClass:"title small"},[t._v("渐变色")]),t._v(" "),a("p",[t._v("\n            除了使用纯色填充，还可以使用渐变色作为画笔的颜色，你把它看成普通的颜色使用就可以了。\n        ")]),t._v(" "),a("h6",{staticClass:"title little"},[t._v("线性渐变")]),t._v(" "),a("p",[t._v("\n            首先你需要使用画笔的createLinearGradient创建线性渐变对象，四个参数分别表示渐变的起点P(x1, y1)和终点P(x2, y2)：\n        ")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("var linearGradient = painter.createLinearGradient(x1, y1, x2, y2);")]),t._v(" "),a("p",{staticClass:"warn"},[t._v("\n            温馨提示：canvas画笔上述参数的单位是px，svg画笔上述参数是%，请一定要注意区分（下同）。\n        ")]),t._v(" "),a("h6",{staticClass:"title little"},[t._v("环形渐变")]),t._v(" "),a("p",[t._v("\n            同样的，你需要使用画笔的createRadialGradient创建环形渐变对象，三个参数分别表示渐变的圆心P(cx, cy)和半径r：\n        ")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("var radialGradient = painter.createRadialGradient(cx, cy, r);")]),t._v(" "),a("p",{staticClass:"warn"},[t._v("\n            温馨提示：渐变的起点是圆心。\n        ")]),t._v(" "),a("h6",{staticClass:"title little"},[t._v("设置与使用")]),t._v(" "),a("p",[t._v("\n            设置渐变范围以后，你需要在渐变范围中添加渐变色，可以添加任意多个：\n        ")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("linearGradient.addColorStop(deep, color);")]),t._v(" "),a("p",[t._v("\n            上述deep取值为闭区间[0, 1]，color可以是任意合法的颜色值。\n        ")]),t._v(" "),a("p",[t._v("\n            渐变如何使用，直接调用渐变的value方法即可：\n        ")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v('painter.config({\n    "fillStyle": linearGradient.value()\n});')]),t._v(" "),a("p",[t._v("\n            比如上面，我们给画笔设置填充色就是使用了我们刚刚获取的渐变色。\n        ")]),t._v(" "),a("h4",{staticClass:"title small"},[t._v("变换")]),t._v(" "),a("p",[t._v("\n            这里的变换指的是画笔相对画布的变换，和坐标变换不一样，前者改变的是画笔特性，或者是求解点坐标的方法。\n        ")]),t._v(" "),a("p",[t._v("\n            在说明具体的变换方法前，我们先来看二个与之相关的基本方法。\n        ")]),t._v(" "),a("h6",{staticClass:"title little"},[t._v("保存")]),t._v(" "),a("p",[t._v("\n            保存当前的绘图状态：\n        ")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.save();")]),t._v(" "),a("h6",{staticClass:"title little"},[t._v("恢复")]),t._v(" "),a("p",[t._v("\n            恢复之前保存的绘图状态：\n        ")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.restore();")]),t._v(" "),a("p",[t._v("\n            接着，我们说明几个具体的变换方法。\n        ")]),t._v(" "),a("h6",{staticClass:"title little"},[t._v("移动")]),t._v(" "),a("p",[t._v("\n            把绘图的原点x坐标增加dx，y增加dy：\n        ")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.translate(dx, dy);")]),t._v(" "),a("h6",{staticClass:"title little"},[t._v("旋转")]),t._v(" "),a("p",[t._v("\n            围绕原点旋转deg：\n        ")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.rotate(deg);")]),t._v(" "),a("h6",{staticClass:"title little"},[t._v("缩放")]),t._v(" "),a("p",[t._v("\n            x坐标和y坐标分别缩放sx和sy倍（sy缺省取sx）：\n        ")]),t._v(" "),a("pre",{staticClass:"prettyprint lang-js"},[t._v("painter.scale(sx[, sy]);")]),t._v(" "),a("p",{staticClass:"nav-footer"},[a("a",{staticClass:"pre",attrs:{href:"#/api/xhtml"}},[t._v("结点操作")]),t._v(" "),a("a",{staticClass:"next",attrs:{href:"#/api/calculate"}},[t._v("计算")])])])}];n._withStripped=!0,a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}))},57:function(t,e,a){"use strict";a.r(e);var n=a(37),i=a(15);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);var r=a(0),v=Object(r.a)(i.default,n.a,n.b,!1,null,null,null);v.options.__file="src/pages/api/painter.vue",e.default=v.exports}}]);