#!/bin/bash

echo "🚀 Deploying VibeCode to Public Hosting..."
echo ""

# Check if we have the web build
if [ ! -d "dist" ]; then
    echo "❌ Web build not found. Building first..."
    npx expo export --platform web
fi

echo "✅ Web build ready in dist/ folder"
echo ""

echo "🌐 Creating public deployment..."
echo ""

# Create a simple server configuration
cat > dist/server.js << 'EOF'
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 VibeCode app running on port ${PORT}`);
    console.log(`🌐 Access your app at: http://localhost:${PORT}`);
    console.log(`📱 Works on any device with internet access!`);
});
EOF

# Create package.json for the server
cat > dist/package.json << 'EOF'
{
  "name": "vibecode-public",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
EOF

echo "📦 Installing server dependencies..."
cd dist && npm install --legacy-peer-deps

echo ""
echo "🎉 Public deployment ready!"
echo ""
echo "🌐 **Local Testing**:"
echo "   cd dist && npm start"
echo "   Then open: http://localhost:3000"
echo ""
echo "🚀 **Public Deployment Options**:"
echo "1. **Vercel (Recommended)**: npx vercel --prod"
echo "2. **Netlify**: npx netlify deploy --prod"
echo "3. **GitHub Pages**: Push to GitHub and enable Pages"
echo "4. **Heroku**: git push heroku main"
echo ""
echo "💡 **Quick Public Deploy**:"
echo "   cd dist && npx vercel --prod"
echo "   This will give you a public URL instantly!"
echo ""

cd ..