import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useRoutes } from 'react-router-dom'
import routeConfig from '../Router/index.js'
import Menus from './menu';
const { Header, Sider, Content } = Layout;
const layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const element = useRoutes(routeConfig);
  console.log('element', element,new Date().getTime());

  return (
    <>
      <Layout className='h-screen'>

        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div style={{ height: '64px' }} className='h-full flex items-center justify-center'>
            <img className='h-full w-[32px]' src='https://vitejs.cn/logo.svg'></img>
            <span className='text-slate-200 text-lg'>vite+react</span>
          </div>
          <Menus

          />
        </Sider>
        <Layout className="site-layout">
          <Layout>
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              {element}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}
export default layout