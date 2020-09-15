import React from 'react';
import {uiConfig} from '../App/App';
import { Redirect } from 'react-router-dom';
import './Login.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import PropTypes from 'prop-types';
let firebase = require('firebase');

function Login(props) {
  return (
     <section>
       {props.userName ? <Redirect to='/' /> : <StyledFirebaseAuth uiConfig={ uiConfig } firebaseAuth={firebase.auth()} />}
      </section>
  )
}

Login.propTypes = {
  uiConfig: PropTypes.object,
  firebaseAuth: PropTypes.object,
  userName: PropTypes.string
}

export default Login
