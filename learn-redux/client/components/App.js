import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
  
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);
// mapStateToProps - наш стейт (posts, comments)
// mapDispachToProps - наш actions из actionCreator.js
// connect - совместит наш стейт и action и все это пробросит как props'ы компоненту Main
// Весь стейт и методы буду доступны как props

export default App;