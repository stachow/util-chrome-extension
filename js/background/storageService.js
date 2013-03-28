var storageService = function() {
		  // get seedData in to local storage
		  var storageKey = 	"cascaid-util-storage-key";
		  var storageItem = localStorage.getItem(storageKey); 
		  
		  if (!storageItem || storageItem == "undefined"){
		  	localStorage.setItem(storageKey, JSON.stringify(seedData));
		  } else {
		  	var existingData = JSON.parse(localStorage.getItem(storageKey));
			for (var i = 0; i < seedData.length; i++){
				var found = false;
				for (var j = 0; j < existingData.length; j++){
					console.log(i, j);
					if (seedData[i].id === existingData[j].id){
						found = true;
						break;
						
					}
				}
				if (!found){
					existingData.push(seedData[i]);
				}
			}
			localStorage.setItem(storageKey, JSON.stringify(existingData));		  	
		  };

		  return {
				getData: function(){
					return JSON.parse(localStorage.getItem(storageKey));
				},
				setData: function(data){
					localStorage.setItem(storageKey, JSON.stringify(data));
				},
				resetData: function(){
					this.setData(seedData);
				},
				getForm: function(index){
					return this.getData[index];
				},
				setForm: function(form, index){
					var data = this.getData();
					data[index] = form;
					this.setData(data);
				},
				resetForm: function(index){
					var data = this.getData();
					data[index] = seedData[index];
					this.setData(data);	
				},
				getFormFromUrl: function(url){
					var data = this.getData();
					for (var i =0; i < data.length; i++){
						if (data[i].enabled){
							var match = data[i].match;
							var reg = new RegExp(match, "i");
							if (reg.test(url)){
								return data[i];
							}
						}
					}
					return null;
				}  	
		  };	  
	}