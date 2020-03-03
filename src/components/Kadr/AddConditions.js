import React from "react";
import { Modal } from "antd";

export const AddConditions = ({ visible, closeModal }) => {
  return <Modal visible={visible} onCancel={closeModal}></Modal>;
};

export default AddConditions;
