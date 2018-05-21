import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhoneById } from '../../selectors/selectors';
import { fetchPhoneById } from './../../actions';

class Phone extends Component {
  componentDidMount() {
    this.props.fetchPhoneById(this.props.match.params.id);
  }
  
  render() {
    return <div className='view-container'>
      <div className='container'>
        <div className='row'></div>
      </div>
    </div>;
  }
}

const mapStateToProps = state => ({
  phone: getPhoneById(state, state.phonePage.id)
});

const mapDispatchToProps = {
  fetchPhoneById
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);
