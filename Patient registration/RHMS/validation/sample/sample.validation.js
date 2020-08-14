const { addSampleS } = require('./sample.schema')
const { addTestS } = require('./sample.schema')
const { updtSampleS } = require('./sample.schema')
const { updtTestS } = require('./sample.schema')
const { dltSampleS } = require('./sample.schema')
const { dltTestS } = require('./sample.schema')
const { getSampleS } = require('./sample.schema')

module.exports = {
    addSampleV: async(req, res, next) => {
        const value = await addSampleS.validate(req.body);
        if(value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        }else {
            next();
        }
    },

    addTestV: async(req, res, next) => {
        const value = await addTestS.validate(req.body);
        if(value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        }else {
            next();
        }
    },

    updtSampleV: async(req, res, next) => {
        const value = await updtSampleS.validate(req.params, req.body);
        if(value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        }else {
            next();
        }
    },

    updtTestV: async(req, res, next) => {
        const value = await updtTestS.validate(req.params, req.body);
        if(value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        }else {
            next();
        }
    },

    dltSampleV: async(req, res, next) => {
        const value = await dltSampleS.validate(req.params,);
        if(value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        }else {
            next();
        }
    },

    dltTestV: async(req, res, next) => {
        const value = await dltTestS.validate(req.params,);
        if(value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        }else {
            next();
        }
    },

    getSampleV: async(req, res, next) => {
        const value = await getSampleS.validate(req.query);
        if(value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        }else {
            next();
        }
    },

}