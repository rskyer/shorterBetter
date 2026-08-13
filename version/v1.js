/* This code IS THE shorterBeter.js ver. 1.0 
## Made by Skyer
## Do not edit , just add
 ---- May be you have good idea: T.me/realSkyer -----
*/

const getElementsById = (...ids) => ids.map(id => document.getElementById(id));
let LETgetElementsById = (...ids) => ids.map(id => document.getElementById(id));
var VARgetElementsById = (...ids) => ids.map(id => document.getElementById(id));

function clog(...text) {
    console.log(...text)
}
function consoleLog(...text) {
    clog(...text)
}
function cLog(...text) {
    clog(...text)
}
function cerr(...text) {
    console.error(...text)
}
function cErr(...text) {
    cerr(...text)
}
function textContent(id, ...text) {
    try {
        id.textContent = text
        
    } catch(error) {
        cerr("Cannot find ", id)
    }
}
function colorConsoleLog(...args) {
    let color = 'default';
    let text = args;
    
    const lastArg = args[args.length - 1];
    if (typeof lastArg === 'string') {
        const colorName = lastArg.toLowerCase();
        const colorNames = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 
                'black', 'gray', 'grey', 'darkred', 'darkgreen', 'darkyellow',
                'darkblue', 'darkmagenta', 'darkcyan', 'darkwhite', 'orange',
                'pink', 'purple', 'brown', 'lime', 'olive', 'teal', 'navy',
                'maroon', 'fuchsia', 'aqua', 'silver', 'gold', 'coral',
                'indigo', 'violet', 'turquoise', 'salmon', 'plum', 'orchid',
                'chocolate', 'crimson', 'firebrick', 'forestgreen', 'goldenrod',
                'lawngreen', 'mediumblue', 'mediumorchid', 'mediumpurple',
                'midnightblue', 'royalblue', 'sandybrown', 'seagreen',
                'slateblue', 'springgreen', 'steelblue', 'tomato',
                'brightred', 'brightgreen', 'brightyellow', 'brightblue',
                'brightmagenta', 'brightcyan', 'brightwhite'];
        
        if (colorNames.includes(colorName) || lastArg.startsWith('#')) {
            color = colorName;
            text = args.slice(0, -1);
        }
    }
    
    const colors = {
        'black': '\x1b[30m', 'red': '\x1b[31m', 'green': '\x1b[32m',
        'yellow': '\x1b[33m', 'blue': '\x1b[34m', 'magenta': '\x1b[35m',
        'cyan': '\x1b[36m', 'white': '\x1b[37m', 'gray': '\x1b[90m',
        'grey': '\x1b[90m', 'brightred': '\x1b[91m', 'brightgreen': '\x1b[92m',
        'brightyellow': '\x1b[93m', 'brightblue': '\x1b[94m', 'brightmagenta': '\x1b[95m',
        'brightcyan': '\x1b[96m', 'brightwhite': '\x1b[97m', 'darkred': '\x1b[31m',
        'darkgreen': '\x1b[32m', 'darkyellow': '\x1b[33m', 'darkblue': '\x1b[34m',
        'darkmagenta': '\x1b[35m', 'darkcyan': '\x1b[36m', 'darkwhite': '\x1b[37m',
        'orange': '\x1b[38;5;214m', 'pink': '\x1b[38;5;206m', 'purple': '\x1b[38;5;129m',
        'brown': '\x1b[38;5;130m', 'lime': '\x1b[38;5;118m', 'olive': '\x1b[38;5;148m',
        'teal': '\x1b[38;5;30m', 'navy': '\x1b[38;5;18m', 'maroon': '\x1b[38;5;52m',
        'fuchsia': '\x1b[38;5;201m', 'aqua': '\x1b[38;5;51m', 'silver': '\x1b[38;5;249m',
        'gold': '\x1b[38;5;220m', 'coral': '\x1b[38;5;209m', 'indigo': '\x1b[38;5;54m',
        'violet': '\x1b[38;5;135m', 'turquoise': '\x1b[38;5;45m', 'salmon': '\x1b[38;5;210m',
        'plum': '\x1b[38;5;219m', 'orchid': '\x1b[38;5;170m', 'chocolate': '\x1b[38;5;88m',
        'crimson': '\x1b[38;5;160m', 'firebrick': '\x1b[38;5;124m', 'forestgreen': '\x1b[38;5;28m',
        'goldenrod': '\x1b[38;5;178m', 'lawngreen': '\x1b[38;5;118m', 'mediumblue': '\x1b[38;5;20m',
        'mediumorchid': '\x1b[38;5;134m', 'mediumpurple': '\x1b[38;5;104m', 'midnightblue': '\x1b[38;5;17m',
        'royalblue': '\x1b[38;5;62m', 'sandybrown': '\x1b[38;5;208m', 'seagreen': '\x1b[38;5;29m',
        'slateblue': '\x1b[38;5;61m', 'springgreen': '\x1b[38;5;47m', 'steelblue': '\x1b[38;5;67m',
        'tomato': '\x1b[38;5;203m'
    };
    
    const colorCode = colors[color] || '\x1b[0m';
    const resetCode = '\x1b[0m';
    const boldCode = '\x1b[1m';
    
    console.log(`${boldCode}${colorCode}${text.join(' ')}${resetCode}`);
}



function cclog(...args) {
    colorConsoleLog(...args);
}
function colorClog(...args) {
    cclog(...args)
}
// for python lovers:
function print(...text) {
    console.log(...text)
}
function color_print(...args) {
    cclog(...args)
}
class Proccess {
    static exit() {
        try {
            if (typeof process !== 'undefined' && process.exit) {
                process.exit();
                clog("SUCCESS");
            }
        } catch(e) {
        }
        clog(`EXIT SUCCESS! `);
    }
}

const proccess = Proccess;
// for pascal lovers:
function begin() {
    cclog("◆ Code started", "green");
    
}
function end() {
    cclog("◇ Code ended", "green");
    proccess.exit()
    
}
function write(...text) {
    clog(...text)
}
function writeLn(...text) {
    clog(...text)
}
function reWrite(...text) {
    return text
}
function coloredWriteLn(...args) {
    cclog(...args)
}
// end of pascal 




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function pick(arr) {
    return arr[rand(0, arr.length - 1)];
}

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function unique(arr) {
    return [...new Set(arr)];
}

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function average(arr) {
    return sum(arr) / arr.length;
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function randomBool() {
    var boolean
    var randomMe = rand(0, 1)
    if (randomMe == 1) {
        boolean = true
    } else if (randomMe == 0) {
        boolean = false
    }
    return boolean
}