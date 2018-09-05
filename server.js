var express = require("express");
var app = express();
var session = require("express-session");
var bodyparser = require("body-parser");
var nodecalendar = require("node-calendar");
var path = require("path");
var mongoose = require("mongoose");
var nodemailer = require("nodemailer");

// var transporter = nodemailer.createTransport("SMTP", {
//     host: "smtp-mail.outlook.com",
//     secureConnection: false,
//     port: 587,
//     auth: {
//         user: 'webdevs.tec@outlook.com',
//         pass: 'anshulmalepati69@$$'
//     },
//     tls: {
//         ciphers: 'SSLv3'
//     }
// });

// var transport = nodemailer.createTransport("SMTP", {
//     host: "smtp-mail.outlook.com", // hostname
//     secureConnection: false, // TLS requires secureConnection to be false
//     port: 587, // port for secure SMTP
//     auth: {
//         user: "webdevs.tec@outlook.com",
//         pass: "anshulmalepati69@$$"
//     },
//     tls: {
//         ciphers:'SSLv3'
//     }
// });

// This is working!!!!
var transporter = nodemailer.createTransport("smtp://webdevs.tec%40outlook.com:"+encodeURIComponent('anshulmalepati69@$$') + "@smtp-mail.outlook.com"); 

// const mailOptions = {
//     from: 'webdevs.tec@outlook.com', // sender address
//     to: ['sheetymanish@gmail.com', 'mr.malepati@gmail.com'], // list of receivers
//     subject: 'CONGRATULATIONS!!!!', // Subject line
//     html: '<h1>Congrats!!!!</h1><p>You\'ve been selected in a lucky draw of one person to get annoyed by Meme Lord Manish!!</p><p>You must be so proud of yourself :D</p>'// plain text body
// };

// transporter.sendMail(mailOptions, function (err, info) {
//     if(err)
//       console.log(err)
//     else
//       console.log(info);
// });

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

var messageSchema = new mongoose.Schema({
    name: String,
    phno: Number,
    email: String,
    message: String
});

var Message = mongoose.model("message", messageSchema);

var account1Schema = new mongoose.Schema({
    name: String,
    email: String,
    reg_no: String,
});

var Accountform1 = mongoose.model("accountform1", account1Schema);

// APP====APP====APP====APP====APP====APP====APP====APP===APP

var accountSchema_app = mongoose.Schema({
    username: String,
    password: String,
    fname: String,
    lname: String,
    phno: Number,
    email: String,
    gender: String,
    regno: String,
    inteam: Boolean,
    teamno: Number,
});

var Account_app = mongoose.model("app_account", accountSchema_app);

var loginSchema_app = mongoose.Schema({
    username: String,
    password: String,
});

var Login_app = mongoose.model("app_login", loginSchema_app);

var teamSchema_app = mongoose.Schema({
    teamno: Number,
    members: [{
        username: String,
        fname: String,
        lname: String,
        phno: Number,
        email: String,
        gender: String,
        regno: String,
    }],
});

var Team_app = mongoose.model("app_team", teamSchema_app);

var distressSchema_app = mongoose.Schema({
    teamno: Number,
    pressedby: String,
});

var Distress_app = mongoose.model("app_distress", distressSchema_app);

// APP====APP====APP====APP====APP====APP====APP====APP===APP

// Accountform1.find({}, (err, accounts) => {
//     if(err){
//         console.log(err);
//         throw err;
//     } else {
//         var tos = [];
//         accounts.forEach(account => {
//             tos.push(account.email);
//         });
//         console.log(tos);
//         const mailOptions = {
//             from: 'webdevs.tec@outlook.com',
//             to: tos,
//             subject: 'Testing Mail for mass spam',
//             html:'<h2 style=\"text-align: center;\">Sensored:</h2><p style=\"text-align: center;\">Sensored is a graVITas Workshop.It is a very awesome workshop, you not only get to learn but also apply, and practice and also get to talk to industrial experts</p><p>Please inform if this mail came in spam or normal Inbox.</p><br><br><br><h6>~XD</h6>',
//         }
//         transporter.sendMail(mailOptions, (err, info) => {
//             if(err){
//                 console.log(err);
//                 throw err;
//             } else {
//                 console.log(info);
//             }
//         });
//     }
// });

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
        res.send(false);
    }
}

