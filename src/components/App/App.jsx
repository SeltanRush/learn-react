import React from 'react';
import News from '../News/News.jsx'
import NewsForm from '../NewsForm/NewsForm.jsx'

const dataNews = [
	{
		id: 1,
		title: 'Lorem',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sunt ab iure impedit blanditiis sit eveniet aliquam non sapiente fugiat magni autem, nihil, repellendus aspernatur porro accusantium cupiditate possimus unde.'
	},
	{
		id: 2,
		title: 'Lorem',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sunt ab iure impedit blanditiis sit eveniet aliquam non sapiente fugiat magni autem, nihil, repellendus aspernatur porro accusantium cupiditate possimus unde.'
	},
	{
		id: 3,
		title: 'Lorem',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sunt ab iure impedit blanditiis sit eveniet aliquam non sapiente fugiat magni autem, nihil, repellendus aspernatur porro accusantium cupiditate possimus unde.'
	}
]

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: dataNews
		}
		this.handleAddArticle = (article) =>{
			this.setState({
				data: this.state.data.concat(article)
			})	
		}
	}
	render(){
		return (
			<div className='news__app'>
				<News data={this.state.data} />
				<NewsForm onAddArticle={this.handleAddArticle} />
			</div>
		)
	}
}


module.exports = App;