import React from 'react';
import { connect } from 'react-redux';
import * as actions from './action';

class Home extends React.Component{
  // 点击
  clickHandle(){
    this.props.homePage({
      'param':{},
      'extraInfo':{},
      'pageSize':10}
    );
  }
  render(){
    console.log('homePageResult===', this.props.homePageResult);
    return(
      <div>
        <div>这是home页面
        </div>
        <button onClick={(e) => this.clickHandle(e)}>点击</button>
      </div>
    )
  }
}

export default connect((state) => (console.log('这是state===', state),{
  homePageResult: state.home.homePageResult
}), {
  homePage: actions.homePage
})(Home);