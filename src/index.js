import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route,IndexRoute, hashHistory } from 'react-router';
import MediaQuery from 'react-responsive';

import App from './component/app';
import NewsContainer from './component/news_container';
import NewsDetail from './component/news_detail';
import UserCenter from './component/user_center';

import MobileApp from './component/mobile_app';
import MobileNewsContainer from './component/mobile_news_container';
import MobileNewsDetail from './component/mobile_news_detail';
import MobileUserCenter from './component/mobile_user_center';

ReactDOM.render(
	(
		<div>
			<MediaQuery query='(min-device-width: 1224px)'>
				<Router history={hashHistory}>
					<Route path="/" component={App}>
						<IndexRoute component={NewsContainer}></IndexRoute>
						<Route path="/detail/:news_id" component={NewsDetail}></Route>
						<Route path="/usercenter" component={UserCenter}></Route>
					</Route>
				</Router>
			</MediaQuery>
			<MediaQuery query='(max-device-width: 1224px)'>
				<Router history={hashHistory}>
					<Route path="/" component={MobileApp}>
						<IndexRoute component={MobileNewsContainer}></IndexRoute>
						<Route path="/detail/:news_id" component={MobileNewsDetail}></Route>
						<Route path="/usercenter" component={MobileUserCenter}></Route>
					</Route>
				</Router>
			</MediaQuery>
		</div>
),

	document.getElementById('root')
);
