import React from "react";
import { Table, Button, Tag } from "antd";
import { Header, Title } from "../../elements";

export const AccessControl = () => {
  const dataSource = [
    {
      hash: 1,
      key: "1",
      name: "Shermatov Hasan Ivanovich",
      bulim: "Axborot texnologiyalari markazi",
      lavozim: "Tarmoq administratori",
      access: "Axborot texnologiyalari markazi"
    },
    {
      hash: 2,
      key: "2",
      name: "Hasanov Shermat Ivanovich",
      bulim: "Gistologiya",
      lavozim: "Asistent",
      access: "Gistologiya"
    }
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "hash",
      key: "hash"
    },
    {
      title: "F.I.O",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Bo'lim / Kafedra / Fakultet",
      dataIndex: "bulim",
      key: "bulim"
    },
    {
      title: "Lavozim",
      dataIndex: "lavozim",
      key: "lavozim"
    },
    {
      title: "Biriktirilgan bo'lim",
      dataIndex: "access",
      key: "access",
      render: (value) => <Tag color="green">{value}</Tag>
    }
  ];
  return (
    <div className="card" style={{ padding: "50px" }}>
      <Header>
        <Title>Права доступа</Title>
        <Button type="primary" onClick={() => {}}>
          Xodim qo'shish
        </Button>
      </Header>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default AccessControl;
