'use strict';

exports.__esModule = true;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _NavTabInfo = require('./NavTabInfo');

var _NavTabInfo2 = _interopRequireDefault(_NavTabInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A set of buttons to use within the Masthead component for
 * navigation within the application. Clicking one will update
 * the application’s router with the button’s route.
 */
var MastheadNavTabs = (_temp = _class = function (_React$Component) {
  _inherits(MastheadNavTabs, _React$Component);

  function MastheadNavTabs(props) {
    _classCallCheck(this, MastheadNavTabs);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.routeTo = _this.routeTo.bind(_this);
    return _this;
  }

  MastheadNavTabs.prototype.routeTo = function routeTo(route) {
    this.props.history.push({ pathname: route, search: this.props.location.search });
  };

  MastheadNavTabs.prototype.render = function render() {
    var _this2 = this;

    var tabs = [];
    this.props.tabInfo.forEach(function (tabInfo) {
      var liClass = tabInfo.route === _this2.props.currentTab ? 'active' : '';
      var clickHandler = tabInfo.route === _this2.props.currentTab ? null : function () {
        _this2.routeTo(tabInfo.route);
      };

      tabs.push(_react2.default.createElement(
        'li',
        { key: tabInfo.route, className: liClass },
        _react2.default.createElement(
          'a',
          { onClick: clickHandler, role: 'button', tabIndex: 0 },
          tabInfo.label
        )
      ));
    });

    return _react2.default.createElement(
      'div',
      { className: 'attivio-tabpanel-radio attivio-tabpanel-radio-navbar attivio-globalmast-tabpanel' },
      _react2.default.createElement(
        'ul',
        { className: 'nav nav-tabs' },
        tabs
      )
    );
  };

  return MastheadNavTabs;
}(_react2.default.Component), _class.defaultProps = {
  currentTab: null
}, _temp);


MastheadNavTabs.NavTabInfo = _NavTabInfo2.default;

exports.default = (0, _reactRouterDom.withRouter)(MastheadNavTabs);
module.exports = exports['default'];