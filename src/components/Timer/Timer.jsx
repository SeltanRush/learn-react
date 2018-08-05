import React from 'react'
import TimerButton from '../TimerButton/TimerButton.jsx'

class Timer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			time: 0,
			timer: false
		}
		this.timerStart = (time) => {
			this.setState({time: time},this.timerTick());
		}
		this.timerTick = () => {
			clearTimeout(this.state.timer);
			this.setState({
				time: --this.state.time
			});
			if(this.state.time) {
				this.setState({
					timer: setTimeout(this.timerTick, 1000)
				});
			}
		}
	}
	
	render(){
		return (
			<div className='timer'>
				<span className="timer__time">
					{this.state.time}s
				</span>
				<div className="timer__controls">
					<TimerButton
						time={5}
						onStart={this.timerStart}
					/>
					<TimerButton
						time={10}
						onStart={this.timerStart}
					/>
					<TimerButton
						time={15}
						onStart={this.timerStart}
					/>
				</div>
			</div>
		)
	}
}

module.exports = Timer;