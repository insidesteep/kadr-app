import React, { useState } from "react";
import {
  Modal,
  Input,
  Select,
  Form,
  Radio,
  Divider,
  Row,
  Col,
  DatePicker
} from "antd";
import UploadAvatar from "./UploadAvatar";
import locale from '../../utils/locale/uz_UZB'

const CreateEmployee = ({ visible, title, handleCancel }) => {
  const [holatValue, setHolat] = useState(1);
  const { Option } = Select;
  const changeHolat = e => setHolat(e.target.value);

  return (
    <Modal
      title={title}
      visible={visible}
      onOk={() => {}}
      onCancel={handleCancel}
      width="40%"
    >
      <Form>
        <Row gutter={24}>
          <Col span={14}>
            <Form.Item label="Bo'lim / Kafedra">
              <Select>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="Lavozim">
              <Select>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={14}>
            <Form.Item label="Holati">
              <Radio.Group onChange={changeHolat} value={holatValue}>
                <Radio value={1}>Asosiy</Radio>
                <Radio value={2}>Tashqi o'rindosh</Radio>
                <Radio value={3}>Ichki o'rindosh</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="PINFL">
              <Input type="number" />
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Row gutter={24}>
          <Col span={14}>
            <Row>
              <Col>
                <Row gutter={24}>
                  <Col span={12}>
                    <Row>
                      <Form.Item label="Rasmi">
                        <UploadAvatar />
                      </Form.Item>
                    </Row>
                  </Col>
                  <Col span={12}>
                    <Row>
                      <Col>
                        <Form.Item label="Pasport seriyasi">
                          <Input style={{ width: "25%", marginRight: "2%" }} />
                          <Input style={{ width: "73%" }} />
                        </Form.Item>
                      </Col>
                      <Col>
                        <Form.Item label="Berilgan sana">
                          <DatePicker locale={locale} />
                        </Form.Item>
                      </Col>
                      <Col>
                        <Form.Item label="Amal qilish muddati">
                          <DatePicker />
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
                  <Input />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="Ismi">
                  <Input />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="Otasining ismi">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
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
      </Form>
    </Modal>
  );
};

export default CreateEmployee;
