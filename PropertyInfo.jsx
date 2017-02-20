import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {FontIcon} from 'material-ui/FontIcon';
import ActionHome from 'material-ui/svg-icons/action/home';

class PropertyInfo extends React.Component {
	render() {
		return (<div>
				  <Card>
				    <CardHeader avatar={<ActionHome />} title="Gl. Køge Landevej 23, 1. th." />
				  </Card>
    			</div>);
	}
}

export default PropertyInfo;