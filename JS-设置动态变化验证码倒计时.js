var countDown = function(){
	var time = 60;
	(function(){
		if(time > 0){
			$sendMsg.innerHTML = '重新发送 ('+ (time--) +')';
			
			// 这么写arguments.callee其实就类似递归调用当前函数
			// 1e3 = 1000
			setTimeout(arguments.callee, 1e3);
		}else{
			$sendMsg.innerHTML = '重新发送';
			$sendMsg.className = 'send';
		}
	}());
	$sendMsg.className += ' disabled';
};