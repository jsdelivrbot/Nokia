function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

/**
 * An indicator of an error that occurred during the search.
 */
var SearchResultsError = function (_React$Component) {
  _inherits(SearchResultsError, _React$Component);

  function SearchResultsError() {
    _classCallCheck(this, SearchResultsError);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  SearchResultsError.prototype.render = function render() {
    var style = {
      textAlign: 'center',
      width: '100%',
      height: '100%'
    };

    return React.createElement(
      'div',
      { style: style },
      'An error occurred while searching: ',
      this.props.error
    );
  };

  return SearchResultsError;
}(React.Component);

export { SearchResultsError as default };