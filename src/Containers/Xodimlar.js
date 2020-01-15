import Xodimlar from '../components/Kadr/Xodimlar'
import { fetchBulimlar } from '../actions'
import { connect } from 'react-redux'

export default connect(state => ({
    bulimlar: state.bulimlar.data,
    bulimlarLoading: state.bulimlar.loading,
    lavozimlar: state.lavozimlar.data,
    lavozimlarLoading: state.lavozimlar.loading
}), fetchBulimlar)(Xodimlar)
