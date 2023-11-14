import React, { useRef, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import colors from '../../assets/theme/colors';
import DoublePressable from '../DoublePressable';

interface ICarousel {
  images: string[];
  onDoublePress: () => void;
}

const Carousel: React.FC<ICarousel> = ({ images, onDoublePress }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(1);

  const { width } = useWindowDimensions();

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index || 0);
      }
    }
  );

  return (
    <View>
      <FlatList
        data={images}
        style={styles.container}
        renderItem={({ item }): React.JSX.Element => (
          <DoublePressable onDoublePress={onDoublePress}>
            <Image source={{ uri: item }} style={[styles.image, { width }]} />
          </DoublePressable>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
      <View style={styles.dots}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  activeImageIndex === index ? colors.primary : colors.white,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  dot: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 7,
    marginHorizontal: 3,
    margin: 10,
    width: 7,
  },
  dots: {
    bottom: 0,
    flexDirection: 'row',

    justifyContent: 'center',
    position: 'absolute',

    width: '100%',
  },
  image: {
    aspectRatio: 1,
  },
});

export default Carousel;
