# TestFlight Commands Quick Reference

## 🚀 Setup Commands

```bash
# Install EAS CLI
npm install -g @expo/eas-cli

# Login to Expo
eas login

# Configure build settings
npm run build:configure
```

## 🔨 Build Commands

```bash
# Build for internal testing
npm run build:ios:preview

# Build for TestFlight
npm run build:ios:production

# Build with specific profile
eas build --platform ios --profile [profile-name]

# Build for specific platform
eas build --platform ios
```

## 📤 Submit Commands

```bash
# Submit to TestFlight
npm run submit:ios

# Submit with specific profile
eas submit --platform ios --profile production

# Submit specific build
eas submit --platform ios --id [build-id]
```

## 📊 Build Management

```bash
# List all builds
eas build:list

# View build details
eas build:view [build-id]

# Cancel a build
eas build:cancel [build-id]

# Download build artifacts
eas build:download [build-id]
```

## 🔍 Status & Logs

```bash
# Check build status
eas build:status [build-id]

# View build logs
eas build:logs [build-id]

# Monitor build progress
eas build:monitor [build-id]
```

## ⚙️ Configuration

```bash
# Update build configuration
eas build:configure

# Validate configuration
eas build:validate

# Show current configuration
eas build:show
```

## 🧹 Cleanup

```bash
# Clear build cache
eas build:clear-cache

# Remove old builds
eas build:cleanup
```

## 📱 Device Management

```bash
# List registered devices
eas device:list

# Register new device
eas device:create

# Remove device
eas device:delete [device-id]
```

## 🚨 Troubleshooting

```bash
# Check EAS CLI version
eas --version

# Update EAS CLI
npm update -g @expo/eas-cli

# Clear EAS CLI cache
eas logout && eas login
```

## 📋 Common Workflows

### First Time Setup
```bash
npm install -g @expo/eas-cli
eas login
npm run build:configure
# Update app.json and eas.json with your values
npm run build:ios:production
npm run submit:ios
```

### Regular Updates
```bash
# Update version in app.json
npm run build:ios:production
npm run submit:ios
```

### Testing Different Builds
```bash
npm run build:ios:preview    # Internal testing
npm run build:ios:production # TestFlight
```