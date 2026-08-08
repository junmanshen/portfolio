# 沈君蔓 Junman Shen · 个人品牌官网

「用新闻人的深度，讲述数据驱动的增长故事」——一份可交互的顶级商业计划书。

## 技术栈

- **React 18** + **Vite 5**（构建与代码分割）
- **Tailwind CSS 3**（设计系统 token 化）
- **Framer Motion 11**（滚动视差、交错浮现、逐字入场）

## 快速开始

```bash
npm install
npm run dev              # 本地开发 http://localhost:5173
npm run build            # 生产构建，输出到 dist/
npm run build:standalone # 单文件构建，输出到 standalone/index.html
npm run preview          # 预览构建产物
```

## 如何打开网站（重要）

**不要直接双击根目录的 `index.html` 或 `dist/index.html`** —— 都会是白板：

- 根目录 `index.html` 是开发模板，引用未编译的 `/src/main.jsx`，浏览器不认识 JSX 语法
- `dist/index.html` 的资源带 `crossorigin` + `type="module"`，在 `file://` 协议下会被 CORS 策略拦截

正确的三种方式：

| 方式 | 命令 / 操作 | 适用场景 |
| --- | --- | --- |
| **单文件版（最省事）** | `npm run build:standalone`，双击 `standalone/index.html` | 本地查看、发给别人、当附件投递 |
| 本地服务 | `npm run build && npm run preview` | 开发联调 |
| 静态托管 | 上传 `dist/` 到 Vercel / Netlify 等 | 正式上线 |

单文件版把 JS 与 CSS 全部内联进一个 HTML（约 350 KB），不依赖任何服务，双击即开。

## 目录结构

```
src/
├── App.jsx                 # 应用装配 + 懒加载分片
├── main.jsx                # 入口
├── index.css               # 设计系统基础层（毛玻璃、夜光蓝、数据字号）
├── data/content.js         # ★ 所有文案与数据集中在此
├── hooks/index.js          # 主题、视口、滚动、指针视差
└── components/
    ├── Loader.jsx          # 加载进度条
    ├── Navigation.jsx      # 毛玻璃导航 + 主题切换 + 滚动进度
    ├── Hero.jsx            # 首屏：动态几何渐变 + 鼠标反向视差
    ├── About.jsx           # 教育时间轴 + 技能环形仪表盘
    ├── CaseStudies.jsx     # 三段核心案例（商业故事结构）
    ├── Research.jsx        # 科研经历
    ├── Portfolio.jsx       # 上线作品 + 腾讯直达 CTA
    ├── Contact.jsx         # 联系与页脚
    ├── AbstractVisual.jsx  # Canvas 生成磨砂玻璃抽象色块
    ├── TiltCard.jsx        # 3D 倾斜 + 上浮阴影
    ├── CountUp.jsx         # 滚动触发数字计数
    └── Section.jsx         # 章节容器与标题原子组件
```

## 需要你替换的内容

所有可替换项都集中在 `src/data/content.js`，改这一个文件即可：

| 项目 | 位置 | 当前值 |
| --- | --- | --- |
| 腾讯作品链接 | `TENCENT_WORK_URL` | `https://www.tencent.com` → 换成腾讯 App 内具体作品 URL |
| 领英 / 小红书 | `CONTACT.socials[].href` | `#` → 换成真实主页地址 |
| 案例数据与文案 | `CASES` | SHEIN、媒体两段的量化数据为占位估值，请按真实数据核对 |
| 科研内容 | `RESEARCH` | 按实际课题与论文方向替换 |
| 占位图 | `PLACEHOLDER_IMAGES` | Unsplash 商业图 → 换成项目实拍截图 |

案例卡片中的抽象色块由 Canvas 生成，带 `[ Image Placeholder ]` 水印。拿到真实主视觉后，把 `AbstractVisual` 换成 `<img>` 即可。

## 设计系统

| Token | 值 | 用途 |
| --- | --- | --- |
| `navy-900` | `#0A192F` | 主色·学术深邃蓝 |
| `navy-800` | `#112240` | 深色模式卡片底 |
| `paper` | `#F7F9FC` | 极简白背景 |
| `mist` | `#E6EEF5` | 浅灰蓝 / 深色模式文字 |
| `amber` | `#C9A96E` | 强调色·琥珀金（仅用于数字与 CTA） |
| `tangerine` | `#FF6B35` | 渐变辅助强调 |
| `glow` | `#64D2FF` | 深色模式荧幕夜光蓝 |

字体：标题 Playfair Display（衬线，`letter-spacing: 0.05em`），正文 Inter / SF Pro Display。

## 性能与可访问性

- 首屏之外的板块通过 `React.lazy` 按需加载，首包 JS gzip 后约 96 KB
- 图片全部 `loading="lazy"` + `decoding="async"`，并声明 `width`/`height` 避免布局抖动
- 依赖分片：`react` / `framer-motion` 独立 chunk，利于长期缓存
- 尊重 `prefers-reduced-motion`：开启后关闭全部动效与平滑滚动
- 触屏设备自动关闭 3D 倾斜与指针视差，避免误触

## 部署

`npm run build` 后将 `dist/` 目录上传到任意静态托管（Vercel / Netlify / EdgeOne / GitHub Pages 均可）。`vite.config.js` 中 `base: './'` 已配置为相对路径，可直接放在子目录下。
