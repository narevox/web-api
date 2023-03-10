const { readFileTxt, readFileJson } = require('../lib/function');
const { cekKey, kurangLimit, checkLimit } = require('../database/db');
const { User } = require('../database/model');

async function cakLontong(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey not found, please register first!`
    });
    await kurangLimit(apikey)
    const limit = await checkLimit(apikey)
    if (limit === 0) return res.status(403).send({
        status: 403,
        message: `your limit is up, wait tomorrow to be reset again`
    });
    readFileJson('./lib/data/caklontong.json').then(result => {
        res.status(200).send({
            status: 200, 
            question: result.quiz, 
            answer: result.answer, 
            detail: result.detail
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

async function quotes(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey not found, please register first!`
    });
    await kurangLimit(apikey)
    const limit = await checkLimit(apikey)
    if (limit === 0) return res.status(403).send({
        status: 403,
        message: `your limit is up, wait tomorrow to be reset again`
    });
    readFileJson('./lib/data/quotes.json').then(result => {
        res.status(200).send({
            status: 200, 
            quotes: result.quotes, 
            author: result.author
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

async function fakta(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey not found, please register first!`
    });
    await kurangLimit(apikey)
    const limit = await checkLimit(apikey)
    if (limit === 0) return res.status(403).send({
        status: 403,
        message: `your limit is up, wait tomorrow to be reset again`
    });
    readFileTxt('./lib/data/fakta.txt').then(result => {
        res.status(200).send({status: 200, result: result});
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

async function bijak(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Apikey`
    });
    const check = await cekKey(apikey)
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey not found, please register first!`
    });
    await kurangLimit(apikey)
    const limit = await checkLimit(apikey)
    if (limit === 0) return res.status(403).send({
        status: 403,
        message: `your limit is up, wait tomorrow to be reset again`
    });
    readFileTxt('./lib/data/bijak.txt').then(result => {
        res.status(200).send({status: 200, result: result});
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

async function ptl(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey not found, please register first!`
    });
    await kurangLimit(apikey)
    const limit = await checkLimit(apikey)
    if (limit === 0) return res.status(403).send({
        status: 403,
        message: `your limit is up, wait tomorrow to be reset again`
    });
    readFileTxt('./lib/data/ptl.txt').then(result => {
        res.status(200).send({status: 200, result: result});
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

async function motivasi(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey not found, please register first!`
    });
    await kurangLimit(apikey)
    const limit = await checkLimit(apikey)
    if (limit === 0) return res.status(403).send({
        status: 403,
        message: `your limit is up, wait tomorrow to be reset again`
    });
    readFileTxt('./lib/data/motivasi.txt').then(result => {
        res.status(200).send({status: 200, result: result.replace(/"/g, '')});
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

module.exports = {cakLontong, quotes, bijak, fakta, ptl, motivasi };