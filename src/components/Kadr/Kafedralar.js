import React from "react";
import { Table, Button, Icon } from "antd";
import { Header, Title } from "../../elements";

export const Kafedralar = () => {
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
          name: "Kafedra mudiri",
          shtats: 2,
          band: 1,
          qoldiq: 1,
          shart: "dddd"
        },
        {
          key: "2",
          name: "Professor",
          shtats: 2,
          band: 1,
          qoldiq: 1,
          shart: "dddd"
        },
        {
          key: "3",
          name: "Dotsent",
          shtats: 2,
          band: 1,
          qoldiq: 1,
          shart: "dddd"
        },
        {
          key: "4",
          name: "Katta o'qituvchi",
          shtats: 2,
          band: 1,
          qoldiq: 1,
          shart: "dddd"
        },
        {
          key: "5",
          name: "Oq'ituvchi",
          shtats: 2,
          band: 1,
          qoldiq: 1,
          shart: "dddd"
        },
        {
          key: "6",
          name: "Stajyor",
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
        <Title>Kafedralar</Title>
        <Button type="primary" onClick={() => {}}>
          Shart qo'shish
        </Button>
      </Header>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Kafedralar;
