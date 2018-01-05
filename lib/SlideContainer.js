'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('./index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var slidePage = require('slidePage');

var SlideContainer = function (_Component) {
  _inherits(SlideContainer, _Component);

  function SlideContainer(props) {
    _classCallCheck(this, SlideContainer);

    var _this = _possibleConstructorReturn(this, (SlideContainer.__proto__ || Object.getPrototypeOf(SlideContainer)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(SlideContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.slidePage = new slidePage({
        slideContainer: this.refs.slideContainer,
        slidePages: this.refs.slideContainer.children,
        page: this.props.page,
        refresh: this.props.refresh,
        useWheel: this.props.useWheel,
        useSwipe: this.props.useSwipe,
        useAnimation: this.props.useAnimation,
        before: function before(origin, direction, target) {
          _this2.props.before(origin, direction, target);
        },
        after: function after(origin, direction, target) {
          _this2.props.after(origin, direction, target);
        }
      });
    }
  }, {
    key: 'update',
    value: function update() {
      this.slidePage.update(this.refs.slideContainer.children);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.slidePage.destroy();
    }
  }, {
    key: 'slideFire',
    value: function slideFire(page) {
      this.slidePage.slideFire(page);
    }
  }, {
    key: 'slideTo',
    value: function slideTo(page) {
      this.slidePage.slideTo(page);
    }
  }, {
    key: 'slideNext',
    value: function slideNext() {
      this.slidePage.slideNext();
    }
  }, {
    key: 'slidePrev',
    value: function slidePrev() {
      this.slidePage.slidePrev();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(_index2.default['slide-container']), ref: 'slideContainer' },
        this.props.children
      );
    }
  }]);

  return SlideContainer;
}(_react.Component);

SlideContainer.propTypes = {
  refresh: _propTypes2.default.bool,
  useWheel: _propTypes2.default.bool,
  useSwipe: _propTypes2.default.bool,
  useAnimation: _propTypes2.default.bool,
  before: _propTypes2.default.func,
  after: _propTypes2.default.func,
  page: _propTypes2.default.number
};

SlideContainer.defaultProps = {
  refresh: true,
  useWheel: true,
  useSwipe: true,
  useAnimation: true,
  page: 1,
  before: function before() {},
  after: function after() {}
};

exports.default = SlideContainer;