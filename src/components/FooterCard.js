import React from 'react';
import { connect } from 'react-redux';

import { fetchInfo } from '../actions';

class FooterCard extends React.Component {
  componentDidMount() {
    this.props.fetchInfo(this.props.type)
  }

  render() {
    return (
      <div>FooterCard</div>
    )
  }
}

export default connect(
  null,
  {fetchInfo}
)(FooterCard);
