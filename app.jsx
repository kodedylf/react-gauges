import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DecisionExplanation from './DecisionExplanation';

class App extends React.Component {
	render() {
		return <MuiThemeProvider>
				   <DecisionExplanation />
  			   </MuiThemeProvider>
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));