const { validate, ValidationError, Joi } = require('express-validation')

const schema = {
    addSampleS: Joi.object({ 
            doctorsPrescription:Joi.string().required(),
            drPrecAttach:       Joi.string().required(),
            followUpSample: 	Joi.string().required(),
            patientId:          Joi.any(),
            name:               Joi.string().required(),
            age:	            Joi.number().required(),
            gender:	            Joi.string().required(),
            mobileNumber:		Joi.number().required(),
            mobileNumBelongTo:	Joi.string().required(),
            quarantineFacility:	Joi.string().required(),
            vlgTown:		    Joi.string().required(),
            district:		    Joi.string().required(),
            state:			    Joi.string().required(),
            address:			Joi.string().required(),
            nationality:		Joi.string().required(),
            arogyasetuAppUse:	Joi.string().required(),
            pincode:			Joi.number().required(),
            adhaarNo:			Joi.any(),
            passportNo:         Joi.any(),
            specimenType:		Joi.string().required(),
            sampleCollectionDate:Joi.date().iso().required(),
            sampleID:               Joi.any(),
            patientCategory:	Joi.string().required(),
            pCatOths:           Joi.any(),
            
            symptomsStatus:		Joi.string().required(),
            symptomsClinical:	Joi.any(),
            firstSymptom:       Joi.any(),
            symptomDate:		Joi.any(),

            symptomPreExist:	Joi.array().required(),
            preExistO:          Joi.any(),
            imCompCond:			Joi.string().required(),
            hospitalized:		Joi.string().required(),
            hospitalID:			Joi.any(),
            hAdmitDate:			Joi.any(),
            hState:				Joi.any(),
            hDist:				Joi.any(),
            hName:			    Joi.any(),
            dName:			    Joi.string().required(),
            dEmail:			    Joi.string().email().required(),
            dMob:				Joi.number().required(),
            labSampleSent:		Joi.string().required(),

     }),
    addTestS: Joi.object({ 
        sampleID:           Joi.any(),
        samplStatus:    Joi.string().required(),
        testDate:       Joi.date().iso().required(),
        testResult:	    Joi.string().required(),
        sampleRept:	    Joi.string().required(),
        labSign:        Joi.string().required(),
     }),
    updtSampleS: Joi.object({ 
        srfId: Joi.any().required(), 
     }),
    updtTestS: Joi.object({ 
        testId: Joi.any().required(),
     }),
    dltSampleS: Joi.object({ 
        srfId: Joi.any().required(),
     }),
    dltTestS: Joi.object({ 
        testId: Joi.any().required(),
     }),
    getSampleS: Joi.object({ 

     }),
}

module.exports = schema;


