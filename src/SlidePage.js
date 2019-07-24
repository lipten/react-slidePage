import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
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
      <div className={cx('slide-page', this.props.className)}>
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
