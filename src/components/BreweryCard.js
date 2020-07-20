import React from 'react';
import { connect } from 'react-redux';

import { fetchBreweries } from '../actions';

class BreweryCard extends React.Component {
  componentDidMount() {
    this.props.fetchBreweries()
  }

  renderCard() {
    return this.props.breweries.map(brewery => {
      return (
        <div className="ui items brewery-card-wrapper" key={brewery.id}>
          <div className="item">
            <a href={brewery.website_url} target="_blank"><i className="huge middle aligned icon beer" /></a>
            <div className="content">
              <a className="header" href={brewery.website_url} target="_blank"><h2>{brewery.name}</h2></a>
              <div className="meta brewery-type">
                Type: {brewery.brewery_type}
              </div>
              <div className="description">
                <a className="header" href={brewery.website_url} target="_blank">{brewery.website_url}</a>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    // console.log(this.props.breweries);

    return (
      <div className="ui relaxed divided list">
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
