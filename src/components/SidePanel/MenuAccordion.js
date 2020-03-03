import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import Menu from "./Menu";

const menuItemsCollection = [
  {
    id: 1,
    title: "Umumiy ma'lumotlarim",
    to: "/common"
  },
  {
    id: 2,
    title: "Pasport ma'lumotlarim",
    to: "/passport"
  },
  {
    id: 3,
    title: "O'qigan o'quv yurtlarim"
  },
  {
    id: 4,
    title: "O'qitadigan fanlarim"
  },
  {
    id: 5,
    title: "Muassasadagi ishlarim"
  },
  {
    id: 6,
    title: "Mehnat faoliatim"
  },
  {
    id: 7,
    title: "Oila a'zolarim"
  },
  {
    id: 8,
    title: "Malaka oshirish"
  },
  {
    id: 9,
    title: "Qayta tayyorlov"
  },
  {
    id: 10,
    title: "Davlat mukofotlari"
  },
  {
    id: 11,
    title: "Saylovlarda saylanganligim"
  },
  {
    id: 12,
    title: "Ilmiy unvonlarim"
  },
  {
    id: 13,
    title: "Ilmiy darajalarim"
  }
];

const menuItemsCollection2 = [
  {
    id: 1,
    title: "Xodimlar haqida ma'lumot",
    to: "/xodimlar"
  },
  {
    id: 2,
    title: "Bo'limlar",
    to: "/bulimlar-shtat"
  },
  {
    id: 3,
    title: "Fakultetlar",
    to: "/fakultetlar-shtat"
  },
  {
    id: 4,
    title: "Kafedralar",
    to: "/kafedralar-shtat"
  },
  {
    id: 5,
    title: "Laborabtlar",
    to: "/laborantlar-shtat"
  },
  {
    id: 6,
    title: "Права доступа",
    to: "/access-control"
  }
];

class MenuAccordion extends Component {
  render() {
    const data = [
      {
        title: (
          <div>
            <Icon name="user" />{" "}
            <span>
              Mening ma'lumotlarim
              <Icon name="angle down" className="menu-list__icon" />
            </span>
          </div>
        ),
        items: <Menu itemsCollection={menuItemsCollection} />
      },
      {
        title: (
          <div>
            <Icon name="address book" />{" "}
            <span>
              Kadr uchun
              <Icon name="angle down" className="menu-list__icon" />
            </span>
          </div>
        ),
        items: <Menu itemsCollection={menuItemsCollection2} />
      }
    ];

    return (
      <div {...{ className: "menu-wrapper" }}>
        <ul {...{ className: "menu-list" }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: "menu-list__item", key }}>
                <MenuAccordionItem {...data} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

class MenuAccordionItem extends Component {
  state = {
    opened: false
  };

  render() {
    const {
      props: { items, title },
      state: { opened }
    } = this;

    return (
      <div
        {...{
          className: `menu-item, ${opened && "menu-item--opened"}`
        }}
      >
        <div
          {...{
            className: `menu-item__line ${
              opened ? "menu-item__line--opened" : ""
            }`
          }}
          onClick={() => {
            this.setState({ opened: !opened });
          }}
        >
          <h3 {...{ className: "menu__title" }}>{title}</h3>
          <span {...{ className: "menu-item__icon" }} />
        </div>
        <div {...{ className: `menu-item__inner` }}>
          <div {...{ className: "menu-item__content" }}>
            <p {...{ className: "menu-item__paragraph" }}>{items}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuAccordion;
