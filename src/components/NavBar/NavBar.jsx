import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [],
    };
  }

  componentDidMount() {
    const { destinations } = this.props;
    const links = destinations.map(city => city.label);
    this.setState({
      links,
    });
  }

  render() {
    const { links } = this.state;
    return (
      <div>
        {links.length
          ? links.map((city, index) => <li key={`${city}${index}`}>{city}</li>)
          : 'Loading'}
      </div>
    );
  }
}

NavBar.propTypes = {
  destinations: PropTypes.arrayOf(PropTypes.string).isRequired,
};
