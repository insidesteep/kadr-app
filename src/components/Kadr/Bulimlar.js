import React, { useState } from "react";
import { Table, Button, Icon } from "antd";
import { Header, Title } from "../../elements";
import AddConditions from "./AddConditions";

export const Bulimlar = () => {
  const [visible, setVisible] = useState(false);
  const openModal = () => setVisible(true)
  const closeModal = () => setVisible(false)
  const dataSource = [
    {
      key: "1",
      name: "Axborot texnologiyalari markazi",
      shtats: 10,
      band: 7,
      qoldiq: 3,
      children: [
        {
          key: "1",
          name: "Tarmoq administratori",
          shtats: 2,
          band: 1,
          qoldiq: 1,
          shart: "dddd"
        }
      ]
    },
    {
      key: "2",
      name: "Hisobxona",
      shtats: 12,
      band: 12,
      qoldiq: 0,
      children: [
        {
          key: "1",
          name: "Bosh hisobchi",
          shtats: 1,
          band: 1,
          qoldiq: 0,
          shart: "dddd"
        }
      ]
    }
  ];

  const columns = [
    {
      title: "Bo'lim nomi",
      dataIndex: "name",
      key: "name",
      render: (text, record) => {
        if (record.hasOwnProperty("children")) {
          return (
            <>
              <Icon type="apartment" />
              &nbsp;{text}
            </>
          );
        }
        return (
          <>
            <Icon type="user" />
            &nbsp;{text}
          </>
        );
      }
    },
    {
      title: "Umumiy shtat",
      dataIndex: "shtats",
      key: "shtats"
    },
    {
      title: "Band",
      dataIndex: "band",
      key: "band"
    },
    {
      title: "Qoldiq",
      dataIndex: "qoldiq",
      key: "qoldiq"
    },
    {
      title: "Shartlar",
      dataIndex: "shart",
      key: "shart"
    }
  ];
  return (
    <div className="card" style={{ padding: "50px" }}>
      <Header>
        <Title>Bo'limlar</Title>
        <Button type="primary" onClick={openModal}>
          Shart qo'shish
        </Button>
      </Header>
      <Table dataSource={dataSource} columns={columns} />
      <AddConditions visible={visible} closeModal={closeModal}/>
    </div>
  );
};

export default Bulimlar;
