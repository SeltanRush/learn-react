import React from 'react'

class Article extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			text: false
		}
		this.handlerText = () => {
			this.setState({text: this.state.text ? false : true})
		}
	}
	render(){
		if (!this.state.text){
			return (
				<li className='article'>
					<h3 className='article__title'>
					{this.props.data.title}</h3>
					<div className='article__button article__button_open' onClick={this.handlerText} >open</div>
				</li>
			)
		} else {
			return (
				<li className='article'>
					<h3 className='article__title'>
					{this.props.data.title}</h3>
					<div className='article__button article__button_close' onClick={this.handlerText} >close</div>
					<p className='article__text'>{this.props.data.text}</p>
				</li>
			)
		}
	}
}

module.exports = Article;