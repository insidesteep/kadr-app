import React from "react";
import {
  Drawer,
  Button as Btn,
  Form,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  TreeSelect
} from "antd";
import { Menu, Button, Icon } from "semantic-ui-react";
import TreeSelectComponent from "./TreeSelectComponent";

const { Option } = Select;

class AddEmployee extends React.Component {
  state = {
    visible: false,
    value: undefined
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };
  onChange = value => {
    console.log('onChange ', value);
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <Menu secondary>
          <Menu.Menu position="right">
            <Menu.Item />
            <Button primary onClick={this.showDrawer}>
              <Icon name="plus" />
              Yangi xodim qo'shish
            </Button>
          </Menu.Menu>
        </Menu>
        <Drawer
          title="Basic Drawer"
          width={720}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Bo'lim nomi">
                  <TreeSelectComponent value = {this.state.value} onChangeTree = {this.onChange} plch = "Iltimos bo'limni tanglang"/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Url">
                  <Input
                    style={{ width: "100%" }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="Please enter url"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Owner">
                  <Select placeholder="Please select an owner">
                    <Option value="xiao">Xiaoxiao Fu</Option>
                    <Option value="mao">Maomao Zhou</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Type">
                  <Select placeholder="Please choose the type">
                    <Option value="private">Private</Option>
                    <Option value="public">Public</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Approver">
                  <Select placeholder="Please choose the approver">
                    <Option value="jack">Jack Ma</Option>
                    <Option value="tom">Tom Liu</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="DateTime">
                  <DatePicker.RangePicker
                    style={{ width: "100%" }}
                    getPopupContainer={trigger => trigger.parentNode}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Description">
                  <Input.TextArea
                    rows={4}
                    placeholder="please enter url description"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              borderTop: "1px solid #e9e9e9",
              padding: "10px 16px",
              background: "#fff",
              textAlign: "right"
            }}
          >
            <Btn onClick={this.onClose} style={{ marginRight: 8 }}>
              Bekor qilish
            </Btn>
            <Btn onClick={this.onClose} type="primary">
              Submit
            </Btn>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default AddEmployee;
