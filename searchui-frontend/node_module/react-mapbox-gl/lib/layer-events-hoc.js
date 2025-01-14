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
var uid_1 = require("./util/uid");
var layerMouseTouchEvents = function (WrappedComponent) { return _a = (function (_super) {
        __extends(EnhancedLayer, _super);
        function EnhancedLayer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.hover = [];
            _this.isDragging = false;
            _this.draggedChildren = undefined;
            _this.id = _this.props.id || "layer-" + uid_1.generateID();
            _this.getChildren = function () {
                return [].concat(_this.props.children);
            };
            _this.areFeaturesDraggable = function (children, featureIds) {
                if (featureIds === void 0) { featureIds = _this.hover; }
                return !!featureIds
                    .map(function (id) { return (children[id] ? children[id].props.draggable : false); })
                    .filter(Boolean).length;
            };
            _this.onClick = function (evt) {
                var features = evt.features;
                var children = _this.getChildren();
                var map = _this.context.map;
                if (features) {
                    features.forEach(function (feature) {
                        var id = feature.properties.id;
                        if (children) {
                            var child = children[id];
                            var onClick = child && child.props.onClick;
                            if (onClick) {
                                onClick(__assign({}, evt, { feature: feature, map: map }));
                            }
                        }
                    });
                }
            };
            _this.onMouseEnter = function (evt) {
                var children = _this.getChildren();
                var map = _this.context.map;
                _this.hover = [];
                evt.features.forEach(function (feature) {
                    var id = feature.properties.id;
                    if (children) {
                        var child = children[id];
                        _this.hover.push(id);
                        var onMouseEnter = child && child.props.onMouseEnter;
                        if (onMouseEnter) {
                            onMouseEnter(__assign({}, evt, { feature: feature, map: map }));
                        }
                    }
                });
                if (_this.areFeaturesDraggable(children)) {
                    map.dragPan.disable();
                }
            };
            _this.onMouseLeave = function (evt) {
                var children = _this.getChildren();
                var map = _this.context.map;
                map.dragPan.enable();
                _this.hover.forEach(function (id) {
                    var child = children[id];
                    var onMouseLeave = child && child.props.onMouseLeave;
                    if (onMouseLeave) {
                        onMouseLeave(__assign({}, evt, { map: map }));
                    }
                });
                if (!_this.isDragging) {
                    _this.hover = [];
                }
            };
            _this.onMouseDown = function () {
                var map = _this.context.map;
                var children = _this.getChildren();
                var isHoverDraggable = _this.areFeaturesDraggable(children);
                if (!isHoverDraggable) {
                    return;
                }
                map.dragPan.disable();
                _this.isDragging = true;
                map.on('mousemove', _this.onDragMove);
                map.once('mouseup', _this.onDragUp.bind(_this, 'mousemove'));
            };
            _this.onTouchStart = function (evt) {
                var children = _this.getChildren();
                var map = _this.context.map;
                evt.features.forEach(function (feature) {
                    var id = feature.properties.id;
                    _this.hover = [id];
                    if (_this.areFeaturesDraggable(children)) {
                        map.dragPan.disable();
                        _this.isDragging = true;
                        map.on('touchmove', _this.onDragMove);
                        map.once('touchend', _this.onDragUp.bind(_this, 'touchmove'));
                    }
                });
            };
            _this.onDragMove = function (_a) {
                var lngLat = _a.lngLat;
                if (!_this.isDragging) {
                    return;
                }
                var children = _this.getChildren();
                _this.draggedChildren = children.map(function (child, index) {
                    if (_this.hover.includes(index) && child.props.draggable) {
                        return React.cloneElement(child, {
                            coordinates: [lngLat.lng, lngLat.lat]
                        });
                    }
                    return child;
                });
                _this.forceUpdate();
            };
            _this.onDragUp = function (moveEvent, evt) {
                var map = _this.context.map;
                var children = _this.getChildren();
                map.dragPan.enable();
                _this.isDragging = false;
                _this.draggedChildren = undefined;
                _this.hover.map(function (id) {
                    var child = children[id];
                    var onDragEnd = child && child.props.onDragEnd;
                    if (onDragEnd) {
                        onDragEnd(__assign({}, evt, { map: map }));
                    }
                });
                map.off(moveEvent, _this.onDragMove);
            };
            return _this;
        }
        EnhancedLayer.prototype.componentWillMount = function () {
            var map = this.context.map;
            map.on('click', this.id, this.onClick);
            map.on('mouseenter', this.id, this.onMouseEnter);
            map.on('mouseleave', this.id, this.onMouseLeave);
            map.on('mousedown', this.id, this.onMouseDown);
            map.on('touchstart', this.id, this.onTouchStart);
        };
        EnhancedLayer.prototype.componentWillUnmount = function () {
            var map = this.context.map;
            map.off('click', this.onClick);
            map.off('mouseenter', this.onMouseEnter);
            map.off('mouseleave', this.onMouseLeave);
            map.off('mousedown', this.onMouseDown);
            map.off('touchstart', this.onTouchStart);
        };
        EnhancedLayer.prototype.render = function () {
            return (React.createElement(WrappedComponent, __assign({}, this.props, { draggedChildren: this.draggedChildren, id: this.id })));
        };
        return EnhancedLayer;
    }(React.Component)),
    _a.contextTypes = {
        map: PropTypes.object
    },
    _a; var _a; };
exports.default = layerMouseTouchEvents;
//# sourceMappingURL=layer-events-hoc.js.map