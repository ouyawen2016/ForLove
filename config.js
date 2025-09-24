// 配置文件 - 抽取了所有hardcode的文本和时间设置
// 注意：HTML中的默认值会作为fallback，JavaScript加载后会同步配置
var CONFIG = {
    // 页面基本信息
    page: {
        title: "To My One and Only Love",
        charset: "UTF-8",
        errorMessage: "本页面采用HTML5编辑，目前您的浏览器无法显示，请换成谷歌(<a href=\"http://www.google.cn/chrome/intl/zh-CN/landing_chrome.html?hl=zh-CN&brand=CHMI\">Chrome</a>)或者火狐(<a href=\"http://firefox.com.cn/download/\">Firefox</a>)浏览器，或者其他游览器的最新版本。"
    },
    
    // 爱情宣言文本 把loveMessage.lines中的内容改成你们的爱情宣言
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
    },
    
    // 倒计时相关文本
    countdown: {
        prefix: "I Love You",
        suffix: "for..."
    },
    
    // 时间设置
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
    },
    
    // 音频设置 替换为你自己的背景音乐文件（注意版权问题）
    audio: {
        src: "", // 留空以避免版权问题，用户可自行添加音乐文件
        type: "audio/mpeg",
        notSupportedMessage: "您的浏览器不支持音频播放。"
    },
    
    // 画布设置
    canvas: {
        width: 1100,
        height: 680
    },
    
    // 树动画设置
    tree: {
        seed: {
            x: 550,  // 会在JavaScript中计算为 width/2 - 20
            color: "rgb(190, 26, 37)",
            scale: 2
        },
        branch: [
            [535, 680, 570, 250, 500, 200, 30, 100, [
                [540, 500, 455, 417, 340, 400, 13, 100, [
                    [450, 435, 434, 430, 394, 395, 2, 40]
                ]],
                [550, 445, 600, 356, 680, 345, 12, 100, [
                    [578, 400, 648, 409, 661, 426, 3, 80]
                ]],
                [539, 281, 537, 248, 534, 217, 3, 40],
                [546, 397, 413, 247, 328, 244, 9, 80, [
                    [427, 286, 383, 253, 371, 205, 2, 40],
                    [498, 345, 435, 315, 395, 330, 4, 60]
                ]],
                [546, 357, 608, 252, 678, 221, 6, 100, [
                    [590, 293, 646, 277, 648, 271, 2, 80]
                ]]
            ]]
        ],
        bloom: {
            num: 700,
            width: 1080,
            height: 650
        },
        footer: {
            width: 1200,
            height: 5,
            speed: 10
        }
    },
    
    // 动画设置
    animation: {
        seedSleep: 10,
        growSleep: 10,
        flowSleep: 10,
        moveSleep: 10,
        jumpSleep: 25,
        textSleep: 1000
    }
};
