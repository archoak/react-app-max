import React, {Component} from 'react';
import MobileNewHeader from './mobile_news_header';
import NewsFooter from './mobile_news_footer_'

import '../index_mobile.css'

export default class MobileApp extends Component{
  render(){
	return (
    	<div>
		  	<MobileNewHeader />
			     {this.props.children}
		    <NewsFooter/>
		</div>
	)
  }
}
