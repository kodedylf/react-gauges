import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import {fullWhite} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const style = {
  margin: 12,
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { invId: "" };
  }

  handleInvIdChange(event) {
    this.setState({ invId: event.target.value });
  }

  render() {
    return (<Paper style={{marginTop: '280px'}}>
              <TextField hintText="Kundenummer" onChange={this.handleInvIdChange.bind(this)} style={{margin: 12, width: '725px'}} />
              <Link to={`/customer/${this.state.invId}`}>
                <FlatButton backgroundColor="#a4c639" hoverColor="#8AA62F" icon={<ActionSearch color={fullWhite} />} style={{margin: 12}} />
              </Link>
            </Paper>);
  }
};

export default Home;