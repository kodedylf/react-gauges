import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DecisionExplanation from './DecisionExplanation';

class App extends React.Component {
	render() {
		return <MuiThemeProvider>
				   <DecisionExplanation />
  			   </MuiThemeProvider>
	}
}

alert("App");
export default App;
