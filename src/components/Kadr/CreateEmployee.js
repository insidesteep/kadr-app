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
  Tag,
  Table
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
  const [passportSeria, setPassportSeria] = useState({
    value: "",
    validateStatus: "",
    help: ""
  });
  const [passportNumber, setPassportNumber] = useState({
    value: "",
    validateStatus: "",
    help: ""
  });
  const [lastname, setLastname] = useState("");
  const [name, setName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isCitizen, setCitizen] = useState(false);
  const [jins, setJins] = useState(1);
  const [familyState, setFamilyState] = useState(1);

  const [loadingFile, setLoadingFile] = useState(false);
  const [file, setFile] = useState(null);

  const { Option } = Select;

  const changeHolat = e => setHolat(e.target.value);
  const changeJins = e => setJins(e.target.value);
  const changeFamilyState = e => setFamilyState(e.target.value);
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

  const pinflValidator = (rule, value, callback) => {
    if (value === "a") return callback();
    if (!value) return callback();
    if (value && value.length === 14) return callback();
    callback("Son 14ta bo'lishi kerak");
  };

  const stirValidator = (rule, value, callback) => {
    console.log("STIR");
    if (!value) callback();
    if (value && value.length === 9) callback();
    callback("Son 9ta bo'lishi kerak");
  };

  const handleChangeSeria = e => {
    if (e.target.value.length > 2) {
      return;
    }

    if (e.target.value === "") {
      setPassportSeria({
        ...passportSeria,
        value: e.target.value,
        validateStatus: "error",
        help: "Pasport seriyani kiriting"
      });

      return;
    }

    if (/[a-zA-Z]$/.test(e.target.value)) {
      if (e.target.value.length < 2) {
        setPassportSeria({
          ...passportSeria,
          value: e.target.value.toUpperCase(),
          validateStatus: "error",
          help: "2ta harf bo'lishi kerak"
        });
        return;
      }
      setPassportSeria({
        ...passportSeria,
        value: e.target.value.toUpperCase(),
        validateStatus: "",
        help: ""
      });
    } else {
      setPassportSeria({ ...passportSeria });
    }
  };

  const handleChangeNum = e => {
    if (e.target.value === "") {
      setPassportNumber({
        ...passportNumber,
        value: e.target.value,
        validateStatus: "error",
        help: "Pasport raqamini kiriting"
      });

      return;
    }
    if (isFinite(e.target.value)) {
      if (e.target.value.length < 7) {
        setPassportNumber({
          ...passportNumber,
          value: e.target.value.toUpperCase(),
          validateStatus: "error",
          help: "7ta raqam bo'lishi kerak"
        });
        return;
      }

      setPassportNumber({
        ...passportNumber,
        value: e.target.value,
        validateStatus: "",
        help: ""
      });
    } else {
      setPassportNumber({ ...passportNumber });
    }
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

  function disabledDateB(current) {
    let customDate = form.getFieldValue("bSana");
    return current && current < moment(customDate, "YYYY-MM-DD");
  }

  function disabledDateA(current) {
    let customDate = form.getFieldValue("aSana");
    return current && current > moment(customDate, "YYYY-MM-DD");
  }
  const handlePinflChange = e => {
    console.log("PINFLCHANGE", e.target.value);
  };

  const renderAsosiy = () => (
    <>
      <Row gutter={24}>
        <Col span={6}>
          <Row>
            <Col>
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
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            <Col>
              <Form.Item
                label="Pasport seriyasi"
                className="ant-form-item-required"
                help={passportSeria.help || passportNumber.help}
              >
                <Input
                  placeholder="AA"
                  style={{
                    width: "25%",
                    marginRight: "2%",
                    borderColor:
                      passportSeria.validateStatus === "error" ? "red" : ""
                  }}
                  value={passportSeria.value}
                  maxLength={2}
                  onChange={handleChangeSeria}
                />
                <Input
                  placeholder="1234567"
                  style={{
                    width: "73%",
                    borderColor:
                      passportNumber.validateStatus === "error" ? "red" : ""
                  }}
                  value={passportNumber.value}
                  maxLength={7}
                  onChange={handleChangeNum}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="Berilgan sana">
                {getFieldDecorator("bSana", {
                  rules: [{ required: true, message: "Sanani tanlang" }]
                })(<DatePicker locale={locale} disabledDate={disabledDateA} />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="Amal qilish muddati">
                {getFieldDecorator("aSana", {
                  rules: [{ required: true, message: "Sanani tanlang" }]
                })(<DatePicker locale={locale} disabledDate={disabledDateB} />)}
              </Form.Item>
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
        <Col>
          <Row gutter={24}>
            <Col span={6}>
              <Form.Item label="Tug'ilgan sana">
                {getFieldDecorator("birthDate", {
                  rules: [{ required: true, message: "Sanani tanlang" }]
                })(<DatePicker locale={locale} disabledDate={disabledDateA} />)}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Jinsi">
                {getFieldDecorator("jinsi", {
                  rules: [{ required: true, message: "Holatni tanlang" }],
                  initialValue: jins
                })(
                  <Radio.Group onChange={changeJins} value={jins}>
                    <Radio value={1}>Erkak</Radio>
                    <Radio value={2}>Ayol</Radio>
                  </Radio.Group>
                )}
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item label="Oilaviy ahvoli">
                {getFieldDecorator("oilaAhvol", {
                  rules: [{ required: true, message: "Holatni tanlang" }],
                  initialValue: familyState
                })(
                  <Radio.Group onChange={changeFamilyState} value={familyState}>
                    {renderOilaviyAhvoli()}
                  </Radio.Group>
                )}
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={6}>
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
        <Col span={8}>
          <Form.Item label="Telefon raqami">
            {getFieldDecorator("phone", {
              rules: [{ required: true, message: "Telefon raqamini kiriting!" }]
            })(<Input />)}
          </Form.Item>
        </Col>
        <Col span={10}>
            <Form.Item label="Elektron manzili">
              {getFieldDecorator("email", {
                rules: [
                  { required: true, message: "Elektron manzilni kiriting!" }
                ]
              })(<Input />)}
            </Form.Item>
        </Col>
      </Row>
      <Divider />
      <Row gutter={24}>
        <h4>Diplom ma'lumotlari</h4>
        <Col span={8}>
          <Row>
            <Col>
              <Form.Item label="Ma'lumoti">
                {getFieldDecorator("malumoti", {
                  rules: [{ required: true, message: "Ma'lumotini tanlang" }],
                  initialValue: jins
                })(
                  <Select
                    notFoundContent="Mavjud emas"
                    showSearch
                    placeholder="Millatini tanlang"
                  ></Select>
                )}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="Ilmiy darajasi">
                {getFieldDecorator("ilmDaraja", {
                  rules: [
                    { required: true, message: "Ilmiy darajasini tanlang" }
                  ],
                  initialValue: jins
                })(
                  <Select
                    notFoundContent="Mavjud emas"
                    showSearch
                    placeholder="Ilmiy darajani tanlang"
                  ></Select>
                )}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="Ilmiy unvoni">
                {getFieldDecorator("ilmUnvon", {
                  rules: [
                    { required: true, message: "Ilmiy unvonini tanlang" }
                  ],
                  initialValue: jins
                })(
                  <Select
                    notFoundContent="Mavjud emas"
                    showSearch
                    placeholder="Millatini tanlang"
                  ></Select>
                )}
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            <Col>
              <Form.Item label="Diplom raqami">
                {getFieldDecorator("diplomByMalumot", {
                  rules: [
                    { required: true, message: "Diplom raqamini kiriting" }
                  ],
                  initialValue: familyState
                })(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="Atestatsiya raqami">
                {getFieldDecorator("atestatsiyaByDaraja", {
                  rules: [
                    { required: true, message: "Atestatsiya raqamini kiriting" }
                  ],
                  initialValue: familyState
                })(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="Diplom raqami">
                {getFieldDecorator("diplomByUnvon", {
                  rules: [{ required: true, message: "Holatni tanlang" }],
                  initialValue: familyState
                })(<Input />)}
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            <Col>
              <Form.Item label="Ta'lim muassasasi">
                {getFieldDecorator("otm", {
                  rules: [
                    {
                      required: true,
                      message: "Ta'lim muassasasi nomini kiriting"
                    }
                  ],
                  initialValue: familyState
                })(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="Mutaxassisligi">
                {getFieldDecorator("mutaxasisligi", {
                  rules: [
                    {
                      required: true,
                      message: "Mutaxasssisligini kiriting"
                    }
                  ],
                  initialValue: familyState
                })(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="Ixtisosligi">
                {getFieldDecorator("ixtisosligi", {
                  rules: [
                    {
                      required: true,
                      message: "Ixtisosligini kiriting"
                    }
                  ],
                  initialValue: familyState
                })(<Input />)}
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );

  const { getFieldDecorator } = form;
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        //
      } else {
        alert(JSON.stringify(err));
      }
    });
    // console.log("VALUES", values);
    // if (!passportSeria.value) {
    //   setPassportSeria({
    //     ...passportSeria,
    //     validateStatus: "error",
    //     help: "Pasport seriyani kiriting"
    //   });
    // }
    // if (!passportNumber.value) {
    //   setPassportNumber({
    //     ...passportNumber,
    //     validateStatus: "error",
    //     help: "Pasport raqamini kiriting"
    //   });
    // }
    // if (
    //   !err &&
    //   passportSeria.value &&
    //   passportSeria.validateStatus !== "error" &&
    //   passportNumber.value &&
    //   passportNumber.validateStatus !== "error"
    // ) {
    //   save();
    //   console.log("Received values of form: ", values);
    // }
    // console.log("ERROR", err);
    // });
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
      width="60%"
      destroyOnClose
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
              <Col span="8">
                <Form.Item label="STIR">
                  {getFieldDecorator("inn", {
                    rules: [
                      { required: true, message: "JSHSHIRni kiriitng" },
                      { validator: stirValidator }
                    ]
                  })(<Input.Search loading maxLength={9} />)}
                </Form.Item>
              </Col>
              <Col span="16">
                <Form.Item label="JSHSHIR">
                  {getFieldDecorator("pinfl", {
                    rules: [
                      { required: true, message: "JSHSHIRni kiriitng" },
                      { validator: pinflValidator }
                    ]
                  })(<Input maxLength={14} onChange={handlePinflChange} />)}
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
            <Row>
              <Col>
                <Form.Item label="Holati">
                  {getFieldDecorator("holat", {
                    rules: [{ required: true, message: "Holatni tanlang" }],
                    initialValue: holatValue
                  })(
                    <Radio.Group onChange={changeHolat} value={holatValue}>
                      <Radio value={1}>Asosiy</Radio>
                      <Radio value={2}>Tashqi o'rindosh</Radio>
                      <Radio value={3}>Ichki o'rindosh</Radio>
                    </Radio.Group>
                  )}
                </Form.Item>
              </Col>
              <Col>
                <Table size="small" culumns={{}} data={{}} />
              </Col>
            </Row>
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
              <Col>
                <Form.Item label="Xissa">
                  {getFieldDecorator("xissa", {
                    rules: [{ required: true, message: "Xissani kiriting" }]
                  })(<InputNumber step={0.25} min={0.25} max={1.5} />)}
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
