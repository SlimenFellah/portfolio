require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const DBLink = process.env.DBLink
const port = process.env.PORT | 3000;  

app.use(bodyParser.urlencoded({extended : true}))


try{
    mongoose.connect(DBLink,{useNewUrlParser : true}, {useUnifiedTopology : true})
    console.log("*******connected to db succesfully********")
}
catch(err){
    console.log("error : ",err)
}


const messageSchema = {
    name : String,
    email : String,
    subject : String,
    message : String,
    date: String,
    id:String,
    data:Object
}
const messagedataSchema = {
    id : String,
    city : String,
    cityLatLong : String,
    countryName : String,
    ipAddress : String,
    deviceBrand : String,
    deviceFamily : String,
    deviceModel : String,
    browser : String,
    os : String,
    osVersion : String,
    date : String,
}
const visitordataSchema = {
    id : String,
    city : String,
    cityLatLong : String,
    countryName : String,
    ipAddress : String,
    deviceBrand : String,
    deviceFamily : String,
    deviceModel : String,
    browser : String,
    os : String,
    osVersion : String,
    date : String,
}

const message = mongoose.model("message",messageSchema)
const messageData = mongoose.model("messageData",messagedataSchema)
const visitorData = mongoose.model("visitorData",visitordataSchema)

app.use(express.static("Public"))
/*
app.get('/', function(req,res){
    res.sendFile(__dirname+"/index.html")
})
*/

app.post('/',function(req,res){
    let dataJSON = Object.keys(req.body);
    let data = JSON.parse(dataJSON)
    let newMessage = new message({
        name : data.name,
        email : data.email,
        subject : data.subject,
        message : data.message,
        date : data.date
    })
    newMessage.save()
    res.redirect('/')
})
app.post('/messagedata',function(req,res){
    let dataJSON = Object.keys(req.body);
    let data = JSON.parse(dataJSON) 
    let newMessageData = new messageData({
        id: data.id,
        city : data.city,
        cityLatLong : data.cityLatLong,
        countryName : data.countryName,
        ipAddress : data.ipAddress,
        deviceBrand : data.deviceBrand,
        deviceFamily : data.deviceFamily,
        deviceModel : data.deviceModel,
        browser : data.browser,
        os : data.os,
        osVersion : data.osVersion,
        date : data.date,
    })
    newMessageData.save()
    res.redirect('/')
})
app.post('/visitordata',function(req,res){
    let dataJSON = Object.keys(req.body);
    let data = JSON.parse(dataJSON) 
    let newvisitorData = new visitorData({
        id: data.id,
        city : data.city,
        cityLatLong : data.cityLatLong,
        countryName : data.countryName,
        ipAddress : data.ipAddress,
        deviceBrand : data.deviceBrand,
        deviceFamily : data.deviceFamily,
        deviceModel : data.deviceModel,
        browser : data.browser,
        os : data.os,
        osVersion : data.osVersion,
        date : data.date,
    })
    newvisitorData.save()
    res.redirect('/')
})

const server = app.listen(port, () => console.log(`App listening on port ${port}!`));
