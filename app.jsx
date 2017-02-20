import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DecisionExplanation from './DecisionExplanation';
import CustomerInfo from './CustomerInfo';
import PropertyInfo from './PropertyInfo';

class App extends React.Component {
	render() {
		return <MuiThemeProvider>
				 <div>
				   <CustomerInfo />
				   <PropertyInfo />
				   <DecisionExplanation />
				 </div>
  			   </MuiThemeProvider>
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));