import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Input} from './Input';

function LoginWithEmail({navigation, style, text, showInput}) {
  return (
    <>
      {showInput ? (
        <Input
          label="Code"
          style={{alignSelf: 'Center'}}
          placeholder="1234567"
        />
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={style.loginButtons}>
          <Text style={style.loginTextStyle}>{text}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

export default LoginWithEmail;
