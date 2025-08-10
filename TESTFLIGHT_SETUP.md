# TestFlight Setup Guide for VibeCode iOS App

## Prerequisites

1. **Apple Developer Account** ($99/year)
2. **Expo Account** (free)
3. **EAS CLI** installed globally
4. **Xcode** (for local builds, optional)

## Step 1: Install EAS CLI

```bash
npm install -g @expo/eas-cli
```

## Step 2: Login to Expo

```bash
eas login
```

## Step 3: Configure Your App

### Update app.json
Replace the following placeholders in `app.json`:
- `YOUR_TEAM_ID`: Your Apple Developer Team ID
- `your-project-id`: Your Expo project ID
- `your-expo-username`: Your Expo username

### Update eas.json
Replace the following placeholders in `eas.json`:
- `YOUR_TEAM_ID`: Your Apple Developer Team ID
- `your-apple-id@example.com`: Your Apple ID email
- `your-app-store-connect-app-id`: Your App Store Connect App ID

## Step 4: Initialize EAS Build

```bash
eas build:configure
```

## Step 5: Create iOS Build for TestFlight

```bash
# Build for internal testing
eas build --platform ios --profile preview

# Build for TestFlight submission
eas build --platform ios --profile production
```

## Step 6: Submit to TestFlight

```bash
eas submit --platform ios --profile production
```

## Step 7: Configure App Store Connect

1. Go to [App Store Connect](https://appstoreconnect.apple.com)
2. Create a new app if it doesn't exist
3. Configure app information, screenshots, and metadata
4. Set up TestFlight testing groups

## Build Profiles Explained

- **development**: For development builds with development client
- **preview**: For internal testing builds
- **production**: For TestFlight and App Store builds

## Common Issues and Solutions

### Bundle Identifier Already Exists
If you get an error about the bundle identifier already existing:
1. Change the bundle identifier in `app.json`
2. Update the package name in `package.json` if needed

### Team ID Issues
Make sure your Apple Developer Team ID is correct:
1. Go to [Apple Developer](https://developer.apple.com)
2. Navigate to Membership
3. Copy your Team ID

### Build Failures
If builds fail:
1. Check the build logs in Expo dashboard
2. Ensure all dependencies are compatible
3. Verify iOS configuration in `app.json`

## Testing on TestFlight

1. Install TestFlight app on your device
2. Accept the invitation to test your app
3. Download and test the app
4. Provide feedback through TestFlight

## Updating Your App

To update your app for TestFlight:

1. Increment the version in `app.json`
2. Increment the build number for iOS
3. Run: `eas build --platform ios --profile production`
4. Submit: `eas submit --platform ios --profile production`

## Useful Commands

```bash
# Check build status
eas build:list

# View build logs
eas build:view [BUILD_ID]

# Cancel a build
eas build:cancel [BUILD_ID]

# Download build artifacts
eas build:download [BUILD_ID]
```

## Support

For issues with:
- **EAS Builds**: Check [Expo documentation](https://docs.expo.dev/build/introduction/)
- **TestFlight**: Check [Apple documentation](https://developer.apple.com/testflight/)
- **iOS Development**: Check [Apple Developer documentation](https://developer.apple.com/ios/)