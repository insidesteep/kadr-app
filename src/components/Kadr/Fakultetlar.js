import React from "react";
import { Table, Button, Icon } from "antd";
import { Header, Title } from "../../elements";

export const Fakultetlar = () => {
  const dataSource = [
    {
      key: "1",
      name: "Davolash",
      shtats: 10,
      band: 7,
      qoldiq: 3,
      children: [
        {
          key: "1",
          name: "Dekan",
          shtats: 2,
          band: 1,
          qoldiq: 1,
          shart: "dddd"
        },
        {
          key: "2",
          name: "Dekan o'rinbosari",
          shtats: 2,
          band: 1,
          qoldiq: 1,
          shart: "dddd"
        },
        {
          key: "3",
          name: "Yoshlar bilan ishlash bo'yicha dekan o'rinbosari",
          shtats: 2,
          band: 1,
          qoldiq: 1,
          shart: "dddd"
        },
        {
          key: "4",
          name: "O'quv ishlari bo'yicha dekan o'rinbosari",
          shtats: 2,
          band: 1,
          qoldiq: 1,
          shart: "dddd"
        },
        {
          key: "5",
          name: "Uslubchi",
          shtats: 2,
          band: 1,
          qoldiq: 1,
          shart: "dddd"
        },
        {
          key: "6",
          name: "Kotib-ish yurituvchi",
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
      title: "Fakultet nomi",
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
        <Title>Fakultetlar</Title>
        <Button type="primary" onClick={() => {}}>
          Shart qo'shish
        </Button>
      </Header>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Fakultetlar;
