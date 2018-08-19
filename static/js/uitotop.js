document.write("<style type='text/css'>.tanchuxiao{position: fixed;right: 50px;bottom: 50px;z-index: 999999999;text-align: right;_position: absolute;_top: expression(documentElement.scrollTop + documentElement.clientHeight-this.offsetHeight-52);}.huibo {width: 261px;height: 31px;padding: 3px 0 0 4px;background: url(/v1/images/dbgd/d_01.gif) top left no-repeat;margin-top: 6px;}.huibo_a {float: left;width: 152px;height: 27px;padding-right: 3px;}.huibo_b {float: left;width: 102px;height: 31px;}.wbk {width: 120px;height: 23px;line-height: 23px;font-size: 14px;font-weight: bold;font-family: \"宋体\";color: #484848;border: none;padding: 2px 5px 2px 27px;background: url(/v1/images/dbgd/d_04.jpg) top left no-repeat;}.button {display: block;width: 102px;height: 31px;background: url(/v1/images/dbgd/d_02.jpg) no-repeat left top;vertical-align: middle;float: right;}.button:hover {background-position: left bottom;}.tanchu {background: url(/v1/images/dbgd/d_05.jpg) no-repeat;width: 265px;height: 74px;display: none;z-index:99999;}.tanchu p {padding: 5px;line-height: 20px;color: #484848;text-align:left;}.tanchu p span {color: #f04249;}.tanchu_a {background: url(/v1/images/dbgd/d_06.jpg) no-repeat;width: 265px;height: 104px;display:none;z-index:99999;}.tanchu_a p {padding: 5px;line-height: 23px;color: #484848;font-size: 14px;text-align:left;}.tanchu_a p span {color: #f04249;}.queding {background: url(/v1/images/dbgd/d_07.jpg) no-repeat;width: 61px;height: 31px;border: none;margin-left:107px;float:left}</style>");
$(function() {
	$("#call_me_phone").focus(function() {
		$("#huibo_msg_1").show(300);
		$("#huibo_msg_1").siblings().hide();
		$(this).val('');
	}).blur(function() {
		$("#huibo_msg_1").hide(300);
		if($(this).val() == '') {
			$(this).val('输入您的电话号码');
		}
	})
})

function close_huibo_tips() {
	$("#huibo_msg_2").hide(300);
}

function call_me() {
	var phone = $("#call_me_phone").val();
	var p1 = /^1[3|4|5|8]{1}[0-9]{9}$/;
	if(!p1.test(phone)) {
		alert("对不起，请输入正确的手机号码!");
		return false;
	}
	$.getScript('/' + phone, function() {
		if(data.status == 1) {
			$("#huibo_msg_2").show();
			$("#huibo_msg_2").siblings().hide();
		} else {
			alert('提交失败，请稍后重试');
		}
	});
}