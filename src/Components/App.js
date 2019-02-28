import Main from './Main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import * as actions from '../redux/actions';


function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch)
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;
