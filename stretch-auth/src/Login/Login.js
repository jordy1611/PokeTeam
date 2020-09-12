import React, { Component } from 'react';
import {uiConfig} from '../App/App'
import { Link } from 'react-router-dom'
import './Login.css'
import { secrets } from '../secrets';
import { firebaseui } from '../App/App';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
let firebase = require('firebase');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }
  
  render() {
    return (
       <section>
       <StyledFirebaseAuth uiConfig={ uiConfig } firebaseAuth={firebase.auth()} />
        </section>

    )
  }
}

export default Login
