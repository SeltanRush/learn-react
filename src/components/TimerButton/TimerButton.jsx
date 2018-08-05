import React from 'react'

class TimerButton extends React.Component {
	constructor(props){
		super(props);
		this.handlerButton = () => {
			this.props.onStart(this.props.time);
		}
	}

	render(){
		return (
			<button
				className="timer__button"
				onClick={this.handlerButton}
			>{this.props.time}s</button>
		)
	}
}

module.exports = TimerButton;