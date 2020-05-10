var Wishlist = require('../models/wishlist');

module.exports = {
  index,
  create,
  update,
  delete: deleteOne
};

async function index(req, res) {
  try{
      const wishlistFunkos = await Wishlist.find({}); //const jobs = await Job.find({user: req.user._id});   // <-- only return jobs for the logged in user
      res.status(200).json(wishlistFunkos);
  }
  catch(err){
      res.status(500).json(err);
  }
}

async function create(req, res) {
  try {
    req.body.user = req.user._id; //add reference
    const wishlistFunko = await Wishlist.create(req.body);
    res.status(201).json(wishlistFunko);
  }
  catch(err){
    res.status(500).json(err);
  }
}

async function deleteOne(req,res){
  try{
    const deletedWishlistFunko = await Wishlist.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedWishlistFunko)
  } catch(err){
    res.status(500).json(err);
  }
}

async function update(req,res){
  try{
    const updatedWishlistFunko = await Wishlist.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedWishlistFunko)
  }catch(err){
    res.status(500).json(err)
  }
}