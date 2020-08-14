const mongoClient = require("mongodb").MongoClient;
const { response } = require('express');
const { json } = require("body-parser");

const url = "mongodb://localhost:27017/";
const DB = "RHMSDB";
const colnS = "sampleData";
const colnT = "testData";

exports.addSample = (data , callback) => {
    mongoClient.connect(url, function(err, db){
        if (err) throw err;
        var dbo = db.db(DB);
        let aggregation = [
            { $project: { splitValue: {$split: ["$srfId","SMP"] } } },
            { $project: { _id: 0, maxValue : { $toInt: { $arrayElemAt: [ "$splitValue", 1 ] } } } },
            { $sort: { maxValue: -1 } }
          ]
        dbo.collection(colnS).aggregate(aggregation).toArray(function (err, result){
            if (err) throw err;
            let newSrfId;
            if(result.length === 0 || result[0].maxValue === null){
                newSrfId = 'SMP1';
            }else {
                newSrfId = 'SMP'+ (parseInt(result[0].maxValue) + 1);
            }
             data.srfId = newSrfId;
           dbo.collection(colnS).insertOne(data, function (err, res){
                if (err) throw err;
                let response = {
                    srfId : newSrfId,
                    message: "Sample details Added successfully"
                }
                callback(response);
                db.close();
            });
        })
    })
}
exports.getSampleDetails = function (req,callback) {
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
          dbo.collection(colnS).find({}, { projection: {
            srfId: 1,
               sampleCollectionDate: 1,
               _id: 0 } }).toArray(function (err, result) {  
            if (err) throw err;
            var results = JSON.stringify(result);
            console.log(result);
            callback(results);
            db.close();
        });
    });
};
exports.dltSample = function (myobj,callback) {
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
       // let matchQuery = {srfId : +myobj.srfId}
       let matchQuery = {srfId : myobj.srfId};
       console.log("BBBBLLLL",matchQuery);
        dbo.collection(colnS).deleteOne(matchQuery, function (err, res) {
            if (err) throw err;
            let response = {
                message: "Sample Data Deleted successfully."
            }
            callback(response);
            db.close();
        });
    });
};
exports.getSampleRpt = function (req,callback) {
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
          dbo.collection(colnS).find({}, { projection: {
              sampleID: 1,
               sampleCollectionDate: 1,
               name: 1,
               mobileNumber: 1,
               _id: 0 } }).toArray(function (err, result) {  
            if (err) throw err;
            var results = JSON.stringify(result);
            console.log(result);
            callback(results);
            db.close();
        });
    });
};
exports.getsampleforTestEntry = function(req, callback) {
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
          dbo.collection(colnS).findOne({sampleID:req.sampleId}, { projection: {
                srfId: 1,
                sampleID: 1,
                sampleCollectionDate: 1,
                name: 1,
                mobileNumber: 1,
               _id: 0 } },function (err, result) {  
            if (err) throw err;
            var results = JSON.stringify(result);
            callback(results);
            db.close();
        });
    }); 
};
exports.addTest = (data , callback) => {
    mongoClient.connect(url, function(err, db){
        if (err) throw err;
        var dbo = db.db(DB);
        let aggregation = [
            { $project: { splitValue: {$split: ["$testId","TS"] } } },
            { $project: { _id: 0, maxValue : { $toInt: { $arrayElemAt: [ "$splitValue", 1 ] } } } },
            { $sort: { maxValue: -1 } }
          ]
         dbo.collection(colnT).aggregate(aggregation).toArray(function (err, result){
            if (err) throw err;
            let newTestId;
              if(result.length === 0 || result[0].maxValue === null){
                newTestId = 'TS1';
            }else {
              newTestId = 'TS'+ (parseInt(result[0].maxValue) + 1);
            }
            
             data.testId = newTestId;
           dbo.collection(colnT).insertOne(data, function (err, res){
                if (err) throw err;
                let response = {
                    testId : newTestId,
                    message: "Test details Added successfully"
                }
                callback(response);
                db.close();
            });
        })
    })
}
exports.getTestDetails = function (req,callback) {
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
            dbo.collection(colnT).find({}, { projection: {
                testId: 1,
                testDate: 1,
                samplStatus: 1,
                sampleRept: 1,
                testResult: 1, 
                   _id: 0 } }).toArray(function (err, result) {
            if (err) throw err;
            callback(result);
            db.close();
        });
    });
};
exports.getUpdtTest = function(req,callback){
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
            dbo.collection(colnT).findOne({testId:req.testId}, { projection: { 
                testId: 1,
                testDate: 1,
                samplStatus: 1,
                sampleRept: 1,
                testResult: 1,
                labSign: 1, 
                    _id: 0 } },function (err, result) { 
            if (err) throw err;
            callback(result);
            db.close();
        });
    });
};
exports.updtTest = function (mquery, mvalue, callback) {
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        // let matchQuery = {testId : +mquery.testId}
        let matchQuery = {testId : mquery.testId};
        console.log("testid DLL : ",matchQuery);
        var newvalues = { $set: mvalue };
        console.log("testBody DLL : ",newvalues);
        dbo.collection(colnT).updateOne(matchQuery, newvalues, function (err, res) {
            if (err) throw err;
            let response = {
                 message: "Test details Updated successfully"
            }
            callback(response);
            db.close();
        });
    });
};
exports.dltTest = function (myobj,callback) {
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
       // let matchQuery = {testId : +myobj.testId}
       let matchQuery = {testId : myobj.testId}
        dbo.collection(colnT).deleteOne(matchQuery, function (err, res) {
            if (err) throw err;
            let response = {
                message: "Test Data Deleted successfully."
            }
            callback(response);
            db.close();
        });
    });
};
exports.getTestRpt = function (req1,req2,callback) {
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
       // let matchQuery = req.testId;
      /*   console.log("test ccccc",req.testId); */
           /*  dbo.collection(colnT).findOne({testId:req.testId}, { projection: { */
            dbo.collection(colnT).find({}, { projection: {
                testId: 1,
                testDate: 1,
                samplStatus: 1,
                sampleRept: 1,
                testResult: 1,
                labSign: 1, 
                   _id: 0 } }).toArray(function (err, result) {
                    /* _id: 0 } },function (err, result) { */
            if (err) throw err;
            callback(result);
            db.close();
        });
    });
};

exports.getTestRptDateRange = function (req1,req2,callback) {
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        console.log("DLL DATA",req1,req2);
            dbo.collection(colnT).find({testDate: {
                $gte: req1,
                $lt: req2
                /* $gte: "2020-08-01",
                $lt: "2020-08-10" */
            }}, { projection: {
                testId: 1,
                testDate: 1,
                samplStatus: 1,
                sampleRept: 1,
                testResult: 1,
                labSign: 1, 
                   _id: 0 } }).toArray(function (err, result) {
            if (err) throw err;
            callback(result);
            db.close();
        });
    });
};



exports.updtSample = function (mquery, mvalue, callback) {
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(DB);
        let matchQuery = {srfId : +mquery.srfId}
        var newvalues = { $set: mvalue };
        dbo.collection(colnS).updateOne(matchQuery, newvalues, function (err, res) {
            if (err) throw err;
            let response = {
                 message: "Sample details Updated successfully"
            }
            callback(response);
            db.close();
        });
    });
};

