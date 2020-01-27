import Xodimlar from "../components/Kadr/Xodimlar";
import { fetchBulimlar } from "../actions";
import { connect } from "react-redux";

const cleanXodimData = state => {
  const cleanData = state.xodimlar.data.map((item, idx) => {
    let { main } = item;
    return (main = {
      hash: idx + 1,
      name: `${main.familiya} ${main.name} ${main.otchestvo}`,
      bulim: main.bulim,
      lavozim: main.lavozim,
      malumot: main.malumot || "Oliy",
      jins: main.jins,
      millat: main.millat,
      birthDay: main.birthDay,
      passport: `${main.passportSeria} ${main.passportNumber}`,
      id: main.inn,
      email: main.email,
      phone: main.phone,
      ilmDaraja: main.ilmDaraja || "yo'q",
      ilmUnvon: main.ilmUnvon || "yo'q",
      razryad: main.razryad,
      address:
        main.address || "Buxoro viloyati. Buxoro tumani. Losha Q.F.Y 56-uy",
      inn: main.inn,
      pinfl: main.pinfl
    });
  });

  return cleanData;
};

export default connect(
  state => ({
    bulimlar: state.bulimlar.data,
    bulimlarLoading: state.bulimlar.loading,
    lavozimlar: state.lavozimlar.data,
    lavozimlarLoading: state.lavozimlar.loading,
    xodimlar: cleanXodimData(state),
    loading: state.xodimlar.loading,
    error: state.xodimlar.error
  }),
  fetchBulimlar
)(Xodimlar);
