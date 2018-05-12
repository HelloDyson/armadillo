var sitterspkg;
require(["./js/createUser.js"], sitterspkg=test());
var sitters = sitterspkg[0];
var sitternames = sitterspkg[1];
console.log(sitterspkg);
var raterequest;


document.addEventListener("click", function(event) {
    console.log(event.target);
    if (event.path[1].classList.contains("sitter-info")) {popupInfo(event.path[1].childNodes[1].textContent, event.path[1].childNodes[0].innerHTML-1);}
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
        console.log(year+"-"+month+"-"+day);
        return year+"-"+month+"-"+day;
    }

    console.log(document.getElementById("fromdate"));

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

function popupInfo(username, userNr) {
    console.log(username);
    console.log(userNr);


    var popupwindow=document.createElement("div");
    popupwindow.className="modal";
    
    var frameinside=document.createElement("iframe");
    frameinside.className="modal-content";
    //frameinside.src="sitters_available1.html";
    
    //frameinside.src="main.html";
    frameinside.setAttribute("frameborder","none");
    popupwindow.appendChild(frameinside);
    document.getElementById("bd").appendChild(popupwindow);

    //FrameContent  
    var frameBody = frameinside.contentDocument.getElementsByTagName('body')[0];
    var frameHead = frameinside.contentDocument.getElementsByTagName('head')[0];
    var frameHtml = frameinside.contentDocument.getElementsByTagName('html')[0];

    console.log(frameBody);
    console.log(frameHead);
    console.log(frameHtml);



    frameHtml.setAttribute("lang", "en");

    // header Files
    var charsets = document.createElement("meta");
    charsets.setAttribute("charset", "utf-8");

    var bootMin = document.createElement("link");
    bootMin.rel = "stylesheet";
    bootMin.href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

    var jqueryMin = document.createElement("script");
    jqueryMin.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

    var bootstrap = document.createElement("script");
    bootstrap.type = "text/javascript";
    bootstrap.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js";

    var textLink = document.createElement("link");
    textLink.href = "https://fonts.googleapis.com/css?family=Montserrat|Montserrat+Alternates";
    textLink.rel = "stylesheet";

    var popupcss = document.createElement("link");
    popupcss.type = "text/css";
    popupcss.rel = "stylesheet";
    popupcss.href = "css/pop_up.css";

    var stars = document.createElement("link");
    stars.rel = "stylesheet";
    stars.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

    frameHead.appendChild(charsets);
    frameHead.appendChild(jqueryMin);  
    frameHead.appendChild(bootstrap);
    frameHead.appendChild(bootMin);
    frameHead.appendChild(popupcss);
    frameHead.appendChild(textLink);
    frameHead.appendChild(stars);


    // body Files
    var container = document.createElement("div");
    container.className = "containerCa";

    // createCarousel
    var carousel = document.createElement("div");
    carousel.className = "carousel slide";
    carousel.id = "myCarousel";
    carousel.setAttribute("data-interval", "false");


    // carouselInner
    var carouselInner = document.createElement("div");
    carouselInner.className = "carousel-inner";
    
    // append nodes 
    frameBody.appendChild(container);
    container.appendChild(carousel)
    carousel.appendChild(carouselInner);

    Object.keys(sitternames).forEach(function(key) {
        //console.log(key);
        //console.log(sitternames[key]);

        //picture cell
        var item = document.createElement("div");
        item.className = "item";
        if(key == userNr){item.className = "item active";}

        
        var pictureCell = document.createElement("div");
        pictureCell.className = "pictureCell";

        var pictureContainer = document.createElement("div");
        pictureContainer.className = "containerCarousel";

        // name of the sitter
        var nameSitter = document.createElement("h2");
        nameSitter.innerHTML = parseInt(key)+1 + ". " + sitternames[key].toString();

        // Who i am
        var whoamItitle = document.createElement("h3");
        whoamItitle.className = "t1";
        whoamItitle.innerHTML = " Who I Am: ";

        // Pets I like
        var petstoliketitle = document.createElement("h3");
        petstoliketitle.className = "t2";
        petstoliketitle.innerHTML = " Pets I Like: ";

        // Pets I like
        var petsIown = document.createElement("h3");
        petsIown.className = "t3";
        petsIown.innerHTML = " Pets I Own: ";

        var image = document.createElement("img");
        image.src = "image/"+ sitternames[key]+ ".jpg";
        image.id = "sitterPic";

        var ratingsInfo = document.getElementsByClassName('info rate');
        var rating = ratingsInfo[key];
        var ratingCln = rating.cloneNode(true);

        var insuranceInfo = document.getElementsByClassName('info insurance');
        var insurance = insuranceInfo[key];
        var insuranceCln = insurance.cloneNode(true);

        var certifiedInfo = document.getElementsByClassName('info certificated');
        var certification = certifiedInfo[key];
        var certificationCln = certification.cloneNode(true);

        var certifiedInfo = document.getElementsByClassName('info certificated');
        var certification = certifiedInfo[key];
        var certificationCln = certification.cloneNode(true);

        var pricesInfo = document.getElementsByClassName('info price');
        var price = pricesInfo[key];
        var priceCln = price.cloneNode(true);

        var dateInfo = document.getElementsByClassName("dateinput");
        var dateStart = dateInfo[0].value;
        var dateEnd = dateInfo[1].value;

        var bookButton = document.createElement("button");
        bookButton.className = "btn btnExtra btn-large btn-primary button";
        bookButton.id = "book-button";
        bookButton.setAttribute('onclick', "window.open('confirmation_popup1.html', '_self' )");
        //bookButton.onclick = function(){window.open('confirmation_popup1.html','_self');}
        bookButton.innerHTML = "<b>"+"Book" + " "+ sitternames[key] +"</b>"+ "\n" + "From: " + dateStart + "  To: " + dateEnd;


        //info cell
        var infoCell = document.createElement("div");
        infoCell.className = "infoCell";

        var contentInfoCell = document.createElement("div");
        contentInfoCell.className = "description text";
        contentInfoCell.innerHTML ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. PETS.";

        var mockText1 = document.createElement("div");
        mockText1.className = "description text1";
        mockText1.innerHTML ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. PETS.";

        var mockText2 = document.createElement("div");
        mockText2.className = "description text2";
        mockText2.innerHTML ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. PETS.";


        carouselInner.appendChild(item);
        item.appendChild(pictureCell);
        item.appendChild(infoCell);
        pictureCell.appendChild(pictureContainer);
        pictureCell.appendChild(nameSitter);
        pictureCell.append(ratingCln);
        pictureCell.append(insuranceCln);
        pictureCell.append(certificationCln);
        pictureCell.append(priceCln);
        pictureCell.append(bookButton);

        infoCell.appendChild(contentInfoCell);
        infoCell.appendChild(mockText1);
        infoCell.appendChild(mockText2);
        infoCell.append(whoamItitle);
        infoCell.append(petstoliketitle);
        infoCell.append(petsIown);

        pictureContainer.appendChild(image);

    });


    var carouselControlLeft = document.createElement("a");
    carouselControlLeft.className = "left carousel-control";
    carouselControlLeft.setAttribute("href", "#myCarousel");
    carouselControlLeft.setAttribute("role", "button");
    carouselControlLeft.setAttribute("data-slide", "prev");
    var glyphiconSymLeft = document.createElement("span");
    glyphiconSymLeft.className = "glyphicon glyphicon-chevron-left";
    glyphiconSymLeft.setAttribute("aria-hidden", "true");
    var glyphiconSrLeft = document.createElement("span");
    glyphiconSrLeft.className = "sr-only";
    glyphiconSrLeft.innerHTML= "Previous";

    var carouselControlRight = document.createElement("a");
    carouselControlRight.className = "right carousel-control";
    carouselControlRight.setAttribute("href", "#myCarousel");
    carouselControlRight.setAttribute("role", "button");
    carouselControlRight.setAttribute("data-slide", "next");
    var glyphiconSymRight = document.createElement("span");
    glyphiconSymRight.className = "glyphicon glyphicon-chevron-right";
    glyphiconSymRight.setAttribute("aria-hidden", "true");
    var glyphiconSrRight = document.createElement("span");
    glyphiconSrRight.className = "sr-only";
    glyphiconSrRight.innerHTML= "Next";

    carousel.appendChild(carouselControlLeft);
    carouselControlLeft.appendChild(glyphiconSymLeft);
    carouselControlLeft.appendChild(glyphiconSrLeft);

    carousel.appendChild(carouselControlRight);
    carouselControlRight.appendChild(glyphiconSymRight);
    carouselControlRight.appendChild(glyphiconSrRight);

    var activateCarousel = document.createElement("script");
    var s = document.getElementsByTagName("script")[0];
    activateCarousel.text = "$(document).ready(function(){console.log('hi'); $('#myCarousel').carousel(); \
    $('.left').click(function(){$('#myCarousel').carousel('prev');}); \
    $('.right').click(function(){$('#myCarousel').carousel('next');});});"
    s.parentNode.insertBefore(activateCarousel,s);
    frameBody.appendChild(activateCarousel);   
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