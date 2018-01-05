import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
var slidePage = require('slidePage')
import style from './index.css';
class SlideContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  componentDidMount() {
    this.slidePage = new slidePage({
      slideContainer: this.refs.slideContainer,
      slidePages: this.refs.slideContainer.children,
      page: this.props.page,
      refresh: this.props.refresh,
      useWheel: this.props.useWheel,
      useSwipe: this.props.useSwipe,
      useAnimation: this.props.useAnimation,
      before: (origin, direction, target) => {
        this.props.before(origin, direction, target)
      },
      after: (origin, direction, target) => {
        this.props.after(origin, direction, target)
      },
    })
  }
  update() {
    this.slidePage.update(this.refs.slideContainer.children);
  }
  destroy() {
    this.slidePage.destroy();
  }
  slideFire(page) {
    this.slidePage.slideFire(page)
  }
  slideTo(page) {
    this.slidePage.slideTo(page)
  }
  slideNext() {
    this.slidePage.slideNext()
  }
  slidePrev() {
    this.slidePage.slidePrev()
  }
  render() {
    return (
      <div className={cx(style['slide-container'])} ref="slideContainer">
        {this.props.children}
      </div>
    );
  }
}

SlideContainer.propTypes = {
  refresh: PropTypes.bool,
  useWheel: PropTypes.bool,
  useSwipe: PropTypes.bool,
  useAnimation: PropTypes.bool,
  before: PropTypes.func,
  after: PropTypes.func,
  page: PropTypes.number,
};

SlideContainer.defaultProps = {
  refresh: true,
  useWheel: true,
  useSwipe: true,
  useAnimation: true,
  page: 1,
  before: () => {},
  after: () => {},
};

export default SlideContainer;
