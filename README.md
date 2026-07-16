# 个人学术主页 (Academic Homepage)

一套纯静态、零依赖的个人学术主页，适合填写到论文投稿系统、ORCID、Google Scholar 等学术网站的 "Personal Homepage" 字段。托管在 GitHub Pages 用户站点，地址形如 `https://<username>.github.io`。

## 目录结构

```
academic-homepage/
├── index.html          # 主页（About / Research / Publications / Projects / News）
├── publications.html   # 完整发表列表
├── css/style.css       # 全站样式（改配色/字体来这里）
├── js/main.js          # 导航高亮、移动端菜单、年份（一般无需修改）
├── assets/
│   ├── avatar.jpg      # 你的头像（自行放入）
│   └── cv.pdf          # 你的简历（自行放入）
├── .nojekyll           # 关闭 GitHub Pages 的 Jekyll 处理，勿删
└── README.md           # 本文件
```

## 一、如何修改内容（不需要会前端）

所有需要填写的地方都用 `[请替换：...]` 标注了。用任意文本编辑器打开 `index.html`，搜索 `请替换`，逐处改成你的真实信息即可。

常见修改点：
- **姓名 / 职位 / 机构 / 简介**：`index.html` 顶部的 Hero 区块。
- **联系方式与外链**：Hero 里的 `hero-links` 列表。把 `mailto:you@example.com`、Google Scholar、GitHub、ORCID 等换成你的；用不到的整行 `<li>...</li>` 直接删掉。
- **研究方向**：`Research Interests` 区块的 `<li>`。
- **发表**：主页放精选（`Selected Publications`），完整列表在 `publications.html`。新增一篇就复制一个 `<li class="pub-item">...</li>` 改内容。
- **项目**：`Projects` 区块，复制 `<article class="project-card">...</article>`。
- **动态 (News)**：`News` 区块，复制一行 `<li class="news-item">...</li>`，填日期与内容。
- **头像 / CV**：把文件放到 `assets/avatar.jpg` 和 `assets/cv.pdf`（见 `assets/README-assets.txt`）。
- **网页标题 / 描述**：`index.html` 的 `<title>` 和 `<meta name="description">`。
- **配色 / 字体**：`css/style.css` 顶部的 `:root` 变量，如 `--color-accent` 改强调色。

> 页面结构用英文（学术惯例，便于国际引用），正文内容中英文都可以。

## 二、本地预览

在 `academic-homepage/` 目录下任选一种方式启动本地服务器，然后浏览器打开 `http://localhost:8000`：

```bash
# 如已安装 Python 3
python3 -m http.server 8000
```

直接双击 `index.html` 也能看，但用本地服务器更接近线上效果。

## 三、部署到 GitHub Pages（用户站点）

> 目标地址：`https://<username>.github.io`（把 `<username>` 换成你的 GitHub 用户名）。

### 步骤

1. **注册 / 登录 GitHub**：https://github.com ，记下你的用户名 `<username>`。

2. **新建仓库**：点右上角 `+` → `New repository`。
   - Repository name 必须**严格**填写为 `<username>.github.io`（例如用户名是 `alice`，就填 `alice.github.io`）。
   - 选择 **Public**（用户站点必须公开）。
   - 不要勾选 "Add a README"（避免和本项目文件冲突）。点击 `Create repository`。

3. **上传站点文件**（二选一）：

   **方式 A — 网页上传（最简单）**
   - 进入刚建好的仓库页面，点击 `uploading an existing file`（或 `Add file` → `Upload files`）。
   - 把 `academic-homepage/` 目录里的**内容**拖进去：`index.html`、`publications.html`、`css/`、`js/`、`assets/`、`.nojekyll`。
   - 注意：要上传的是这些文件本身在仓库**根目录**，不要再套一层 `academic-homepage/` 文件夹。
   - 底部点击 `Commit changes`。

   **方式 B — 命令行（Git）**
   ```bash
   cd academic-homepage
   git init
   git add .
   git commit -m "Add academic homepage"
   git branch -M main
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git push -u origin main
   ```

4. **启用 / 确认 GitHub Pages**：
   - 用户站点通常会自动开启。若未生效，进入仓库 `Settings` → 左侧 `Pages`。
   - `Source` 选 `Deploy from a branch`，Branch 选 `main`、目录 `/ (root)`，保存。

5. **访问**：等待约 1–2 分钟，打开 `https://<username>.github.io`。

### 后续更新

改完 `index.html` 等文件后重新提交即可（网页上编辑或 `git add . && git commit && git push`），几十秒后线上自动更新。

## 四、常见问题

- **打开是 404 / 白屏**：确认仓库名严格等于 `<username>.github.io`，且文件在仓库根目录（`index.html` 直接位于根，不在子文件夹里）。
- **样式没生效**：确认 `css/` 和 `js/` 目录也上传了，路径大小写与代码一致。
- **头像不显示**：把照片放到 `assets/avatar.jpg`；没放时显示空白圆形属正常。
- **想用自定义域名**（如 `www.yourname.com`）：在仓库根目录加一个名为 `CNAME` 的文件，内容写你的域名，并在域名服务商处配置 DNS。本模板默认不含该文件。

---
纯 HTML/CSS/JS，无需构建工具，长期易维护。
