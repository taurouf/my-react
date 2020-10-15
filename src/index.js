import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './components/home';

const datas = [{
  id: '12345',
  name: 'greg',
  phone: '0123433443',
}, {
  id: '1234',
  name: 'taurouf',
  phone: '07070707',
}, {
  id: '123',
  name: 'gjut',
  phone: '0808080808',
},
];

const App = () => (
  <div>
    <ul>
      {datas.map((item) => <Home data={item} />)}
    </ul>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
