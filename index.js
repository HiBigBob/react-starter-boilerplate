import React    from 'react';
import ReactDOM from 'react-dom';
import Main     from './components/Main';

const model = [
  {id: 1},
];

ReactDOM.render(
  <Main model={model} />,
  document.getElementById('app')
);
