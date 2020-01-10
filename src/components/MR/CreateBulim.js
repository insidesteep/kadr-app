import React from "react";
import { Button, Modal, Form, Input } from "antd";

class CreateBulim extends React.Component {
  state = {
    visible: false,
    fields: { name: "", shtat: 0 }
  };

  onShow = () => this.setState({ visible: true });
  onHide = () => this.setState({ visible: false });

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  onSave = () => {
    this.props.onCreate(this.state);
    this.onHide()
  };

  render() {
    console.log(this.state);
    console.log(this.props);
    const { onCancel, onCreate, form } = this.props;
    const { visible } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.onShow}>
          {this.props.value}
        </Button>
        <Modal
          visible={visible}
          title="Yangi bo'lim yaratish"
          okText="Ok"
          onCancel={this.onHide}
          onOk={this.onSave}
        >
          <Form layout="vertical">
            <Form.Item label="Bo'lim nomi">
              <Input name="name" onChange={this.handleChange} />
            </Form.Item>
            <Form.Item label="Ummumiy shtati">
              <Input name="shtat" type="number" onChange={this.handleChange} />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default CreateBulim;
