import {
    UserOutlined,
    HomeOutlined,
    DatabaseOutlined,
    SettingOutlined,
} from '@ant-design/icons';

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

export const items = [
    getItem('Home', '1', <HomeOutlined />),
    getItem('About', '2', <DatabaseOutlined />),
    getItem('Settings', '9', <SettingOutlined />),
];