import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Modal, Portal, Surface, Button, Title } from 'react-native-paper';
import styles from './styles';
import { connect } from 'react-redux';
import { Input } from './Input';

function LoginWithOTP({
  navigation,
  style,
  type,
  loading,
  isValidating,
  error,
}) {
  const isTypeEmail = type === 'Email';
  const [visible, setVisible] = useState(false);
  const [dismissable, setDismissable] = useState(true);
  const [pageText, setPageText] = useState({
    placeholder: isTypeEmail ? 'myEmail@provider.com' : '050-1234567',
    button: `Send ${type}`,
    title: `${type} Validation`,
    initialButtonText: isTypeEmail ? type : 'Phone',
  });
  const [keyboardType, setKeyboardType] = useState(
    isTypeEmail ? 'email-address' : 'phone-pad',
  );

  useEffect(() => {
    if (isValidating) {
      setPageText({ placeholder: 'Code', button: 'Validate' });
      setDismissable(false);
      setKeyboardType('');
    }
  }, [isValidating]);

  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          dismissable={dismissable}
          contentContainerStyle={styles.modalStyle}
          onDismiss={() => setVisible(false)}>
          <Surface style={styles.surfaceStyle}>
            <View style={styles.innerContainerStyle}>
              <Title style={styles.titleStyle}>{pageText.title}</Title>
              <Input
                placeholder={pageText.placeholder}
                keyboardType={keyboardType}
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Button
                onPress={() => console.log('pressed')}
                mode="contained"
                color="black"
                style={styles.buttonStyle}>
                {pageText.button}
              </Button>
            </View>
          </Surface>
        </Modal>
      </Portal>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={style.loginButtons}>
        <Text style={style.loginTextStyle}>{pageText.initialButtonText}</Text>
      </TouchableOpacity>
    </>
  );
}

const mapStateToProps = ({
  app: { loading },
  otp: { isValidating, error },
}) => ({
  loading,
  isValidating,
  error,
});

export default connect(mapStateToProps)(LoginWithOTP);
