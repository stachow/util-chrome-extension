(function(storageService){
	
	var data;

	chrome.extension.onMessage.addListener(
	  function(msg, sender, sendResponse) {
	
		data = storageService().getFormFromUrl(msg.url);
		if (!data){
			sendResponse(null);
		} else if (data.autorun == true){
  			sendResponse(data);	
	  	} else {
			chrome.pageAction.show(sender.tab.id);	
	  	}
	 });


	chrome.pageAction.onClicked.addListener(function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		    chrome.tabs.sendMessage(tabs[0].id, data, function(response) {});  
		});
	});

})(storageService);
