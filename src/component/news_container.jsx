import React, {Component} from 'react';
import NewsImageBlock from './news_image_block';
import NewsBlock from './news_block';
import NewsRelative from './news_relative';
import {
  		Col,
  		Row,
  		Carousel,
  		Tabs
} from 'antd';
import carousel_1 from '../images/carousel_1.jpg'
import carousel_2 from '../images/carousel_2.jpg'
import carousel_3 from '../images/carousel_3.jpg'
import carousel_4 from '../images/carousel_4.jpg'
import '../componentCss/leftPart.css';
import '../componentCss/news_image_block.css'
const TabPane = Tabs.TabPane ;
class NewsContainer extends Component {
  	render(){
    	return(
    		<div className="leftWrapper">
		  		<Row>
			  		<Col span={2}></Col>
			  		<Col span={20}>
					  	<div className="subWrapper">
							<div className="carouselWrapper">
								<Carousel autoplay>
							  		<div><img src={carousel_1} alt=""/></div>
							  		<div><img src={carousel_2} alt=""/></div>
							  		<div><img src={carousel_3} alt=""/></div>
							  		<div><img src={carousel_4} alt=""/></div>
								</Carousel>
							</div>
						  	<NewsImageBlock title="国际头条" count={6} type='guoji' width='100%' imgWidth='114px'/>
						</div>
					  	<Tabs className="news_tab">
						  	<TabPane tab="娱乐新闻" key="1">
							  	<NewsBlock type="yule" count={25} />
							</TabPane>
						  	<TabPane tab="国内" key="2">
							  	<NewsBlock type="guonei" count={25}/>
							</TabPane>
						</Tabs>
					  	<Tabs className="news_relative">
						  	<TabPane tab="新闻相关网站" key="1">
								<NewsRelative />
							</TabPane>
						</Tabs>
					  	<div>
						  	<NewsImageBlock title="国内新闻" type="guonei" count={8} width="100%" imgWidth="115px"/>
						  	<NewsImageBlock title="娱乐新闻" type="yule" count={16} width="100%" imgWidth="115px"/>
						</div>
					</Col>
			  	<Col span={2}></Col>
			</Row>
		</div>
	)
  }
}
export default NewsContainer ;