import {
  FETCH_XODIMLAR_START,
  FETCH_XODIMLAR_SUCCESS,
  FETCH_XODIMLAR_FAILURE,
  CREATE_NEW_XODIM_START,
  CREATE_NEW_XODIM_SUCCESS,
  CREATE_NEW_XODIM_FAILURE,
  ADD_XODIM_START,
  ADD_XODIM_SUCCESS,
  ADD_XODIM_FAILURE
} from "../constants";

const initialState = {
  data: [
    {
      main: {
        chef: false,
        country: "O'zbekiston",
        pinfl: "63184886955721",
        inn: "123456789",
        shtat: "Asosiy",
        birthDay: "02.02.2010",
        lavozim: "Tizim administratori",
        photoURL: "https://google.com",
        passportSeria: "AA",
        passportNumber: "1234567",
        bDate: "08.10.2012",
        aDate: "07.10.2022",
        familiya: "Ergashev",
        name: "Zohid",
        otchestvo: "Nazarovich",
        jins: "erkak",
        familyState: "uylangan",
        millat: "uzbek",
        bulim: "Axborot texnologiyalari markazi",
        email: "mail1@gamil.com",
        phone: "+998995362245",
        razryad: 7
      },
      partiya: {
        addressSaylov: "Address1",
        nameOrgan: "Organ Name",
        who: "XZ Kim?",
        startDate: "01.01.2017",
        endDate: "02.03.2019"
      },
      mehnatFaoliyat: {},
      qarindoshlar: {},
      mehnatTatil: {},
      ishgaTayinlanish: {}
    },
    {
      main: {
        chef: false,
        country: "O'zbekiston",
        pinfl: "96451238546913",
        inn: "987654321",
        shtat: "Asosiy",
        birthDay: "03.0#.2012",
        lavozim: "Arxivshunos",
        photoURL: "https://google.com",
        passportSeria: "AA",
        passportNumber: "1234567",
        bDate: "08.10.2012",
        aDate: "07.10.2022",
        familiya: "Ivanov",
        name: "Ivan",
        otchestvo: "Ivanovich",
        jins: "erkak",
        familyState: "uylanganmagan",
        millat: "rus",
        bulim: "Arxiv",
        email: "mail2@gamil.com",
        phone: "+998914028963",
        razryad: 5
      },
      partiya: {
        addressSaylov: "Address1",
        nameOrgan: "Organ Name",
        who: "XZ Kim?",
        startDate: "01.01.2017",
        endDate: "02.03.2019"
      },
      mehnatFaoliyat: {},
      qarindoshlar: {},
      mehnatTatil: {},
      ishgaTayinlanish: {}
    },
    {
      main: {
        chef: false,
        country: "O'zbekiston",
        pinfl: "11223344556677",
        inn: "698215849",
        shtat: "Asosiy",
        birthDay: "04.04.2014",
        lavozim: "Hisobchi",
        photoURL: "https://google.com",
        passportSeria: "AA",
        passportNumber: "1234567",
        bDate: "08.10.2012",
        aDate: "07.10.2022",
        familiya: "Jo'rayeva",
        name: "Ferangiz",
        otchestvo: "Ravshanovna",
        jins: "ayol",
        familyState: "turmushga chiqgan",
        millat: "uzbek",
        bulim: "Hisobxona",
        email: "mail3@gamil.com",
        phone: "+998936524489",
        razryad: 12
      },
      partiya: {
        addressSaylov: "Address1",
        nameOrgan: "Organ Name",
        who: "XZ Kim?",
        startDate: "01.01.2017",
        endDate: "02.03.2019"
      },
      mehnatFaoliyat: {},
      qarindoshlar: {},
      mehnatTatil: {},
      ishgaTayinlanish: {}
    }
  ],
  newData: {},
  loading: false,
  error: null
};

const xodimlarState = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_XODIMLAR_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_XODIMLAR_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false
      };
    case FETCH_XODIMLAR_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case CREATE_NEW_XODIM_START:
      return {
        ...state,
        loading: true
      };
    case CREATE_NEW_XODIM_SUCCESS:
      return {
        ...state,
        newData: payload.data,
        loading: false
      };
    case CREATE_NEW_XODIM_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error
      };

    case ADD_XODIM_START:
      return {};
    case ADD_XODIM_SUCCESS:
      return {};
    case ADD_XODIM_FAILURE:
      return {};
    default:
      return state;
  }
};

export default xodimlarState;
