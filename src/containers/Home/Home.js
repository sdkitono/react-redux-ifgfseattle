import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    return (
      <div className={styles.home}>
        <h1> Hello and welcome to IFGF Seattle mock website</h1>
      </div>
    );
  }
}
