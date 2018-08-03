import React from 'react'
import Article from '../Article/Article.jsx'

class News extends React.Component {
	render(){
		const NewsContent = this.props.data.map((item)=>{
			return (
				<Article data={item} />
			)
		})
		return (
			<ul className='news'>
				{NewsContent}
			</ul>
		)
	}
}

module.exports = News;