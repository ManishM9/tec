var express = require("express");
var app = express();
var session = require("express-session");
var bodyparser = require("body-parser");
var nodecalendar = require("node-calendar");
var path = require("path");
var mongoose = require("mongoose");
var nodemailer = require("nodemailer");
var fs = require("fs");
var send = require('gmail-send');

var ObjectID = require("mongodb").ObjectID;

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
// var transporter = nodemailer.createTransport("smtp://embed2k18%40outlook.com:"+encodeURIComponent('anshulmalepati69@$$') + "@smtp-mail.outlook.com"); 

// const mailOptions = {
//     from: 'embed2k18@outlook.com', // sender address
//     bcc: ['mgpta007@gmail.com', 'mr.malepati@gmail.com', 'siddhantsaka6@gmail.com'],//, 'ridha.sardana2016@vitstudent.ac.in', 'arjun.sengupta2016@vitstudent.ac.in', 'viveka.varma2016@vitstudent.ac.in'], // list of receivers
//     subject: 'Regarding EMBED 2018', // Subject line
//     html: 'Greetings from The Electronics Club of VIT (TEC).<br>The wait for the 4th edition of our technical workshop Embed is finally over.<br><br>The venue of the workshop is TT gallery 1,  TT(Ground Floor) <br><br>The workshop will be of 12 hours, from 8.00 am to 8.00 pm<br>Kindly report to the venue at 7:45.a.m. on 2nd of October with charged laptops, mouses, chargers and pendrives.<br><br>No prior knowledge or anything is required. Everything will be provided at the workshop including the required softwares and hardware components kit. <br>Snacks will be provided at the venue.Breaks for lunch will also be provided. <br><br>Kindly download the Eagle Software for both MAC and Windows OS<br><br>https://www.dropbox.com/sh/3vfsaezj0d8j461/AADbcJi2cPBfgQLfkDkN-Z7Xa?dl=0<br><br><br>Participants make sure that you give your attendance at the desk outside the venue to the volunteers. Attendance will be taken after every session.Make sure you attend all the sessions to be eligible for the participation certificate. Everyone will be divided in teams of 2. For those who do not have a team will be provided with a team on spot. <br><br>A Glimpse into Embed 4.0 :- <br>1)Starting from basics, covering in depth knowledge on breadboards, PCB\'s and designing through Eagle. <br>2) Hands on session to be conducted. Drilling and etching to be shown live.<br>3) We have also collaborated with Enthu Tech, who\'ll be bringing their PCB prototype machine so as to get an industrial incline.',// plain text body
//     attachments: [{
//         filename: 'embed4.jpg',
//         content: fs.createReadStream(__dirname + '\\src\\assets\\images\\embed4.jpg'),
//     }]
// };

// transporter.sendMail(mailOptions, function (err, info) {
//     if(err)
//       console.log(err)
//     else
//       console.log(info);
// });

// fs.readFile(__dirname + '\\src\\assets\\embedlistfinal.json', (err, fileContent) => {
//     if( err ) {
//     } else {
//       data = JSON.parse(fileContent);
//       //   console.log(data);
//       var emails = [];  
//       //   console.log(data[0].G);
//       for(var i=1; i<data.length;i++){
//         emails.push(data[i].G);
//       }
//       console.log(emails);
//       emails.push('mgpta007@gmail.com');
//       emails.push('mr.malepati@gmail.com');
//       emails.push('divesh2198@gmail.com');
//       emails.push('test@test.com');

//       console.log(emails.length);

