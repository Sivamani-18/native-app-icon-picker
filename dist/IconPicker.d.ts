import React, { Component, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { StyleProp, ViewStyle } from 'react-native';
interface Icon {
    icon: string;
    family: string;
    color: string;
}
interface SelectedIcon {
    icon: string;
    family: string;
}
interface IconDetail {
    family: string;
    color?: string;
    icons: string[];
}
interface IconPickerProps {
    headerTitle?: string;
    showIconPicker: boolean;
    onSelect: (icon: SelectedIcon) => void;
    toggleIconPicker: () => void;
    iconDetails: IconDetail[];
    content?: ReactNode;
    selectedIcon?: SelectedIcon;
    selectedIconContainerStyle?: StyleProp<ViewStyle>;
}
declare class IconPicker extends Component<IconPickerProps> {
    static propTypes: {
        headerTitle: PropTypes.Requireable<string>;
        showIconPicker: PropTypes.Validator<boolean>;
        onSelect: PropTypes.Validator<(...args: any[]) => any>;
        toggleIconPicker: PropTypes.Validator<(...args: any[]) => any>;
        iconDetails: PropTypes.Validator<any[]>;
        content: PropTypes.Requireable<any>;
        selectedIcon: PropTypes.Requireable<object>;
        selectedIconContainerStyle: PropTypes.Requireable<object>;
    };
    renderItem: (data: Icon[]) => ReactNode;
    render(): React.JSX.Element;
}
export default IconPicker;
