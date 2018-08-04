import React from 'react'

class NewsForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: '',
			text: '',
			agree: false
		}
		this.handleChange = (e) => {
			const { name,value } = e.currentTarget;
			this.setState({
				[name]: value
			})
		}
		this.handleCheckboxChange = (e) => {
			this.setState({
				agree: e.currentTarget.checked
			})
		}
		this.addArticle = (e) => {
			e.preventDefault();
			const article = {
				title: this.state.title,
				text: this.state.text,
				id: new Date()
			}
			this.props.onAddArticle(article);
			this.setState({
				title: '',
				text: ''
			})
		}
	}

	render(){
		return (
			<form className='news__form'>
				<input 
					type="text" 
					name="title" 
					className='news__input' 
					onChange={this.handleChange}
					value={this.state.title}
					placeholder='Title'  
				/>
				<textarea 
					name="text" 
					cols="30" 
					rows="10" 
					className='news__text' 
					onChange={this.handleChange} 
					value={this.state.text}
					placeholder='Text'  
				></textarea>
				<label className='news__agree'>
					<input 
						type="checkbox" 
						name="agree" 
						className='news__checkbox' 
						onChange={this.handleCheckboxChange}
					/> I`m agree the rules
				</label>
				<button className='news__button' onClick={this.addArticle}>Add article</button>
			</form>
		)
	}
}

module.exports = NewsForm;