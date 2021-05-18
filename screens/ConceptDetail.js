import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ConceptDetail({ navigation, route }) {
   const { title, body, section } = route.params;

   return (
      <View style={globalStyles.constainer}>
         <Text style={globalStyles.title}>{title}</Text>
         <Text style={globalStyles.title}>{body}</Text>
         <Text style={globalStyles.title}>{section}</Text>
      </View>
   );
}
