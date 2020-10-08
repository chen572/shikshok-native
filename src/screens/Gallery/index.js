import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PictureSquare from '../../components/Camera/PictureSquare';
import { Spinner } from '../../components/Landing/Spinner';
import { getFirstPictures, getMorePictures } from '../../store/actions';
import styles from './styles';

function Gallery({ loading, pictures, dispatch }) {
  const [after, setAfter] = useState(1);

  useEffect(() => {
    dispatch(getFirstPictures());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderFooter = () => {
    if (loading) {
      return <Spinner />;
    }
    return null;
  };

  const handleEndReached = () => {
    try {
      setAfter(after + 1).then(() => {
        dispatch(getMorePictures(after));
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.mainContainer}>
      {pictures.length ? (
        <FlatList
          data={pictures}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <PictureSquare uri={item} />}
          ListFooterComponent={renderFooter}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0}
          refreshing={loading}
        />
      ) : (
        <Spinner />
      )}
    </View>
  );
}

const mapStateToProps = ({ app: { loading }, gallery: { pictures } }) => ({
  loading,
  pictures,
});

export default connect(mapStateToProps)(Gallery);
