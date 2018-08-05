var express = require("express");
var app = express();
var session = require("express-session");
var bodyparser = require("body-parser");
var nodecalendar = require("node-calendar");
var path = require("path");
var mongoose = require("mongoose");

// var event = require('../tec/src/app/models/Event.js');


// var server = app.listen(process.env.PORT || 8888, process.env.IP, (req,res) => {
//     console.log("Server Started!");
// });

// var io = require("socket.io").listen(server);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(session({
    secret: 'mAtlAB meRa LaWDa',
    resave: false,
    saveUninitialized: true,
    username: undefined,
    yearite: 0,
    clearance: ''
}));

app.use(express.static(path.join(__dirname, 'dist/tec')));

var url = "mongodb://admin:41122348manish@ds231559.mlab.com:31559/tec";
mongoose.connect(url, {useNewUrlParser: true});
var conn = mongoose.connection;
conn.on('error', () => {
    console.log("Error connecting to mlab");
});
conn.on('open', () => {
    console.log("Connection established to mlab");
})

var EventPerson = {
    name: String,
    topic: String,
    responsibilities: String
};

var itemSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    speakers: [{
        name: String,
        topic: String,
        responsibilities: String
    }],
    coordinators: [{
        name: String,
        topic: String,
        responsibilities: String
    }],
    images: [String],
});

var accountSchema = new mongoose.Schema({
    name: String,
    reg_no: String,
    yearite: Number,
    clearance: String,
    password: String,
});

var Account = mongoose.model("account", accountSchema);
// Account.create({
//     name: 'Manish M',
//     reg_no: '16BEC0104',
//     yearite: 3,
//     clearance: 'admin',
//     password: 'danky',
// }, (err, obj) => {
//     if(err){
//         console.log(err);
//         throw err;
//     } else {
//         console.log("Account Added:");
//         console.log(obj);
//     }
// });

var Item = mongoose.model("event", itemSchema);

// Item.create({
//     title: 'Title',
//     description: 'Description',
//     speakers: [ {name: 'Speaker1', topic: 'speaking', responsibilities: ['res1', 'res2']}, {name: 'Speaking2', topic: 'speaking2', responsibilities: ['res3', 'res4']} ],
//     coordinators: [ {name: 'Coordinator1'} ],
//     date: new Date(Date.now()),
//     images: [ 'imageURL', 'imageUrl2'],
// }, (err,obj) => {
//     if(err){
//         console.log(err);
//         throw err;
//     } else {
//         console.log("Event Added:");
//         console.log(obj);
//     }
// });

var authenticate = function(req,res,next){
    if(req.session.username !== undefined && req.session.username !== ''){
        console.log("Next");
        next();
    } else {
        console.log("-1");
        res.send("-1");
    }
}

app.post("/api/login", (req,res) => {
    var reqb = req.body;
    // console.log(reqb.username, reqb.password);
    var username_entered = reqb.username;
    Account.find({reg_no: username_entered}, (err, account) => {
        if(typeof(account) === typeof({})){
            if(account.reg_no === username_entered){
                req.session.username = account.reg_no;
                req.session.yearite = account.yearite;
                req.session.clearance = account.clearance;
                res.send(true);
            } else {
                res.send(false);
            }
        }
    });
    
    // res.send(true);
});

app.post("/api/event/post", authenticate, (req,res) => {
    var rbody = req.body;
    // Item.create()
    console.log(rbody);
    Item.create(rbody, (err,obj) => {
        if(err){
            console.log(err);
            throw err;
        } else {
            console.log("Event Added:");
            console.log(obj);
            res.send(rbody);
        }
    });
    // res.send(rbody);

});

app.get("/api/event/get/:month/:year", authenticate, (req,res) => {
    var month = Number(req.params.month) +1;
    var year  = Number(req.params.year);
    console.log(month, year);
    Item.find({"date": { $gt:year+"-"+month+"-1"}, "date": { $lte:year+"-"+month+"-31" } }, (err,events) => {
        if(err){
            console.log(err);
            throw err;
            res.send(false);
        } else {
            console.log(events);
            res.send(events);
        }
        // console.log(events);
    });
});

// Item.find({"date": { $gt: "2018-07-17" }}, (err,events) => {
//     if(err){
//         console.log(err);
//         throw err;
//     } else {
//         console.log(events);
//     }
// });
// YAAAYYY!!!!



app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, 'dist/tec/index.html'));
});


app.listen(process.env.PORT || 8888, process.env.IP, (req,res) => {
    console.log("Server Started");
});