// Util.events(document, {
// 	"click": function(evt) {
// 		if (evt.target.id === 'tab1'){switchTabs(evt,evt.target.id)}
// 		else if (evt.target.id === 'tab2'){switchTabs(evt,evt.target.id)}
// 	},
// });

// document.addEventListener("click", switchTabs(evt));


function switchTabs(evt,tabId){
	//turn off all tab content
	console.log(evt.target.id);
	var tabcontent = document.querySelectorAll(".tabcontent");


	tabcontent.forEach((i)=>{
		//i.style.display = "none";
		i.className = i.className.replace(" active", "");
	});

	//get all tabs
	var alltabs = document.querySelectorAll(".tab");
	alltabs.forEach((tab)=>{
		tab.className = tab.className.replace(" active","");
	});

	//activate current tab
	document.querySelector("#"+tabId).className += " active";
	evt.target.className += " active";
}