import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './index.css';
class SlidePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className={cx(style['slide-page'], this.props.className)}>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

SlidePage.propTypes = {
};

SlidePage.defaultProps = {
};

export default SlidePage;
