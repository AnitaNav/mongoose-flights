const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
   airline: {
    type: String,
    enum:['American', 'Southwest', 'United'],
    default: 'American'
   },
   airport: { 
    type: String,
    enum: ['Aus','DFW','DEN','LAX','SAN'],
    default: 'DEN'
   },
   flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    default: 0
  },
  
   departs: {
    type: Date,
    default: function() {
        return new Date().setFullYear(new Date().getFullYear() + 1);
      }
}, 
    timestamps: {type: Boolean, default: true}
    
});

module.exports = mongoose.model('Flight', flightSchema);