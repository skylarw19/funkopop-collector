const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const funkopopSchema = new Schema({
  
}, {
  timestamps: true
});

module.exports = mongoose.model('Funkopop', funkopopSchema);
