# ForLove 项目 💕

抽取当年写在个人博客里的彩蛋，
一些炫技，Nerd的浪漫和对纯情过往的纪念(主要是代码层面的)
祝群友们都有纯爱可谈。

## 项目特点

- 🌳 **树形动画**：爱心形状的树形生长动画效果
- ⏰ **倒计时功能**：显示从特定日期开始的累计时间
- 🎵 **背景音乐**：自动播放的浪漫背景音乐
- ✨ **打字机效果**：爱情宣言逐字显示效果
- 🎨 **Canvas动画**：基于HTML5 Canvas的流畅动画
- ⚙️ **配置化设计**：所有文本和时间都可通过配置文件修改

## 文件结构

```
forlove-project/
├── index.html            # 主页面文件（GitHub Pages入口）
├── (音频文件需用户自行添加)  # 背景音乐文件
├── config.js            # 配置文件（文本、时间、动画参数）
├── forLove/             # 核心功能目录
│   ├── default.css      # 页面样式
│   ├── functions.js     # 倒计时和打字机效果函数
│   ├── love.js          # 树形动画核心逻辑
│   ├── jquery.min.js    # jQuery库
│   └── jscex-*.js       # Jscex异步编程库文件
└── README.md            # 项目说明文档
```

## 核心文件说明

- **index.html**: 主页面，包含HTML结构和JavaScript动画逻辑
- **config.js**: 配置文件，包含所有可自定义的文本、时间和动画参数
- **forLove/love.js**: 树形动画的核心实现，包含Tree、Seed、Branch、Bloom等类
- **forLove/functions.js**: 倒计时计算和打字机效果实现
- **音频文件**: 用户需自行添加背景音乐文件（注意版权问题）

## 使用方法

### 基本使用
1. 直接在浏览器中打开 `index.html` 文件
2. 或者部署到Web服务器上访问

### 交互操作
1. **点击爱心种子**：点击画布中央的红色爱心种子开始动画
2. **观看树生长**：种子会逐渐缩小并向上移动，然后树开始生长
3. **欣赏开花效果**：树生长完成后会开出爱心形状的花朵
4. **查看倒计时**：页面会显示从设定日期开始的累计时间
5. **聆听音乐**：背景音乐会自动播放（可能需要用户交互）

### 自定义配置
修改 `config.js` 文件中的配置项：

#### 修改爱情宣言
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

#### 修改时间设置
月份是历史遗留问题，懒得改了，反正是hardcode的
```javascript
time: {
    startDate: {
        year: 2025, //项目的提交时间 把它改成你们的纪念日
        month: 8,  // 注意：JavaScript中月份从0开始，3表示4月 历史遗留问题 懒得改了
        day: 24,
        hour: 12,
        minute: 44,
        second: 5,
        millisecond: 5
    }
}
```

#### 修改页面标题和倒计时文本
forLove.html里的也要改 
```javascript
page: {
    title: "To My One and Only Love"
},
countdown: {
    prefix: "I Love You",
    suffix: "for..."
}
```

#### 调整动画速度
```javascript
animation: {
    seedSleep: 10,    // 种子动画延迟（毫秒）
    growSleep: 10,    // 树生长延迟
    flowSleep: 10,    // 开花延迟
    jumpSleep: 25,    // 花朵跳跃延迟
    textSleep: 1000   // 倒计时更新间隔
}
```

#### 配置背景音乐
```javascript
audio: {
    src: "your-music.mp3", // 替换为你的音乐文件名（注意版权问题）
    type: "audio/mpeg",
    notSupportedMessage: "您的浏览器不支持音频播放。"
}
```
**注意**: 请确保使用无版权或已获得授权的音乐文件，避免版权纠纷。

## 技术栈

- **HTML5**: Canvas画布、Audio音频
- **CSS3**: 样式和动画效果
- **JavaScript**: 动画逻辑和交互
- **jQuery**: DOM操作和事件处理
- **Jscex**: 异步编程库，用于流畅的动画序列
- **Canvas API**: 2D图形绘制和动画
