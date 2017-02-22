import React from 'react';
import Paper from 'material-ui/Paper';

class CustomerInfo extends React.Component {
	render() {
		return (<Paper style={{ padding: 24, marginBottom: 20 }}>
				  {this.props.customer.name}
				  {this.props.customer.isPotentialCustomer}
		        </Paper>);
	}
}

export default CustomerInfo;