//       for(var i=0;i<6;i++){
//           var tempemails = [];
//         for(var j=0;j<25;j++){
//             var temp = i*25;
//             // console.log(temp+j);
//             tempemails.push(emails[temp+j]);
//         }
//         console.log(tempemails);
//         const mailOptions = {
//             from: 'embed2k18@outlook.com', // sender address
//             bcc: tempemails, //['aman.bagaria2016@vitstudent.ac.in', 'mr.malepati@gmail.com', 'ridha.sardana2016@vitstudent.ac.in', 'arjun.sengupta2016@vitstudent.ac.in', 'viveka.varma2016@vitstudent.ac.in'], // list of receivers
//             subject: 'Regarding EMBED 2018', // Subject line
//             html: 'Greetings from The Electronics Club of VIT (TEC).<br>The wait for the 4th edition of our technical workshop Embed is finally over.<br><br>The venue of the workshop is TT gallery 1,  TT(Ground Floor) <br><br>The workshop will be of 12 hours, from 8.00 am to 8.00 pm<br>Kindly report to the venue at 7:45.a.m. on 2nd of October with charged laptops, mouses, chargers and pendrives.<br><br>No prior knowledge or anything is required. Everything will be provided at the workshop including the required softwares and hardware components kit. <br>Snacks will be provided at the venue.Breaks for lunch will also be provided. <br><br>Kindly download the Eagle Software for both MAC and Windows OS<br><br>https://www.dropbox.com/sh/3vfsaezj0d8j461/AADbcJi2cPBfgQLfkDkN-Z7Xa?dl=0<br><br><br>Participants make sure that you give your attendance at the desk outside the venue to the volunteers. Attendance will be taken after every session.Make sure you attend all the sessions to be eligible for the participation certificate. Everyone will be divided in teams of 2. For those who do not have a team will be provided with a team on spot. <br><br>A Glimpse into Embed 4.0 :- <br>1)Starting from basics, covering in depth knowledge on breadboards, PCB\'s and designing through Eagle. <br>2) Hands on session to be conducted. Drilling and etching to be shown live.<br>3) We have also collaborated with Enthu Tech, who\'ll be bringing their PCB prototype machine so as to get an industrial incline.',// plain text body
//             attachments: [{
//                 filename: 'embed4.jpg',
//                 content: fs.createReadStream(__dirname + '\\src\\assets\\images\\embed4.jpg'),
//             }]
//         };
        
//         transporter.sendMail(mailOptions, function (err, info) {
//             if(err)
//               console.log(err)
//             else
//               console.log(info);
//         });
//       }

//     //   const mailOptions = {
//     //     from: 'webdevs.tec@outlook.com', // sender address
//     //     bcc: emails,//['aman.bagaria2016@vitstudent.ac.in', 'mr.malepati@gmail.com', 'ridha.sardana2016@vitstudent.ac.in', 'arjun.sengupta2016@vitstudent.ac.in', 'viveka.varma2016@vitstudent.ac.in'], // list of receivers
//     //     subject: 'Regarding SENSORED 2018', // Subject line
//     //     html: 'Greetings from <strong>The Electronics Club of VIT (TEC)</strong>. The wait for the 4th edition of our technical workshop SENSORED is finally over. </br></br>The venue of the workshop has been changed to Homi Bhabha Gallery in Silver Jubilee Tower (4th floor.) </br></br>The workshop is being conducted on 2 days <strong>8th and 9th of September from 8:00a.m. to 6:00p.m on both the days</strong>.</br> Kindly report to the venue at <strong>7:45.a.m. on 8th of September</strong> with charged laptops and pendrives.</br></br> No prior knowledge or anything is required. Everything will be provided at the workshop including the required softwares and hardware components kit. </br>Snacks will be provided at the venue.Breaks for lunch will also be provided. </br></br>Kindly download the Arduino software from this link:- https://drive.google.com/file/d/1Ro-cvfTw0-f5cDjfZsIGQnC1Hm4Eq97q/view?usp=sharing for MAC, and https://drive.google.com/file/d/13vracme60gRQCc4VwG5lVaY8xgR0tlHF/view?usp=sharing for Windows </br></br></br>Participants carry a screenshot of "GATE ENTRY PASS" with you, which will be checked at the entrance. Attendance will be taken on both the days of the workshop.Make sure you attend all the sessions to be eligible for the participation certificate. Everyone will be divided in teams of 4. For those who do not have a team will be provided with a team on spot. </br>A Glimpse into <strong>SENSORED 2K18</strong> :- </br>1)Starting from basics, covering in depth knowledge on sensors and their interfacing with Arduino. </br>2) Ground based for IOT implementation and the working of a bluetooth module with an app. </br>3) Hands on Implementation of the above theoretical concepts and detailed explanation of codes. </br></br>Follow us on facebook:-  https://www.facebook.com/tec.vit/  </br></br>Website:-   http://www.tecvit.co.in/ ',// plain text body
//     //     attachments: [{
//     //         filename: 'sensoredpromo2.jpg',
//     //         content: fs.createReadStream(__dirname + '\\src\\assets\\images\\sensoredpromo2.jpg'),
//     //     }],
//     //   };
    
