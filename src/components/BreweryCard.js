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
        <div className="eight wide column" key={brewery.id} data-aos="fade-up">
          <div className="ui items brewery-card-wrapper">
            <div className="item">
              <div className="content">
                <a className="header" href={brewery.website_url} target="_blank" rel="noopener noreferrer"><h2>{brewery.name}</h2></a>
                <div className="meta brewery-street">
                  {brewery.street}
                </div>
                <div className="description brewery-type">
                  <h5 className="header">Type: {brewery.brewery_type}</h5>
                </div>
              </div>

              <div className="ui cards" data-aos="flip-left">
                <div className="extra content footer-card">
                  <div className="ui one button">
                    <div className="ui inverted olive icon button">
                      <a href={brewery.website_url} target="_blank" rel="noopener noreferrer"><i className="large middle aligned circular icon beer" /></a>
                    </div>
                  </div>
                </div>
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
      <div className="ui relaxed divided list content-wrapper">
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
