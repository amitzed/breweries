import React from 'react';
import { connect } from 'react-redux';

import { fetchBreweries } from '../actions';
import FooterCard from './FooterCard';

class BreweryCard extends React.Component {
  componentDidMount() {
    this.props.fetchBreweries()
  }

  renderCard() {
    return this.props.breweries.map(brewery => {
      return (
        <div className="eight wide column">
          <div className="ui items brewery-card-wrapper" key={brewery.id}>
            <div className="item">
              <a href={brewery.website_url} target="_blank" rel="noopener noreferrer"><i className="large middle aligned circular icon beer" /></a>
              <div className="content">
                <a className="header" href={brewery.website_url} target="_blank" rel="noopener noreferrer"><h2>{brewery.name}</h2></a>
                <div className="meta brewery-type">
                  {brewery.street}
                </div>
                <div className="description">
                  <a className="header" href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a>
                </div>
              </div>
              <FooterCard type={brewery.brewery_type} />
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
        <div className="ui grid">
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
