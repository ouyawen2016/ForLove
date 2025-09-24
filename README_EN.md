# ForLove Project 💕

A romantic HTML5 love animation webpage with tree growth animation, countdown timer and background music.

## Features

- 🌳 **Tree Animation**: Heart-shaped tree growth animation
- ⏰ **Countdown Timer**: Shows elapsed time from a specific date
- 🎵 **Background Music**: Auto-playing romantic background music
- ✨ **Typewriter Effect**: Love message displays character by character
- 🎨 **Canvas Animation**: Smooth HTML5 Canvas-based animation
- ⚙️ **Configurable Design**: All text and time settings can be modified via config file

## File Structure

```
forlove-project/
├── forLove.html          # Main page file
├── (Audio file to be added by user)  # Background music file
├── config.js            # Configuration file (text, time, animation parameters)
├── forLove/             # Core functionality directory
│   ├── default.css      # Page styles
│   ├── functions.js     # Countdown and typewriter effect functions
│   ├── love.js          # Tree animation core logic
│   ├── jquery.min.js    # jQuery library
│   └── jscex-*.js       # Jscex async programming library files
└── README.md            # Project documentation
```

## Core Files

- **forLove.html**: Main page with HTML structure and JavaScript animation logic
- **config.js**: Configuration file containing all customizable text, time and animation parameters
- **forLove/love.js**: Core implementation of tree animation, including Tree, Seed, Branch, Bloom classes
- **forLove/functions.js**: Countdown calculation and typewriter effect implementation
- **Audio file**: User needs to add background music file (note copyright issues)

## Usage

### Basic Usage
1. Open `forLove.html` directly in browser
2. Or deploy to web server for access

### Interactive Operations
1. **Click Heart Seed**: Click the red heart seed in the center of canvas to start animation
2. **Watch Tree Growth**: Seed will shrink and move upward, then tree starts growing
3. **Enjoy Blooming**: After tree growth, heart-shaped flowers will bloom
4. **View Countdown**: Page displays elapsed time from the set date
5. **Listen to Music**: Background music plays automatically (may require user interaction)

### Custom Configuration
Modify configuration items in `config.js` file:

#### Modify Love Message
```javascript
loveMessage: {
    lines: [
        "My dearest love, I love you",
        " ",
        "Through the seasons we've been together",
        "Every moment feels like forever",
        "In your eyes I found my home",
        "Never again will I feel alone",
        "",
        "You taught me how to love",
        "You taught me how to trust",
        "In your arms I found my peace",
        "In your heart I found my place",
        "",
        "I was afraid to say forever",
        "Scared that you might leave someday",
        "But now I'm ready to surrender",
        "To love that will never fade away",
        "",
        "Together we'll grow stronger",
        "Through sunshine and through rain",
        "My heart belongs to you forever",
        "And I'll never be the same",
        "",
        " -- With all my love, Your Beloved"
    ]
}
```

#### Modify Time Settings
```javascript
time: {
    startDate: {
        year: 2025, // Change to your anniversary date
        month: 8,  // Note: months start from 0, 8 means September
        day: 24,
        hour: 12,
        minute: 44,
        second: 5,
        millisecond: 5
    }
}
```

#### Modify Page Title and Countdown Text
```javascript
page: {
    title: "To My One and Only Love"
},
countdown: {
    prefix: "I Love You",
    suffix: "for..."
}
```

#### Adjust Animation Speed
```javascript
animation: {
    seedSleep: 10,    // Seed animation delay (milliseconds)
    growSleep: 10,    // Tree growth delay
    flowSleep: 10,    // Blooming delay
    jumpSleep: 25,    // Flower jumping delay
    textSleep: 1000   // Countdown update interval
}
```

#### Configure Background Music
```javascript
audio: {
    src: "your-music.mp3", // Replace with your music filename (note copyright issues)
    type: "audio/mpeg",
    notSupportedMessage: "Your browser does not support audio playback."
}
```
**Note**: Please ensure you use copyright-free or properly licensed music files to avoid copyright issues.

## Technology Stack

- **HTML5**: Canvas and Audio elements
- **CSS3**: Styling and animation effects
- **JavaScript**: Animation logic and interactions
- **jQuery**: DOM manipulation and event handling
- **Jscex**: Async programming library for smooth animation sequences
- **Canvas API**: 2D graphics drawing and animation


## License

This project is for learning and personal use only.
