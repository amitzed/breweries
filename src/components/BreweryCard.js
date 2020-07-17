import React from 'react';
import { connect } from 'react-redux';

import { fetchBreweries } from '../actions';

class BreweryCard extends React.Component {
  componentDidMount() {
    this.props.fetchBreweries()
  }

  render() {
    return (
      <div>BreweryCard</div>
    )
  }
}

const mapStateToProps = (state) => {
  return { breweries: state.breweries}
}

export default connect(
  mapStateToProps, 
  {fetchBreweries}
)(BreweryCard);
