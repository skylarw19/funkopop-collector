var Funkopop = require('../models/funkopop');

module.exports = {
  index,
  create
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
    const funkopop = await Funkopop.create(req.body);
    res.status(201).json(funkopop);
  }
  catch(err){
    res.status(500).json(err);
  }
}
