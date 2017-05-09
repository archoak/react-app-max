import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

import {
  		Card
} from 'antd';

class NewsImageBlock extends React.Component{
  	constructor(props){
  	  	super(props);
  	  	//初始化图片新闻的状态
  	  	this.state = {
  	  	  	newsArr : []
		}
	}
	componentWillMount(){
  	  	let{type,count} = this.props;
	  	//配置url参数
	  	let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`;
	  	//发送ajax请求和获取图片新闻
	  	axios.get(url)
			.then(response => {
				//获取新闻数据
			    let newsArr = response.data;
			    //更新新闻数据的状态
			  	this.setState({newsArr});
			})
			.catch(error => {
			  	console.log(error.message);
			})
	}
  	render(){
	  	let {title, type, count, width, imgWidth} = this.props;
	  	let {newsArr} = this.state;
	  	let newsList = newsArr.length> 0
	  	?(
	  		newsArr.map((news,index) => {
				return (
					<div key={index} className="imgNewsWrapper">
					  	<Link to={`/detail/${news.uniquekey}`}>
						  	<div>
							  	<img style={{width:imgWidth}} src={news.thumbnail_pic_s} alt=""/>
							</div>
						  	<div>
							  	<h3 style={{width:imgWidth}}>{news.title}</h3>
							  	<p style={{width:imgWidth}}>{news.author_name}</p>
							</div>
						</Link>
					</div>
				)
			})
			)
		:'暂时没有新闻推送';
  	  	return (
			<div>
				<Card title={title} style={{width}}>
				  	{newsList}
				</Card>
			</div>
		)
	}
}
NewsImageBlock.propTypes = {
  	title : React.PropTypes.string.isRequired,
  	type : React.PropTypes.string.isRequired,
  	count : React.PropTypes.number.isRequired,
  	width : React.PropTypes.string.isRequired,
    imgWidth : React.PropTypes.string.isRequired
};
export default NewsImageBlock ;