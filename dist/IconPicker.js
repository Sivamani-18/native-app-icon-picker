"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_native_1 = require("react-native");
var AntDesign_1 = __importDefault(require("react-native-vector-icons/AntDesign"));
var Entypo_1 = __importDefault(require("react-native-vector-icons/Entypo"));
var FontAwesome_1 = __importDefault(require("react-native-vector-icons/FontAwesome"));
var FontAwesome5_1 = __importDefault(require("react-native-vector-icons/FontAwesome5"));
var Fontisto_1 = __importDefault(require("react-native-vector-icons/Fontisto"));
var Ionicons_1 = __importDefault(require("react-native-vector-icons/Ionicons"));
var MaterialCommunityIcons_1 = __importDefault(require("react-native-vector-icons/MaterialCommunityIcons"));
var MaterialIcons_1 = __importDefault(require("react-native-vector-icons/MaterialIcons"));
var style_1 = __importDefault(require("./style"));
var iconComponents = {
    AntDesign: AntDesign_1.default,
    Entypo: Entypo_1.default,
    FontAwesome: FontAwesome_1.default,
    FontAwesome5: FontAwesome5_1.default,
    Fontisto: Fontisto_1.default,
    Ionicons: Ionicons_1.default,
    MaterialCommunityIcons: MaterialCommunityIcons_1.default,
    MaterialIcons: MaterialIcons_1.default,
};
var ICON_COLOR_SELECTED_COLOR = 'white';
var ICON_COLOR = '#999999';
var ICON_SIZE = 20;
var MODAL_CLOSE_COLOR = '#000000';
var MODAL_CLOSE_ICON_SIZE = 20;
var IconPicker = /** @class */ (function (_super) {
    __extends(IconPicker, _super);
    function IconPicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderItem = function (data) {
            var selectedIconContainerStyle = _this.props.selectedIconContainerStyle
                ? _this.props.selectedIconContainerStyle
                : style_1.default.selectedItem;
            var selectedIcon = _this.props.selectedIcon;
            return data.map(function (item, index) {
                if (!item)
                    return null;
                var Family = iconComponents[item.family];
                if (!Family)
                    return null;
                var isSelected = selectedIcon &&
                    selectedIcon.icon === item.icon &&
                    selectedIcon.family === item.family;
                return (react_1.default.createElement(react_native_1.TouchableOpacity, { key: index, style: [style_1.default.item, isSelected ? selectedIconContainerStyle : {}], onPress: function () { return _this.props.onSelect(item); } },
                    react_1.default.createElement(Family, { name: item.icon, size: ICON_SIZE, color: isSelected ? ICON_COLOR_SELECTED_COLOR : ICON_COLOR })));
            });
        };
        return _this;
    }
    IconPicker.prototype.render = function () {
        var _a = this.props, iconDetails = _a.iconDetails, showIconPicker = _a.showIconPicker;
        var headerTitle = this.props.headerTitle
            ? this.props.headerTitle
            : 'Select Icon';
        var data = [];
        if (iconDetails && iconDetails.length > 0) {
            iconDetails.forEach(function (detail) {
                var family = detail.family;
                var color = detail.color ? detail.color : ICON_COLOR;
                if (detail.icons && detail.icons.length > 0) {
                    detail.icons.forEach(function (icon) {
                        data.push({
                            icon: icon,
                            family: family,
                            color: color,
                        });
                    });
                }
            });
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_native_1.Modal, { animationType: 'fade', transparent: true, visible: showIconPicker, onRequestClose: this.props.toggleIconPicker },
                react_1.default.createElement(react_native_1.View, { style: style_1.default.wrapper },
                    react_1.default.createElement(react_native_1.View, { style: style_1.default.content },
                        react_1.default.createElement(react_native_1.View, { style: [style_1.default.modalHeader] },
                            react_1.default.createElement(react_native_1.View, { style: [style_1.default.modalHeaderWrapper] },
                                react_1.default.createElement(react_native_1.View, null,
                                    react_1.default.createElement(react_native_1.Text, { style: style_1.default.modalTitle }, headerTitle)),
                                react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: this.props.toggleIconPicker },
                                    react_1.default.createElement(Ionicons_1.default, { name: 'close', size: MODAL_CLOSE_ICON_SIZE, color: MODAL_CLOSE_COLOR })))),
                        react_1.default.createElement(react_native_1.ScrollView, { style: [style_1.default.modalContent] },
                            react_1.default.createElement(react_native_1.View, { style: style_1.default.iconContainer }, this.renderItem(data)))))),
            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: this.props.toggleIconPicker }, this.props.content ? (this.props.content) : (react_1.default.createElement(react_native_1.Text, null, "Open Iconpicker")))));
    };
    IconPicker.propTypes = {
        headerTitle: prop_types_1.default.string,
        showIconPicker: prop_types_1.default.bool.isRequired,
        onSelect: prop_types_1.default.func.isRequired,
        toggleIconPicker: prop_types_1.default.func.isRequired,
        iconDetails: prop_types_1.default.array.isRequired,
        content: prop_types_1.default.any,
        selectedIcon: prop_types_1.default.object,
        selectedIconContainerStyle: prop_types_1.default.object,
    };
    return IconPicker;
}(react_1.Component));
exports.default = IconPicker;
