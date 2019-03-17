import React, { Component } from "react";
import "./App.css";
import SampleComponent from "./components/SampleComponent";
import { Provider as ReduxProvider } from "react-redux";
import  {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import configureStore from "./modules/store";
import Home from "./components/Home";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routing = (
  <Router>
    <Switch>
      <Route exact="/" component={Home}/>
      <Route component={Home}/>
    </Switch>
  </Router>
);

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
        homeTitle: 'Bienvenido a Project Code Names'
    };
    this.update = this.update.bind(this);
}

  update = (currentState) => {
  if (currentState === 'Bienvenido a Project Code Names')
      this.setState({
      homeTitle: '813N83N1D0 4 PR0J3CT C0D3 N4M3'
  });
  else
  this.setState({
      homeTitle: 'Bienvenido a Project Code Names'
  });
  };

  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          {routing}
        </div>
      </ReduxProvider>
    );
  }
}

export default App;