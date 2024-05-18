var Express = require('express');
var Mongoclient=require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");


var app = Express();

app.use(cors());

var CONNECTION_STRING="mongodb+srv://kuchavabachana1:bachana1234@cluster0.zznnsg4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



















var DATABASENAME = "vue-cart-data";
var database = "";

app.listen(5038, () => {
    Mongoclient.connect(CONNECTION_STRING, (error, client) => {
        database=client.db(DATABASENAME);
        console.log("mongo db connection");
    })
})


app.get('/api/vue-cart/GetNotes',(request, response) => {
    database.collection("vue-cart").find({}).toArray((error,result) => {
        response.send(result);
    })
})