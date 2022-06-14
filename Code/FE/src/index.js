import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Home from './home';
import News from './news';
import Hall from './halls';
import xuat from './xuat';
import Book from './booking';
import Contact from './contact';

const rous = (  
  <Router>  
  <div>  
  <Route exact path="/" component={Home} />  
  <Route path="/home" component={Home} /> 
  <Route path="/news" component={News} />
  <Route path="/hall" component={Hall} />
  <Route path="/xuat" component={xuat} />
  <Route path="/book" component={Book} />
  <Route path="/contact" component={Contact} />

  </div>  
  </Router>  
  )  
  ReactDOM.render(rous, document.getElementById('root'));

