# Three.js 学习项目

[English](./README.md) | [简体中文](./README.zh-CN.md)

一个面向初学者的 Three.js 学习项目，包含从基础立方体渲染到复杂 3D 可视化的渐进式教程。

## 特性

- 📦 **渐进式学习路径**：5 个难度递增的实战项目
- 🎯 **核心概念覆盖**：场景、相机、渲染器、网格、光照、材质
- 🚀 **现代化工具链**：使用 Vite 构建，享受快速开发体验
- 📚 **学习指南**：包含完整的 HTML 学习规划文档

## 技术栈

- **Three.js** (v0.186.1) - 3D 渲染库
- **Vite** (v8.3.4) - 构建工具与开发服务器
- **JavaScript** (ES 模块)

## 快速开始

### 前置要求

- Node.js >= 16
- npm 或 yarn

### 安装

```bash
# 安装依赖
npm install
```

### 开发

```bash
# 启动开发服务器
npm run dev
```

打开浏览器访问：`http://localhost:5173`

### 构建

```bash
# 生产环境构建
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
three-demo/
├── src/
│   ├── main.js          # 入口文件
│   ├── style.css        # 全局样式
│   ├── counter.js       # 工具模块
│   └── assets/          # 静态资源
├── public/              # 公共静态文件
├── threejs-learning-guide/  # 学习文档
│   ├── threejs-learning-guide.html
│   ├── assets/
│   └── _shared/
├── index.html           # HTML 入口
├── package.json         # 依赖与脚本
└── vite.config.js       # Vite 配置（如存在）
```

## 学习路径

本项目遵循结构化的学习路径，包含 5 个渐进式项目：

1. **旋转立方体** - 理解场景/相机/渲染器/网格基础
2. **可交互太阳系** - 学习层级关系、动画和光照
3. **3D 产品展示页** - 掌握模型加载和 PBR 材质
4. **3D 汽车展厅** - 构建复杂交互和动画
5. **智慧城市数据看板** - 数据可视化与性能优化

详见 [学习指南](./threejs-learning-guide/threejs-learning-guide.html) 获取详细教程。

## 脚本命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 生产环境构建 |
| `npm run preview` | 预览生产构建 |

## 配置说明

无需额外配置。Vite 默认配置即可满足需求。

## 贡献指南

这是一个学习项目，欢迎：

- 报告问题
- 提出改进建议
- 提交 Pull Request

## 许可证

MIT

## 学习资源

- [Three.js 官方文档](https://threejs.org/docs/)
- [Three.js 官方示例](https://threejs.org/examples/)
- [Vite 官方文档](https://vitejs.dev/)
