
const express = require('express');
const router = express.Router();
module.exports = router;
const rhmstestDll = require('../DLL/rhmstest_dll');

const { addSampleV } = require('../validation/sample/sample.validation');
const { addTestV } = require('../validation/sample/sample.validation');
const { updtSampleV } = require('../validation/sample/sample.validation');
const { updtTestV } = require('../validation/sample/sample.validation');
const { dltSampleV } = require('../validation/sample/sample.validation');
const { dltTestV } = require('../validation/sample/sample.validation');
const { getSampleV } = require('../validation/sample/sample.validation');

router.post('/sampleAdd', addSampleV, function(req,res) {
    rhmstestDll.addSample(req.body, function (result){
        res.send(result);
    });
});
router.get('/sampleDetails/', function(req,res) {
    rhmstestDll.getSampleDetails(req.query,function(result){
        res.send(result);
    });
});
router.delete('/sampleDlt/:srfId', dltSampleV, function(req,res) {
    console.log("BBBBLLLL",req.params);
    rhmstestDll.dltSample(req.params,function (result){
        res.send(result);
    });
});
router.get('/sampleTestRpt/', function(req,res) {
    // rhmstestDll.findSampleRpt(req.params,function(result){
     rhmstestDll.getSampleRpt(req.query,function(result){
         res.send(result);
     });
 });

router.get('/sampleTestEntry/:sampleId', function(req,res) {
    rhmstestDll.getsampleforTestEntry(req.params,function(result){
        res.send(result);
    });
});
router.post('/testAdd', addTestV, function(req,res) {
    rhmstestDll.addTest(req.body, function (result){
        res.send(result);
    });
});
router.get('/TestDetails/', function(req,res) {
    rhmstestDll.getTestDetails(req.query,function(result){
        res.send(result);
    });
});
router.delete('/testDlt/:testId', dltTestV, function(req,res) {
    rhmstestDll.dltTest(req.params, function(result){
        res.send(result);
    });
});
router.get('/TestRpt/', function(req,res) {
    rhmstestDll.getTestRpt(req.query,function(result){
        res.send(result);
    });
});
router.get('/TestRpt/:testId', function(req,res) {
    rhmstestDll.getUpdtTest(req.params,function(result){
        res.send(result);
    });
});

router.put('/testUpdt/:testId', updtTestV, function(req,res) {
    rhmstestDll.updtTest(req.params,req.body,function(result){
        res.send(result);
    });
});

router.get('/TestRptDateRange/', function(req,res) {
    console.log("BLL Result",req.query.q);
    console.log("BLL Result",req.query.r);
    req1 = req.query.q;
    req2 = req.query.r;
    rhmstestDll.getTestRptDateRange(req1,req2,function(result){
        res.send(result);
    });
});

