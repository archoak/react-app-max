import React, {Component} from 'react';
import {
  Col,
  Row,
} from 'antd';

import '../componentCss/newsFooter.css'

class NewsFooter extends Component {
  	render(){
		return(
			<div className="leftWrapper">
		  		<Row>
					<Col span={2}></Col>
					<Col span={20}>
			  			<div className="copyrightDeclare">
						  	<hr />
							Develop Teams ,Gear Chaos Studio. &copy; COPYRIGHTS RESERVED | developed for SOLAR WEEKLY.
			  			</div>
					</Col>
				  	<Col span={2}></Col>
		  		</Row>
			</div>
		)
  	}
}
export default NewsFooter ;