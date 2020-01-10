import React from "react";
import { Icon } from "antd";
import "./style.css";
const ContextMenu = ({ isDepartment, visible, x, y, onClose, showModal }) => {
  const onClickItem = e => {
    
    if (e.target.hasAttribute('name')) {
      const optionType = e.target.getAttribute('name');
      showModal(optionType);
      onClose();
    }
  };

  return (
    visible && (
      <ul className="popup" style={{ left: `${x}px`, top: `${y}px` }}>
        {isDepartment && (
          <>
            <li name="createInlineBulim" onClick={onClickItem}>
              <Icon name="createInlineBulim" type="apartment" />
              Ichki bo'lim qo'shish
            </li>
            <li name="createPosition" onClick={onClickItem}>
              <Icon name="createPosition" type="user-add" />
              Lavozim qo'shish
            </li>
          </>
        )}
        <li name="edit" onClick={onClickItem}>
          <Icon name="edit" type="edit" onClick={onClickItem} />
          O'zgartirish
        </li>
        <li>
          <Icon type="delete" />
          O'chirish
        </li>
      </ul>
    )
  );
};

export default ContextMenu;
