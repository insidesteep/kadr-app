import React from "react";
import { Table } from "antd";
import { Menu, Input, Button, Icon } from "semantic-ui-react";
import "antd/es/table/style/css";
import AddEmployee from "./AddEmployee";

const VirtualTable = () => {
  const columns = [
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
      width: 150,
      fixed: "left"
    },
    {
      title: "Возраст",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Адрес",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => <a>action</a>
    }
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park"
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park"
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park"
    }
  ];

  return (
    <>
      <AddEmployee />
      <Table
        pagination={true}
        columns={columns}
        dataSource={data}
        scroll={{ x: 1500, y: 300 }}
      />
    </>
  );
};

export default VirtualTable;
