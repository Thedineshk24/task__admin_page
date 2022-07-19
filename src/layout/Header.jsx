import React from 'react'
import {
    SearchOutlined,
    WechatOutlined,
    NotificationOutlined
} from '@ant-design/icons';
import { Input, Avatar, Tag , Layout } from 'antd';
import user from "../assests/user.png";
import RowComp from '../components/Row';
import "../styles/sidebar.css";

const { Header } = Layout;

const HeaderComp = () => {
    return (
        <>
            <Header
                className="site-layout-background"
                style={{
                    padding: 0,
                    backgroundColor: '#fff',
                    display: 'flex',
                }}
            >
                <Input
                    className='search__input'
                    placeholder="Search..."
                    defaultValue={'ALL'}
                    suffix={
                        <SearchOutlined style={{ backgroundColor: "purple", color: "#FFF", padding: "10px" }} />
                    }
                />
                <div className='tags'>
                    <Tag color="#87CE83">
                        Active Users <span>06</span>
                    </Tag>
                    <Tag color="#FFD37E">
                        In Queue <span>10</span>
                    </Tag>
                </div>
                <div className='icons'>
                    <p>
                        <WechatOutlined />
                    </p>
                    &nbsp;
                    <p>
                        <NotificationOutlined />
                    </p>
                </div>
                <div className='user'>
                    Armand Supervisor<Avatar size={64} src={user} />
                </div>
            </Header>
            <Header style={{
                backgroundColor: '#fff',
            }}>
                <RowComp />
            </Header>
        </>
    )
}

export default HeaderComp