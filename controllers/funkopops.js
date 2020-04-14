var Funkopop = require('../models/funkopop');

module.exports = {
  index,
  create,
  update,
  delete: deleteOne
};

async function index(req, res) {
  try{
      const funkopops = await Funkopop.find({});
      res.status(200).json(funkopops);
  }
  catch(err){
      res.status(500).json(err);
  }
}

async function create(req, res) {
  console.log('user: ', req.user)
  try {
    req.body.user = req.user._id; ///is this correct
    const funkopop = await Funkopop.create(req.body);
    res.status(201).json(funkopop);
  }
  catch(err){
    res.status(500).json(err);
  }
}

async function update(req,res){
  
}

async function deleteOne(req,res){
  try{
    const deletedFunko = await Funkopop.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedFunko)
  } catch(err){
    res.status(500).json(err);
  }
}

