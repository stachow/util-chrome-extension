(function($, window){

	var executeAction = function(data){

		var pulse = function($el){
			var prevColor = $el.css("background-color");
			$el.animate({ backgroundColor: "#F2F5A9" }, 200 );
			$el.animate({ backgroundColor: prevColor }, 200 );
		};

		var processControl = function(myIndex){
			if (myIndex == data.controls.length){
				return;
			};
			var control = data.controls[myIndex];
			var $el = $(control.selector); 
			myIndex += 1;
			switch (control.type){
				case "text":
				case "password":
					var val = control.value;
					if(control.uniqueFactor === true ){
						val = val + new Date() / 1000;
					};
					$el.val(val).trigger("change"); 
					pulse($el);
					break;
				case "select":
					var selectedIndex = 0;
					switch (control.value){
						case "first":
							selectedIndex = 0;
							break;
						case "second":
							selectedIndex = 1;
							break;
						default:
							selectedIndex = $(control.selector + ' option').size() - 1;
							break;
					}
					for (var i = 0; i < $el.length; i++){
						$el[i].selectedIndex = selectedIndex;	
					};
					$el.trigger("change");
					pulse($el);
					break;
				case "checkbox":
					$el.prop('checked', (control.value === "checked")).trigger("change");
					pulse($el);
					break;
				case "button":
					console.log("button", control.value, control.selector);
					if(control.value === "click"){
						$el.first()[0].click();
					}
					break;
				case "goto":
					if (control.value !== ""){
						myIndex = parseInt(control.value, 10) - 1;	
					}
					break;
			}

			if (control.type === "pause"){
				setTimeout(function() { processControl(myIndex) }, parseInt(control.value, 10));
			} else if (myIndex < data.controls.length && data.controls[myIndex].type === "pause"){
				processControl(myIndex);
			} else {
				setTimeout(function() { processControl(myIndex) }, 50)
			}
		};
		processControl(0);

	};

	chrome.extension.onMessage.addListener(function(data, sender, sendResponse) {
		executeAction(data);
	});

	chrome.extension.sendMessage({url: window.location.href}, function(data) {
		if (data) {
			executeAction(data);	
	  	}; 
	});

})(jQuery,  window);