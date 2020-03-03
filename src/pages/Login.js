import React from "react";
import loginBg from "../assets/images/login-bg.jpg";
import { Col, Row, Form, Input, Button, Icon, Typography } from "antd";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login">
        <Row>
          <Col span={12}>
            {/* <div className="login-left">

            </div> */}
            <Typography.Title level={4}>Tizimga kirish</Typography.Title>
          </Col>
          <Col span={12}>
            <Form>
              <Form.Item>
                <Input />
              </Form.Item>
              <Form.Item>
                <Input />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Kirish
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
