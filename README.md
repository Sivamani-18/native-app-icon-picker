# React Native App Icon Picker

Native App Icon Picker is a React Native component that allows you to select icons from various icon libraries.

## Installation

You can install the "native-app-icon-picker" package using npm:

```sh
npm install native-app-icon-picker
```


**_or using Yarn:_**

```sh
npm yarn add native-app-icon-picker
```

**_Usage_**

Import the IconPicker component from the "native-app-icon-picker" package:

```sh
import IconPicker from 'native-app-icon-picker';

// Your code...
```


## Render the IconPicker component in your desired location:

<IconPicker
  headerTitle="Select an Icon"
  showIconPicker={true}
  onSelect={handleIconSelect}
  toggleIconPicker={toggleIconPicker}
  iconDetails={iconDetails}
  selectedIcon={selectedIcon}
  selectedIconContainerStyle={selectedIconContainerStyle}
/>



For more detailed usage and available props, please refer to the [documentation](https://snack.expo.dev/@sivamani-18/react-native-app-iconpicker).

# Example

Here's an example of how to use the **_IconPicker_** component:

```sh
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconPicker from 'native-app-icon-picker';

const App = () => {
  const [showIconPicker, setShowIconPicker] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const toggleIconPicker = () => {
    setShowIconPicker(!showIconPicker);
  };

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
    setShowIconPicker(false);
  };

  const iconDetails = [
    {
      family: 'FontAwesome',
      color: '#999999',
      icons: ['heart', 'star', 'circle', 'check'],
    },
    {
      family: 'MaterialIcons',
      color: '#999999',
      icons: ['home', 'account', 'settings', 'notifications'],
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>IconPicker Example</Text>
      <IconPicker
        headerTitle="Select an Icon"
        showIconPicker={showIconPicker}
        onSelect={handleIconSelect}
        toggleIconPicker={toggleIconPicker}
        iconDetails={iconDetails}
        selectedIcon={selectedIcon}
        selectedIconContainerStyle={styles.selectedIconContainer}
        content={<Text style={styles.openPickerText} onPress={toggleIconPicker}>
        Open Icon Pickers
      </Text>}
      />
      <Text style={styles.selectedIconText}>
        Selected Icon: {selectedIcon ? selectedIcon.icon : 'None'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  selectedIconContainer: {
    backgroundColor: '#ffcc00',
    borderRadius: 8,
  },
  selectedIconText: {
    fontSize: 18,
    marginTop: 16,
  },
  openPickerText: {
    fontSize: 18,
    marginTop: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default App;
```

## Props

The `IconPicker` component accepts the following props:

| Prop                       | Type                          | Description                                                                   |
| -------------------------- | ----------------------------- | ----------------------------------------------------------------------------- |
| `headerTitle`              | `string`                      | The title displayed in the header of the icon picker modal.                    |
| `showIconPicker`           | `boolean`                     | Determines whether the icon picker modal is visible.                           |
| `onSelect`                 | `function`                    | Callback function invoked when an icon is selected.                            |
| `toggleIconPicker`         | `function`                    | Callback function invoked to toggle the visibility of the icon picker modal.   |
| `iconDetails`              | `array` of `IconDetail` objects    | An array of icon details containing the icon families and icons to be displayed.|
| `selectedIcon`             | `SelectedIcon` object           | The currently selected icon.                                                  |
| `selectedIconContainerStyle` | `object` or `StyleProp<ViewStyle>` | Custom styles applied to the selected icon container.                          |
| `content`                  | `ReactNode`                   | Custom content displayed when the icon picker is closed.                       |

# Documentation

For detailed documentation and examples, please refer to the [GitHub repository](https://github.com/sivamani-18/native-app-icon-picker).

## License

This project is licensed under the MIT License.