var tools2={
	getStyle:function(obj,attr){
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
	},
	// 越来越慢，每次速度变为剩下距离的1/10
	move:function(obj,attr,end){
		// 在下一次函数进来的时候清除上一次的函数，函数防抖
		clearInterval(obj.timer);
		var start=parseInt(this.getStyle(obj,attr));
		obj.timer=setInterval(function(){
			var distance=end-start;
			// 计算每一步走多少px
			var speed=distance/10;
			// 正向运动,最后speed如0.9向上取整得到1；
			// 而负向运动的时候，最后speed如-0.9需要向下取整
			speed>0?speed=Math.ceil(speed):Math.floor(speed);
			start += speed;
			obj.style[attr]=start+"px";
			// 最后取取整后都是1像素1像素的走的，一定走到终点
			if(start===end){
				clearInterval(obj.timer);
			}
		},20)
	
	},
	// 匀速运动
	linearMove:function(obj,attr,end,time){
		clearInterval(obj.timer)
		var start=parseInt(this.getStyle(obj,attr));
		var distance=end-start;
		// 计算分多少步走完
		var steps=parseInt(time/20);
		// 计算每一步走的像素值：
		var speed=distance/steps;
		obj.timer=setInterval(function(){
			start += speed;
			obj.style.attr=start+"px";
			if(Math.abs(end-start)<Math.abs(speed)){
				clearInterval(obj.timer);
				obj.style[attr]=end+"px";
			}
		},20)
		
	},
	// 获取body的宽高
	getBody : function () {
		return {
			width : document.documentElement.clientWidth || document.body.clientWidth,
			height : document.documentElement.clientHeight || document.body.clientHeight
		}
	},
	// obj：dom对象（要设置样式的元素）
	// attrObj代入一个对象作为实参
	// 如{"width" : "200px", "height" : "300px"}
	setStyle : function (obj, attrObj) {
		for(var key in attrObj) {
			obj.style[key] = attrObj[key];
		}
	},
	
	/* 让元素在窗口范围绝对居中
	 * obj  <DOM Object> 要居中的那个元素
	 */
	showCenter : function (obj) {
		// 显示
		// 要先设置显示，否则获得offsetwidth和offsetheight为0
		obj.style.display = "block";
		let _this = this;
		function center () {
			// 元素居中时候，left的值是body宽减去元素宽的一半，高同理
			var _top = (_this.getBody().height - obj.offsetHeight) / 2;
			var _left = (_this.getBody().width - obj.offsetWidth) / 2;
			// console.log(obj.offsetHeight, obj.offsetWidth);
			// 引入设置属性的方法设置样式
			_this.setStyle(obj, {
				position :"absolute",
				left : _left + "px",
				top : _top + "px"
			});
		};
		center();
		// 窗口大小发生改变的时候重新计算坐标
		window.onresize = center;
	}
	
}