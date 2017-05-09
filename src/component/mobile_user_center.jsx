import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import {
	  Tabs,
	  Card,
} from 'antd';
const TabPane = Tabs.TabPane;
class MobileUserCenter extends Component {
	 constructor(props){
	 	  super(props);
	 	  this.state = {
				  comments : [],
				  stars : []
			}
	 }
	 componentDidMount(){
	 		//获取评论列表数据
		 		let userId = JSON.parse(localStorage.getItem('USER_KEY')).userId;
		 		let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=${userId}`;
		 		axios.get(url)
					.then((response => {
							let comments = response.data;
							//更新comments的状态
							this.setState({comments});
					}));
		 		//获取收藏列表数据
		 		url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=${userId}`;
		 		axios.get(url)
					.then(response => {
							let stars = response.data;
							//更新comments的状态
						  this.setState({stars});
					})
	 }
  	render(){
			  let {comments, stars} = this.state ;
			  let starsList = stars.length>0
			  ?(
						stars.map((item,index) => {
								return (
									<Card key={index} title={item.uniquekey} extra={<p style={{color : 'red'}}><Link to={`/detail/${item.uniquekey}`}>查看</Link></p>}>
										{item.Title}
									</Card>
								)
						})
					)
					:'当前没有任何收藏';
			    let commentsList = comments.length>0
					?(
							comments.map((comment,index) => {
									return (
										  <Card key={index} title={`您于${comment.datetime}评论了${comment.uniquekey}`} extra={<p style={{color : 'red'}}><Link to={`/detail/${comment.uniquekey}`}>查看</Link></p>}>
												{comment.Comments}
											</Card>
									)
							})
						)
					:'您当前没有任何评论';
					return(
						       <div>
										  <Tabs>
													<TabPane tab="我的收藏列表" key="1">
														{starsList}
													</TabPane>
												  <TabPane tab="我的评论列表" key="2">
														{commentsList}
													</TabPane>
													<TabPane tab="头像设置" key="3">
													</TabPane>
											</Tabs>
						 </div>
					)
	}
}
export default MobileUserCenter ;