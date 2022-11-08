import { Layout } from 'antd';
import React from 'react';
import "./App.css"
const { Header, Footer, Sider, Content } = Layout;
const App = () => (
  <div>
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </div>
);
export default App;
