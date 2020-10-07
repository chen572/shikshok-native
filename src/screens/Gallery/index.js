import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

function Gallery({ loading, pictures, dispatch }) {
  return (
    <View>
      <FlatList />
    </View>
  );
}

const mapStateToProps = ({ app: { loading }, gallery: { pictures } }) => ({
  loading,
  pictures,
});

export default connect(mapStateToProps)(Gallery);
