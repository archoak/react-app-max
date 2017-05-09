import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import {
  	Card
} from 'antd';

class NewsBlock extends React.Component{
  	constructor(props){
  	  	super(props);
  	  	this.state = {
  	  	  newsArr : []
		}
	}
	componentWillMount(){
  	  	let {type, count} = this.props;
  	  	let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`;
  	  	axios.get(url)
			.then(response => {
			  	let newsArr = response.data;
			  	this.setState({newsArr});
			})
			.catch(error => {
			  	console.log(error.message);
			})
	}
	render(){
	  	let {type, count} = this.props ;
	  	let {newsArr} = this.state;
	  	let newsList = newsArr.length>0
	  	?(
			newsArr.map((news,index) => {
			  	return (
			  		<li key={index}>
					  <Link to={`/detail/${news.uniquekey}`}>{news.title}</Link>
					</li>
				)
			})
			)
		:'暂时没有新闻推送';
	  	return (
	  		<div>
			  	<Card>
				  	<ul>
					  	{newsList}
					</ul>
				</Card>
			</div>
		)
	}
}
NewsBlock.propTypes = {
  	type : React.PropTypes.string.isRequired,
  	count : React.PropTypes.number.isRequired
};
export default NewsBlock ;