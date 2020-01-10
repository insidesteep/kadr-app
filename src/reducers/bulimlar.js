import { CREATE_BULIM, CREATE_INLINE_BULIM } from "../constants";

const initialState = {
  data: [
    {
      key: `771`,
      name: `Axborot texnologiyalari markazi`,
      shtat: 32,
      band: 25,
      qoldiq: 7,
      children: [
        {
          key: "1115",
          name: "Axborot xafsizligi",
          shtat: 13,
          band: 25,
          qoldiq: 7,
          children: [
            {
              key: "2651",
              name: "Dasturchi",
              shtat: 42,
              band: 14,
              qoldiq: 7
            }
          ]
        }
      ]
    },
    {
      key: `232`,
      name: `Hisobxona`,
      shtat: 42,
      band: 25,
      qoldiq: 7,
      children: [
        {
          key: `72`,
          name: `Xodim`,
          shtat: 23,
          band: 14,
          qoldiq: 7
        }
      ]
    },
    {
      key: `31`,
      name: `Arxiv`,
      shtat: 32,
      band: 25,
      qoldiq: 7,
      children: [
        {
          key: `62`,
          name: `Xodim`,
          shtat: 23,
          band: 14,
          qoldiq: 7
        }
      ]
    },
    {
      key: `14`,
      name: `Axborot resurs markazi`,
      shtat: 32,
      band: 25,
      qoldiq: 7,
      children: [
        {
          key: `42`,
          name: `Xodim`,
          shtat: 23,
          band: 14,
          qoldiq: 7
        }
      ]
    }
  ]
};

function addInline(parentObj, newObj){
  return parentObj.children = newObj
}

function findProp(obj, query, func) {
  var state = { ...obj };
  console.log(state);
  for (let key in obj) {
    let value = obj[key];
    if (value["name"] !== query) {
      if (value["children"] !== null) {
        findProp(value["children"], query);
      }
    } else {
      func.call(obj[key])
    }
  }
  console.log(state);
  return obj;
}

const bulimlarState = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_BULIM:
      return {
        ...state,
        data: [
          ...state.data,
          //...findProp(state.data, "Arxiv"),
          payload
        ]
      };

    default:
      return state;
  }
};

export default bulimlarState;
