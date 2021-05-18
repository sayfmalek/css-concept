import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import concepts from '../assets/db/politics-history';

export default function Home({ navigation }) {
   return (
      <View style={globalStyles.constainer}>
         <FlatList
            data={concepts}
            renderItem={({ item }) => (
               <TouchableOpacity onPress={() => navigation.navigate('Detail', item)}>
                  <Text>{item.title}</Text>
               </TouchableOpacity>
            )}
         />
      </View>
   );
}
