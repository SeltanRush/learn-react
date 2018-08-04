import React from 'react';
import News from '../News/News.jsx'

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
	render(){
		return (
			<News data={dataNews} />
		)
	}
}


module.exports = App;