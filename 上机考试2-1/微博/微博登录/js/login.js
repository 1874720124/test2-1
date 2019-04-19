function Login(btn){
	this.btn=document.querySelector(btn);
	this.container = document.querySelector("#container");
	this.afterPublish=document.getElementById("afterContainer");
	this.afterUsername=document.getElementById("afterUsername");
	this.afetrWords=document.getElementById("afetrWords");
// 	this.afterUsername.innerHTML=username;
// 	this.afetrWords.innerHTML=words;
	this.bindEvents();
}
Login.prototype.bindEvents=function(){
	this.btn.onclick = () => {
			// 给container插入内容
			this.container.innerHTML =` <h4>微博发布</h4>
			<a id="closeBtn" class="close_btn" href="javascript:;">×</a>
			<p><label>用户名：<input id="username" type="text"></label></p>
			<p><textarea rows="3" cols="40" id="words"></textarea></p>
			<p><button id="loginBtn" class="" type="button">发布</button>
			<button id="backBtn" class="backBtn" type="button">撤回</button></p>
			`
			;
			//内容居中
			tools2.showCenter(this.container);
			// 创建model
			this.modal = document.createElement("div");
			
			this.modal.className = "modal";
			document.body.appendChild(this.modal);
			
			this.container.onclick =  (e)=> {
				e = e || window.event;
				var target = e.target || e.srcElement;
				// 事件委托根据事件源id名分支
				switch(target.id) {
					case "loginBtn":this.loginBtnClick();break;
// 						
						// 点击关闭按钮，移除发布框和磨罩层
					case "closeBtn" :
						this.container.style.display = "none";
						document.body.removeChild(this.modal);
				}	
			
	}
	this.loginBtnClick=()=>{
		
		document.body.appendChild()
		this.afterContainer.classList.add("ac");
		console.log(11)
	this.username = document.querySelector("#username").value;
	this.words = document.querySelector("#words").value;
	this.afterUsername=this.username;
	this.afetrWords=this.words;
	}
	
}
}

