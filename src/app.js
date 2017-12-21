import React from 'react';
import ReactDom from 'react-dom';
import Button from 'material-ui/Button';

function App() {
  return (
    <Button raised color="primary">
      Hello World
    </Button>
  );
}

ReactDom.render(<App />, document.querySelector('#root'));
