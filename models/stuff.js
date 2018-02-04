var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create Schema & models
const StuffSchema = new Schema(
    {
        name:{
            type: String,
            required: [true,  'string name is needed']
        },
        isFamous:{ // Ist die Person bekannt
            type: Boolean,
            required: [true,  'bool isFamous is needed'],
            default: false
        },
        isBig:{ // Ist die Person groß oder klein
            type: Boolean,
            required: [true,  'bool isBig is needed'],
            default: false
        },
        isFit:{ // Ist die Person trainiert
            type: Boolean,
            required: [true,  'bool isFit is needed'],
            default: false
        },
        isSmart:{ // Ist die Person intelligent
            type: Boolean,
            required: [true,  'bool isSmart is needed'],
            default: false
        },
        gotADick:{
            type: Boolean,
            required: [true,  'bool gotADick is needed'],
            default: false
        },
        isOld:{ // über 30
            type: Boolean,
            required: [true,  'bool isOld is needed'],
            default: false
        },
        haarfarbe:{
            type: String,
            required: [true,  'string haarfarbe is needed']
        },
        nationalitaet:{
            type: String,
            required: [true,  'string nationalitaet is needed']
        },
        beruf:{ // Beruf der Person
            type: String,
            required: [true,  'string beruf is needed']
        }
    }
    //add new stuff
);

var Stuff = mongoose.model('stuff',StuffSchema);

module.exports = Stuff;