var sitterspkg;
require(["./js/createUser.js"], sitterspkg=test());
var sitters = sitterspkg[0];
var sitternames = sitterspkg[1];
var raterequest;

document.addEventListener("click", function(event) {
    console.log(event.target);
    if (event.path[1].classList.contains("sitter-info")) {popupInfo(event.path[1].childNodes[1].textContent);}
    else if (event.path[0].classList.contains("modal")){document.getElementById("bd").removeChild(event.path[0]);}
    else if (event.path[0].tagName==="text"){console.log("event.path[0].textContent");}
    else if (event.path[0].classList.contains("fa-star")) {
        raterequest = parseInt(event.path[0].id);
        for (var st=1; st<=5;st++){
            var star = document.getElementById(st);
            star.className="fa fa-star";
            if (st<=raterequest){star.classList.add("checked");}
        }
    }
});



document.addEventListener("DOMContentLoaded", function(event) {
    var today = new Date();
    var tomorrow = new Date(today.getTime() + 2*(24 * 60 * 60 * 1000));

    function tolocaltime(today) {
        var year = today.getFullYear();
        var month = parseInt(today.getMonth()+1)
        var day = today.getDate()
        if (month<10) {month = "0"+month;}
        if (day<10) {day = "0"+day;}
        return year+"-"+month+"-"+day;
    }

    document.getElementById("fromdate").value = tolocaltime(today);
    document.getElementById("todate").value = tolocaltime(tomorrow);

    var leftPanel = document.getElementById("leftmain");

    console.log(sitters);
    console.log(sitternames);


    for (var i=0;i<sitternames.length;i++){
        var username = sitternames[i];
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

        var ratelen = sitters[username].rate;
        var rate = document.createElement("div");
        rate.className = "info rate";
        var rateinner = document.createElement("div");
        rateinner.className="fivestars";

        for (var st=1; st<=5;st++){
            var star = document.createElement("span");
            star.className="fa fa-star";
            if (st<=Math.round(ratelen)){star.classList.add("checked");}
            rateinner.appendChild(star);
        }
        rate.appendChild(rateinner);
        var insurance = document.createElement("div");
        insurance.className = "info insurance";
        insurance.textContent = "insurance";
        if (sitters[username].insurance) {insurance.style.color="dodgerblue";insurance.style.borderColor="dodgerblue";}
        else {insurance.style.color="gray";}
        var certificated = document.createElement("div");
        certificated.className = "info certificated";
        certificated.textContent = "certified";
        if (sitters[username].certified) {certificated.style.color="mediumpurple";certificated.style.borderColor="mediumpurple";}
        else {certificated.style.color="gray";}
        var price = document.createElement("div");
        price.className = "info price";
        price.textContent = "$ "+ sitters[username].price + " / day";
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
    var popupwindow=document.createElement("div");
    popupwindow.className="modal";

    var frameinside=document.createElement("iframe");
    frameinside.className="modal-content";
    frameinside.src="sitters_available1.html";

    frameinside.setAttribute("frameborder","none");
    popupwindow.appendChild(frameinside);
    document.getElementById("bd").appendChild(popupwindow);

}


// function mapnumber(){
//     setTimeout(function() {
//         var subwin = document;
//         var t = subwin.getElementsByTagName("text");
//         var c = subwin.getElementsByTagName("circle");
// //        var labels = document.getElementsByTagName("text");
//         console.log("label is ");
//         console.log(t);
//         console.log(c);
//         for (ts in t){
//             t[ts].textContent = "1";
//         }
//     }, 8000);
//
// }