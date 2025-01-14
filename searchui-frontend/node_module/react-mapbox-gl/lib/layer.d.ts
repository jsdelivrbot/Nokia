/// <reference types="mapbox-gl" />
/// <reference types="react" />
import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as MapboxGL from 'mapbox-gl';
import { Sources, Context } from './util/types';
export declare type Paint = any;
export declare type Layout = any;
export interface ImageOptions {
    width?: number;
    height?: number;
    pixelRatio?: number;
}
export declare type ImageDefinition = [string, HTMLImageElement];
export declare type ImageDefinitionWithOptions = [string, HTMLImageElement, ImageOptions];
export interface LayerCommonProps {
    type?: 'symbol' | 'line' | 'fill' | 'circle' | 'raster';
    sourceId?: string;
    images?: ImageDefinition | ImageDefinition[] | ImageDefinitionWithOptions | ImageDefinitionWithOptions[];
    before?: string;
    sourceOptions?: Sources;
    paint?: Paint;
    layout?: Layout;
    layerOptions?: Partial<MapboxGL.Layer>;
    children?: JSX.Element | JSX.Element[];
}
export interface OwnProps {
    id: string;
    draggedChildren?: JSX.Element[];
}
export declare type Props = LayerCommonProps & OwnProps;
export default class Layer extends React.Component<Props, {}> {
    context: Context;
    static contextTypes: {
        map: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        type: "symbol";
        layout: {};
        paint: {};
    };
    private source;
    private geometry;
    private makeFeature;
    private initialize;
    private onStyleDataChange;
    componentWillMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(props: Props): void;
    render(): null;
}
