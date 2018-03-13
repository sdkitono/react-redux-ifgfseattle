import React, { Component } from 'react';

@connect(state => ({
  online: state.online
}))
export default class Home extends Component {
  static propTypes = {
    online: PropTypes.bool.isRequired
  };

  render() {
    const { online } = this.props;
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    return (
      <div className={styles.home}>
        <h1> Hello and welcome to IFGF Seattle mock website</h1>
      </div>
    );
  }
}
