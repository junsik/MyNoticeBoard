import React, {Component} from 'react';
import PropTypes from 'prop-types'

import { View } from 'react-native';

import { Input } from 'react-native-elements'
import { isEmpty } from '../../utils/validate'
import styles from "./styles"

class AuthTextInput extends Component {
    render() {
        const { showLabel, placeholder, autoFocus, onChangeText, secureTextEntry, placeholderTextColor, keyboardType } = this.props;

        return (
            <View style={styles.container}>
                <Input
                    autoCapitalize='none'
                    clearButtonMode='while-editing'
                    underlineColorAndroid={"#fff"}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    containerStyle={styles.containerStyle}
                    inputStyle={styles.inputContainer}
                    placeholderTextColor={placeholderTextColor}
                    keyboardType={keyboardType}
                    errorMessage={this.props.error}
                    label={this.props.label}
                    value={this.props.value}/>
            </View>
        );
    }
}

AuthTextInput.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool,
    onChangeText: PropTypes.func.isRequired,
    secureTextEntry: PropTypes.bool,
    value: PropTypes.string,
    error: PropTypes.string,
}

AuthTextInput.defaultProps = {
    autoFocus: false,
    secureTextEntry: false,
    placeholderTextColor: "grey",
    keyboardType: "default"
}

export default AuthTextInput;