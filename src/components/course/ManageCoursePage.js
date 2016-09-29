import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourceForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };
  }

  render() {
    return (
      <div>
        <h1> Manage Course</h1>
        <CourseForm course={this.state.course}></CourseForm>
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  //
};

function mapStateToProps(state, ownProps) {
  let course = {id: '', watchHref: '', title: '', length: '', category: ''};
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
