import React from 'react';
import { brown100 } from 'material-ui/styles/colors';

const Introduction = () => (
  <article>
    <div className="contentWrapper" style={{ backgroundColor: brown100 }} >
      <div className="innerWrapper">
        <h1 className="greeting">¡Hola!</h1>
        <h1>I am Thodoris, a Front-End Engineer.</h1>
      </div>
    </div>
  </article>
);

export default Introduction;
