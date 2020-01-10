import { connect } from "react-redux";
import Bulimlar from "../components/MR/Bulimlar";
import { showModal, hideModal, createBulim } from "../actions";

export default connect(
  state => ({
    modal: state.contextMenu.modal,
    bulimlar: state.bulimlar.data
  }),
  { hideModal, showModal, createBulim }
)(Bulimlar);
