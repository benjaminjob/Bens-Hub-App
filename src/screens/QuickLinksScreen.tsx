import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  WebView: { url: string; title: string };
  QuickLinks: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'QuickLinks'>;

const QuickLinksScreen = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();
  const [showWorkInProgress, setShowWorkInProgress] = useState(false);

  const shortcutsLinks = [
    {
      id: 'sl1',
      title: 'RoutineHub',
      description: 'Best iOS shortcuts community',
      url: 'https://routinehub.co/',
      icon: 'cube-outline' as keyof typeof Ionicons.glyphMap,
      color: 'bg-blue-600',
    },
    {
      id: 'sl2',
      title: 'Apple Shortcuts Gallery',
      description: 'Official Apple shortcuts collection',
      url: 'https://support.apple.com/guide/shortcuts/intro-to-shortcuts-apdf22b0444c/ios',
      icon: 'logo-apple' as keyof typeof Ionicons.glyphMap,
      color: 'bg-gray-800',
    },
    {
      id: 'sl3',
      title: 'ShareShortcuts',
      description: 'Community shortcuts sharing platform',
      url: 'https://shareshortcuts.com/',
      icon: 'share-outline' as keyof typeof Ionicons.glyphMap,
      color: 'bg-green-600',
    },
    {
      id: 'sl4',
      title: 'MacStories Shortcuts',
      description: 'Premium shortcuts and automation guides',
      url: 'https://www.macstories.net/shortcuts/',
      icon: 'library-outline' as keyof typeof Ionicons.glyphMap,
      color: 'bg-purple-600',
    },
  ];

  const appStoreLinks = [
    {
      id: 'as1',
      title: 'App Store',
      description: 'Browse all apps on App Store',
      url: 'https://apps.apple.com/',
      icon: 'storefront-outline' as keyof typeof Ionicons.glyphMap,
      color: 'bg-blue-600',
    },
    {
      id: 'as2',
      title: 'Best Apps',
      description: 'Curated best iPhone apps',
      url: 'https://www.pcmag.com/picks/best-iphone-apps',
      icon: 'star-outline' as keyof typeof Ionicons.glyphMap,
      color: 'bg-yellow-500',
    },
  ];

  const testFlightLinks = [
    {
      id: 'tf1',
      title: 'Departures',
      description: 'Discover TestFlight apps',
      url: 'https://departures.to',
      icon: 'rocket-outline' as keyof typeof Ionicons.glyphMap,
      color: 'bg-blue-600',
    },
    {
      id: 'tf2',
      title: 'Vercel',
      description: 'TestFlight App Directory',
      url: 'https://awesome-testflight-link.vercel.app',
      icon: 'library-outline' as keyof typeof Ionicons.glyphMap,
      color: 'bg-green-600',
    },
    {
      id: 'tf3',
      title: 'Apple Developer',
      description: 'TestFlight Public Links',
      url: 'https://developer.apple.com',
      icon: 'logo-apple' as keyof typeof Ionicons.glyphMap,
      color: 'bg-gray-700',
    },
    ...(showWorkInProgress ? [{
      id: 'tf4',
      title: 'Airport',
      description: 'Best TestFlight app for discovering beta apps',
      url: 'https://airport.community/',
      icon: 'airplane-outline' as keyof typeof Ionicons.glyphMap,
      color: 'bg-orange-600',
      workInProgress: true,
    }] : []),
  ];

  const shortcutHubs = [
    {
      id: 'sh1',
      title: 'RoutineHub',
      description: 'Premier community for iOS shortcuts',
      url: 'https://routinehub.co',
      icon: 'library-outline' as keyof typeof Ionicons.glyphMap,
      color: 'bg-indigo-600',
    },
    {
      id: 'sh2',
      title: 'Shortcuts Directory',
      description: 'Browse and discover iOS shortcuts',
      url: 'https://shortcuts.directory/',
      icon: 'folder-outline' as keyof typeof Ionicons.glyphMap,
      color: 'bg-teal-600',
    },
  ];



  const handlePress = (item: any) => {
    if (!item.url) return;
    navigation.navigate('WebView', { url: item.url, title: item.title });
  };

  const renderSection = (title: string, items: any[]) => (
    <View className="mb-8">
      <Text className="text-xl font-bold text-gray-900 mb-4">{title}</Text>
      <View className="space-y-4">
        {items.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => handlePress(item)}
            className={`rounded-2xl p-6 shadow-sm ${item.url ? 'bg-white' : 'bg-gray-200'}`}
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 3,
            }}
          >
            <View className="flex-row items-center">
              <View className={`w-12 h-12 rounded-full ${item.color} items-center justify-center mr-4`}>
                <Ionicons name={item.icon} size={24} color="white" />
              </View>
              <View className="flex-1">
                <View className="flex-row items-center mb-1">
                  <Text className={`text-xl font-semibold ${item.url ? 'text-gray-900' : 'text-gray-500'}`}>
                    {item.title}
                  </Text>
                  {item.workInProgress && (
                    <View className="ml-2 bg-amber-100 px-2 py-1 rounded-full">
                      <Text className="text-amber-700 text-xs font-medium">WIP</Text>
                    </View>
                  )}
                </View>
                <Text className={`${item.url ? 'text-gray-600' : 'text-gray-400'}`}>
                  {item.url ? item.description : 'Coming soon...'}
                </Text>
              </View>
              <View className="ml-2">
                <Ionicons 
                  name="chevron-forward" 
                  size={20} 
                  color={item.url ? '#6B7280' : '#D1D5DB'}
                />
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-50" style={{ paddingTop: insets.top }}>
      {/* Header */}
      <View className="bg-white border-b border-gray-200 px-4 py-3 flex-row items-center">
        <Pressable
          onPress={() => navigation.goBack()}
          className="mr-4 p-2 -ml-2"
        >
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </Pressable>
        
        <View className="flex-1">
          <Text className="text-xl font-bold text-gray-900">Quick Links</Text>
        </View>
      </View>

      <View className="px-6 py-6">
        {/* Toggle for work in progress items */}
        <Pressable
          onPress={() => setShowWorkInProgress(!showWorkInProgress)}
          className="flex-row items-center justify-between bg-gray-100 p-3 rounded-xl mb-6"
        >
          <View className="flex-row items-center">
            <Ionicons 
              name="construct-outline" 
              size={20} 
              color="#6B7280" 
              style={{ marginRight: 8 }}
            />
            <Text className="text-gray-700 font-medium">Show work in progress</Text>
          </View>
          <View className={`w-12 h-6 rounded-full p-1 ${showWorkInProgress ? 'bg-blue-500' : 'bg-gray-300'}`}>
            <View 
              className={`w-4 h-4 bg-white rounded-full transition-transform ${
                showWorkInProgress ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </View>
        </Pressable>
      </View>

      <ScrollView className="flex-1 px-6">
        {renderSection('Shortcuts', shortcutsLinks)}
        {renderSection('App Store', appStoreLinks)}
        {renderSection('TestFlight', testFlightLinks)}
        
        {/* Shortcuts Discovery Section */}
        <View className="mb-8">
          <Text className="text-xl font-bold text-gray-900 mb-2">Discover More Shortcuts</Text>
          <Text className="text-gray-600 mb-4">
            Find the best Apple shortcuts, repositories, sites, and blogs with extensive collections and tutorials.
          </Text>
          <View className="space-y-4">
            {shortcutHubs.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => handlePress(item)}
                className="rounded-2xl p-6 shadow-sm bg-white"
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 8,
                  elevation: 3,
                }}
              >
                <View className="flex-row items-center">
                  <View className={`w-12 h-12 rounded-full ${item.color} items-center justify-center mr-4`}>
                    <Ionicons name={item.icon} size={24} color="white" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-xl font-semibold text-gray-900 mb-1">
                      {item.title}
                    </Text>
                    <Text className="text-gray-600">
                      {item.description}
                    </Text>
                  </View>
                  <View className="ml-2">
                    <Ionicons 
                      name="chevron-forward" 
                      size={20} 
                      color="#6B7280"
                    />
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        </View>


      </ScrollView>
    </View>
  );
};

export default QuickLinksScreen;