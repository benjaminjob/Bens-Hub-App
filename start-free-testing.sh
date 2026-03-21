#!/bin/bash

echo "🆓 Starting FREE iOS Testing Options for VibeCode..."
echo ""

echo "🎯 Available FREE Testing Methods:"
echo "1. 🌐 Web App (Browser) - FULL FUNCTIONALITY"
echo "2. 📱 Local Device Testing (Expo Go) - FULL FUNCTIONALITY"
echo "3. 🚀 App Clip (iOS Devices) - CORE FUNCTIONALITY"
echo "4. 🤖 Android Testing - FULL FUNCTIONALITY"
echo ""

echo "🚀 Starting Development Server..."
echo "This will give you access to ALL free testing options!"
echo ""

# Start the development server
npm start &
SERVER_PID=$!

echo "⏳ Waiting for server to start..."
sleep 10

echo ""
echo "✅ Development Server Started!"
echo ""

echo "🌐 **WEB APP TESTING (100% FREE)**"
echo "Open your browser and go to: http://localhost:8081"
echo "This gives you FULL app functionality in the browser!"
echo ""

echo "📱 **LOCAL DEVICE TESTING (100% FREE)**"
echo "1. Install 'Expo Go' app on your iOS/Android device"
echo "2. Scan the QR code that appeared in the terminal"
echo "3. Or manually enter: exp://localhost:8081"
echo "This gives you FULL app functionality on your devices!"
echo ""

echo "🚀 **APP CLIP TESTING (100% FREE)**"
echo "When you're ready to test on any iOS device:"
echo "1. npm run build:ios:app-clip"
echo "2. This creates a lightweight version for free testing"
echo "3. No Apple Developer Program required!"
echo ""

echo "🤖 **ANDROID TESTING (100% FREE)**"
echo "If you have Android devices:"
echo "1. npm run android"
echo "2. Or: npx expo build:android --profile preview"
echo "3. Full functionality, no fees!"
echo ""

echo "💡 **PRO TIP**: Start with web testing (easiest), then move to device testing!"
echo ""

echo "🔗 **Quick Access Links**:"
echo "Web App: http://localhost:8081"
echo "Local Network: exp://localhost:8081"
echo ""

echo "📚 **For detailed instructions, see: FREE_TESTING_OPTIONS.md**"
echo ""

echo "🎉 **Total Cost: $0/year** - You can test completely for FREE!"
echo ""

# Keep the script running and show server status
echo "🔄 Server is running in the background..."
echo "Press Ctrl+C to stop the server"
echo ""

wait $SERVER_PID