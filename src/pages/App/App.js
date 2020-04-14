import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import FunkopopsSecretPage from '../FunkopopsSecretPage/FunkopopsSecretPage'
import * as funkopopAPI from '../../services/funkopop-api';
import * as userAPI from '../../services/user-api';
import Funkopop from '../../components/Funkopop/Funkopop'
import NavBar from '../../components/NavBar/NavBar'
import AddFunko from '../AddFunko/AddFunko';
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
    console.log(funkoId)
  }

  /*-------------------------- Lifecycle Methods ---------------------------*/

  async componentDidMount() {
    const funkopops = await funkopopAPI.index();
    this.setState({ funkopops });
  }

  /*-------------------------------- Render --------------------------------*/

  render() {
    return (
      <div className="App">
        <h1>Welcome to Funkopop</h1>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        
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
        
      </div>
    );
  }
}

export default App;
