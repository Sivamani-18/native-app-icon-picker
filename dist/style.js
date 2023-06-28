"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var COLOR_DARK_GREY = '#999999';
var COLOR_WHITE = '#FFFFFF';
var COLOR_LIGHT_GREY = '#EFEFEF';
exports.default = react_native_1.StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    content: {
        flexDirection: 'column',
        backgroundColor: COLOR_WHITE,
        maxHeight: '50%',
        borderRadius: 10,
        width: '85%',
    },
    modalHeader: {
        flexDirection: 'column',
        borderColor: COLOR_LIGHT_GREY,
        borderBottomWidth: 2,
        padding: 20,
    },
    modalHeaderWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
    },
    modalTitle: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '700',
    },
    modalContent: {
        padding: 10,
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 20,
        paddingHorizontal: '5%',
    },
    item: {
        margin: 5,
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: COLOR_DARK_GREY,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    selectedItem: {
        backgroundColor: COLOR_DARK_GREY,
    },
});
