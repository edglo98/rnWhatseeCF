import React from 'react';
import {
  FlatListProps,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

interface Props extends FlatListProps<any> {
  data: any[];
  title: JSX.Element | string;
  renderItem: (props: ListRenderItemInfo<any>) => JSX.Element;
}

const HorizontalSlider = ({data, title, renderItem, ...rest}: Props) => {
  return (
    <View>
      {typeof title === 'string' ? (
        <Text style={styles.title}>{title}</Text>
      ) : (
        title
      )}
      <FlatList
        {...rest}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HorizontalSlider;

const styles = StyleSheet.create({
  list: {
    padding: 15,
  },
  separator: {
    width: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1c1c1c',
    marginLeft: 15,
  },
});
