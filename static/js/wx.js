$(function() {
	setInterval('openDialog()', 60000);
});

function show_rand_wx(begin, end, n) {
	hideDialog();
	var r = Math.floor(Math.random() * (end - begin)) + begin;
	var warr = new Array('Amon', '娟儿', 'Judy', 'Lisa', '麦麦', '小夕');
	var warr1 = new Array('slmmengmeng', 'suoluomei520', 'qifei18', 'hPlduoduo', 'suoluomei07', 'hplxxx');
	if(n > 0) {
		var img = window.baseUrl + '/assets/images/wx/' + n + '.jpg';
	} else {
		var img = window.baseUrl + '/assets/images/wx/' + r + '.jpg';
	}
	var dialog = art.dialog({
		id: 'minicart',
		lock: true,
		fixed: 'fixed',
		zIndex: 100000,
		padding: 0,
		top: '20%'
	});
	var info = '';
	info = '<dl id="i_nfo"><dt><b class="qin">亲~感谢您的选购:</b><img src="' + window.baseUrl + '/assets/images/wx/hepulan.jpg" width="120" height="130" /></dt><dd id="dashi"><b>购买前特别推荐护肤老师<br />一对一为您解决肌肤问题</b></dd><dd id="wdesc"><strong style="color: #d43e4a;">购买以及护肤使用技巧</strong><br />请在微信添加：<span>hepulan</span><br />或扫描<span>左侧二维码</span></dd></dl>';
	var content = '<div class="go_min" id="go_min_b"><div class="go_tck" id="go_tck_b"><h3><span><a href="javascript:void(0)" onClick="_tips_close(\'minicart\')" title="关闭">X</a></span><strong>温馨提示</strong></h3>' + info + '<p class="tck_a" id="tck_b"><img src="' + window.baseUrl + '/assets/images/wx/wx.jpg" /></p></div></div>';
	var newContent = '<div style="background: transparent;position:relative;"><img src="' + window.baseUrl + 'assets/images/wx/官网小弹窗3.png" width="600"/><h3 style="position:absolute;top:30px;right:60px"><a href="javascript:void(0)" onClick="_tips_close(\'minicart\')" title="关闭">关闭</a></h3></div>';
	dialog.content(newContent);
	$('.aui_border').css('width', '370');
	$('.aui_outer').removeClass('aui_outer');
}

function hideDialog() {
	$("#LRdiv1").hide("slow");
	$("#LRdiv0").hide("slow");
}

function openDialog() {
	$("#LRdiv1").show("slow");
	$("#LRdiv0").hide("slow");
}

function closeDialog() {
	$("#LRdiv1").hide("slow");
	$("#LRdiv0").show("slow");
}

function loadImage(url, callback) {
	var img = new Image();
	img.onload = function() {
		img.onload = null;
		callback(img);
	}
	img.src = url;
}

function vip() {
	_tips("准备开放，敬请期待！");
}