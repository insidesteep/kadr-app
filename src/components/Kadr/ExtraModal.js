import React from "react";
import { Tabs, Modal, Divider } from "antd";
import TableByExtra from "./TableByExtra";
import { saylov, faoliyat, oila, ish, tatil } from "../../utils/columns-extra";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const ExtraModal = ({ visible }) => {
  return (
    <Modal
      title="Qo'shimcha ma'lumotlar"
      visible={visible}
      onOk={() => {}}
      onCancel={() => {}}
      width="70%"
    >
      <Tabs defaultActiveKey="1" onChange={callback} tabPosition="left">
        <TabPane tab="Asosiy ma'lumotlar" key="1">
          <h3>Asosiy ma'lumotlar</h3>
          <Divider />
          <TableByExtra columns={saylov} />
        </TabPane>
        <TabPane tab="Partiyaviyligi" key="2">
          <h3>Partiyaviyligi</h3>
          <Divider />
          <TableByExtra columns={saylov} />
        </TabPane>
        <TabPane tab="Mehnat faoliyati" key="3">
          <h3>Mehnat faoliyati</h3>
          <Divider />
          <TableByExtra columns={faoliyat} />
        </TabPane>
        <TabPane tab="Yaqin qarindoshlari" key="4">
          <h3>Yaqin qarindoshlari</h3>
          <Divider />
          <TableByExtra columns={oila} />
        </TabPane>
        <TabPane tab="Mehnat ta'tili" key="5">
          <h3>Mehnat ta'tili</h3>
          <Divider />
          <TableByExtra columns={tatil} />
        </TabPane>
        <TabPane tab="Ishga tayinlanish" key="6">
          <h3>Ishga tayinlanishi</h3>
          <Divider />
          <TableByExtra columns={ish} />
        </TabPane>
      </Tabs>
    </Modal>
  );
};

export default ExtraModal;