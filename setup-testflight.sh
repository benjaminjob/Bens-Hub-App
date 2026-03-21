#!/bin/bash

echo "🚀 Setting up VibeCode for TestFlight distribution..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install EAS CLI globally
echo "📦 Installing EAS CLI..."
npm install -g @expo/eas-cli

if [ $? -eq 0 ]; then
    echo "✅ EAS CLI installed successfully"
else
    echo "❌ Failed to install EAS CLI"
    exit 1
fi

# Check if EAS CLI is installed
if ! command -v eas &> /dev/null; then
    echo "❌ EAS CLI installation failed"
    exit 1
fi

echo "🔧 Next steps:"
echo ""
echo "1. Login to Expo:"
echo "   eas login"
echo ""
echo "2. Configure your app by updating:"
echo "   - app.json (replace YOUR_TEAM_ID, your-project-id, your-expo-username)"
echo "   - eas.json (replace YOUR_TEAM_ID, your-apple-id@example.com, your-app-store-connect-app-id)"
echo ""
echo "3. Initialize EAS build configuration:"
echo "   npm run build:configure"
echo ""
echo "4. Build for TestFlight:"
echo "   npm run build:ios:production"
echo ""
echo "5. Submit to TestFlight:"
echo "   npm run submit:ios"
echo ""
echo "📚 For detailed instructions, see TESTFLIGHT_SETUP.md"
echo ""
echo "🎯 Make sure you have:"
echo "   - Apple Developer Account ($99/year)"
echo "   - Expo Account (free)"
echo "   - Your Apple Developer Team ID"
echo "   - Your App Store Connect App ID"