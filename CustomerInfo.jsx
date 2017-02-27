import React from 'react';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';

class CustomerInfo extends React.Component {
	render() {
		return (<div>
				  <Paper style={{ padding: 24 }}>
				    {this.props.customer.name}
		          </Paper>
		          <Paper style={{ padding: 24, marginBottom: 20 }}>
	                <Checkbox label="Skattesamtykke" labelPosition="left" disabled={true} checked={!this.props.customer.isTaxConsentNeeded} />
		          </Paper>
		        </div>
		        );
	}
}

export default CustomerInfo;