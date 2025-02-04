"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var containerStyle = {
    position: 'absolute',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0px 1px 4px rgba(0, 0, 0, .3)',
    border: '1px solid rgba(0, 0, 0, 0.1)'
};
var positions = {
    topRight: { top: 10, right: 10, bottom: 'auto', left: 'auto' },
    topLeft: { top: 10, left: 10, bottom: 'auto', right: 'auto' },
    bottomRight: { bottom: 10, right: 10, top: 'auto', left: 'auto' },
    bottomLeft: { bottom: 10, left: 10, top: 'auto', right: 'auto' }
};
var buttonStyle = {
    backgroundColor: '#f9f9f9',
    opacity: 0.95,
    transition: 'background-color 0.16s ease-out',
    cursor: 'pointer',
    border: 0,
    height: 26,
    width: 26,
    backgroundImage: "url('https://api.mapbox.com/mapbox.js/v2.4.0/images/icons-000000@2x.png')",
    backgroundPosition: '0px 0px',
    backgroundSize: '26px 260px',
    outline: 0
};
var buttonStyleHovered = {
    backgroundColor: '#fff',
    opacity: 1
};
var buttonStylePlus = {
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2
};
var buttonStyleMinus = {
    backgroundPosition: '0px -26px',
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
};
var _a = [0, 1], PLUS = _a[0], MINUS = _a[1];
var POSITIONS = Object.keys(positions);
var ZoomControl = (function (_super) {
    __extends(ZoomControl, _super);
    function ZoomControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hover: undefined
        };
        _this.onMouseOut = function () {
            if (!_this.state.hover) {
                _this.setState({ hover: undefined });
            }
        };
        _this.plusOver = function () {
            if (PLUS !== _this.state.hover) {
                _this.setState({ hover: PLUS });
            }
        };
        _this.minusOver = function () {
            if (MINUS !== _this.state.hover) {
                _this.setState({ hover: MINUS });
            }
        };
        _this.onClickPlus = function () {
            _this.props.onControlClick(_this.context.map, _this.props.zoomDiff);
        };
        _this.onClickMinus = function () {
            _this.props.onControlClick(_this.context.map, -_this.props.zoomDiff);
        };
        return _this;
    }
    ZoomControl.prototype.render = function () {
        var _a = this.props, position = _a.position, style = _a.style, className = _a.className;
        var hover = this.state.hover;
        var plusStyle = __assign({}, buttonStyle, buttonStylePlus, hover === PLUS ? buttonStyleHovered : {});
        var minusStyle = __assign({}, buttonStyle, buttonStyleMinus, hover === MINUS ? buttonStyleHovered : {});
        return (React.createElement("div", { className: className, style: __assign({}, containerStyle, positions[position], style) },
            React.createElement("button", { type: "button", style: plusStyle, onMouseOver: this.plusOver, onMouseOut: this.onMouseOut, onClick: this.onClickPlus }),
            React.createElement("button", { type: "button", style: minusStyle, onMouseOver: this.minusOver, onMouseOut: this.onMouseOut, onClick: this.onClickMinus })));
    };
    ZoomControl.defaultProps = {
        position: POSITIONS[0],
        zoomDiff: 0.5,
        onControlClick: function (map, zoomDiff) {
            map.zoomTo(map.getZoom() + zoomDiff);
        }
    };
    ZoomControl.contextTypes = {
        map: PropTypes.object
    };
    return ZoomControl;
}(React.Component));
exports.default = ZoomControl;
//# sourceMappingURL=zoom-control.js.map