//     // transporter.sendMail(mailOptions, function (err, info) {
//     //     if(err)
//     //       console.log(err)
//     //     else
//     //       console.log(info);
//     // });


//     }
// });



// const mailOptions = {
//     from: 'webdevs.tec@outlook.com', // sender address
//     bcc: "mr.malepati@gmail.com",//["principal@bvrit.ac.in","bhagatpoly303@gmail.com","b.suri670@gmail.com","kamakshi.cet@gmail.com","mchrao777@gmail.com","sureshnadi@gmail.com","bhagavatrao123@gmail.com","aljapur_srinivas@rediff.com","drdomal@gmail.com","principal@kitw.ac.in","vrec.29.nzb@gmail.com","vikramom2007@gmail.com","amrutha.latha@gmail.com","inf0@asti.edu.in","principalblraju@gmail.com","avn.principal@yahoo.com","principal.kitswgl@gmail.com","sbitprincipalwgl@gmail.com","sbit.009@gmail.com"], //[ "dsnandavedas@gmail.com","khaja1491@gmail.com","gopalreddy@nigamacollege.com","principal@nigamacollege.com","rameshrmuddasani@gmail.com","kits.kmm@gmail.com","mes_mim@yahoo.in","mespasha@yahoo.in","svits1998@gmail.com","visit2008uh@gmail.com","rpraopasala@gmail.com","krishna_indur@yahoo.co.in" ],//["mr.malepati@gmail.com",'ridha.sardana2016@vitstudent.ac.in'],//['aman.bagaria2016@vitstudent.ac.in', 'mr.malepati@gmail.com', 'ridha.sardana2016@vitstudent.ac.in', 'arjun.sengupta2016@vitstudent.ac.in', 'viveka.varma2016@vitstudent.ac.in'], // list of receivers
//     subject: 'Embed 4.0', // Subject line
//     html: 'Respected Sir/Mam,<br><br>We kindly request you to forward this mail to all your students. <br><br><br>Dear Students,<br><br>We invite you all to VIT\'s 10th edition of its annual, technical and design carnival GraVITas 2018 which aims to empower the young minds by giving them a national platform to showcase their genius and innovation. The Technical festival is spread over 3 days with over 100 events, 50 workshops with over 30,000 footfall.<br><br>This GraVITas is a better version of its previous editions which can be reinstated by the theme \"Technologies for the non Technologists\"<br><br>We, The Electronics Club of VIT , present to you it\'s premium workshop being held during this GraVITas.The Electronics Club of VIT is organizing an EMBED 4.0. Workshop in collaboration with Enthutech Technology on the October 2nd, 2018. It is a one day workshop in which we will be dealing with PCB Fabrication.<br><br>PCBs aka printed circuit boards plays an very important role in making our circuits smaller, which is a very important aspect of modern electronics.<br><br>Grab this opportunity and hone your skills and ability to fabricate compact circuits and systems. <br><br>Outcomes of the workshop:<br>Fabrication of circuits manually<br>Exposure to software like EAGLE to design circuits which can be fabricated as PCBs<br>Take away equipment kits <br>Exposure to Industrial PCB prototyping machine by Enthu Technology.  <br><br>Certificates will be provided for the workshop from GraVITas.<br><br>We cordially invite you to our technical workshops.<br><br>The registration cost is Rs.300 for EMBED 4.0<br>The link to register online is given below:<br><br>http://info.vit.ac.in/gravitas18/gravitas/gravitas_login.asp<br><br>You will be required to register yourself in the portal by clicking \'non vitian\' and filling up the registration form. After which you can login onto the same link and register for the events. <br><br>For any further queries you can contact the undersigned.<br><br>Event Coordinator<br>Embed 4.0:<br>Name: Gokul S <br>Contact: 8608121897<br>Email: gokul.s2016@vitstudent.ac.in<br>Website link: www.tecvit.co.in',// plain text body
//     attachments: [{
//         filename: 'embed4.0.jpg',
//         content: fs.createReadStream(__dirname + '\\src\\assets\\images\\embed4.0.jpg'),
//     }],
//   };

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
    // yearite: 0,
    // clearance: ''
    teamno: 0,
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
});

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

