import React from "react";
import { Modal, Form, Button, Input } from "antd";


class CreateInlineBulim extends React.Component {

  getFields = (optionType) => {
    switch(optionType){
      case "createInlineBulim":
        return this.createInline(); break;
      case "createPosition":
        return this.createPosition(); break;
      case "edit":
        return this.edit(); break;
      default: break;
    }
  }
  createInline = () => (
    <Form layout = "vertical">
          <Form.Item label = "Bo'lim nomi">
            <Input />
          </Form.Item>
    </Form>
  )

  createPosition = () => (
    <Form layout = "vertical">
          <Form.Item label = "Lavozim nomi">
            <Input />
          </Form.Item>
    </Form>
  )

  edit = () => (
    <Form layout = "vertical">
          <Form.Item label = "Edit">
            <Input />
          </Form.Item>
    </Form>
  )


  render() {
    const { handleCancel, title, hideModal, modal } = this.props;
    return (
      <Modal
        title="Yangi ichki bo'lim yaratish"
        visible={modal.isShow}
        onCancel={hideModal}
      >
        {this.getFields(modal.optionType)}
      </Modal>
    );
  }
}

CreateInlineBulim.defaultProps = {
  visible: false
};

export default CreateInlineBulim;
