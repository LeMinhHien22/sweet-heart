import { useEffect, useState } from 'react';
import React, { Component } from 'react';
import CartContainer from '../src/pages/Cart/CartContainer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

/*function App() {
  const [authStatus, setAuthStatus] = useState(undefined);

  useEffect(() => {
    checkAuthenticationAsync()
      .then(res => setAuthStatus(res.authenticated))
      .catch(err => console.error(err));
  }, [authStatus]);
  class App extends Component {
    render() {
        return (
            <div>
                
                    <p>aaa</p>
                   
            </div >
        );
    }
}
}


import CartContainer from './containers/CartContainer';


import React, { Component } from 'react';
import CartItem from './components/CartItem';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
      return (
          <div>
                  <div>
                      <CartItem />
                  </div>
            </div>
      );
  }
}

export default App;

*/


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