var accountmidSchema = new mongoose.Schema({
    name: String,
    email: String,
    reg_no: String,
    aid: String,
});

var Accountmid = mongoose.model("accountmid", accountmidSchema);

var account1Schema = new mongoose.Schema({
    name: String,
    email: String,
    reg_no: String,
});

var Accountform1 = mongoose.model("accountform1", account1Schema);

// APP====APP====APP====APP====APP====APP====APP====APP===APP

// var accountSchema_app = mongoose.Schema({
//     username: String,
//     password: String,
//     fname: String,
//     lname: String,
//     phno: Number,
//     email: String,
//     gender: String,
//     regno: String,
//     inteam: Boolean,
//     teamno: Number,
// });

// var Account_app = mongoose.model("app_account", accountSchema_app);

// var loginSchema_app = mongoose.Schema({
//     username: String,
//     password: String,
// });

// var Login_app = mongoose.model("app_login", loginSchema_app);

// // Login_app.create({ username: "sample2", password: "password2" }, (err, login) => {
// //     if(err){
// //         console.log(err);
// //         throw err;
// //     } else {
// //         console.log(login);
// //     }
// // });

// var teamSchema_app = mongoose.Schema({
//     teamno: Number,
//     members: [{
//         username: String,
//         fname: String,
//         lname: String,
//         phno: Number,
//         email: String,
//         gender: String,
//         regno: String,
//     }],
// });

// var Team_app = mongoose.model("app_team", teamSchema_app);

// var distressSchema_app = mongoose.Schema({
//     teamno: Number,
//     pressedby: String,
// });

// var Distress_app = mongoose.model("app_distress", distressSchema_app);

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
    email: String,
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



// 666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
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
    var month = Number(req.params.month);
    var year  = Number(req.params.year);
    console.log(month, year);
    // Item.find({"date": { $gt:year+"-"+month+"-1"}, "date": { $lte:year+"-"+month+"-31" } }, (err,events) => {
    Item.find({"date": { $gt:year+"-"+month+"-1" ,$lte:year+"-"+month+"-31" } }, (err,events) => {
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

// 666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666

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

var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    auth: {
        user: 'webdevs.tec@gmail.com',
        pass: 'anshulmalepati69@$$',
        // pass: 'ljewzovbuwjspauq',
        // pass: 'jssstovxpyylpdht',
    }
});


