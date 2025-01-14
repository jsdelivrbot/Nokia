/// <reference types="mapbox-gl" />
/// <reference types="react" />
import * as MapboxGl from 'mapbox-gl';
import * as React from 'react';
export declare type MapEvent = (map: MapboxGl.Map, evt: React.SyntheticEvent<any>) => void;
export interface Events {
    onStyleLoad?: MapEvent;
    onResize?: MapEvent;
    onDblClick?: MapEvent;
    onClick?: MapEvent;
    onMouseMove?: MapEvent;
    onMouseOut?: MapEvent;
    onMoveStart?: MapEvent;
    onMove?: MapEvent;
    onMoveEnd?: MapEvent;
    onMouseDown?: MapEvent;
    onMouseUp?: MapEvent;
    onDragStart?: MapEvent;
    onDragEnd?: MapEvent;
    onDrag?: MapEvent;
    onZoomStart?: MapEvent;
    onZoom?: MapEvent;
    onZoomEnd?: MapEvent;
    onPitch?: MapEvent;
    onPitchStart?: MapEvent;
    onPitchEnd?: MapEvent;
    onWebGlContextLost?: MapEvent;
    onWebGlContextRestored?: MapEvent;
    onRemove?: MapEvent;
    onContextMenu?: MapEvent;
    onRender?: MapEvent;
    onError?: MapEvent;
    onSourceData?: MapEvent;
    onDataLoading?: MapEvent;
    onStyleDataLoading?: MapEvent;
    onTouchCancel?: MapEvent;
    onData?: MapEvent;
    onSourceDataLoading?: MapEvent;
    onTouchMove?: MapEvent;
    onTouchEnd?: MapEvent;
    onTouchStart?: MapEvent;
    onStyleData?: MapEvent;
    onBoxZoomStart?: MapEvent;
    onBoxZoomEnd?: MapEvent;
    onBoxZoomCancel?: MapEvent;
    onRotateStart?: MapEvent;
    onRotate?: MapEvent;
    onRotateEnd?: MapEvent;
}
export interface FitBoundsOptions {
    linear?: boolean;
    easing?: (time: number) => number;
    padding?: number;
    offset?: MapboxGl.Point | number[];
    maxZoom?: number;
}
export declare type FitBounds = number[][];
export interface AnimationOptions {
    duration: number;
    animate: boolean;
    easing(time: number): number;
    offset: number[];
}
export interface FlyToOptions {
    curve: number;
    minZoom: number;
    speed: number;
    screenSpeed: number;
}
export interface Props {
    style: string | MapboxGl.Style;
    center?: number[];
    zoom?: number[];
    maxBounds?: MapboxGl.LngLatBounds | FitBounds;
    fitBounds?: FitBounds;
    fitBoundsOptions?: FitBoundsOptions;
    bearing?: number;
    pitch?: number;
    containerStyle?: React.CSSProperties;
    className?: string;
    movingMethod?: 'jumpTo' | 'easeTo' | 'flyTo';
    animationOptions?: AnimationOptions;
    flyToOptions?: FlyToOptions;
    children?: JSX.Element;
}
export interface State {
    map?: MapboxGl.Map;
    ready: boolean;
}
export interface FactoryParameters {
    accessToken: string;
    apiUrl?: string;
    minZoom?: number;
    maxZoom?: number;
    hash?: boolean;
    preserveDrawingBuffer?: boolean;
    scrollZoom?: boolean;
    interactive?: boolean;
    dragRotate?: boolean;
    attributionControl?: boolean;
    logoPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    renderWorldCopies?: boolean;
    trackResize?: boolean;
    touchZoomRotate?: boolean;
    doubleClickZoom?: boolean;
    keyboard?: boolean;
    dragPan?: boolean;
    boxZoom?: boolean;
    refreshExpiredTiles?: boolean;
    failIfMajorPerformanceCaveat?: boolean;
    classes?: string[];
    bearingSnap?: number;
    injectCss?: boolean;
}
declare global  {
    namespace mapboxgl {
        interface MapboxOptions {
            failIfMajorPerformanceCaveat?: boolean;
        }
    }
}
declare const ReactMapboxFactory: ({accessToken, apiUrl, minZoom, maxZoom, hash, preserveDrawingBuffer, scrollZoom, interactive, dragRotate, attributionControl, logoPosition, renderWorldCopies, trackResize, touchZoomRotate, doubleClickZoom, keyboard, dragPan, boxZoom, refreshExpiredTiles, failIfMajorPerformanceCaveat, classes, bearingSnap, injectCss}: FactoryParameters) => any;
export default ReactMapboxFactory;
