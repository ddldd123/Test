$(document).ready(function() {
	if(/AppleWebKit.*mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
		if(window.location.href.indexOf("?mobile") < 0) {
			try {
				if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
					window.location.href = "http://www.baidu.com";
				} else if(/iPad/i.test(navigator.userAgent)) {
					window.location.href = "http://www.baidu.com";
				} else {
					window.location.href = "http://www.baidu.com"
				}
			} catch(e) {}
		}
	}
});