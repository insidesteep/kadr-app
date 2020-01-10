import React, { useState } from "react";
import { Header, Title } from "../../elements";
import { Table, Button } from "antd";
import CreateEmployee from "./CreateEmployee";
import ExtraModal from "./ExtraModal";

const Xodimlar = () => {
  const columns = [
    {
      title: "#",
      width: 100,
      dataIndex: "hash",
      key: "hash",
      fixed: "left"
    },
    {
      title: "F.I.O",
      width: 150,
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      fixed: "left"
    },
    {
      title: "Bo'lim / Kafedra",
      dataIndex: "bulim",
      key: "bulim",
      width: 200,
      sorter: (a, b) => a.bulim.length - b.bulim.length
    },
    {
      title: "Lavozim",
      dataIndex: "lavozim",
      key: "lavozim",
      width: 200,
      sorter: (a, b) => a.lavozim.length - b.lavozim.length
    },
    {
      title: "Ma'lumoti",
      dataIndex: "malumot",
      key: "malumot",
      width: 150,
      sorter: (a, b) => a.age - b.age
    },
    {
      title: "Jinsi",
      dataIndex: "jins",
      key: "jins",
      width: 100,
      sorter: (a, b) => a.jins.length - b.jins.length
    },
    {
      title: "Millati",
      dataIndex: "millat",
      key: "millat",
      width: 100,
      sorter: (a, b) => a.millat.length - b.millat.length
    },
    {
      title: "Tug'ilgan kuni",
      dataIndex: "birthDay",
      key: "birthDay",
      width: 150,
      sorter: (a, b) => a.birthDay.length - b.birthDay.length
    },
    {
      title: "Pasport seriyasi",
      dataIndex: "passport",
      key: "passport",
      width: 150,
      sorter: (a, b) => a.passport.length - b.passport.length
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: 150,
      sorter: (a, b) => a.id - b.id
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 150,
      sorter: (a, b) => a.email.length - b.email.length
    },
    {
      title: "Telefon raqami",
      dataIndex: "phone",
      key: "phone",
      width: 150
    },
    {
      title: "Ilmiy daraja",
      dataIndex: "ilmDaraja",
      key: "ilmDaraja",
      width: 170,
      filters: [
        { text: "Fan nomzodi(PhD)", value: "PhD" },
        { text: "Fan doktori(DSc)", value: "DSc" },
        { text: "Ilmiy darajasiz", value: "no" }
      ],
      sorter: (a, b) => a.ilmDaraja.length - b.ilmDaraja.length
    },
    {
      title: "Ilmiy unvoni",
      dataIndex: "ilmUnvon",
      key: "ilmUnvon",
      width: 170,
      filters: [
        { text: "Dotsent", value: "docent" },
        { text: "Professor", value: "professor" },
        { text: "Katta ilmiy xodim", value: "kix" },
        { text: "Akademik", value: "academic" }
      ],
      sorter: (a, b) => a.ilmUnvon.length - b.ilmUnvon.length
    },
    {
      title: "Razryadi",
      dataIndex: "razryad",
      key: "razryad",
      width: 150,
      sorter: (a, b) => a.razryad - b.razryad
    },
    {
      title: "Turar joyi",
      dataIndex: "address",
      key: "address",
      width: 200
    },
    {
      title: "STIR",
      dataIndex: "inn",
      key: "inn",
      width: 150,
      sorter: (a, b) => a.inn - b.inn
    },
    {
      title: "INPS",
      dataIndex: "inps",
      key: "inps",
      width: 150,
      sorter: (a, b) => a.inps - b.inps
    }
  ];

  const data = [
    {
      key: 1,
      hash: 1,
      name: "Ergashev Zohid",
      bulim: "Axborot texnologiyalari",
      lavozim: "Tizmim administratori",
      malumot: "Oliy",
      jins: "Erkak",
      millat: "O'zbek",
      birthDay: "01.01.1991",
      passport: "AA 2314569",
      id: "2556fsd6as7a34",
      email: "mail@gamil.com",
      phone: "+998916215896",
      ilmDaraja: "yo'q",
      ilmUnvon: "yo'q",
      razryad: 7,
      address: "Buxoro viloyati. Buxoro tumani. Losha Q.F.Y 56-uy",
      inn: "12345678",
      inps: "12345678912345"
    }
  ];

  const [visible, setVisible] = useState(false)
  const [visibleExtra, setVisibleExtra] = useState(false)

  const openModal = () => setVisible(true)
  const closeModal = () => setVisible(false)
  const openExtraModal = () => setVisibleExtra(true)
  const closeExtraModal = () => setVisibleExtra(false)

  return (
    <div className="card" style={{ padding: "50px" }}>
      <Header>
        <Title>Xodimlar</Title>
        <Button type="primary" onClick={openModal}>Xodim qo'shish</Button>
      </Header>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 1500, y: 300 }}
        locale={{ filterReset: "Сброс" }}
      />
      <CreateEmployee visible={visible} handleCancel={closeModal} title="Yangi xodim yaratish" setVisible={setVisible} setVisibleExtra={setVisibleExtra} />
      <ExtraModal visible={visibleExtra}/>
    </div>
  );
};

export default Xodimlar;