app.post("/api/login", (req,res) => {
    var reqb = req.body;
    // console.log(reqb.username, reqb.password);
    var username_entered = reqb.username;
    Account.find({reg_no: username_entered}, (err, account) => {
        // console.log(account);
        account = account[0];
        if(typeof(account) === typeof({})){
            if(account.reg_no === username_entered && account.password === reqb.password){
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

app.get("/api/loginch", authenticate, (req,res) => {
    if(req.session.username !== undefined && req.session.username !== ''){
        if(req.session.clearance === 'admin'){
            res.send(true);
        }
    }
})

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

app.post("/api/message", (req,res) => {
    var reqb = req.body;
    // console.log(reqb);
    if(reqb.name !== "" && reqb.name.length <= 40 && reqb.phno.toString().length >= 8 && reqb.email !== "" && reqb.email.length <=40 && reqb.message !== "" && reqb.message.length <= 150){
        // console.log("Validated");
        Message.create(reqb, (err, obj) => {
            if(err){
                console.log(err);
                throw err;
            } else {
                console.log("Message Added");
                console.log(obj);
                res.send(true);
            }
        });
        // res.send(true);
    } else {
        console.log("Invalid");
        res.send(false);
    }
});

app.post("/api/accountform1", (req,res) => {
    var reqb = req.body;
    console.log(reqb);
    var regexp = new RegExp(/1[4-7][A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9]/);
    if(reqb.name.length<30 && reqb.name !== "" && reqb.email.length<40 && reqb.email !== "" && reqb.reg_no.length === 9 && regexp.test(reqb.reg_no)){
        // console.log("Validated");
        Accountform1.create(reqb, (err,obj) => {
            if(err){
                console.log(err);
                res.send(false);
                throw err;
            } else {
                console.log(obj);
                res.send(true);
            }
        });
    }
    else {
        res.send(false);
    }
});

app.post("/api/acp", authenticate, (req,res) => {
    var reqb = req.body;
    if(reqb.doit){
        if(req.session.clearance === 'admin'){
            console.log("ACCOUNT CREATION PROTOCOL INITIATED");
            res.send(true);
        } else {
            res.send(false);
        }
    }
    else {
        res.send(false);
    }
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



// APP====APP====APP====APP====APP====APP====APP====APP===APP

app.post("/apiapp/login", (req,res) => {
    var reqb = req.body;
    var username = reqb.username;
    var password = reqb.password;
    var app = reqb.app;
    Login_app.find({ username: username }, (err, login) => {
        login = login[0];
        if(err){
            console.log(err);
            throw err;
            res.send({
                authenticated: false,
                chastity: false,
            });
        } else if(login !== undefined) {
            if(login.password === password){
                Account_app.find({ username: username }, (err1, account) => {
                    if(err){
                        console.log(err1);
                        throw err1;
                    } else {
                        if(account.password === password){
                            res.send({
                                authenticated: true,
                                chastity: false,
                            });
                        } else {
                            res.send({
                                authenticated: true,
                                chastity: true,
                            });
                        }
                    }
                });
            } else {
                res.send({
                    authenticated: false,
                    chastity: false,
                });
            }
        } else {
            res.send({
                authenticated: false,
                chastity: false,
            });
        }
    });
});

app.post("/apiapp/formsubmit", (req,res) => {
    var reqb = req.body;
    var username = reqb.username;
    var password = reqb.password;
    Login_app.find({ username: username }, (err,login) => {
        login = login[0];
        if(err){
            console.log(err);
            throw err;
            res.send({
                processed: false,
                dberror: true,
            });
        } else if(login !== undefined){
            if(login.password === password){
                Account_app.find({ username: username }, (err, account) => {
                    if(err){
                        console.log(err);
                        throw err;
                        res.send({
                            processed: false,
                            dberror: true,
                        });
                    } else {
                        if(account.password === password){
                            res.send({
                                processed: false,
                                dberror: false,
                            });
                        } else {
                            var fname = reqb.fname;
                            var lname = reqb.lname;
                            var phno = reqb.phno;
                            var email = reqb.email;
                            var gender = reqb.gender;
                            var regno = reqb.regno;
                            var regexp = new RegExp(/1[4-8][A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9]/);
                            if(regexp.test(regno)){
                                Account_app.create({
                                    username: username,
                                    password: password,
                                    fname: fname,
                                    lname: lname,
                                    phno: phno,
                                    email: email,
                                    gender: gender,
                                    regno: regno,
                                    inteam: false,
                                    teamno: -1,
                                }, (err,obj) => {
                                    if(err){
                                        console.log(err);
                                        throw err;
                                        res.send({
                                            processed: false,
                                            dberror: true,
                                        });
                                    } else {
                                        console.log(obj);
                                        res.send({
                                            processed: true,
                                            dberror: false
                                        });
                                    }
                                });
                            }
                        }
                    }
                });
            } else {
                res.send({
                    processed: false,
                    dberror: false,
                })
            }
        } else {
            res.send({
                processed: false,
                dberror: false,
            });
        }
    });
});

app.post("/apiapp/getaccount", (req,res) => {
    var reqb = req.body;
    var username = reqb.username;
    var password = reqb.password;
    Account_app.find({ username: username }, (err, account) => {
        account = account[0];
        if(err){
            console.log(err);
            throw err;
            res.send({
                valid: false,
                dberror: true,
            });
        } else if(account !== undefined){
            if(account.password === password){
                var acc_tosend = {
                    valid: true,
                    username: account.username,
                    fname: account.fname,
                    lname: account.lname,
                    phno: account.phno,
                    email: account.email,
                    gender: account.gender,
                    regno: account.regno,
                };
                res.send(acc_tosend);
            } else {
                res.send({
                    valid: false,
                });
            }
        } else {
            res.send({
                valid: false,
            });
        }
    });
});

app.post("/apiapp/teamdet", (req,res) => {
    var reqb = req.body;
    var username = reqb.username;
    var password = reqb.password;
    Account_app.find({ username: username }, (err, account) => {
        account = account[0];
        if(err){
            console.log(err);
            throw err;
            res.send({
                inteam: false,
                dberror: true,
            });
        } else if(account !== undefined){
            if(account.password === password){
                var teamno = account.teamno;
                Team_app.find({ teamno: teamno }, (err, team) => {
                    if(err){
                        console.log(err);
                        throw err;
                        res.send({
                            inteam: false,
                            dberror: true,
                        });
                    } else {
                        var team_tosend = {
                            teamno: teamno,
                            members: team.members,
                            inteam: true,
                        };
                        res.send(team_tosend);
                    }
                });
            } else {
                res.send({
                    inteam: false,
                });
            }
        }
    });
});

app.post("/apiapp/distresscheck", (req,res) => {
    var reqb = req.body;
    var username = reqb.username;
    var password = reqb.password;
    Account_app.find({ username: username }, (err, account) => {
        account = account[0];
        if(err){
            console.log(err);
            throw err;
            res.send({
                status: false,
                dberror: true,
            });
        } else if(account !== undefined){
            if(account.password === password){
                var teamno = account.teamno;
                Distress_app.find({ teamno: teamno }, (err, distress) => {
                    if(err){
                        console.log(err);
                        throw err;
                        res.send({
                            status: false,
                            dberror: true,
                        });
                    } else {
                        if(distress.teamno === teamno){
                            res.send({
                                status: true,
                            });
                        } else {
                            res.send({
                                status: false,
                            });
                        }
                    }
                });
            } else {
                res.send({
                    status: false,
                });
            }
        } else {
            res.send({
                status: false,
            });
        }
    });
});

app.post("/apiapp/distresspressed", (req,res) => {
    var reqb = req.body;
    var username = reqb.username;
    var password = reqb.password;
    Account_app.find({ username: username }, (err, account) => {
        account = account[0];
        if(err){
            console.log(err);
            throw err;
            res.send({
                status: false,
                dberror: true,
            });
        } else if(account !== undefined){
            if(account.password === password){
                Distress_app.create({
                    teamno: account.teamno,
                    pressedby: username,
                }, (err, distress) => {
                    if(err){
                        console.log(err);
                        throw err;
                        res.send({
                            status: false,
                        });
                    } else {
                        res.send({
                            status: true,
                        });
                    }
                });
            }
        } else {
            res.send({
                status: false,
            });
        }
    });
})

// APP====APP====APP====APP====APP====APP====APP====APP===APP









app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, 'dist/tec/index.html'));
});


app.listen(process.env.PORT || 8888, process.env.IP, (req,res) => {
    console.log("Server Started");
});