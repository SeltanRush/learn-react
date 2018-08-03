import React from 'react'

class Article extends React.Component{
	render(){
		return (
			<li className='article' key={this.props.data.id}>
				<h3 className='article__title'>{this.props.data.title}</h3>
				<p className='article__text'>{this.props.data.text}</p>
			</li>
		)
	}
}

module.exports = Article;