import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getGravatarUrl } from '../utils/gravatar';

type RootStackParamList = {
  Home: undefined;
  WebView: { url: string; title: string };
  QuickLinks: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();
  const [showWorkInProgress, setShowWorkInProgress] = useState(false);
  const [showLinkedIn, setShowLinkedIn] = useState(true);

  const webProperties = [
    {
      id: '1',
      title: 'Splash Page',
      description: 'My splash page',
      url: 'https://msha.ke/benjaminjobprojects',
      icon: 'sparkles-outline' as keyof typeof Ionicons.glyphMap,
      color: 'bg-orange-500',
      workInProgress: true,
    },
    {
      id: '2',
      title: 'My Webpage',
      description: 'View my projects and portfolio',
      url: 'https://benjaminjob.wixsite.com/projects',
      icon: 'globe-outline' as keyof typeof Ionicons.glyphMap,
      color: 'bg-blue-500',
      workInProgress: true,
    },
    {
      id: '3',
      title: 'Software Releases',
      description: 'Track software releases',
      url: 'https://www.vibecodeapp.com/projects/d2701c27-6b36-49a4-9ea6-225891dc9c48',
      icon: 'code-outline' as keyof typeof Ionicons.glyphMap,
      color: 'bg-green-500',
      workInProgress: false,
    },
    {
      id: '4',
      title: 'Tech Events',
      description: 'Stay updated with tech events',
      url: 'https://www.vibecodeapp.com/projects/cf34d470-53a5-4cd5-8e87-8683840a6150',
      icon: 'calendar-outline' as keyof typeof Ionicons.glyphMap,
      color: 'bg-purple-500',
      workInProgress: false,
    },
  ];

  const shortcuts = [
    {
      id: 's1',
      title: 'AirFry Convert',
      description: 'Convert (fan) oven temps & times to air fryer using camera, voice or manual inputs',
      url: 'https://www.icloud.com/shortcuts/f021041cfa3040af8c6bc9f6fc3dd808',
      icon: 'thermometer-outline' as keyof typeof Ionicons.glyphMap,
      color: 'bg-red-500',
    },
  ];



  const projectItems = webProperties.filter(item => item.workInProgress);
  const appItems = webProperties.filter(item => !item.workInProgress);
  
  const myProjects = [
    {
      id: 'mp1',
      title: 'My Projects Page',
      description: 'View all my project showcases',
      url: 'https://www.facebook.com/share/19w5dY7Mbz/?mibextid=wwXIfr',
      icon: 'briefcase-outline' as keyof typeof Ionicons.glyphMap,
      color: 'bg-indigo-600',
    },
  ];

  const techSections = [
    {
      id: 'ts1',
      title: "Ben's Tech/AI & Memes",
      description: 'Exclusive XR/VR, games, TV & more - From BXR',
      url: 'https://fb.me/g/5hB6pZGyQ/R49fjzos',
      icon: 'game-controller-outline' as keyof typeof Ionicons.glyphMap,
      color: 'bg-blue-500',
    },
    {
      id: 'ts2',
      title: "Ben's Cutting Edge Tech/AI",
      description: 'XR (VR/AR/MR) and even more - BXR',
      url: 'https://www.facebook.com/share/g/19TuLjHCXj/?mibextid=wwXIfr',
      icon: 'settings-outline' as keyof typeof Ionicons.glyphMap,
      color: 'bg-purple-500',
    },
  ];
  
  const shouldShowProjects = showWorkInProgress && projectItems.length > 0;

  const handlePress = (item: { url: string; title: string }) => {
    navigation.navigate('WebView', { url: item.url, title: item.title });
  };

  return (
    <View className="flex-1 bg-gray-50" style={{ paddingTop: insets.top }}>
      <View className="px-6 py-8">
        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-1">
            <Text className="text-3xl font-bold text-gray-900 mb-2">Ben's Hub</Text>
            <Text className="text-gray-600 text-sm">Choose what you'd like to view</Text>
          </View>
          
          {/* Gravatar Profile Picture */}
          <View className="items-center mx-4">
            <View className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden border-2 border-gray-300">
              <Image
                source={{ uri: getGravatarUrl(showLinkedIn ? 'Benjamin.Job@ten.com' : 'benjamin.job@gwern.co.uk', 48) }}
                className="w-full h-full"
                style={{ width: 48, height: 48 }}
                onError={() => console.log('Gravatar failed to load')}
              />
            </View>
          </View>
          
          {/* Profile Section */}
          <View className="flex-row items-center">
            <Pressable
              onPress={() => setShowLinkedIn(!showLinkedIn)}
              className="mr-2 p-1"
            >
              <Ionicons 
                name="swap-horizontal" 
                size={16} 
                color="#6B7280" 
              />
            </Pressable>
            
            <Pressable
              onPress={() => navigation.navigate('WebView', { 
                url: showLinkedIn ? 'https://www.linkedin.com/in/benjaminjob' : 'https://facebook.com/benjaminjob25', 
                title: showLinkedIn ? 'LinkedIn Profile' : 'Facebook Profile' 
              })}
              className="flex-row items-center bg-blue-50 px-3 py-2 rounded-full"
              style={{ minWidth: 80 }}
            >
              <View className="w-8 h-8 rounded-full mr-2 items-center justify-center" style={{ backgroundColor: showLinkedIn ? '#0077B5' : '#1877F2' }}>
                <Ionicons 
                  name={showLinkedIn ? 'logo-linkedin' : 'logo-facebook'} 
                  size={20} 
                  color="white" 
                />
              </View>
              <Text className="text-blue-600 font-medium text-sm" style={{ minWidth: 60 }}>
                {showLinkedIn ? 'LinkedIn' : 'Facebook'}
              </Text>
            </Pressable>
          </View>
        </View>
        
        {/* All Links Button */}
        <Pressable
          onPress={() => navigation.navigate('WebView', { url: 'https://linktr.ee/benjaminjob', title: 'All Links' })}
          className="bg-indigo-500 p-4 rounded-xl mb-4 shadow-sm"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 3,
          }}
        >
          <View className="flex-row items-center justify-center">
            <Ionicons name="link" size={24} color="white" style={{ marginRight: 8 }} />
            <Text className="text-white font-semibold text-lg">All Links (LinkTree)</Text>
          </View>
        </Pressable>
        
        {/* Toggle for work in progress items */}
        <Pressable
          onPress={() => setShowWorkInProgress(!showWorkInProgress)}
          className="flex-row items-center justify-between bg-gray-100 p-3 rounded-xl"
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
        <View className="space-y-6">
          {/* Projects Section */}
          {shouldShowProjects && (
            <View>
              <Text className="text-xl font-bold text-gray-900 mb-3">Projects</Text>
              <View className="space-y-4">
                {projectItems.map((item) => (
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
                        <View className="flex-row items-center mb-1">
                          <Text className="text-xl font-semibold text-gray-900">
                            {item.title}
                          </Text>
                          <View className="ml-2 bg-amber-100 px-2 py-1 rounded-full">
                            <Text className="text-amber-700 text-xs font-medium">WIP</Text>
                          </View>
                        </View>
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
          )}

          {/* Apps Section */}
          <View>
            <Text className="text-xl font-bold text-gray-900 mb-3">Apps</Text>
            <View className="space-y-4">
              {appItems.map((item) => (
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

          {/* My Projects Section */}
          <View>
            <Text className="text-xl font-bold text-gray-900 mb-3">My Projects</Text>
            <View className="space-y-4">
              {myProjects.map((item) => (
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

          {/* Tech Section */}
          <View>
            <Text className="text-xl font-bold text-gray-900 mb-3">Tech</Text>
            <View className="space-y-4">
              {techSections.map((item) => (
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

          {/* Shortcuts Section */}
          <View>
            <Text className="text-xl font-bold text-gray-900 mb-3">Shortcuts</Text>
            <View className="space-y-4">
              {shortcuts.map((item) => (
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

          {/* Quick Links Button */}
          <View>
            <Pressable
              onPress={() => navigation.navigate('QuickLinks')}
              className="bg-green-500 p-6 rounded-2xl shadow-sm"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 3,
              }}
            >
              <View className="flex-row items-center justify-center">
                <Ionicons name="flash" size={24} color="white" style={{ marginRight: 8 }} />
                <Text className="text-white font-bold text-xl">Quick Links</Text>
                <Ionicons name="chevron-forward" size={20} color="white" style={{ marginLeft: 8 }} />
              </View>
              <Text className="text-white/80 text-center mt-2">
                Shortcuts • App Store • TestFlight
              </Text>
            </Pressable>
          </View>

          {/* Community Section */}
          <View>
            <Text className="text-xl font-bold text-gray-900 mb-4">Community</Text>
            <Pressable
              onPress={() => handlePress({ url: 'https://discord.gg/vibecode', title: 'Discord Community' })}
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
                <View className="w-12 h-12 rounded-full bg-indigo-600 items-center justify-center mr-4">
                  <Ionicons name="chatbubbles" size={24} color="white" />
                </View>
                <View className="flex-1">
                  <Text className="text-xl font-semibold text-gray-900 mb-1">
                    Discord Community
                  </Text>
                  <Text className="text-gray-600">
                    Join our Discord community for discussions and support
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
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;