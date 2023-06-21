import React, { useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Notifications from 'expo-notifications';

export default function Schedule() {

Notifications.getExpoPushTokenAsync()
  .then(response => {
    const expoPushToken = response.data;
    console.log(expoPushToken);
  })
  .catch(error => {
    console.log('Error getting Expo push token:', error);
  });
  const scheduleNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Scheduled Notification',
        body: 'This is a scheduled notification!',
        data: { data: 'additional data' },
      },
      trigger: {
        seconds: 60, // Trigger notification after 60 seconds
      },
    });
  };
  
  scheduleNotification();
  
return (
  <View>

  </View>
  );
}