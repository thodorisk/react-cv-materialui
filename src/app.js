import React from 'react';
import ReactDOM from 'react-dom';
import './favicon.ico';
import './app.scss';
import HeaderNavigation from './header';
import Introduction from './intro';
import About from './personal';
import Skills from './skills';
import Education from './education';

ReactDOM.render(
  <HeaderNavigation />,
  document.getElementById('root')
);

ReactDOM.render(
  <Introduction />,
  document.getElementById('intro')
);

ReactDOM.render(
  <About />,
  document.getElementById('about')
);

ReactDOM.render(
  <Education />,
  document.getElementById('education')
);

ReactDOM.render(
  <Skills />,
  document.getElementById('skills')
);
