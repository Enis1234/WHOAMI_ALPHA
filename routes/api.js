var express = require('express');
var router = express.Router();
const Stuff = require('../models/stuff');
var ObjectId = require('mongoose').Types.ObjectId;
//var persons = new ;

//get stuff from db
router.get('/stuff', function(req, res, next) {
   /* if(req.query.restart == "yes")
    {
        persons = null;
        console.log("person is reset")
    }
    if(persons == null) {*/
        var  parms = req.query.
        //var lo = req.query._id[0];
        console.log(" test "+ parms );
       // console.log1(lo);
        //var searchid = req.query.searchid;
       // console.log(searchid);
       // var myObjectId = require('mongoose').Types.ObjectId("name");
        Stuff.find({'name': '','':''}, function (err, docs) {
            if (err)
                console.log('error occured in the database');
            console.log(docs);
            console.log(value);
           // console.log(searchidid);
        });
   /* }
    else{
       // persons.find();
    }
    /* console.log(req.query.test);
     res.send(req.query.test);*/

});
//add new stuff to db
router.post('/stuff', function(req, res, next) {
    Stuff.create(req.body).then(function (stuff) {
        res.send(stuff);
    }).catch(next);
    /*var stuff = new Stuff(req.body);
    stuff.save();*/
});
//update stuff from db
router.put('/stuff/:id', function(req, res, next) {
    Stuff.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(stuff)
    {
        Stuff.findOne({_id: req.params.id}).then(function(stuff) {
            res.send(stuff);
        });
    });
});
//delete stuff from db
router.delete('/stuff/:id', function(req, res, next) {
    Stuff.findByIdAndRemove({_id: req.params.id}).then(function(stuff)
        {
        res.send(stuff);
        }
    ).catch(next);
});

module.exports = router;