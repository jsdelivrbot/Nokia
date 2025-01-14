/// <reference types="react" />
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Context } from './util/types';
import { Props as FeatureProps } from './feature';
import { Props as LayerProps, LayerCommonProps } from './layer';
export interface EnhancedLayerProps {
    id?: string;
}
declare const layerMouseTouchEvents: (WrappedComponent: React.ComponentClass<LayerProps>) => {
    new (props?: (EnhancedLayerProps & LayerCommonProps) | undefined, context?: any): {
        context: Context;
        hover: number[];
        isDragging: boolean;
        draggedChildren: JSX.Element[] | undefined;
        id: string;
        getChildren: () => React.ReactElement<FeatureProps>[];
        areFeaturesDraggable: (children: React.ReactElement<FeatureProps>[], featureIds?: number[]) => boolean;
        onClick: (evt: any) => void;
        onMouseEnter: (evt: any) => void;
        onMouseLeave: (evt: any) => void;
        onMouseDown: () => void;
        onTouchStart: (evt: any) => void;
        onDragMove: ({lngLat}: any) => void;
        onDragUp: (moveEvent: string, evt: any) => void;
        componentWillMount(): void;
        componentWillUnmount(): void;
        render(): JSX.Element;
        setState<K extends never>(f: (prevState: {}, props: EnhancedLayerProps & LayerCommonProps) => Pick<{}, K>, callback?: (() => any) | undefined): void;
        setState<K extends never>(state: Pick<{}, K>, callback?: (() => any) | undefined): void;
        forceUpdate(callBack?: (() => any) | undefined): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<EnhancedLayerProps & LayerCommonProps>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    contextTypes: {
        map: PropTypes.Requireable<any>;
    };
};
export default layerMouseTouchEvents;
