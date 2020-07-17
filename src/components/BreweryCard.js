import React from 'react';
import { connect } from 'react-redux';

import { fetchBreweries } from '../actions';

class BreweryCard extends React.Component {
  render() {
    return (
      <div>BreweryCard</div>
    )
  }
}

export default connect(
  null, {fetchBreweries}
)(BreweryCard);
