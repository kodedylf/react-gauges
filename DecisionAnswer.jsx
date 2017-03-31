import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import Badge from 'material-ui/Badge';
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';
import ActionInfo from 'material-ui/svg-icons/action/info';
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel';

const noBadgeIconStyle = { height: 30, width: 30, paddingLeft: 11, paddingRight: 25, paddingTop: 20, paddingBottom: 19 };
const badgeIconStyle = { height: 30, width: 30 };

class DecisionAnswer extends React.Component {
	render() {
		switch (this.props.answer) {
			case "Yes":
				return (<ActionCheckCircle color="#a9d70b" style={ noBadgeIconStyle }/>);
			case "No": 
				return (<NavigationCancel color="#ff0000" style={ noBadgeIconStyle } />);
			case "YesWithConditions":
			    return (<Badge badgeContent={this.props.noOfConditions} primary={true} badgeStyle={{ top: 12, right: 12 }}><ActionCheckCircle color="#a9d70b" style={badgeIconStyle} /></Badge>);
			case "ChannelNo":
			    return (<ActionInfo color="#75bcff" style={ noBadgeIconStyle } />);
		}
		return(<div></div>);
	}
}

export default DecisionAnswer;