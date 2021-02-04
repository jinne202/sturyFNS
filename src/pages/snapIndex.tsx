import React from 'react';
import NavLayout from '../components/NavLayout';
import LeftMenu from '../components/LeftMenu';
import styled from 'styled-components';
import SnapCard from '../components/SnapPage/SnapCard';
import { Row, Col, List, Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header, Content, Footer, Sider } = Layout;

const snaps = [
    { id: 1, title: 'title1', source: 'blue' },
    { id: 2, title: 'title2', source: 'red' },
    { id: 3, title: 'title3', source: 'green' },
    { id: 4, title: 'title4', source: 'white' },
    { id: 5, title: 'title5', source: 'black' },
    { id: 6, title: 'title6', source: 'gray' },
    { id: 7, title: 'title7', source: 'white' },
    { id: 8, title: 'title8', source: 'black' },
    { id: 9, title: 'title9', source: 'gray' },
];

export default function SnapIndex(props: any) {
    return (
        <NavLayout>
            {/* <LeftMenu /> */}
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
                    style={{ backgroundColor: 'white' }}
                    width="600"
                >
                    <div className="logo" />
                    <Menu theme="light" defaultSelectedKeys={['1']} style={{ margin: '0px 0px 0px 100px ' }}>
                        <MenuTitleWrapper>
                            <Link href="/snapIndex">
                                <MenuIndexTitle style={{ margin: '0px 0px 145px 0px' }}>
                                    <Text>SNAP</Text>
                                    <TitleBorder></TitleBorder>
                                </MenuIndexTitle>
                            </Link>
                            <Link href="/lookbookIndex">
                                <MenuIndexTitle style={{ margin: '0px 0px 145px 0px' }}>
                                    <Text>LOOKBOOK</Text>
                                    <TitleBorderLookBook></TitleBorderLookBook>
                                </MenuIndexTitle>
                            </Link>
                            <Link href="/jobIndex">
                                <MenuIndexTitle>
                                    <Text>JOB</Text>
                                    <TitleBorderJob></TitleBorderJob>
                                </MenuIndexTitle>
                            </Link>
                        </MenuTitleWrapper>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, backgroundColor: 'white' }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {snaps.map((snap) => (
                                <SnapCard key={snap.id} {...snap} />
                            ))}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </NavLayout>
    );
}

const MenuTitleWrapper = styled.div`
    margin: 150px 0 0 0;
    font-family: 'Poppins', sans-serif;
    font-size: 64px;
    font-weight: 800;
`;

const MenuIndexTitle = styled.h2`
    position: relative;
    margin: 0 0 80px 0;
    color: ${({ theme }) => theme.mode.textColor};
    cursor: pointer;
`;

const TitleBorder = styled.span`
    border-bottom: 8px solid ${({ theme }) => theme.mode.borderColor};
    margin: 2px 0 0 0;
    width: 178px;
    position: absolute;
    top: 32px;
    right: 260px;
`;

const TitleBorderLookBook = styled(TitleBorder)`
    width: 272px;
    top: 30px;
    right: 78px;
`;

const TitleBorderJob = styled(TitleBorder)`
    width: 99px;
    right: 330px;
`;

const Text = styled.h2`
    color: ${({ theme }) => theme.mode.textColor};
    right: 130px;
`;
