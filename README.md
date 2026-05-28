# SecureAgri Impex

A premium, elegant, and fully responsive export business website for **SecureAgri Impex** built with **React (Vite)** and **Vanilla CSS**. Features English and Tamil localization, multi-currency converter, automated PDF brochure downloader, printable registration certificates, simulated live chat assistant, and floating WhatsApp support.

## 🚀 Features

*   **Bilingual Localization**: Seamlessly translate the site between **English** and **Tamil** (`தமிழ்`) dynamically.
*   **Currency Converter**: Convert pricing metrics on the fly between **USD, EUR, INR, AED, and SGD**.
*   **Interactive Sourcing Map**: Explore shipping corridors, transit times, and logistics gateways dynamically.
*   **Automated PDF Spec Sheets**: Instantly download professional PDF brochures for catalog products.
*   **Simulated Live Chat**: Automated representative support answering common buyer questions.
*   **Floating WhatsApp Widget**: Segmented department hotlines (Sales, Logistics, Custom Documentations).
*   **SEO Optimized**: Configured with high-volume search keywords: *Indian spice exporter*, *Rice exporter from India*, and *Wholesale garment exporter*.

## 🛠️ Project Structure

```
Export Business/
├── Client/                 # React Frontend
│   ├── public/             # Static local assets (generated images)
│   ├── src/
│   │   ├── components/     # Shared layout elements (Navbar, Footer, Widgets)
│   │   ├── context/        # AppContext (Currency/Language states)
│   │   ├── data/           # Product specs & Translation dictionary
│   │   ├── pages/          # Home, About, Products, Certifications, Contact, Policies
│   │   └── App.jsx         # App router configuration
└── run-website.bat         # One-click Windows runner script
```

## ⚙️ How to Run Locally

1. Ensure **Node.js** (v18+) is installed.
2. In the root directory, simply double-click the **`run-website.bat`** file.
3. Open **`http://localhost:5174/`** in your browser.
