const express= require("express");
const app= express();
const path = require('path');
const bodyParser= require('body-parser');
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
  }
  app.use(cors(corsOptions))
  
//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

const rhmstestBll = require('./BLL/rhmstest_bll');

var swaggerJsDoc= require("swagger-jsdoc");
var swaggerUI= require("swagger-ui-express");

// swagger set up
var swaggerOption={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Remote Homecare Monitering System",
            version: "1.0.0",
            description: "Person Sample Test Report management",
            contact: {
                name:"AKN"
            },
            servers:["http://localhost:9090"]
        },
    },
    apis:["app.js","/nodejspractice/RHMS/BLL/rhmstest_bll.js"]
}

var swaggerDocs=swaggerJsDoc(swaggerOption);
app.use("/api-docs",swaggerUI.serve, swaggerUI.setup(swaggerDocs, {explorer:true}));

app.use('/sampleTest',rhmstestBll);


app.listen(9090);