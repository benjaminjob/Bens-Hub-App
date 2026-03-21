import React, { useState } from 'react';
import { View, Text, Pressable, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  WebView: { url: string; title: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'WebView'>;

const WebViewScreen = ({ route, navigation }: Props) => {
  const { url, title } = route.params;
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoadEnd = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  const handleRefresh = () => {
    setLoading(true);
    setError(false);
  };

  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
      {/* Header */}
      <View className="bg-white border-b border-gray-200 px-4 py-3 flex-row items-center">
        <Pressable
          onPress={() => navigation.goBack()}
          className="mr-4 p-2 -ml-2"
        >
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </Pressable>
        
        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-900" numberOfLines={1}>
            {title}
          </Text>
        </View>

        {error && (
          <Pressable onPress={handleRefresh} className="p-2">
            <Ionicons name="refresh" size={24} color="#374151" />
          </Pressable>
        )}
      </View>

      {/* Loading indicator */}
      {loading && (
        <View className="absolute inset-0 bg-white items-center justify-center z-10">
          <ActivityIndicator size="large" color="#3B82F6" />
          <Text className="text-gray-600 mt-4">Loading {title}...</Text>
        </View>
      )}

      {/* Error state */}
      {error && (
        <View className="flex-1 items-center justify-center px-6">
          <Ionicons name="warning-outline" size={64} color="#EF4444" />
          <Text className="text-xl font-semibold text-gray-900 mt-4 mb-2 text-center">
            Failed to load page
          </Text>
          <Text className="text-gray-600 text-center mb-6">
            Please check your internet connection and try again.
          </Text>
          <Pressable
            onPress={handleRefresh}
            className="bg-blue-500 px-6 py-3 rounded-lg"
          >
            <Text className="text-white font-semibold">Try Again</Text>
          </Pressable>
        </View>
      )}

      {/* WebView */}
      {!error && (
        <WebView
          source={{ uri: url }}
          onLoadEnd={handleLoadEnd}
          onError={handleError}
          className="flex-1"
          startInLoadingState={false}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsInlineMediaPlayback={true}
        />
      )}
    </View>
  );
};

export default WebViewScreen;