import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loading from '../Loading/Loading.jsx';

import './main.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [],
      selected: -1,
      linePosArr: [],
    };
  }

  /**
   * Extract necessary city names and assign it as an array of strings (cities)
   * THE PURPOSE OF THIS IS TO ALLOW OTHER DEVELOPERS TO USE THIS COMPONENT,
   * IF THERE'S ADDITIONAL JSON FILES THAT ARE IN SIMILAR FORMAT (RE-USABLE COMPONENT)
   */
  componentDidMount() {
    const { destinations } = this.props;
    const links = destinations.map(city => city.label);
    this.setState({
      links,
    });
  }

  /**
   *
   * @param {*} prevPops
   * @param {*} prevState
   * As componentDidMount assigns the array of strings (cities),
   * Retrieve all of the city name's text-width so that the underline
   * will be in the length in respect to the city name's text-width
   * @DESCRIPTION
   * IT RESIZES CORRECTLY!
   * SHOULD TRY TO FIGURE OUT HOW TO CALCULATE THE MARGINLEFT CORRECTLY TO
   * BE ALIGNED WITH THE CITY NAME
   */
  componentDidUpdate(prevPops, prevState) {
    if (prevState.links.length !== this.state.links.length) {
      const linePosArr = [];
      const elems = document.getElementsByClassName('item');
      const outerLineWidth = document
        .getElementsByClassName('outer-line')[0]
        .getBoundingClientRect().width;
      for (let i = 0; i < elems.length; i++) {
        const elemInfo = elems[i].getBoundingClientRect();
        linePosArr.push({
          width: elemInfo.width,
          marginLeft: elemInfo.x,
        });
      }

      this.setState({ linePosArr });
    }
  }

  /**
   * Click handler that will distinguish which link has been clicked on
   */
  handleClick = (e, index) => {
    e.preventDefault();

    this.setState({
      selected: index,
    });
  };

  render() {
    const { links, selected, linePosArr } = this.state;
    return (
      <div className="nav-bar-container">
        {links.length ? (
          <>
            <div className="links-list">
              {links.map((city, index) => (
                <NavLink
                  to=""
                  key={`${city}${index}`}
                  className="item"
                  activeClassName={selected === index ? 'active' : ''}
                  onClick={e => this.handleClick(e, index)}
                >
                  {city}
                </NavLink>
              ))}
            </div>
            <div className="outer-line">
              <div
                style={{
                  width: linePosArr[selected] ? linePosArr[selected].width : 0,
                  marginLeft: linePosArr[selected]
                    ? linePosArr[selected].marginLeft
                    : 0,
                }}
                className="inner-line"
              />
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

NavBar.propTypes = {
  destinations: PropTypes.arrayOf(
    PropTypes.shape({
      section: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
};
