import React, { useState, useEffect } from "react";
import { StyledSelect, StyledTag } from "../../elements";
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
  Button,
  Switch,
  Tag
} from "antd";
import { Header } from "../../elements";
import UploadAvatar from "./UploadAvatar";
import locale from "../../utils/locale/uz_UZB";
import moment from "moment";
import momentFr from "moment/locale/uz-latn";

moment.locale("uz-latn", momentFr);

const CreateEmployee = ({
  visible,
  title,
  handleCancel,
  setVisible,
  setVisibleExtra,
  form
}) => {
  const [bulim, setBulim] = useState("");
  const [lavozim, setLavozim] = useState("");
  const [holatValue, setHolat] = useState(1);
  const [pinfl, setPinfl] = useState("");
  const [xissa, setXissa] = useState(0);
  const [photo, setPhoto] = useState(null);
  const [passport, setPassport] = useState("");
  const [lastname, setLastname] = useState("");
  const [name, setName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isCitizen, setCitizen] = useState(false);
  const [jins, setJins] = useState(0);

  const [loadingFile, setLoadingFile] = useState(false);
  const [file, setFile] = useState(null);

  const { Option } = Select;

  const changeHolat = e => setHolat(e.target.value);
  const changeJins = e => setJins(e.target.value);
  const changeBulim = value => setBulim(value);
  const save = () => {
    setVisible(false);
    setVisibleExtra(true);
  };
  const handleCitizen = enable => setCitizen(enable);
  const closeModal = () => {
    handleCancel();
    Modal.destroyAll();
  };

  const renderOilaviyAhvoli = () => {
    if (jins === 1) {
      return (
        <>
          <Radio value={1}>Uylangan</Radio>
          <Radio value={2}>Uylanmagan</Radio>
        </>
      );
    }

    return (
      <>
        <Radio value={1}>Turmushga chiqgan</Radio>
        <Radio value={2}>Turmushga chiqmagan</Radio>
      </>
    );
  };

  const renderAsosiy = () => (
    <>
      <Row gutter={24}>
        <Col span={14}>
          <Row>
            <Col>
              <Row gutter={24}>
                <Col span={12}>
                  <Row>
                    <Form.Item label="Rasmi">
                      {getFieldDecorator("rasm", {
                        valuePropName: "fileList",
                        rules: [{ required: true, message: "Rasmni yuklang" }]
                      })(
                        <UploadAvatar
                          onChange={normFile}
                          file={file}
                          loading={loadingFile}
                        />
                      )}
                    </Form.Item>
                  </Row>
                </Col>
                <Col span={12}>
                  <Row>
                    <Col>
                      <Form.Item label="Pasport seriyasi">
                        {getFieldDecorator("pSeria", {
                          rules: [
                            {
                              required: true,
                              message: "Pasport seriyasi kiritilmagan"
                            }
                          ]
                        })(
                          <Input
                            placeholder="AA"
                            style={{ width: "25%", marginRight: "2%" }}
                          />
                        )}
                        {getFieldDecorator("pNumber", {
                          rules: [
                            {
                              required: true,
                              message: "Pasport raqami kiritilmagan"
                            }
                          ]
                        })(
                          <Input
                            placeholder="1234567"
                            style={{ width: "73%" }}
                          />
                        )}
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item label="Berilgan sana">
                        {getFieldDecorator("bSana", {
                          rules: [{ required: true, message: "Sanani tanlang" }]
                        })(<DatePicker locale={locale} />)}
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item label="Amal qilish muddati">
                        {getFieldDecorator("aSana", {
                          rules: [{ required: true, message: "Sanani tanlang" }]
                        })(<DatePicker locale={locale} />)}
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
                {getFieldDecorator("familiya", {
                  rules: [{ required: true, message: "Familiyani kiriting" }]
                })(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="Ismi">
                {getFieldDecorator("name", {
                  rules: [{ required: true, message: "Familiyani kiriting" }]
                })(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="Otasining ismi">
                {getFieldDecorator("otchestvo", {
                  rules: [{ required: true, message: "Familiyani kiriting" }]
                })(<Input />)}
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={6}>
          <Form.Item label="Jinsi">
            {getFieldDecorator("jinsi", {
              rules: [{ required: true, message: "Holatni tanlang" }]
            })(
              <Radio.Group onChange={changeJins} value={jins}>
                <Radio value={1}>Erkak</Radio>
                <Radio value={2}>Ayol</Radio>
              </Radio.Group>
            )}
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Oilaviy ahvoli">
            {getFieldDecorator("oilaAhvol", {
              rules: [{ required: true, message: "Holatni tanlang" }]
            })(
              <Radio.Group onChange={changeHolat} value={holatValue}>
                { renderOilaviyAhvoli() }
              </Radio.Group>
            )}
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item label="Millati">
            {getFieldDecorator("millat", {
              rules: [{ required: true, message: "Millati tanlanmagan!" }]
            })(
              <Select
                notFoundContent="Mavjud emas"
                showSearch
                placeholder="Millatini tanlang"
              >
                <Option value="uzbek">O'zbek</Option>
                <Option value="turkman">Turkman</Option>
                <Option value="rus">Rus</Option>
                <Option value="turk">Turk</Option>
                <Option value="ingliz">Ingliz</Option>
              </Select>
            )}
          </Form.Item>
        </Col>
      </Row>
    </>
  );

  const { getFieldDecorator } = form;
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      console.log("VALUES", values);
      if (!err) {
        save();
        console.log("Received values of form: ", values);
      }
    });
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const normFile = info => {
    if (info.file.status === "uploading") {
      setLoadingFile(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      if (info.file.originFileObj) alert("Есть");
      getBase64(info.file.originFileObj, imageUrl => {
        setLoadingFile(false);
        setFile(imageUrl);
      });
    }
  };

  return (
    <Modal
      title={title}
      visible={visible}
      onOk={save}
      onCancel={closeModal}
      width="50%"
      footer={null}
    >
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col span={12}>
            <label>
              Chet el fuqarosi:
              <Switch onChange={handleCitizen} style={{ marginLeft: "15px" }} />
            </label>
          </Col>
          <Col span={12}>
            <label>
              Davlati:
              <Select
                key={isCitizen.toString()}
                disabled={!isCitizen}
                defaultValue={isCitizen ? "ru" : "uzb"}
                onChange={changeBulim}
                style={{ marginLeft: "15px", width: "80%" }}
              >
                <Option value="uzb" disabled={isCitizen}>
                  O'zbekiston
                </Option>
                <Option value="ru">Rossiya Federatsiyasi</Option>
              </Select>
            </label>
          </Col>
        </Row>
        <Header></Header>
        <Row gutter={24}>
          <Divider />
          <Col span={14}>
            <Row gutter={8}>
              <Col span="16">
                <Form.Item label="JSHSHIR">
                  {getFieldDecorator("pinfl", {
                    rules: [{ required: true, message: "JSHSHIRni kiriitng" }]
                  })(<Input.Search loading maxLength={14} />)}
                </Form.Item>
              </Col>
              <Col span="8">
                <Form.Item label="STIR">
                  {getFieldDecorator("inn", {
                    rules: [{ required: true, message: "JSHSHIRni kiriitng" }]
                  })(<Input.Search loading maxLength={14} />)}
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={10}>
            <Form.Item label="Bo'lim / Kafedra">
              {getFieldDecorator("bulimlar", {
                rules: [{ required: true, message: "Bo'limni tanlang" }]
              })(
                <Select
                  notFoundContent="Mavjud emas"
                  showSearch
                  onChange={changeBulim}
                  placeholder="Bo'lim yoki kafedrani tanlang"
                >
                  <Option value="atm">Axborot texnologiyalari markazi</Option>
                  <Option value="hisobxona">Hisobxona</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={14}>
            <Form.Item label="Holati">
              {getFieldDecorator("holat", {
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
              <Col>
                <Form.Item label="Lavozim">
                  {getFieldDecorator("lavozimlar", {
                    rules: [{ required: true, message: "Lavozimni tanlang" }]
                  })(
                    <StyledSelect
                      notFoundContent="Mavjud emas"
                      showSearch
                      placeholder="Lavozimni tanlang"
                    >
                      <Option value="ta">
                        Tizim administratori
                        <StyledTag color="green">1</StyledTag>
                      </Option>
                      <Option value="md">
                        Muhadis dasturlovchi
                        <StyledTag color="green">1.5</StyledTag>
                      </Option>
                    </StyledSelect>
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Xissa">
                  {getFieldDecorator("xissa", {
                    rules: [{ required: true, message: "Xissani kiriting" }]
                  })(<InputNumber />)}
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider />
        {holatValue !== 3 && renderAsosiy()}
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
const WrappedForm = Form.create({ name: "validate_other" })(CreateEmployee);

export default WrappedForm;
