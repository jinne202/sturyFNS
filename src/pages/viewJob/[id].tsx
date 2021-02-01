import React from 'react';
import NavLayout from '../../components/NavLayout';
import BrandUserPage from '../../components/UserPage/BrandUser';
// import { useRouter } from 'next/router';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';

const { Header, Content, Footer, Sider } = Layout;

const userMyPage = () => {
    return (
        // <NavLayout>
        //     <BrandUserPage />
        // </NavLayout>
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <Logo />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                    <Menu.Item key="4">nav 4</Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        content
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

const Logo = styled.div`
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
`;

// #components-layout-demo-responsive .logo {

//   }

const Hb = styled.div`
    height: 32px;
    background: #fff;
`;

const Bg = styled.div`
    height: 32px;
    background: #fff;
`;

//   .site-layout-sub-header-background {
//     background: #fff;
//   }

//   .site-layout-background {
//     background: #fff;
//   }

export default userMyPage;
