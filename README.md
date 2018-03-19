# blackScaleLens.js
一个类似于商场放大镜的小工具，引入实例化后，调用即可（支持PC端与移动端）.

使用步骤：<br>
1.引入blackScaleLens.js.<br>

2.实例化并传入元素，可传入配置参数.<br>
2.1 需要放大的元素（必须）：img Dom对象.<br>
2.2 配置参数（可选）：传入对象.<br>
默认参数有<br>
'scale' : 5,      // 放大图片的倍数 number<br>
'width' : 200,    // 放大镜宽度 number<br>
'height' : 200,   // 放大镜高度 number<br>
'radius' : '0',  // 放大镜圆角 string<br>
 <br>
	
3.看一个例子你就明白了.<br>
var elem = document.getElementById('demo'); // #demo 是一个<img />元素<br>
var black = new blackScaleLens(elem,{<br>
    'scale' : 3,<br>
    'width' : 150,<br>
    'height' : 150,<br>
    'radius' : '5px'<br>
  });<br>
black.start(); // 启动功能<br>

4.大功告成<br>
