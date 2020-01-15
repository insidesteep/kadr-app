import React, { useState, useEffect } from "react";
import {
  Modal,
  Input,
  Select,
  Form,
  Radio,
  Divider,
  Row,
  Col,
  DatePicker,
  InputNumber,
  Button
} from "antd";
import UploadAvatar from "./UploadAvatar";
import locale from '../../utils/locale/uz_UZB'
import moment from "moment"
import momentFr from 'moment/locale/uz-latn'

moment.locale("uz-latn", momentFr)



const CreateEmployee = ({ visible, title, handleCancel, setVisible, setVisibleExtra, form }) => {
  const [bulim, setBulim] = useState("")
  const [lavozim, setLavozim] = useState("")
  const [holatValue, setHolat] = useState(1);
  const [pinfl, setPinfl] = useState("")
  const [xissa, setXissa] = useState(0)
  const [photo, setPhoto] = useState(null)
  const [passport, setPassport] = useState("")
  const [lastname, setLastname] = useState("")
  const [name, setName] = useState("")
  const [patronymic, setPatronymic] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const [loadingFile, setLoadingFile] = useState(false)
  const [file, setFile] = useState(null)

  const { Option } = Select;

  const changeHolat = e => setHolat(e.target.value);
  const changeBulim = value => setBulim(value)
  const save = () => {
    setVisible(false)
    setVisibleExtra(true)
  }



  const renderAsosiy = () => (
    <Row gutter={24}>
      <Col span={14}>
        <Row>
          <Col>
            <Row gutter={24}>
              <Col span={12}>
                <Row>
                  <Form.Item label="Rasmi">
                    {
                      getFieldDecorator("rasm", {
                        valuePropName: 'fileList',
                        rules: [
                          { required: true, message: "Rasmni yuklang" }
                        ]
                      })(<UploadAvatar onChange={normFile} file={file} loading={loadingFile}/>)
                    }
                  </Form.Item>
                </Row>
              </Col>
              <Col span={12}>
                <Row>
                  <Col>
                    <Form.Item label="Pasport seriyasi">
                      {
                        getFieldDecorator("pSeria", {
                          rules: [{ required: true, message: "Pasport seriyasi kiritilmagan" }]
                        })(<Input placeholder="AA" style={{ width: "25%", marginRight: "2%" }} />)
                      }
                      {
                        getFieldDecorator("pNumber", {
                          rules: [{ required: true, message: "Pasport raqami kiritilmagan" }]
                        })(<Input placeholder="1234567" style={{ width: "73%" }} />)
                      }
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item label="Berilgan sana">
                      {
                        getFieldDecorator("bSana", {
                          rules: [{ required: true, message: "Sanani tanlang" }]
                        })(<DatePicker locale={locale} />)
                      }
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item label="Amal qilish muddati">
                      {
                        getFieldDecorator("aSana", {
                          rules: [{ required: true, message: "Sanani tanlang" }]
                        })(<DatePicker locale={locale} />)
                      }
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={10}>
        <Row>
          <Col>
            <Form.Item label="Familiyasi">
              {
                getFieldDecorator("familiya", {
                  rules: [{ required: true, message: "Familiyani kiriting" }]
                })(<Input />)
              }
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="Ismi">
              {
                getFieldDecorator("name", {
                  rules: [{ required: true, message: "Familiyani kiriting" }]
                })(<Input />)
              }
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="Otasining ismi">
              {
                getFieldDecorator("otchestvo", {
                  rules: [{ required: true, message: "Familiyani kiriting" }]
                })(<Input />)
              }
            </Form.Item>
          </Col>
        </Row>
      </Col>
    </Row>)

  const { getFieldDecorator } = form
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        save()
        console.log('Received values of form: ', values);
      }
    });
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const normFile = info => {
    if (info.file.status === "uploading") {
      setLoadingFile(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      if (info.file.originFileObj) alert("Есть")
      getBase64(info.file.originFileObj, imageUrl => {
        setLoadingFile(false)
        setFile(imageUrl)
      }
      );
    }
  };

  return (
    <Modal
      title={title}
      visible={visible}
      onOk={save}
      onCancel={handleCancel}
      width="50%"
      footer={null}
    >
      <Form onSubmit={handleSubmit}>
        <Row gutter={24}>
          <Col span={14}>
            <Form.Item label="JSHSHIR">
              {getFieldDecorator('pinfl', {
                rules: [{ required: true, message: "JSHSHIRni kiriitng" }]
              })(
                <InputNumber maxLength={14} style={{ width: "100%" }} />
              )}
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="Bo'lim / Kafedra">
              {
                getFieldDecorator("bulimlar", {
                  rules: [{ required: true, message: "Bo'limni tanlang" }]
                })(<Select onChange={changeBulim} placeholder="Bo'lim yoki kafedrani tanlang">
                  <Option value="86">+86</Option>
                  <Option value="87">+87</Option>
                </Select>)
              }
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={14}>
            <Form.Item label="Holati">
              {getFieldDecorator('holat', {
                rules: [{ required: true, message: "Holatni tanlang" }]
              })(
                <Radio.Group onChange={changeHolat} value={holatValue}>
                  <Radio value={1}>Asosiy</Radio>
                  <Radio value={2}>Tashqi o'rindosh</Radio>
                  <Radio value={3}>Ichki o'rindosh</Radio>
                </Radio.Group>
              )}
            </Form.Item>
          </Col>
          <Col span={10}>
            <Row gutter={8}>
              <Col span={14}>
                <Form.Item label="Lavozim">
                  {
                    getFieldDecorator("lavozimlar", {
                      rules: [{ required: true, message: "Lavozimni tanlang" }]
                    })(<Select placeholder="Lavozimni tanlang">
                      <Option value="86">+86</Option>
                      <Option value="87">+87</Option>
                    </Select>)
                  }
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item label="Xissa">
                  {
                    getFieldDecorator("xissa", {
                      rules: [{ required: true, message: "Xissani kiriting" }]
                    })(<InputNumber />)
                  }
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider />
        {
          holatValue !== 3 && renderAsosiy()
        }
        {/* 
        
       <Col span={12}>
            
          </Col>
          <Col span={12}>
            
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item label="Otasining ismi">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Familiyasi">
              <Input />
            </Form.Item>
          </Col>
        <Form.Item label="PINFL">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Ismi">
          <Input />
        </Form.Item>
        <Form.Item label="Familiyasi">
          <Input />
        </Form.Item>
        
        <Divider /> */}
        <Divider />
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Saqlash
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={handleCancel}>
            Bekor qilish
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
const WrappedForm = Form.create({ name: 'validate_other' })(CreateEmployee)

export default WrappedForm