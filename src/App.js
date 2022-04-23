import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import MainPage from './components/MainPage';

Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default withAuthenticator(App);