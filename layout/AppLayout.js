import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Row, Col } from 'antd';
import { UserOutlined, WechatOutlined, SettingOutlined } from '@ant-design/icons'
const AppLayout = ({ children }) => {
  return (
    <>
      <Row>
        <Menu mode="vertical">
            <Menu.Item>
                <Link href="/"><a><UserOutlined /></a></Link>  
            </Menu.Item>
            <Menu.Item>
                <Link href="/chat"><a><WechatOutlined /></a></Link>  
            </Menu.Item>
            <Menu.Item>
                <Link href="/signup"><a><SettingOutlined /></a></Link> 
            </Menu.Item> 
        </Menu>
        <Row>
          <Col xs={24} md={6}>왼쪽</Col>
          <Col xs={24} md={12}>중간 { children }</Col>
          <Col xs={24} md={6}>오른쪽</Col>
        </Row>
      </Row>
    </>
  );
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;