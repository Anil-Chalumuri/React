import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//import Hello from './basics/Hello';
//import Greet from './basics/Greet';
//import GreetUser from './basics/GreetUser';
//import Course from './props/Course';

import reportWebVitals from './reportWebVitals';
//import Discount from './events/Discount';
//import CourseCC from './props/CourseCC';
//import Person from './props/Person';
//import BooksList from './parent-child/BooksList';
//import BooksCatalog from './parent-child/BooksCatalog';
//import Counter from './state/Counter';
//import Skills from './state/Skills';
//import CounterCC from './state/CounterCC';
//import PropsDrilling from './context/PropsDrilling';
//import FunctionDemo from './context/FunctionDemo';
//import Passengers from './state/Passengers';
//import UncontrolledDemo from './state/UncontrolledDemo';
//import FetchDemo from './ajax/FetchDemo';
//import JQueryDemo from './ajax/JQueryDemo';
//import Countries from './ajax/Countries';
//import GitUserInfo from './ajax/GitUserInfo';
//import FetchGitUserInfo from './ajax/FetchGitUserInfo';
import Main from './routing/Main';
//import TechSkills from './state/TechSkills';

// var books = [ 
//   {title: 'The outlier', price: 550},
//   {title: 'The World is flat', price: 650},
//   {title: 'No rules', price: 400}

// ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
