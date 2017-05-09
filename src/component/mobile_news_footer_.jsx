import React, {Component} from 'react';

import '../componentCss/newsFooter.css'

class NewsFooter extends Component {
  render(){
    return(
      <div className="leftWrapper">
            <div className="copyrightDeclare">
              <hr />
              Develop Teams ,Gear Chaos Studio. &copy; COPYRIGHTS RESERVED | developed for SOLAR WEEKLY.
            </div>
      </div>
    )
  }
}
export default NewsFooter ;