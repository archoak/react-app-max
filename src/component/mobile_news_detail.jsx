import React, {Component} from 'react';
import axios from 'axios';
import MobileNewsComments from './mobile_news_comments';
import {
  BackTop
} from 'antd';
class MobileNewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: ''
    }
  }

  componentDidMount() {
    const {news_id} = this.props.params;
    const url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${news_id}`;
    axios.get(url)
      .then(response => {
        const news = response.data;
        this.setState({news});
        document.title = news.title + " - SOLAR WEEKLY | 新闻平台";
      })
  }


  render() {
    let {news} = this.state;
    return (
      <div>
        <div className="mobileDetailsContainer" dangerouslySetInnerHTML={{__html: news.pagecontent}}></div>
        <hr/>
        <MobileNewsComments newsId={this.props.params.news_id}/>
        <BackTop />
      </div>
    )
  }
}
export default MobileNewsDetail ;