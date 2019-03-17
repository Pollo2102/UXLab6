import React, { Component } from 'react'

import {
  withStyles,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Grid,
  TextField,
  Button,
  FormControl
//   Link
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import { Route, Link, BrowserRouter as Router} from 'react-router-dom';
import ACTIONS from '../modules/action';
import { connect } from 'react-redux';
import ProjectCodeName from './ProjectCodeName';

class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            homeTitle: 'Bienvenido a Project Code Names'
        };
        this.update = this.update.bind(this);
  }

  title = true;

  update = (currentState) => {
    if (this.title)
    {
        this.setState({
        homeTitle: '813N83N1D0 4 PR0J3CT C0D3 N4M35'
        });
        this.title = false;
    }
    else
    {
        this.setState({
            homeTitle: 'Bienvenido a Projects Code Names'
        });
        this.title = true;
    }
  };

  render() {
      return (
          <div>
            <h1 id='title'>
                {this.state.homeTitle}
            </h1><br></br>
            <Button onClick={this.update}>BOOM</Button><br></br>
            <Router>
            <div>
                <ul>
                <li>
                    <Link to="/project-code-name">Click me to see some projects'
code names</Link>
                </li>
                </ul>
                <hr />
                <Route exact path="/project-code-name" component={ProjectCodeName} />
            </div>
            </Router>
          </div>
      );
  }
}

export default Home;
