/**
*   @function 放大镜的构造函数
*   @argument elem 需要放大的元素
*   @argument scaleData 一些配置参数
*   @author   black
*   @time     2018/03/18 21点55分
*   @contact qq:1713172499 github:https://github.com/1713172499/blackScaleLens.js
*   您可以自由修改次脚本
*/
function blackScaleLens(elem,scaleData){
  this.initScaleData = {
    'scale' : 5,      // 放大图片的倍数
    'width' : 200,    // 放大镜宽度
    'height' : 200,   // 放大镜高度
    'radius' : '0'  // 放大镜圆角
  };
  for (var v in scaleData) {
    if (this.initScaleData.hasOwnProperty(v)) {
      this.initScaleData[v] = scaleData[v];
    }
  }
  // 克隆需要放大的图像
  this.elem = elem.cloneNode(true);
  // 定义克隆后图像的相关属性
  this.elem.style.margin = '0';
  this.elem.style.padding = '0';
  this.elem.style.display = 'block';
  this.elem.style.width = elem.width * this.initScaleData.scale+'px';
  this.elem.style.height = elem.height * this.initScaleData.scale+'px';
  this.elem.style.maxWidth = '';
  // 添加放大镜
  var scaleView = document.createElement('div');
  // 定义放大镜相关属性
  scaleView.style.width = this.initScaleData.width+"px";
  scaleView.style.height = this.initScaleData.height+"px";
  scaleView.style.position = "absolute";
  scaleView.style.overflow = 'hidden';
  scaleView.style.display = 'none';
  scaleView.style.border = '1px solid #eee';
  scaleView.style.borderRadius = this.initScaleData.radius;
  // 追加克隆后图片到放大镜里
  scaleView.appendChild(this.elem);
  // 循环获取图片距离左边距离
  function getOffsetLeft(obj){
    var oLeft = obj.offsetLeft;
    var pNum = obj.offsetParent;
    while(pNum != null){
      oLeft += pNum.offsetLeft;
      pNum = pNum.offsetParent;
    }
    return oLeft;
  }
  // 循环获取图片距离顶部距离
  function getOffsetTop(obj){
    var oTop = obj.offsetTop;
    var pNum = obj.offsetParent;
    while(pNum != null){
      oTop += pNum.offsetTop;
      pNum = pNum.offsetParent;
    }
    return oTop;
  }
  // 添加事件
  function addEvent(element, type, handler, useCapture) {
    if(element.addEventListener) {
      element.addEventListener(type, handler, useCapture ? true : false);
    } else if(element.attachEvent) {
      element.attachEvent('on' + type, handler);
    } else if(element != window){
      element['on' + type] = handler;
    }
  };
  // 移除事件
  function removeEvent(element, type, handler, useCapture) {
    if(element.removeEventListener) {
      element.removeEventListener(type, handler, useCapture ? true : false);
    } else if(element.detachEvent) {
       element.detachEvent('on' + type, handler);
    } else if(element != window){
      element['on' + type] = null;
    }
  };
  // 启动函数
  this.start = function(){
    // 往body里追加显示视图
    document.body.appendChild(scaleView);
    // 获取构造方法this指向
    var nowThis = this;
    // PC端鼠标移动事件
    addEvent(elem,'mousemove',function(e){
      doing(e,scaleView,nowThis);
    });
    // PC端鼠标移出
    addEvent(elem,'mouseout',function(){
      scaleView.style.display = 'none';
    });
    addEvent(elem,'dragstart',function(e){
      e.preventDefault();
    })
    // 移动端触摸移动
    addEvent(elem,'touchmove',function(e){
      e.preventDefault();
      doing(e,scaleView,nowThis);
    });
    // 移动端触控结束
    addEvent(elem,'touchend',function(e){
      scaleView.style.display = 'none';
    });
    // 移动端触控被中断
    addEvent(elem,'touchcancel',function(){
      scaleView.style.display = 'none';
    });
  }
  // 操作放大镜视图
  function doing(e,scaleView,nowThis){
    // 获取当前指针信息
    var e = e || window.event
    var x = e.touches ? e.touches[0].pageX : e.pageX; // 鼠标相对于文档的左边距
    var y = e.touches ? e.touches[0].pageY : e.pageY ;
    var ex = x - getOffsetLeft(elem); // 鼠标距离元素的左边距
    var ey = y - getOffsetTop(elem);
    // 定义放大视图的相关属性
    scaleView.style.display = 'block';
    // 放大镜跟随鼠标
    scaleView.style.left = x+8+"px";
    scaleView.style.top = y+8+"px";
    // 移动放大视图
    scaleView.scrollTop = ey * nowThis.initScaleData.scale;
    scaleView.scrollLeft = ex * nowThis.initScaleData.scale;
  }
}
