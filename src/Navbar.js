import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';
import './App.css';
import TreeMenuDemo from './tree';

  const { Header, Content, Sider } = Layout;

function Navbar() {
  return (
    <Layout>

    <Header className="header">
      <div className="logo"/>
    </Header>

    <Layout>
      <Sider width={250} className="site-layout-background">
        <Menu
          style={{ height: '100%', borderRight: 0 }}
        >
          <TreeMenuDemo/>
        </Menu>
      </Sider>

      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>

    </Layout>
  </Layout>
  )
}

export default Navbar;