router.put('/sampleUpdt/:srfId', updtSampleV, function(req,res) {
    rhmstestDll.updtSample(req.params, req.body, function (result){
        res.send(result);
    });
});









 
/**
 * @swagger
 * /sampleAdd:
 *  post:
 *    description: Add Sample Data
 *    parameters:
 *       - in: body
 *         name: doctorsPrescription
 *         schema:
 *           type: boolean
 *         required: true
 *         description: Doctor is prescribed or not
 *       - in: body
 *         name: followUpSample
 *         schema:
 *           type: boolean
 *         required: true
 *         description: Sample is first time taken or not
 *       - in: body
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of the person.
 *       - in: body
 *         name: age
 *         schema:
 *           type: number
 *         required: true
 *         description: Age of the person.
 *       - in: body
 *         name: gender
 *         schema:
 *           type: string
 *         required: true
 *         description: Gender Of the person
 *       - in: body
 *         name: mobileNumber
 *         schema:
 *           type: number
 *         required: true
 *         description: Mobile number of the person.
 *       - in: body
 *         name: mobileNumBelongTo
 *         schema:
 *           type: string
 *         required: true
 *         description: Self or Family mobile number provided
 *       - in: body
 *         name: quarantineFacility
 *         schema:
 *           type: boolean
 *         required: true
 *         description: Patient in Quarantine Facility or not  
 *       - in: body
 *         name: vlgTown
 *         schema:
 *           type: string
 *         required: true
 *         description: Currently the patient leave in area (village / Town)
 *       - in: body
 *         name: district
 *         schema:
 *           type: string
 *         required: true
 *         description: Present district name where patient reside
 *       - in: body
 *         name: state
 *         schema:
 *           type: string
 *         required: true
 *         description: Present state name where patient reside  
 *       - in: body
 *         name: address
 *         schema:
 *           type: string
 *         required: true
 *         description: Present living address of the patient
 *       - in: body
 *         name: nationality
 *         schema:
 *           type: string
 *         required: true
 *         description: Which nation patient belongs to
 *       - in: body
 *         name: arogyasetuAppUse
 *         schema:
 *           type: boolean
 *         required: true
 *         description: Patient downloaded and use arogyasetu app or not  
 *       - in: body
 *         name: pincode
 *         schema:
 *           type: number
 *         required: true
 *         description: Present address pincode of the patient
 *       - in: body
 *         name: adhaarNo
 *         schema:
 *           type: number
 *         required: false
 *         description: For Indians, there Adhar No
 *       - in: body
 *         name: passportNo
 *         schema:
 *           type: number
 *         required: false
 *         description: For foreign nations
 *       - in: body
 *         name: specimenType
 *         schema:
 *           type: array
 *           items:
 *              type: string   
 *         required: true
 *         description: Select lists from checkboxes  
 *       - in: body
 *         name: sampleCollectionDate
 *         schema:
 *           type: string
 *         required: true
 *         description: Date of specimen collection
 *       - in: body
 *         name: patientCategory
 *         schema:
 *           type: array
 *           items:
 *              type: string  
 *         required: true
 *         description: Select from categories
 *       - in: body
 *         name: symptomsStatus
 *         schema:
 *           type: boolean
 *         required: true
 *         description: Clinical Symptoms and signs  
 *       - in: body
 *         name: symptomsClinical
 *         schema:
 *           type: array
 *           items:
 *              type: string  
 *         required: true
 *         description: Select symptoms
 *       - in: body
 *         name: symptomDate
 *         schema:
 *           type: string
 *         required: true
 *         description: Date the patient feel symptom  
 *       - in: body
 *         name: symptomPreExist
 *         schema:
 *           type: array
 *           items:
 *              type: string  
 *         required: true
 *         description: Select Pre-Existing Medical Conditions
 *       - in: body
 *         name: imCompCond
 *         schema:
 *           type: boolean
 *         required: true
 *         description: immunocompromisedCondition
 *       - in: body
 *         name: hospitalized
 *         schema:
 *           type: boolean
 *         required: true
 *         description: Hospitalized or not  
 *       - in: body
 *         name: hospitalID
 *         schema:
 *           type: string
 *         required: true
 *         description: Hospital id/ number
 *       - in: body
 *         name: hAdmitDate
 *         schema:
 *           type: string
 *         required: true
 *         description: Hospitalization date
 *       - in: body
 *         name: hState
 *         schema:
 *           type: string
 *         required: true
 *         description: Hospital state  
 *       - in: body
 *         name: hDist
 *         schema:
 *           type: string
 *         required: true
 *         description: Hospital district
 *       - in: body
 *         name: hName
 *         schema:
 *           type: string
 *         required: true
 *         description: Hospital Name
 *       - in: body
 *         name: dName
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of The doctor  
 *       - in: body
 *         name: dEmail
 *         schema:
 *           type: string
 *         required: true
 *         description: Doctor email Id
 *       - in: body
 *         name: dMob
 *         schema:
 *           type: number
 *         required: true
 *         description: Doctor mobile number
 *       - in: body
 *         name: labSampleSent
 *         schema:
 *           type: string
 *         required: true
 *         description: Lab where sample is sent for test       
 *    responses: 
 *      '200':
 *        description: Sample Details Added
 */

 /**
 * @swagger
 * /sampleUpdt/:srfId:
 *  put:
 *    description: This will update data in the server
 *    parameters:
 *       - in: params
 *         name: srfId
 *         schema:
 *           type: number
 *         required: true
 *         description: To Update Sample ID
 *       - in: body
 *         name: doctorsPrescription
 *         schema:
 *           type: boolean
 *         required: true
 *         description: Doctor is prescribed or not
 *       - in: body
 *         name: followUpSample
 *         schema:
 *           type: boolean
 *         required: true
 *         description: Sample is first time taken or not
 *       - in: body
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of the person.
 *       - in: body
 *         name: age
 *         schema:
 *           type: number
 *         required: true
 *         description: Age of the person.
 *       - in: body
 *         name: gender
 *         schema:
 *           type: string
 *         required: true
 *         description: Gender Of the person
 *       - in: body
 *         name: mobileNumber
 *         schema:
 *           type: number
 *         required: true
 *         description: Mobile number of the person.
 *       - in: body
 *         name: mobileNumBelongTo
 *         schema:
 *           type: string
 *         required: true
 *         description: Self or Family mobile number provided
 *       - in: body
 *         name: quarantineFacility
 *         schema:
 *           type: boolean
 *         required: true
 *         description: Patient in Quarantine Facility or not  
 *       - in: body
 *         name: vlgTown
 *         schema:
 *           type: string
 *         required: true
 *         description: Currently the patient leave in area (village / Town)
 *       - in: body
 *         name: district
 *         schema:
 *           type: string
 *         required: true
 *         description: Present district name where patient reside
 *       - in: body
 *         name: state
 *         schema:
 *           type: string
 *         required: true
 *         description: Present state name where patient reside  
 *       - in: body
 *         name: address
 *         schema:
 *           type: string
 *         required: true
 *         description: Present living address of the patient
 *       - in: body
 *         name: nationality
 *         schema:
 *           type: string
 *         required: true
 *         description: Which nation patient belongs to
 *       - in: body
 *         name: arogyasetuAppUse
 *         schema:
 *           type: boolean
 *         required: true
 *         description: Patient downloaded and use arogyasetu app or not  
 *       - in: body
 *         name: pincode
 *         schema:
 *           type: number
 *         required: true
 *         description: Present address pincode of the patient
 *       - in: body
 *         name: adhaarNo
 *         schema:
 *           type: number
 *         required: false
 *         description: For Indians, there Adhar No
 *       - in: body
 *         name: passportNo
 *         schema:
 *           type: number
 *         required: false
 *         description: For foreign nations
 *       - in: body
 *         name: specimenType
 *         schema:
 *           type: array
 *           items:
 *              type: string   
 *         required: true
 *         description: Select lists from checkboxes  
 *       - in: body
 *         name: sampleCollectionDate
 *         schema:
 *           type: string
 *         required: true
 *         description: Date of specimen collection
 *       - in: body
 *         name: patientCategory
 *         schema:
 *           type: array
 *           items:
 *              type: string  
 *         required: true
 *         description: Select from categories
 *       - in: body
 *         name: symptomsStatus
 *         schema:
 *           type: boolean
 *         required: true
 *         description: Clinical Symptoms and signs  
 *       - in: body
 *         name: symptomsClinical
 *         schema:
 *           type: array
 *           items:
 *              type: string  
 *         required: true
 *         description: Select symptoms
 *       - in: body
 *         name: symptomDate
 *         schema:
 *           type: string
 *         required: true
 *         description: Date the patient feel symptom  
 *       - in: body
 *         name: symptomPreExist
 *         schema:
 *           type: array
 *           items:
 *              type: string  
 *         required: true
 *         description: Select Pre-Existing Medical Conditions
 *       - in: body
 *         name: imCompCond
 *         schema:
 *           type: boolean
 *         required: true
 *         description: immunocompromisedCondition
 *       - in: body
 *         name: hospitalized
 *         schema:
 *           type: boolean
 *         required: true
 *         description: Hospitalized or not  
 *       - in: body
 *         name: hospitalID
 *         schema:
 *           type: string
 *         required: true
 *         description: Hospital id/ number
 *       - in: body
 *         name: hAdmitDate
 *         schema:
 *           type: string
 *         required: true
 *         description: Hospitalization date
 *       - in: body
 *         name: hState
 *         schema:
 *           type: string
 *         required: true
 *         description: Hospital state  
 *       - in: body
 *         name: hDist
 *         schema:
 *           type: string
 *         required: true
 *         description: Hospital district
 *       - in: body
 *         name: hName
 *         schema:
 *           type: string
 *         required: true
 *         description: Hospital Name
 *       - in: body
 *         name: dName
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of The doctor  
 *       - in: body
 *         name: dEmail
 *         schema:
 *           type: string
 *         required: true
 *         description: Doctor email Id
 *       - in: body
 *         name: dMob
 *         schema:
 *           type: number
 *         required: true
 *         description: Doctor mobile number
 *       - in: body
 *         name: labSampleSent
 *         schema:
 *           type: string
 *         required: true
 *         description: Lab where sample is sent for test 
 *    responses: 
 *      '200':
 *        description: Sample Details updated
 */

  /**
 * @swagger
 * /sampleDlt/:srfId:
 *  delete:
 *    description: This will delete data in the server
 *    parameters:
 *       - in: params
 *         name: srfId
 *         schema:
 *           type: number
 *         required: true
 *         description: To Delete Sample Data
 *    responses: 
 *      '200':
 *        description: Sample Details Deleted
 */

 /**
 * @swagger
 * /testAdd:
 *  post:
 *    description: This will add Test data in the server
 *    parameters:
 *       - in: body
 *         name: sampRecptDate
 *         schema:
 *           type: string
 *         required: true
 *         description: Date of Sample Receipt
 *       - in: body
 *         name: samplStatus
 *         schema:
 *           type: boolean
 *         required: true
 *         description: Sample Accepted / Rejected
 *       - in: body
 *         name: testDate
 *         schema:
 *           type: string
 *         required: true
 *         description: Date of testing (dd/mm/yy)
 *       - in: body
 *         name: testResult
 *         schema:
 *           type: boolean
 *         required: true
 *         description: Test Result is Positive / Negative
 *       - in: body
 *         name: sampleRept
 *         schema:
 *           type: boolean
 *         required: true
 *         description: Repeat Sample Required (Yes / No)
 *       - in: body
 *         name: labSign
 *         schema:
 *           type: string
 *         required: true
 *         description: Sign of the Authority (Lab Incharge)
 *    responses: 
 *      '200':
 *        description: Test Details Added
 */
 /**
 * @swagger
 * /testUpdt/:testId:
 *  put:
 *    description: This will update data in the server
 *    parameters:
 *       - in: params
 *         name: testId
 *         schema:
 *           type: number
 *         required: true
 *         description: To Update Test ID
 *       - in: body
 *         name: sampRecptDate
 *         schema:
 *           type: string
 *         required: true
 *         description: Date of Sample Receipt
 *       - in: body
 *         name: samplStatus
 *         schema:
 *           type: boolean
 *         required: true
 *         description: Sample Accepted / Rejected
 *       - in: body
 *         name: testDate
 *         schema:
 *           type: string
 *         required: true
 *         description: Date of testing (dd/mm/yy)
 *       - in: body
 *         name: testResult
 *         schema:
 *           type: boolean
 *         required: true
 *         description: Test Result is Positive / Negative
 *       - in: body
 *         name: sampleRept
 *         schema:
 *           type: boolean
 *         required: true
 *         description: Repeat Sample Required (Yes / No)
 *       - in: body
 *         name: labSign
 *         schema:
 *           type: string
 *         required: true
 *         description: Sign of the Authority (Lab Incharge)
 *    responses: 
 *      '200':
 *        description: Test Details updated
 */
  /**
 * @swagger
 * /testDlt/:testId:
 *  delete:
 *    description: This will delete data in the server
 *    parameters:
 *       - in: params
 *         name: testId
 *         schema:
 *           type: number
 *         required: true
 *         description: To Delete Test Data
 *    responses: 
 *      '200':
 *        description: Test Details Deleted
 */

/**
 * @swagger
 * /sampleTestRpt/:testId:
 *  get:
 *    description: This will retrive data from the server
 *    parameters:
 *       - in: parser
 *         name: srfID
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the Test to get
 *    responses: 
 *      '200':
 *        description: can get Details of test Report
 *      
 */