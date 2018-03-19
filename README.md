# blackScaleLens.js
一个类似于商场放大镜的小工具，引入实例化后，调用即可（支持PC端与移动端）。

使用步骤：
1.引入blackScaleLens.js
2.实例化并传入元素，可传入配置参数。
#需要放大的元素（必须）：img Dom对象
#配置参数（可选）：传入对象，默认参数有
'scale' : 5,      // 放大图片的倍数 number
'width' : 200,    // 放大镜宽度 number
'height' : 200,   // 放大镜高度 number
'radius' : '0',  // 放大镜圆角 string
 
3.看一个例子你就明白了
var elem = document.getElementById('demo'); // #demo 是一个<img />元素
var black = new blackScaleLens(elem,{
    'scale' : 3,
    'width' : 150,
    'height' : 150,
    'radius' : '5px'
  });
black.start(); // 启动功能
4.大功告成
