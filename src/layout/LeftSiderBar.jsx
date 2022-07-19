import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import logo from "../assests/logo.svg";
import BottomComp from '../components/BottomComp';
import LineChart from '../components/LineChart';
import SelectBoxes from '../components/SelectBoxes';

import "../styles/sidebar.css";
import { items } from '../utils/sidebarUtils';
import FooterComp from './Footer';
import HeaderComp from './Header';


const { Content, Sider } = Layout;

const LeftSideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme="light">
                <img src={logo} alt="logo" className='logo' />
                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <HeaderComp />
                <Content
                    style={{
                        margin: '0 16px',
                        backgroundColor: "#FFF",
                        marginTop: "100px"
                    }}
                >
                    {/* ADD COMPONENTS HERE */}
                    <SelectBoxes />
                    <LineChart />
                    <BottomComp />
                </Content>
                <FooterComp />
            </Layout>
        </Layout>
    );
};

export default LeftSideBar;