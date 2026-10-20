# Three.js Demo

[English](./README.md) | [简体中文](./README.zh-CN.md)

A Three.js learning project for beginners, featuring progressive tutorials from basic cube rendering to complex 3D visualization.

## Features

- 📦 **Progressive Learning Path**: 5 hands-on projects with increasing complexity
- 🎯 **Core Concepts Coverage**: Scene, Camera, Renderer, Mesh, Lighting, Materials
- 🚀 **Modern Tooling**: Built with Vite for fast development experience
- 📚 **Learning Guide**: Comprehensive HTML learning plan included

## Tech Stack

- **Three.js** (v0.186.1) - 3D rendering library
- **Vite** (v8.3.4) - Build tool and dev server
- **JavaScript** (ES Modules)

## Quick Start

### Prerequisites

- Node.js >= 16
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start dev server
npm run dev
```

Open your browser and visit: `http://localhost:5173`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
three-demo/
├── src/
│   ├── main.js          # Entry point
│   ├── style.css        # Global styles
│   ├── counter.js       # Utility module
│   └── assets/          # Static assets
├── public/              # Public static files
├── threejs-learning-guide/  # Learning documentation
│   ├── threejs-learning-guide.html
│   ├── assets/
│   └── _shared/
├── index.html           # HTML entry
├── package.json         # Dependencies & scripts
└── vite.config.js       # Vite configuration (if exists)
```

## Learning Path

This project follows a structured learning path with 5 progressive projects:

1. **Rotating Cube** - Understand Scene/Camera/Renderer/Mesh basics
2. **Interactive Solar System** - Learn hierarchy, animation, and lighting
3. **3D Product Showcase** - Master model loading and PBR materials
4. **3D Car Showroom** - Build complex interactions and animations
5. **Smart City Dashboard** - Data visualization and performance optimization

See the [Learning Guide](./threejs-learning-guide/threejs-learning-guide.html) for detailed tutorials.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Configuration

No additional configuration required. Vite defaults work out of the box.

## Contributing

This is a learning project. Feel free to:

- Report issues
- Suggest improvements
- Submit pull requests

## License

MIT

## Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [Three.js Examples](https://threejs.org/examples/)
- [Vite Documentation](https://vitejs.dev/)