app.post("/api/acp", authenticate, (req,res) => {
    var reqb = req.body;
    if(reqb.doit){
        if(req.session.clearance === 'admin'){
            console.log("ACCOUNT CREATION PROTOCOL INITIATED");
            
            Accountform1.find({}, (err,account1) => {
                let accounts1 = account1;
                if(err){
                    console.log(err);
                    throw err;
                } else {
                    if(accounts1[0] !== undefined || accounts1[0] !== null || accounts1[0] !== {}){
                        // accounts1.forEach((account1, index) => {
                        //     accounts1[index]["aid"] = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
                        //     console.log(accounts1[index].aid);
                        // });
                        let array_accountsmid = [];
                        for(let i=0; i<accounts1.length; i++){
                            let obj_toadd = {
                                name: account1[i].name,
                                email: account1[i].email,
                                reg_no: account1[i].reg_no,
                                aid: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10),
                            };
                            // obj_toadd.aid = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
                            array_accountsmid.push(obj_toadd);
                        }
                        Accountmid.insertMany(array_accountsmid, (err, docs) => {
                            if(err){
                                console.log(err);
                                throw err;
                            } else {
                                console.log(docs);
                                docs.forEach(doc => {
                                    var email_tosend = doc.email;
                                    var mailOptions = {
                                        from: '"TEC Web Developers" <webdevs.tec@gmail.com>', // sender address
                                        to: email_tosend, // list of receivers
                                        subject: "[IMPORTANT]Account Creation Completion",
                                        text: "Yo It works!!!! :D :D :D :D",
                                        html: '<h4>Please go to the following URL</h4><p>www.tecvit.co.in/accountform/'+ doc.aid +'</p><p>Fill in the details and Submit.</p><br><br><br><br><br><p>~XD</p>' // html body
                                    };
                                    transporter.sendMail(mailOptions, function(error, info){
                                        console.log(mailOptions);
                                        console.log(info);
                                        if(error){
                                            return console.log(error);
                                        }
                                        console.log('Message sent: ' + info.response);
                                    });
                                });
                                Accountform1.deleteMany({}, (err, info) => {
                                    if(err){
                                        console.log(err);
                                        throw err;
                                    } else {
                                        console.log(info);
                                        res.send(true);
                                    }
                                })
                            }
                        });
                        // console.log(array_accountsmid);
                    }
                }
            });

        } else {
            res.send(false);
        }
    }
    else {
        res.send(false);
    }
});


app.get('/api/accountform/:aid', (req,res) => {
    var aid = req.params.aid;
    Accountmid.find({ aid: aid }, (err,obj) => {
        obj = obj[0];
        if(err){
            console.log(err);
            throw err;
        } else {
            console.log(obj);
            if(obj !== undefined && obj !== {} && obj !== null){
                res.send(true);
            } else {
                res.send(false);
            }
        }
    });
});


// send({
//     user: "webdevs.tec@gmail.com",
//     pass: "ljewzovbuwjspauq",
//     to: "sheetymanish@gmail.com",
//     subject: "Testing Gmail-Send :D 2",
//     text: "Yo It works!!!! :D :D :D :D",
// }, function(err, res) {
//     console.log(err);
//     console.log(res);
// })();

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: "smtp.gmail.com",
//     auth: {
//         user: 'webdevs.tec@gmail.com',
//         pass: 'ljewzovbuwjspauq',
//     }
//   });
  
  // setup e-mail data with unicode symbols
// var mailOptions = {
//     from: '"TEC Web Developers" <webdevs.tec@gmail.com>', // sender address
//     to: 'sheetymanish@gmail.com', // list of receivers
//     subject: "Testing Gmail-Send :D 2",
//     text: "Yo It works!!!! :D :D :D :D",
//     html: '<p>TEC</p>' // html body
// };
  
  // send mail with defined transport object
// transporter.sendMail(mailOptions, function(error, info){
//     console.log(mailOptions);
//     console.log(info);
//     if(error){
//         return console.log(error);
//     }
//     console.log('Message sent: ' + info.response);
// });

