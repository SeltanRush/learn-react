import React from 'react'
import Article from '../Article/Article.jsx'

class News extends React.Component {
	render(){
		const NewsContent = this.props.data.map((item)=>{
			return (
				<Article data={item} key={item.id} />
			)
		});
		const NewsZero = <p className='news__text'>Новостей нет</p>;
		return (
			<div className='news'>
				<ul className='news__list'>
					{this.props.data.length ? NewsContent : NewsZero}
				</ul>
			</div>
		)
	}
}

module.exports = News;