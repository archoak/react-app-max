import React, {Component} from 'react';
import axios from 'axios';
import NewsComments from './news_comments';
import NewsImageBlock from './news_image_block';
import {
  	Col,
  	Row,
    BackTop
} from 'antd';
class NewsDetail extends Component {
  constructor(props){
     super(props);
	   this.state = {
	      news : ''
	   }
  }
  componentWillMount(){
     this.showDetail(this.props);
  }
  componentWillReceiveProps(nextProps){
     this.showDetail(nextProps);
  }
  showDetail = (props) => {
     let newsId = props.params.news_id;
     let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${newsId}`;
     //发送ajax请求
     axios.get(url)
        .then(response => {
           let news = response.data;
           //更新状态
           this.setState({news});
        })
        .catch(error => {
           console.log(error.message);
        })
  };
  render(){
	   let {news} = this.state ;
     return(
		    <div>
					 <Row>
							<Col span={2}></Col>
		      		<Col span={15}>
								 <div dangerouslySetInnerHTML={{__html : news.pagecontent}}></div>
                 <NewsComments newsId={this.props.params.news_id}/>
		           </Col>
		           <Col span={5}>
                 <div style={{marginTop:'12px'}}>
                   <NewsImageBlock  title='科技' type="keji" count={20} width='283px' imgWidth='116px'/>
                 </div>
               </Col>
		           <Col span={2}></Col>
					 </Row>
           <BackTop></BackTop>
		    </div>
		 )
  }
}
export default NewsDetail ;