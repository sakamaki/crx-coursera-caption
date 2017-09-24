console.log("ReLayout Caption 1", $.isReady)

chrome.runtime.onMessage.addListener(function(msg, sender, response) {
	//   debugger;
	//   // First, validate the message's structure
	if ((msg.from === 'popup') && (msg.subject === 'parseImg')) {

		console.log('got message', msg)

		var msgResp = {};
		msgResp.info = 'Redirecting..'

		//injectCSS()
		startLayout(isSwitched())

		response("Bravo! ❄️");
	}
});


function startLayout(isSwitched) {
	if (!isSwitched) {
		// 收起drawer
		if($('.drawer-open').length) {
			$(".side-nav-button").click()
		}

		// 隐藏 "下载"
		$('.styleguide').hide()

		// 字幕放左
		$('.content-container > .horizontal-box').addClass('caption-left')

		// 视频放右
		$('.content-container > .video-container').addClass('video-right')
		$('.content-container > .video-container > div').addClass('video-right')
		$('.content-container > .video-container > div .video-js').addClass('video-right')
		$('.content-container > .video-container   .c-video-title').hide()
		
	
	} else {
		// 展开drawer
		if(!$('.drawer-open').length) {
			$(".side-nav-button").click()
		}

		// 隐藏 "下载"
		$('.styleguide').show()

		// 字幕放左
		$('.content-container > .horizontal-box').removeClass('caption-left')

		// 视频放右
		$('.content-container > .video-container').removeClass('video-right')
		$('.content-container > .video-container > div').removeClass('video-right')
		$('.content-container > .video-container > div .video-js').removeClass('video-right')
		$('.content-container > .video-container   .c-video-title').show()
	}
}

function isSwitched() {
	return !!$('.video-right').length
}