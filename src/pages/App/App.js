import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AddFunko from '../AddFunko/AddFunko';
import UpdateFunko from '../UpdateFunko/UpdateFunko';
import AddWishlistFunko from '../AddWishlistFunko/AddWishlistFunko';
import * as funkopopAPI from '../../services/funkopop-api';
import * as wishlistAPI from '../../services/wishlist-api';
import * as userAPI from '../../services/user-api';
import NavBar from '../../components/NavBar/NavBar'
import Wishlist from '../Wishlist/Wishlist';
import FunkoCollection from '../FunkoCollection/FunkoCollection';
import WishlistFunko from '../../components/WishlistFunko/WishlistFunko';

class App extends Component {
  state = {
    // Initialize user if there's a token, otherwise null
    user: userAPI.getUser(),
    funkopops: [],
    wishlistFunkos: []
  };

  /*--------------------------- Callback Methods ---------------------------*/

  handleLogout = () => {
    userAPI.logout();
    this.setState({ user: null });
  }
  handleSignupOrLogin = () => {
    this.setState({user: userAPI.getUser()});
  }

/////////////collection functions
  getFunkoCollection = async () => {
    const funkopops = await funkopopAPI.index();
    this.setState({funkopops});
  }
  handleAddFunko = async (newFunkoData) => {
    const newFunko = await funkopopAPI.create(newFunkoData);
    this.setState(state => ({
      funkopops: [...state.funkopops, newFunko]
    }), () => this.props.history.push('/funkos'));
  }
  handleDeleteFunko = async (funkoId) => {
    await funkopopAPI.deleteOne(funkoId);
    this.setState(state => ({
      funkopops: state.funkopops.filter(f => f._id !== funkoId)
    }), ()=> this.props.history.push('/funkos'));
  }
  handleUpdateFunko = async (updatedFunkoData) => {
    const updatedFunko = await funkopopAPI.update(updatedFunkoData);
    console.log(updatedFunko)
    const newFunkopopsArr = this.state.funkopops.map(f =>
      f._id === updatedFunko._id ? updatedFunko : f);
      this.setState(
        {funkopops: newFunkopopsArr},
        ()=> this.props.history.push('/funkos')
      );
  }
////////////////WISHLIST functions
  getWishlist = async () => {
    const wishlistFunkos = await wishlistAPI.index();
    this.setState({wishlistFunkos})
  }
  handleAddWishlistFunko = async (newFunkoData) => {
    const newFunko = await wishlistAPI.create(newFunkoData);
    this.setState(state => ({
      wishlistFunkos: [...state.wishlistFunkos, newFunko]
    }), () => this.props.history.push('/wishlist'));
  }
  handleDeleteWishlistFunko = async (funkoId) => {
    await wishlistAPI.deleteOne(funkoId);
    this.setState(state => ({
      wishlistFunkos: state.wishlistFunkos.filter(f => f._id !== funkoId)
    }), ()=> this.props.history.push('/wishlist'));
  }
  handleUpdateWishlistFunko = async (updatedFunkoData) => {
    const updatedWishlistFunko = await wishlistAPI.update(updatedFunkoData);
    const newWishlistArr = this.state.wishlistFunkos.map(f =>
      f._id === updatedWishlistFunko._id ? updatedWishlistFunko : f);
      this.setState(
        {wishlistFunkos: newWishlistArr},
        ()=> this.props.history.push('/wishlist')
      );
  }
  handleMove = (wishlistFunko) => {
    this.handleDeleteWishlistFunko(wishlistFunko._id);
    this.handleAddFunko(wishlistFunko);
  }

  /*-------------------------- Lifecycle Methods ---------------------------*/

  //this, as a componentDidMount func doesn't help with the display on the funkopop collection page
  //bc I have to click on the page before it will display. but this func is needed to setstate.
  async componentDidMount() {
    // const funkopops = await funkopopAPI.index(); 
    // this.setState({ funkopops });
    this.getFunkoCollection();
    this.getWishlist();
  }

  /*-------------------------------- Render --------------------------------*/

  render() {
    return (
      <div className="App">
        <h1>Welcome to FunkoPop Collector!</h1>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <br/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>

          <Route exact path="/funkos" render={({history}) => 
            <FunkoCollection
              user={this.state.user}
              funkopops={this.state.funkopops}
              handleDeleteFunko={this.handleDeleteFunko} />
          }/>
          <Route path="/add" render={({history}) =>
            <AddFunko 
              handleAddFunko={this.handleAddFunko}
            />
          } />
          <Route path="/edit" render={({history, location}) =>
            <UpdateFunko 
              handleUpdateFunko={this.handleUpdateFunko}
              location={location}
            />
          } />

          <Route exact path="/wishlist" render={({history}) =>
            <Wishlist 
              user={this.state.user}
              wishlistFunkos={this.state.wishlistFunkos}
              handleDeleteWishlistFunko={this.handleDeleteWishlistFunko}
              handleMove={this.handleMove}
            />
          } />
          <Route path="/addToWishlist" render={({history}) =>
            <AddWishlistFunko
              handleAddWishlistFunko={this.handleAddWishlistFunko}
            />
          }/>
          <Route path="/editWishlistFunko" render={({history, location}) =>
            <UpdateFunko 
              handleUpdateFunko={this.handleUpdateWishlistFunko}
              location={location}
            />
          } />
        
      </div>
    );
  }
}

export default App;