app.post('/api/accountsubmit/:aid', (req,res) => {
    var aid = req.params.aid;
    console.log(aid);
    var account_rec = req.body;
    var account_toadd = {
        yearite: account_rec.yearite,
        password: account_rec.password,
    };
    Accountmid.find({ aid: aid }, (err, obj) => {
        obj = obj[0];
        console.log(obj);
        if(err){
            console.log(err);
            res.send(false);
            throw err;
        } else {
            if(obj !== undefined && obj !== {} && obj !== null){
                account_toadd.name = obj.name;
                account_toadd.email = obj.email;
                account_toadd.reg_no = obj.reg_no;
                Account.create(account_toadd, (err, account) => {
                    console.log(account);
                    if(err){
                        console.log(err);
                        res.send(false);
                        throw err;
                    } else {
                        Accountmid.deleteOne({ aid: aid }, (err, info) => {
                            if(err){
                                console.log(err);
                                throw err;
                            } else {
                                console.log(info);
                                res.send(true);
                            }
                        });
                    }
                });
            } else {
                res.send(false);
            }
        }
    });
});

app.get('/api/getaccounts', (req,res) => {
    if(req.session.clearance === "admin"){
        Account.find({}, (err, accounts) => {
            if(err){
                console.log(err);
                throw err;
            } else {
                var accounts_tosend = [];
                accounts.forEach(account => {
                    var obj = {
                        name: account.name,
                        reg_no: account.reg_no,
                        yearite: account.yearite,
                        clearance: account.clearance,
                        email: account.email,
                    };
                    accounts_tosend.push(obj);
                });
                res.send(accounts_tosend);
            }
        });
    } else {
        res.send([]);
    }
});

