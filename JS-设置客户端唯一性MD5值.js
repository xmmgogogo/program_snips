/*! utils  */
(function(){
	var getGuestId = function(){
		var cookieGid = Cookies.get('guest_id');
		var guestId = cookieGid || (function(){
			var ret = '';
			var str = md5([
					navigator.userAgent,
					navigator.language,
					navigator.platform,
					screen.width + 'x' + screen.height + 'x' + screen.colorDepth,
					Date.now()
				].join('|'));

			var arr = str.match(/.{8}/g);
			var num = 0;
			for(var i in arr){
				num += parseInt(arr[i], 16);
			}

			ret = 'guest_' + num;
			Cookies.set('guest_id', ret, {expires: 300, path: '/'});
			console.log('new guest_id: ' + ret);
			return ret;
		}());

		return guestId;
	};


	window.utils = {
		$: $,
		calcFontSize: calcFontSize,
		ajax: ajax,
		toast: toast,
		getAppUrl: getAppUrl,
		tryOpen: tryOpen,
		getGuestId: getGuestId,
		urlParse: urlParse,
		ping: ping(),
		isiOS: /iP(hone|ad|od)/.test(navigator.userAgent)
	};
}());