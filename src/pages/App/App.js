import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AddFunko from '../AddFunko/AddFunko';
import UpdateFunko from '../UpdateFunko/UpdateFunko'
import * as funkopopAPI from '../../services/funkopop-api';
import * as userAPI from '../../services/user-api';
import NavBar from '../../components/NavBar/NavBar'
import Wishlist from '../Wishlist/Wishlist';
import FunkoCollection from '../FunkoCollection/FunkoCollection';

class App extends Component {
  state = {
    // Initialize user if there's a token, otherwise null
    user: userAPI.getUser(),
    funkopops: []
  };

  /*--------------------------- Callback Methods ---------------------------*/

  handleLogout = () => {
    userAPI.logout();
    this.setState({ user: null });
  }
  handleSignupOrLogin = () => {
    this.setState({user: userAPI.getUser()});
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

  // async getAll(){
  //   const funkopops = await funkopopAPI.index();
  // }

  /*-------------------------- Lifecycle Methods ---------------------------*/

  //this, as a componentDidMount func doesn't help with the display on the funkopop collection page
  //bc I have to click on the page before it will display. but this func is needed to setstate.
  async componentDidMount() {
    const funkopops = await funkopopAPI.index();  
    this.setState({ funkopops });
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
          <Route exact path="/wishlist" render={() =>
            <Wishlist />
          } />
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
        
      </div>
    );
  }
}

export default App;
