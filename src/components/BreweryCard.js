import React from 'react';
import { connect } from 'react-redux';
import { Header, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react';

import { fetchBreweries } from '../actions';

class BreweryCard extends React.Component {
  componentDidMount() {
    this.props.fetchBreweries()
  }

  renderCard() {
    return this.props.breweries.map(brewery => {
      return (
        <div key={brewery.id}>
          <i />
          <div>
            <div>
              <h2>{brewery.name}</h2>
              <p>{brewery.state}</p>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    console.log(this.props.breweries);

    return (
      <div>
        <div>
          {this.renderCard()}
        </div>
      </div>
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
