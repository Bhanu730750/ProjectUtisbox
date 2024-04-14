import React, { useState } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Themes } from '../Appdata/colors';
import { university } from '../Utility/ImageUrl';
import { colors } from '../Utility/Color';

const { width } = Dimensions.get('screen');

export default function () {
  const [state, setState] = useState({
    data: [
      {
        title: 'Item 1',
        img: university,
      },
      {
        title: 'Item 1',
        img: university,
      },
      {
        title: 'Item 1',
        img: university,
      },
      {
        title: 'Item 1',
        img: university,
      },
    ],
    activeIndex: 0,
  });
  const pagination = () => {

    return (
      <Pagination
        dotsLength={state?.data?.length || []}
        activeDotIndex={state?.activeIndex || 0}
        containerStyle={{ paddingVertical: 10 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: colors.PRIMARY
        }}
        inactiveDotStyle={{
          backgroundColor: colors.GRAY_CHARCOAL
          // Define styles for inactive dots here
        }}

        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
  const renderItem = ({ item, index }) => {
    return (
      <Image
        source={item.img}
        resizeMode="cover"
        style={{
          borderRadius: 10,
          height: 200,
          backgroundColor: colors.PRIMARY,
          width: width - 15,

          marginHorizontal: '2%',
          marginVertical: '2%',
        }}>
      </Image>
    );
  };
  return (
    <View>
      <Carousel
        layout={'default'}
        data={state.data}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
        onSnapToItem={index => setState({ ...state, activeIndex: index })}
      // autoplay={true}
      // loop={true}
      />
      {pagination()}
    </View>
  );
}
