import React from 'react'
import { TreeSelect } from 'antd';

const { SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: 'Axborot texnologiyalari markazi',
    value: 'atm',
    key: 'atm',
    children: [
      {
        title: "Axborot xavfsizligi bo'limi",
        value: 'atm2',
        key: 'atm2',
      },
    ],
  },
  {
    title: 'Hisobxona',
    value: 'hisobxona',
    key: 'hisobxona',
    children: [
      {
        title: 'Kassa',
        value: 'kassa',
        key: 'kassa',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

class TreeSelectComponent extends React.Component {

  

  render() {
    const tProps = {
      treeData,
      value: this.props.value,
      onChange: this.props.onChangeTree,
      showCheckedStrategy: SHOW_PARENT,
      placeholder: this.props.plch,
      style: {
        width: '100%',
      },
    };
    return <TreeSelect {...tProps} />;
  }
}

export default TreeSelectComponent
