import React from "react";
import { Tabs, Modal, Divider } from "antd";
import TableByExtra from "./TableByExtra";
import {
  saylov,
  faoliyat,
  oila,
  ish,
  tatil,
  passport
} from "../../utils/columns-extra";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const ExtraModal = ({ visible, handleCancel }) => {
  return (
    <Modal
      title="Qo'shimcha ma'lumotlar"
      visible={true}
      onCancel={handleCancel}
      width="90%"
      destroyOnClose
    >
      <Tabs
        defaultActiveKey="1"
        onChange={callback}
        tabPosition="left"
        size="small"
      >
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
        <TabPane tab="Malaka oshirganligi" key="7">
          <h3>Malaka oshirganligi</h3>
          <Divider />
          <TableByExtra columns={ish} />
        </TabPane>
        <TabPane tab="Qayta tayyorlov" key="8">
          <h3>Qayta tayyorlov</h3>
          <Divider />
          <TableByExtra columns={ish} />
        </TabPane>
        <TabPane tab="Davlat mukofotlari" key="9">
          <h3>Davlat mukofotlari</h3>
          <Divider />
          <TableByExtra columns={ish} />
        </TabPane>
      </Tabs>
    </Modal>
  );
};

export default ExtraModal;
