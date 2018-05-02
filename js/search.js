var users = {
    0: "Lukas",
    1: "Jackie",
    2: "Dyson",
    3: "Jenny",
    4: "Tuo",
    5: "Rem",
    6: "Oscar",
    7: "Jason",
    8: "Andrew",
    9: "Jack",
    10: "Williams",
    11: "Jordan",
    12: "Horton",
    13: "Phillips",
    14: "Burris",
    15: "Willy",
    16: "Lynn",
    17: "Jaden",
    18: "Pearce"
}
document.addEventListener("click", function(event) {
	console.log(event.target);
    if (event.path[1].classList.contains("sitter-info")) {popupInfo(event.path[1].childNodes[1].textContent);}
	else if (event.path[0].classList.contains("modal")){document.getElementById("bd").removeChild(event.path[0]);}
	else if (event.path[0].tagName==="text"){console.log("event.path[0].textContent");}
});



document.addEventListener("DOMContentLoaded", function(event) {

    var leftPanel = document.getElementById("leftmain");

    for (var i=0;i<19;i++){
        var username = users[i];
        var sitter = document.createElement("div");
        var number = document.createElement("div");
        number.textContent = ""+(i+1);
        number.className = "number";
        var name = document.createElement("div");
        name.className = "sitter-name";
        name.textContent = username;
        var photo = document.createElement("div");
        photo.className = "sitter-image";
        var image = document.createElement("img");
        image.src = "image/"+username+ ".jpg";
        
		var ratelen = Math.floor(Math.random()*50)/10;
        var rate = document.createElement("div");
        rate.className = "info rate";
		var rateinner = document.createElement("div");
		rateinner.className="fivestars";
		
		for (var st=1; st<=5;st++){
			var star = document.createElement("span");
			star.className="fa fa-star";
//			console.log(Math.round(ratelen));
			if (st<=Math.round(ratelen)){star.classList.add("checked");}
			rateinner.appendChild(star);
		}
//        var ratelen = Math.round(Math.random()*50)/10;
//        // for (var i=1; i<=ratelen;i++){
//        //     rate.textContent += "\2605";
//        // }
//        // rate.textContent = Math.floor(Math.random()*50)/10;
//        var rateinner = document.createElement("div");
//        // var rateouter = document.createElement("div");
//        // rateouter.className = "stars-outer";
//        rateinner.className = "stars-inner";
//		rateinner.style.color="var(--green)"
//        // rateouter.style.width = (Math.floor(Math.random()*50)/10 * 20) + "%";
//        rateinner.style.width = ((Math.floor(Math.random()*40)/10 * 20) + 20) + "%";
//        // rate.appendChild(rateouter);
        rate.appendChild(rateinner);
        var insurance = document.createElement("div");
        insurance.className = "info insurance";
        insurance.textContent = "insurance";
        if (Math.random()>0.5) {insurance.style.color="gray"}
		else {insurance.style.color="dodgerblue";insurance.style.borderColor="dodgerblue"}
        var certificated = document.createElement("div");
        certificated.className = "info certificated";
        certificated.textContent = "certified";
        if (Math.random()>0.5) {certificated.style.color="gray";}
		else {certificated.style.color="mediumpurple";certificated.style.borderColor="mediumpurple"}
        var price = document.createElement("div");
        price.className = "info price";
        price.textContent = "$ "+ Math.floor(Math.random() * 300) + " / day";
        var arrow = document.createElement("img");
        arrow.className = "arrow";
        arrow.src = "image/Arrow_top.svg";

        photo.appendChild(image);
        sitter.appendChild(number);
        sitter.appendChild(name);
        sitter.appendChild(photo);
        sitter.appendChild(rate);
        sitter.appendChild(insurance);
        sitter.appendChild(certificated);
        sitter.appendChild(price);
        sitter.appendChild(arrow);
        leftPanel.appendChild(sitter);
		image.onload = function(){resetImgSizeWH(this, this.naturalWidth, this.naturalHeight, 180,180);}
		

        sitter.className = "sitter-info card";
		sitter.id = "info_" + username;

    }

});

function resetImgSizeWH(img, nw, nh, w, h) {
    var nwh = nw / nh;
	
    var wh = w / h;
//	console.log(nw, nh, nwh, wh);
    if (nwh > wh) {
        img.height = h;
        img.style.marginLeft = parseInt((parseInt(nwh * h) - w) / 2) * (-1) + "px";
    } else if (nwh < wh) {
        img.width = w;
        img.style.marginTop = parseInt((parseInt(1 / nwh * w) - h) / 2) * (-1) + "px";
    } else {
        img.height = h;
        img.width = w;
    }
}

function popupInfo(username) {
    console.log(username);
    // document.getElementsByClassName("main").style.hidden=true;
    // window.location="sitters_available_popup.html";
//    window.location="main.html";
	var popupwindow=document.createElement("div");
	popupwindow.className="modal";
	
	var frameinside=document.createElement("iframe");
	frameinside.className="modal-content";
	frameinside.src="sitters_available1.html";
//	frameinside.src="main.html";
	frameinside.setAttribute("frameborder","none");
	popupwindow.appendChild(frameinside);
    document.getElementById("bd").appendChild(popupwindow);
	
}


function mapnumber(){
	setTimeout(function() { 
		var subwin = document;
		var t = subwin.getElementsByTagName("text");
		var c = subwin.getElementsByTagName("circle");
//        var labels = document.getElementsByTagName("text");
		console.log("label is ");
		console.log(t);
		console.log(c);
		for (ts in t){
			t[ts].textContent = "1";
		}
    }, 8000);
	
}
// var splitter,cont1,cont2;
// var last_x,window_width;

// function init()
// {
//     window_width=window.innerWidth;
//     splitter=document.getElementById("splitter");
//     cont1=document.getElementById("div1");
//     cont2=document.getElementById("div2");
//     var dx=cont1.clientWidth;
//     splitter.style.marginLeft=dx+"px";
//     dx+=splitter.clientWidth;
//     cont2.style.marginLeft=dx+"px";
//     dx=window_width-dx;
//     cont2.style.width=dx+"px";
//     splitter.addEventListener("mousedown",spMouseDown);
// }
//
// function spMouseDown(e)
// {
//     splitter.removeEventListener("mousedown",spMouseDown);
//     window.addEventListener("mousemove",spMouseMove);
//     window.addEventListener("mouseup",spMouseUp);
//     last_x=e.clientX;
// }
//
// function spMouseUp(e)
// {
//     window.removeEventListener("mousemove",spMouseMove);
//     window.removeEventListener("mouseup",spMouseUp);
//     splitter.addEventListener("mousedown",spMouseDown);
//     resetPosition(last_x);
// }
//
// function spMouseMove(e)
// {
//     resetPosition(e.clientX);
// }
//
// function resetPosition(nowX)
// {
//     var dx=nowX-last_x;
//     dx+=cont1.clientWidth;
//     cont1.style.width=dx+"px";
//     splitter.style.marginLeft=dx+"px";
//     dx+=splitter.clientWidth;
//     cont2.style.marginLeft=dx+"px";
//     dx=window_width-dx;
//     cont2.style.width=dx+"px";
//     last_x=nowX;
// }