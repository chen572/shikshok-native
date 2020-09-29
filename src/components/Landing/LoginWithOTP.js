import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import {
  Modal,
  Portal,
  Surface,
  Button,
  Title,
  Caption,
} from 'react-native-paper';
import styles from './styles';
import { connect } from 'react-redux';
import { Input } from './Input';
import {
  checkValidation,
  clearOTP,
  onValidationError,
  startValidation,
} from '../../store/actions';
import { Spinner } from './Spinner';

function LoginWithOTP({
  navigation,
  style,
  type,
  loading,
  isValidating,
  error,
  dispatch,
  success,
}) {
  const isTypeEmail = type === 'Email';
  const channel = isTypeEmail ? 'email' : 'sms';
  const [to, setTo] = useState('');
  const [code, setCode] = useState('');
  const [visible, setVisible] = useState(false);
  const [dismissable, setDismissable] = useState(true);
  const [pageText, setPageText] = useState({
    placeholder: isTypeEmail ? 'MyEmail@provider.com' : '+972512345678',
    button: `Send ${type}`,
    title: `${type} Validation`,
    initialButtonText: isTypeEmail ? type : 'Phone',
    errorMsg: '',
  });
  const [keyboardType, setKeyboardType] = useState(
    isTypeEmail ? 'email-address' : 'phone-pad',
  );

  const handleDismiss = () => {
    setPageText({
      ...pageText,
      errorMsg: '',
    });
    setCode('');
    setTo('');
    dispatch(clearOTP());
    setVisible(false);
  };

  const handleSubmit = () => {
    if (isValidating) {
      return dispatch(checkValidation(to, code));
    }
    const regex = isTypeEmail
      ? /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
      : /(\+972\d{9})/;
    if (!regex.test(to)) {
      return dispatch(onValidationError());
    }
    return dispatch(startValidation(to, channel));
  };

  useEffect(() => {
    if (isValidating) {
      setPageText({ ...pageText, placeholder: 'Code', button: 'Validate' });
      setDismissable(false);
      setKeyboardType('number-pad');
    }

    if (success) {
      setDismissable(true);
      setVisible(false);
      navigation.navigate('Home');
    }

    if (error) {
      if (isValidating) {
        setPageText({
          ...pageText,
          errorMsg: 'Invalid Code',
        });
      } else {
        setPageText({
          ...pageText,
          errorMsg: isTypeEmail ? 'Invalid Email' : 'Invalid Phone Number',
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValidating, success, error]);

  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          dismissable={dismissable}
          contentContainerStyle={styles.modalStyle}
          onDismiss={handleDismiss}>
          <Surface style={styles.surfaceStyle}>
            {loading ? (
              <Spinner />
            ) : (
              <View style={styles.innerContainerStyle}>
                <Title style={styles.titleStyle}>{pageText.title}</Title>
                <Input
                  placeholder={pageText.placeholder}
                  keyboardType={keyboardType}
                  style={styles.inputStyle}
                  autoCapitalize="none"
                  autoCorrect={false}
                  error={error}
                  errorMsg={pageText.errorMsg}
                  value={isValidating ? code : to}
                  onChangeText={(text) =>
                    isValidating ? setCode(text) : setTo(text)
                  }
                />
                <Button
                  onPress={handleSubmit}
                  mode="contained"
                  color="black"
                  style={styles.buttonStyle}>
                  {pageText.button}
                </Button>
                {error && (
                  <Caption style={styles.errorMsgStyle}>
                    {pageText.errorMsg}
                  </Caption>
                )}
              </View>
            )}
          </Surface>
        </Modal>
      </Portal>
      <TouchableOpacity
        onPress={() =>
          success ? navigation.navigate('Home') : setVisible(true)
        }
        style={style.loginButtons}>
        <Text style={style.loginTextStyle}>{pageText.initialButtonText}</Text>
      </TouchableOpacity>
    </>
  );
}

const mapStateToProps = ({
  app: { loading },
  otp: { isValidating, error, success },
}) => ({
  loading,
  isValidating,
  error,
  success,
});

export default connect(mapStateToProps)(LoginWithOTP);
