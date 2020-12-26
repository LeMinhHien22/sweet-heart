
import React, { Component } from 'react';
import CartContainer from '../src/pages/Cart/CartContainer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
      return (
          <div>
                  <div>
                      <CartContainer />
                  </div>
            </div>
      );
  }
}


export default App;
