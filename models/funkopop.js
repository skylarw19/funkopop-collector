const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const funkopopSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: String,
  itemNo: Number,
  exclusivity: String,
  
}, {
  timestamps: true
});

module.exports = mongoose.model('Funkopop', funkopopSchema);
