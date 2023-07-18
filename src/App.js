import React from 'react';
import Navbar from './components/Main/Navbar';


class App extends React.Component {
  render() {
    return (
        <div className="app">
          <Navbar />
          <div className="app-container">
            <div className="app-content">

              {/* Your content */}
              {/* Router view equivalent in React */}
                {}
            </div>
          </div>

        </div>
    );
  }
  constructor(props) {
    super(props);
    // Vue data properties can be initialized in the constructor
    this.state = {};
  }
}

export default App;
