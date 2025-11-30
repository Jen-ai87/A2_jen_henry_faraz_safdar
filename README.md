# Assignment 2 - Group 10

## Team Members
- **Jen Henry** - 101234567
- **Faraz Safdar** - 100775883

**Course:** COMP3074 Mobile App Development  
**Project:** React Native Currency Converter App with Expo

---

## Prerequisites

- Node.js v20+ (NOT v21)
- npm or yarn
- Expo Go app on Android phone (download from Play Store)

---

## Setup & Run

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

### 3. Run on Android

**Option A - Using Expo Go App (Recommended)**
- Open Expo Go app on your phone
- Scan the QR code displayed in terminal

**Option B - Using Android Emulator**
- Press `a` in the terminal

**Option C - Direct Command**
```bash
npm run android
```

---

## Important Notes

- This is an **EXPO project** (NOT React Native CLI)
- Expo projects **do not have** `android` or `ios` folders
- Native code is managed by Expo automatically
- Entry point is `App.tsx` (uses @react-navigation)

---

## Troubleshooting

### Node.js Version Issues
If you encounter `styleText` errors:
```bash
nvm use 20.19.4
```

### Clear Cache
```bash
npm start -- --clear
```

### Complete Reset
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

---

## Features

✅ Currency conversion with real-time exchange rates (Free Currency API)  
✅ Input validation (3-letter ISO codes, positive amounts)  
✅ Loading indicators during API calls  
✅ Comprehensive error handling (network, invalid currencies, API errors)  
✅ Stack navigation (Main & About screens)  
✅ Reusable LabeledInput component  
✅ Clean Material Design UI  
✅ Button disabled during API calls to prevent duplicate requests

---

## Project Structure

```
CurrencyConverterApp/
├── App.tsx                          # Main navigation setup
├── src/
│   ├── screens/
│   │   ├── MainScreen.tsx          # Currency converter screen
│   │   └── AboutScreen.tsx         # About/team information screen
│   └── components/
│       └── LabeledInput.tsx        # Reusable input component
├── assets/                          # App assets
├── package.json                     # Dependencies
└── README.md                        # This file
```

---

## API Configuration

The app uses Free Currency API. To use your own API key:

1. Visit https://freecurrencyapi.com/
2. Sign up for a free account
3. Get your API key
4. Update `src/screens/MainScreen.tsx` line 16:
```typescript
const API_KEY = 'YOUR_API_KEY_HERE';
```

---

## Assignment Requirements Met

- ✅ Two screens (MainScreen & AboutScreen)
- ✅ Stack navigation between screens
- ✅ Currency conversion functionality
- ✅ Input validation (3-letter ISO codes, positive amounts)
- ✅ API integration with error handling
- ✅ Loading indicators
- ✅ Button disabled during API calls
- ✅ Reusable components
- ✅ Clean UI with proper styling
- ✅ Student information displayed in AboutScreen

---

## License

This project is for educational purposes as part of COMP3074 - Mobile App Development.
