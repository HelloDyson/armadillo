function user (uid, name) {
    this.uid = uid;
    this.name = name;
    this.rate = Math.floor(Math.random()*50)/10;
    this.price = Math.floor(Math.random() * 300);
    this.insurance = Math.random() > 0.5;
    this.certified = Math.random() > 0.5;
    this.location_x = location[0];
    this.location_y = location[1];

    this.getRate = function () {return this.rate;};
    this.getPrice = function () {return this.price;};
    this.getInsurance = function () {return this.insurance;};
    this.getCertified = function () {return this.certified;};
    this.getLocation = function () {return (this.location_x, this.location_y);};
}

var usernames = ["Lukas","Jackie","Dyson","Jenny","Tuo","Rem","Oscar","Jason","Andrew","Jack","Williams",
    "Jordan","Horton","Phillips","Burris","Willy","Lynn","Jaden","Pearce"];

function usersjs(){
    var users = [];
    for (var i = 1; i<20, i++;){
        users.push(user(i,usernames[i-1]));

    }
    console.log(users);
    return users;
}




