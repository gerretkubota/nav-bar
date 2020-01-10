import React, { Component } from 'react';

export default class Loading extends Component {
  constructor() {
    super();

    this.state = {
      text: 'Loading',
    };
  }

  /**
   * Gives an 'animation-effect' that will display Loading. -> Loading.. -> Loading... -> etc
   */
  componentDidMount() {
    this.interval = window.setInterval(() => {
      const { text } = this.state;
      if (text === 'Loading...') {
        this.setState({ text: 'Loading' });
      } else {
        this.setState({ text: `${text}.` });
      }
    }, 200);
  }

  /**
   * Clear the interval when the component is destroyed
   */
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    const { text } = this.state;
    return <div>{text}</div>;
  }
}
