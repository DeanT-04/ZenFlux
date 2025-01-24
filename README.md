Here's a polished README.md format incorporating all aspects of the project:

```markdown
# ZenFlux ⚡🧘

**Open-Source Workflow Automation with Zen-Simplicity and Cost Transparency**

[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg)](https://opensource.org/licenses/MIT)
[![Bun Shield](https://img.shields.io/badge/-Bun-333333?logo=bun)](https://bun.sh)

![ZenFlux Workflow Builder Mockup](https://i.imgur.com/XcBfQnS.png)

## Features ✨

**Local-First Automation**
- 🛡️ 100% local execution - your data never leaves your machine
- 🔑 Encrypted API key vault with Windows Credential Manager integration
- 📊 Real-time cost tracking for external APIs

**Enterprise-Grade Workflows**
- 🎨 Intuitive drag-and-drop interface
- 🔄 Hybrid execution (local + cloud ready)
- 📈 Token-based cost estimation (OpenAI, Stripe, etc.)

**Zen-Inspired Design**
- 🌓 Automatic light/dark mode
- 🌈 Calming yet energetic visual language
- 🧠 Intuitive node-based interface

## Installation 💻

**Prerequisites**
- Windows 10/11
- PowerShell 7+
- [Bun Runtime](https://bun.sh)

```powershell
# Clone repository
git clone https://github.com/yourusername/zenflux.git
cd zenflux

# Install dependencies
bun install

# Start development mode
bun run dev
```

## Design System 🎨

### Color Palette
#### Light Mode
| Role          | Hex       | Preview                      |
|---------------|-----------|------------------------------|
| Primary       | `#5AC8D8` | ![#5AC8D8](https://via.placeholder.com/40/5AC8D8/000000?text=+) |
| Secondary     | `#FF6B6B` | ![#FF6B6B](https://via.placeholder.com/40/FF6B6B/000000?text=+) |
| Background    | `#F9FBFD` | ![#F9FBFD](https://via.placeholder.com/40/F9FBFD/000000?text=+) |
| Accent        | `#A66EFA` | ![#A66EFA](https://via.placeholder.com/40/A66EFA/000000?text=+) |

#### Dark Mode
| Role          | Hex       | Preview                      |
|---------------|-----------|------------------------------|
| Primary       | `#4ECDC4` | ![#4ECDC4](https://via.placeholder.com/40/4ECDC4/000000?text=+) |
| Secondary     | `#FF7E67` | ![#FF7E67](https://via.placeholder.com/40/FF7E67/000000?text=+) |
| Background    | `#1A1E26` | ![#1A1E26](https://via.placeholder.com/40/1A1E26/000000?text=+) |
| Accent        | `#9D7AFF` | ![#9D7AFF](https://via.placeholder.com/40/9D7AFF/000000?text=+) 

## Architecture 📐
```mermaid
graph TD
    A[UI] -->|HTTP| B[Core Engine]
    B -->|Proxy| C[External APIs]
    B --> D[(Local SQLite)]
    A --> E[Workflow Builder]
    E --> F[React Flow]
    D -.-> G[Encrypted Keys]
    D -.-> H[Execution Logs]
```

## Roadmap 🗺️
| Status  | Feature                  | Description                          |
|---------|--------------------------|--------------------------------------|
| ✅ Done | Core Proxy Engine        | API routing with cost tracking       |
| 🚧 WIP  | Workflow Builder UI      | Drag-and-drop interface              |
| ⏳ Next | API Key Vault            | Secure credential storage            |
| 🔜 Soon | Hybrid Execution         | Local + cloud task distribution      |

## Contributing 🤝
We welcome contributions aligned with our design principles:
1. Follow the [ZenFlux Color System](#design-system)
2. Maintain 100% local execution for core features
3. Prioritize transparency in API cost calculations

**Tech Stack**
- Frontend: React + TypeScript + React Flow
- Backend: Bun + Express + SQLite
- Tooling: Vite + PowerShell scripts (give functionality to macos and linux in the future)

## License 📄
MIT License - See [LICENSE](LICENSE) for details

---

**Breathe easy while building automations**  
"Simplicity is the ultimate sophistication" - Adapted from da Vinci


