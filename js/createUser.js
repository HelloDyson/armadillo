function user (uid, name) {
    return {
        uid: uid,
        username: name,
        rate: Math.floor(Math.random()*50)/10,
        price: Math.floor(Math.random() * 300),
        insurance: Math.random() > 0.5,
        certified: Math.random() > 0.5,
        lon: 0,
        lat: 0
    }
}

var usernames = ["Lukas","Jackie","Dyson","Jenny","Tuo","Rem","Oscar","Jason","Andrew","Jack","Williams",
    "Jordan","Horton","Phillips","Burris","Willy","Lynn","Jaden","Pearce"];

function usersjs() {
    var users = [];
    for (x in usernames){
        users[usernames[x]] = user(parseInt(x)+1,usernames[x]);
    }
    return [users, usernames];
}
function test() {
    // alert("test function from createUser.js");
    var users = {};
    for (x in usernames){
        users[usernames[x]] = user(parseInt(x)+1,usernames[x]);
    }
    // console.log(users);
    return [users, usernames];
}




