import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {FontIcon} from 'material-ui/FontIcon';
import SocialPersonOutline from 'material-ui/svg-icons/social/person-outline';

class CustomerInfo extends React.Component {
	render() {
		return (<div>
				  <Card>
				    <CardHeader avatar={<SocialPersonOutline />} title="Jesper Frederiksen" />
				  </Card>
    			</div>);
	}
}

export default CustomerInfo;