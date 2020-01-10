import React from 'react'
import ContextMenu from './ContextMenu'
import { Table, Icon } from 'antd'
import 'antd/dist/antd.css'
import CreateBulim from './CreateBulim'
import CreateInlineBulim from './CreateInlineBulim'

class Bulimlar extends React.Component {
  state = {
      visible: false, 
      x: 0, y: 0
  }
   
  columns = [
    { title: `Bo'lim nomi / lavozimlari`, dataIndex: `name`, render: (text, record) => {
        if(record.hasOwnProperty('children')){
          return(
            <>
              <Icon type = "apartment"/>
              &nbsp;{text}
            </>
          )
        }
        return (
          <>
            <Icon type = "user"/>
            &nbsp;{text}
          </>
        )
    } },
    { 
      title: `Umumiy shtat`, 
      dataIndex: `shtat`, 
      render: (text, record) => {
        if(record.hasOwnProperty('children')) return <b style = {{ color: "green" }}>{text}</b>
      }
    },
    {
      title: `Band`,
      dataIndex: 'band',
      render: (text) => {
        return <p style = {{ color: "blue" }}>{text}</p>
      }
    },
    {
      title: `Qoldiq`,
      dataIndex: 'qoldiq',
      render: (text, record) => {
        if(record.hasOwnProperty('children')) return <p style = {{ color: "orange" }}>{text}</p>
      }
    }
  ]
  
  


  onRow = record => ({
    onContextMenu: event => {
      event.preventDefault()
      if (!this.state.visible) {
        const that = this
        document.addEventListener(`click`, function onClickOutside() {
          that.setState({visible: false})
          document.removeEventListener(`click`, onClickOutside)
        })
      }

      this.setState({
          isDepartment: record.hasOwnProperty('children'),
          visible: true,
          x: event.clientX,
          y: event.clientY
      })
    }
  })

  onClose = () => this.setState({ visible: false})
  render() {
    const { modal, bulimlar, hideModal, showModal, createBulim } = this.props

    return (
      <div>
        <CreateBulim value = "Bo'lim qo'shish" onCreate = {createBulim}/>
        <Table columns={this.columns} dataSource={bulimlar} onRow={this.onRow}/>
        <ContextMenu {...this.state} onClose = {this.onClose} showModal = {showModal}/>
        <CreateInlineBulim modal = {modal} hideModal = {hideModal}/>
      </div>
    )
    
  }
}

export default Bulimlar
          