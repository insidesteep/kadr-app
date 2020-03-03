import React from "react";
import { Table, Button, Icon } from "antd";
import { Header, Title } from "../../elements";

export const Laborantlar = () => {
  const dataSource = [
    {
      key: "1",
      name: "Anatomiya",
      shtats: 10,
      band: 7,
      qoldiq: 3,
      children: [
        {
          key: "1",
          name: "Laborant",
          shtats: 2,
          band: 1,
          qoldiq: 1,
          shart: "dddd"
        },
        {
          key: "2",
          name: "Kabinet mudiri",
          shtats: 2,
          band: 1,
          qoldiq: 1,
          shart: "dddd"
        },
        {
          key: "3",
          name: "Texnik",
          shtats: 2,
          band: 1,
          qoldiq: 1,
          shart: "dddd"
        },
        {
          key: "4",
          name: "Laboratoriya rahbari",
          shtats: 2,
          band: 1,
          qoldiq: 1,
          shart: "dddd"
        }
      ]
    }
  ];

  const columns = [
    {
      title: "Kafedra nomi",
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
        <Title>Laborantlar</Title>
        <Button type="primary" onClick={() => {}}>
          Shart qo'shish
        </Button>
      </Header>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Laborantlar;
