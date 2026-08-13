# Shorter Better JS Model

> A lightweight JavaScript utility library for modern development. New useful functions, cleaner syntax, better productivity.

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/rskyer/shorterBetter)
[![Platform](https://img.shields.io/badge/platform-JavaScript%20%7C%20Node.js%20%7C%20Next.js-brightgreen)](https://github.com/rskyer/shorterBetter)

## ✨ Features

- 🚀 **Simple & Intuitive** - Write less, do more
- 📦 **Lightweight** - Zero unnecessary dependencies
- 🔧 **Universal** - Works in Browser, Node.js, and Next.js
- 🎯 **Useful Utilities** - Practical functions for daily coding

---

## 📦 Installation & Setup

### Normal JavaScript HTML
> Easy and Best way:
> put this code before </body> or your <script> 
```HTML
<script src="https://rskyer.github.io/shorterBetter/version/latest.js"></script>
```
### NodeJS or NextJS
**Install jsdom:**

```bash
npm install jsdom
```

**Configure package.json:**

```bash
echo '{"type":"module"}' > package.json
```

---

## 🚀 Quick Start (Node.js)

**Create `main.js`:**

```javascript
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

import './model.js';

// Use the utilities!
const elements = getElementsById('id1', 'id2');
console.log('Elements:', elements);

clog("Hello from Node.js!", "green");
consoleLog("Test");
```

---

## 📚 Documentation

Full documentation and examples:  
👉 **[How to Use Guide](https://rskyer.github.io/shorterBetter/docs/how-to-use.html)**

---

## 📋 Version

**Current:** `V1.0.0` (Latest)

---

## 🛠️ Platforms

- ✅ JavaScript (Browser)
- ✅ Node.js
- ✅ Next.js

---

## 👨‍💻 Author

**Skyer** - *Better Life, Better Code*

---

## 📄 License

MIT © Skyer

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**⭐ Star this repo if you find it useful!**