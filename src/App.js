import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
}
  from 'react-router-dom';

import Home from '../src/Pages/Home/Home';
import About from '../src/Pages/About/About';
import ArticlesList from '../src/Pages/ArticlesList/ArticlesList';
import ArticlePage from '../src/Pages/ArticlePage/ArticlePage';
import NavBar from '../src/Pages/NavBar/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Route path="/" component={Home} exact></Route>
          <Route path="/about" component={About} exact></Route>
          <Route path="/article-list" component={ArticlesList} exact></Route>
          <Route path="/article/:name" component={ArticlePage} exact></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
