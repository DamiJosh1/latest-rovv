
# ROVV – Modern Mobility Platform

A high-performance, responsive landing page for **ROVV**, built with **React**, **TypeScript**, and **Vite**. This project features a smart fleet management dashboard, driver onboarding flows, and a custom responsive modal system for app downloads.

## 🚀 Key Features

* **Responsive Modal System:** Context-aware download modals that switch between **QR Codes (Desktop)** and **Direct Links (Mobile)** based on device detection.
* **Fluid Animations:** Smooth entry and scroll-triggered animations powered by `framer-motion`.
* **Smart Fleet Management:** Interactive UI showcasing real-time GPS tracking, analytics, and vehicle management features.
* **Performance First:** Built with Vite for near-instant Hot Module Replacement (HMR) and optimized asset loading.
* **Custom Design System:** Implementation of the **Nohemi** font and a custom purple/gold brand palette.

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| **Frontend** | React 18, TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |



## 📦 Getting Started

### Prerequisites

* **Node.js** (v18 or higher)
* **npm** or **yarn**

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/DamiJosh1/original.git
cd original

```


2. **Install dependencies:**
```bash
npm install

```


3. **Start the development server:**
```bash
npm run dev

```


4. **Build for production:**
```bash
npm run build

```



---

## 🎨 Component Architecture

The project follows a modular structure where each section is a self-contained component:

* `AboutSection`: Brand storytelling with dynamic device-aware modals.
* `FleetSection`: Feature-rich grid showcasing the B2B fleet tools.
* `DriveSection`: Onboarding flow for new partners/drivers.
* `Custom Modal`: A reusable `AnimatePresence` wrapper that handles the responsive QR/Link logic.


## 📄 License

This project is private and intended for the ROVV mobility platform.


**Built with ❤️ by the DamiJosh.**

