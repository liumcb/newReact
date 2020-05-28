import React from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons';
import './index.css';

const { Header, Sider, Content } = Layout;

class First extends React.Component{
  constructor(props){
    super(props);
    this.state  = {
      collapsed: false,
      count:0
    }
    this.toggle = this.toggle.bind(this);// 点击收缩
  }
  toggle () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  // 点击菜单
  menuHandle(e, count){
    console.log('点击菜单===', count);
    this.setState({
      count: count
    })
  }
  render(){
    return(
      <Layout>
        <Sider collapsed={this.state.collapsed} collapsible trigger={null}>
          <div className="logo" />
          <Menu defaultSelectedKeys={['1']} mode="inline" theme="dark">
            <Menu.Item icon={<UserOutlined />} key="1" onClick={(e) => this.menuHandle(e,1)}>
              nav 1
            </Menu.Item>
            <Menu.Item icon={<VideoCameraOutlined />} key="2" onClick={(e) => this.menuHandle(e,2)}>
              nav 2
            </Menu.Item>
            <Menu.Item icon={<UploadOutlined />} key="3" onClick={(e) => this.menuHandle(e,3)}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => this.toggle()
            })}
          </Header>
          <Content
              className="site-layout-background"
              style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280
            }}
          >
            {this.state.count}
          </Content>
        </Layout>
    </Layout>
  )}
}

export default First;