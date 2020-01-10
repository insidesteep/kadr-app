import React from "react";
import {
  Table,
  Input,
  InputNumber,
  Popconfirm,
  Form,
  Button,
  DatePicker,
  Icon
} from "antd";
import moment from "moment";
import locale from "../../utils/locale/uz_UZB";

const ButtonGroup = Button.Group;

const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i.toString(),
    address: `Address ${i}`,
    name: `Edrward ${i}`,
    who: 32,
    date: `0${i}.0${i}.199${i}`,
    dateEnd: `0${i}.0${i}.199${i}`
  });
}

const EditableContext = React.createContext();

class EditableCell extends React.Component {


  changeDate = (name, value, parent) => {
    parent.setState({ [name]: value })
    console.log("PARENT", parent.state)
  }

  getInput = (value, parent) => {
    console.log("EditableCelli", value);
    switch (this.props.dataIndex) {
      case "date":
        return (
          <>
            <DatePicker
              defaultValue={moment(value, "DD.MM.YYYY")}
              format="DD.MM.YYYY"
              locale={locale}
              onChange={(moment, value) =>
                this.changeDate(this.props.dataIndex, value, parent)
              }
            />
          </>
        );
      case "dateEnd":
        return (
          <>
            <DatePicker
              defaultValue={moment(value, "DD.MM.YYYY")}
              format="DD.MM.YYYY"
              locale={locale}
              onChange={(moment, value) =>
                this.changeDate(this.props.dataIndex, value, parent)
              }
            />
          </>
        );
      default:
        return <Input />;
    }
  };

  validate = (rule, value, callback) => {
    console.log("KL", value);
  };

  renderCell = ({ form, parent }) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;
    console.log("RENDER CELL", parent);
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {form.getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: true,
                  message: `Please Input ${title}!`
                }
              ],
              initialValue: record[dataIndex]
            })(this.getInput(record[dataIndex], parent))}
          </Form.Item>
        ) : (
            children
          )}
      </td>
    );
  };

  render() {

    console.log("WWWWWWW", this.props)
    return (
      <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data, editingKey: "" };
    this.columns = [
      ...this.props.columns,
      {
        title: "Operatsiyalar",
        dataIndex: "operation",
        render: (text, record) => {
          const { editingKey } = this.state;
          const editable = this.isEditing(record);
          return editable ? (
            <span>
              <EditableContext.Consumer>
                {({ form }) => (
                  <ButtonGroup>
                    <Button
                      type="primary"
                      icon="save"
                      onClick={() => this.save(form, record.key)}
                    />
                    <Popconfirm
                      title="Bekor qilmoqchimisiz?"
                      onConfirm={() => this.cancel(record.key)}
                    >
                      <Button type="danger" icon="close" />
                    </Popconfirm>
                  </ButtonGroup>
                )}
              </EditableContext.Consumer>
            </span>
          ) : (
              <ButtonGroup>
                <Button
                  icon="edit"
                  disabled={editingKey !== ""}
                  onClick={() => this.edit(record.key)}
                />
                <Popconfirm
                  title="Ma'lumotni o'chirmoqchimisiz?"
                  icon={<Icon type="exclamation-circle" style={{ color: "tomato" }}/>}
                  onConfirm={() => this.delete(record.key)}
                >
                  <Button icon="delete" type="danger"/>
                </Popconfirm>
              </ButtonGroup>
            );
        }
      }
    ];
  }

  isEditing = record => record.key === this.state.editingKey;

  cancel = () => {
    this.setState({ editingKey: "" });
  };

  handleAdd = () => {
    const { data } = this.state;

    const newData = {
      key: 23,
      address: `Address ${23}`,
      name: `Edrward ${23}`,
      who: 32,
      date: `London Park no. ${23}`,
      dateEnd: 54334343
    };
    this.setState({
      data: [...data, newData]
    });
  };

  delete(key){
    const newData = this.state.data.filter((item) => item.key !== key)
    this.setState({ data: newData })
  }

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }

      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        console.log("index: ", index);
        console.log("item: ", item);
        console.log("row: ", row);

        newData.splice(index, 1, {
          ...item,
          ...row,
          ...this.state
        });
        this.setState({ data: newData, editingKey: "" });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: "" });
      }
    });
  }

  edit(key) {
    this.setState({ editingKey: key });
  }

  render() {
    const components = {
      body: {
        cell: EditableCell
      }
    };

    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      };
    });

    return (
      //TODO: Передать state через провайдер
      <EditableContext.Provider value={{ form: this.props.form, parent: this }}>
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={{ marginBottom: 16 }}
        >
          Yangi qator
        </Button>
        <Table
          components={components}
          bordered
          dataSource={this.state.data}
          columns={columns}
          rowClassName="editable-row"
          pagination={{
            onChange: this.cancel
          }}
        />
      </EditableContext.Provider>
    );
  }
}

const TableByExtra = Form.create()(EditableTable);

export default TableByExtra;