app.post('/api/updateclearance/:reg_no', (req, res) => {
    var reg_no = req.params.reg_no;
    var obj = req.body;
    var to_update = {
        clearance: obj.clearance,
    };
    if(req.session.clearance === "admin"){
        Account.update({ reg_no: reg_no }, to_update, { multi: false }, (err, doc) => {
            if(err){
                console.log(err);
                res.send(false);
                throw err;
            } else {
                console.log(doc);
                res.send(true);
            }
        });
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

// app.post("/apiapp/login", (req,res) => {
//     var reqb = req.body;
//     var username = reqb.username;
//     var password = reqb.password;
//     var authenticated = false;
//     if(!(req.session.username !== undefined && req.session.username !== '')){
//         res.send(false);
//     } else {
//     Login_app.find({ username: username }, (err, login) => {
//         login = login[0];
//         if(err){
//             console.log(err);
//             throw err;
//         } else {
//             if(login !== undefined){
//                 if(login.password === password){
//                     authenticated = true;
//                 } else {
//                     authenticated = false;
//                 }
//             } else {
//                 authenticated = false;
//             }
//         }
//         if(authenticated){
//             req.session.username = username;
//         }
//         res.send(authenticated);
//     });
//     }
// });

// var authenticate = function(req,res,next){
//     if(req.session.username !== undefined && req.session.username !== ''){
//         next();
//     } else {
//         res.send(false);
//     }
// }

// app.post("/apiapp/formsubmit", authenticate, (req,res) => {
//     var reqb = req.body;
//     var fname = reqb.fname;
//     var lname = reqb.lname;
//     var phno = reqb.phno;
//     var gender = reqb.gender;
//     var regno = reqb.regno;
//     Account_app.find({ username: username }, (err, account) => {
//         account = account[0];
//         if(err){
//             console.log(err);
//             throw err;
//         } else {
//             if(account === undefined){
//                 Account_app.create({
//                     fname: fname,
//                     lname: lname,
//                     phno: phno,
//                     regno: regno,
//                     inteam: false,
//                 });
//             } else {
//                 res.send(false);
//             }
//         }
//     });

// });

// app.post("/apiapp/getaccount", (req,res) => {
//     var reqb = req.body;
//     var username = reqb.username;
//     var password = reqb.password;
//     Account_app.find({ username: username }, (err, account) => {
//         account = account[0];
//         if(err){
//             console.log(err);
//             throw err;
//             res.send({
//                 valid: false,
//                 dberror: true,
//             });
//         } else if(account !== undefined){
//             if(account.password === password){
//                 var acc_tosend = {
//                     valid: true,
//                     username: account.username,
//                     fname: account.fname,
//                     lname: account.lname,
//                     phno: account.phno,
//                     email: account.email,
//                     gender: account.gender,
//                     regno: account.regno,
//                 };
//                 res.send(acc_tosend);
//             } else {
//                 res.send({
//                     valid: false,
//                 });
//             }
//         } else {
//             res.send({
//                 valid: false,
//             });
//         }
//     });
// });

// app.post("/apiapp/teamdet", (req,res) => {
//     var reqb = req.body;
//     var username = reqb.username;
//     var password = reqb.password;
//     Account_app.find({ username: username }, (err, account) => {
//         account = account[0];
//         if(err){
//             console.log(err);
//             throw err;
//             res.send({
//                 inteam: false,
//                 dberror: true,
//             });
//         } else if(account !== undefined){
//             if(account.password === password){
//                 var teamno = account.teamno;
//                 Team_app.find({ teamno: teamno }, (err, team) => {
//                     if(err){
//                         console.log(err);
//                         throw err;
//                         res.send({
//                             inteam: false,
//                             dberror: true,
//                         });
//                     } else {
//                         var team_tosend = {
//                             teamno: teamno,
//                             members: team.members,
//                             inteam: true,
//                         };
//                         res.send(team_tosend);
//                     }
//                 });
//             } else {
//                 res.send({
//                     inteam: false,
//                 });
//             }
//         }
//     });
// });

// app.post("/apiapp/distresscheck", (req,res) => {
//     var reqb = req.body;
//     var username = reqb.username;
//     var password = reqb.password;
//     Account_app.find({ username: username }, (err, account) => {
//         account = account[0];
//         if(err){
//             console.log(err);
//             throw err;
//             res.send({
//                 status: false,
//                 dberror: true,
//             });
//         } else if(account !== undefined){
//             if(account.password === password){
//                 var teamno = account.teamno;
//                 Distress_app.find({ teamno: teamno }, (err, distress) => {
//                     if(err){
//                         console.log(err);
//                         throw err;
//                         res.send({
//                             status: false,
//                             dberror: true,
//                         });
//                     } else {
//                         if(distress.teamno === teamno){
//                             res.send({
//                                 status: true,
//                             });
//                         } else {
//                             res.send({
//                                 status: false,
//                             });
//                         }
//                     }
//                 });
//             } else {
//                 res.send({
//                     status: false,
//                 });
//             }
//         } else {
//             res.send({
//                 status: false,
//             });
//         }
//     });
// });

// app.post("/apiapp/distresspressed", (req,res) => {
//     var reqb = req.body;
//     var username = reqb.username;
//     var password = reqb.password;
//     Account_app.find({ username: username }, (err, account) => {
//         account = account[0];
//         if(err){
//             console.log(err);
//             throw err;
//             res.send({
//                 status: false,
//                 dberror: true,
//             });
//         } else if(account !== undefined){
//             if(account.password === password){
//                 Distress_app.create({
//                     teamno: account.teamno,
//                     pressedby: username,
//                 }, (err, distress) => {
//                     if(err){
//                         console.log(err);
//                         throw err;
//                         res.send({
//                             status: false,
//                         });
//                     } else {
//                         res.send({
//                             status: true,
//                         });
//                     }
//                 });
//             }
//         } else {
//             res.send({
//                 status: false,
//             });
//         }
//     });
// })

// APP====APP====APP====APP====APP====APP====APP====APP===APP









app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, 'dist/tec/index.html'));
});


app.listen(process.env.PORT || 8888, process.env.IP, (req,res) => {
    console.log("Server Started");
});