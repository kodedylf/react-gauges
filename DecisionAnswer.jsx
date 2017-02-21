import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';
import ActionInfo from 'material-ui/svg-icons/action/info';
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel';

const iconMap = {
	Yes: <ActionCheckCircle color="#a9d70b" />,
	No: <NavigationCancel color="#ff0000" />,
	YesWithConditions: <ActionCheckCircle color="#f9c802" />,
	WrongChannel: <ActionInfo color="#75bcff" />
};

class DecisionAnswer extends React.Component {
	render() {
		return(<div>{iconMap[this.props.answer]}</div>);
	}
}

export default DecisionAnswer;