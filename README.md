# 📜 Habit Tracker App - Project Documentation 📜

## 🔷 Introduction

This is the front-end part of the Habit Tracker application, built with React.

It is responsible for the user interface, allowing interaction with the backend API to manage habits, register users, and visualize progress.

## 🔷 Technologies Used

The project was built using the following technologies:

### 🔹 Core Libraries

**React**: The main library for building the user interface.

**React DOM**: Responsible for rendering components to the DOM.

**React Router DOM**: For managing navigation between the application's pages.

**Axios**: An HTTP client for making requests to the backend API.

**React Toastify**: For displaying notifications and feedback messages to the user.

**Recharts**: For creating interactive charts on the dashboard.

**ESLint and Prettier**: Tools for maintaining code consistency and quality.

## 🔷 Project Setup

To set up and run the project locally, follow the steps below.

### 1. Install Dependencies

First, navigate to the project's root folder (where the package.json file is located) and install all the necessary dependencies using the Node Package Manager (NPM):

```
npm install
```

### 2. Start the Development Server

After installing the dependencies, you can start the React development server. Run the following command in the terminal:

```
npm start
```

This command will start the application on a local server, usually at **http://localhost:3000**, and will automatically open it in your default browser.

Your **package.json** file already has a proxy configuration that directs all application requests to your backend, running on **http://127.0.0.1:5000**.

Make sure your backend is active and running before starting the frontend for everything to work correctly.

## 🔷 Execution Scripts

Here are the scripts available in your package.json and what they do:

- **npm start**: Starts the development server.

- **npm run build**: Creates an optimized version of the application for production.

- **npm test**: Runs the unit tests configured in the project.

- **npm run eject**: Removes the react-scripts dependency and copies all configurations into your project, giving you full control over them.

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature.

## 🔷 Project's Structure

```
src/
 └── components/
      ├── ui/          # Base UI components (atomics)
      │    ├── Button.jsx
      │    ├── Input.jsx
      │    ├── Checkbox.jsx
      │    ├── Select.jsx
      │    ├── Card.jsx
      │    ├── Modal.jsx
      │    ├── Loader.jsx
      │    └── Alert.jsx
      │
      ├── layout/      # Layouts and wrappers
      │    ├── Navbar.jsx
      │    ├── Sidebar.jsx
      │    └── AuthLayout.jsx
      │
      └── composite/   # More complex componentes (UI-based)
           ├── AuthForm.jsx
           ├── HabitCard.jsx
           ├── StatsCard.jsx
           ├── ChartCard.jsx
           └── ProfileForm.jsx
```

## Tailwind CSS Configuration

This section explains the custom Tailwind CSS configuration of the project, including colors, spacing, typography, borders, shadows, and dark mode.

_OBS: Tailwind CSS was used in this project for a consistent Design System._

### 1️⃣ Dark Mode

- darkMode: "class"

Enables dark mode via a CSS class.

To activate dark mode, you wrap your app or section with the dark class:

```
<div class="dark:bg-background-dark">
  Dark mode background example
</div>
```

### 2️⃣ Content

- content: ["./src/**/*.{js,jsx,ts,tsx}"]

Tells Tailwind which files to scan for class names.

Ensures unused styles are purged in production.

In this case, all React source files (.js, .jsx, .ts, .tsx) in src/ are included.

### 3️⃣ Theme Extension (theme.extend)

#### 3.1 Colors

Custom colors for the project. They can be used like:

```
bg-red-primary → background red primary

hover:bg-blue-hover → hover effect

text-basic-gray600 → text color
```

##### Structure:

```
colors: {
red: { primary: "#d31c29", hover: "#931720" },
green: { primary: "#34c759", hover: "#45c565" },
orange: { primary: "#e56e27", hover: "#8e4318" },
yellow: { primary: "#fce401", hover: "#d3c018" },
blue: { primary: "#00bfe3", hover: "#139eb9" },
aqua: { primary: "#04b8b1", hover: "#149b97" },
basic: {
white: "#eae7e7",
black: "#141414",
gray100: "#f5f5f5",
gray300: "#e0e0e0",
gray600: "#757575",
},
background: {
default: "#e3dbdb",
light: "#f4f4f4",
dark: "#474545",
},
shadow: { DEFAULT: "rgba(0, 0, 0, 0.1)" },
}
```

#### 3.2 Spacing

Defines spacing scale for margin, padding, width, height, gap, etc.

```
spacing: {
0: "0px",
1: "8px",
2: "16px",
3: "24px",
4: "32px",
5: "40px",
6: "48px",
7: "56px",
8: "64px",
9: "72px",
10: "80px",
}
```

Use as p-1, m-3, gap-4, w-8, h-6.

padding and margin can reference the same values automatically.

#### 3.3 Font Sizes

Defines text sizes:

```
fontSize: {
xs: '12px',
sm: '14px',
base: '16px',
lg: '18px',
xl: '20px',
'2xl': '24px',
'3xl': '30px',
'4xl': '36px',
'5xl': '48px',
'6xl': '60px',
}
```

Classes: text-xs, text-base, text-3xl, etc.

Helps keep typography consistent across the project.

#### 3.4 Font Weights

Custom font weights:

```
fontWeight: {
light: '300',
normal: '400',
medium: '500',
semibold: '600',
bold: '700',
extraBold: '800',
}
```

Classes: font-light, font-medium, font-bold, font-extraBold

Enables fine control over text emphasis.

#### 3.5 Border Radius

Defines rounded corners:

```
borderRadius: {
none: "0",
sm: "4px",
DEFAULT: "8px",
md: "12px",
lg: "16px",
xl: "24px",
full: "9999px",
}
```

Classes: rounded, rounded-md, rounded-full

Consistency in UI shapes.

#### 3.6 Box Shadows

Custom shadows for cards, buttons, etc.:

```
boxShadow: {
sm: "0 1px 2px rgba(0,0,0,0.05)",
md: "0 4px 6px rgba(0,0,0,0.1)",
lg: "0 10px 15px rgba(0,0,0,0.15)",
}
```

Classes: shadow-sm, shadow-md, shadow-lg

Helps elevate UI elements visually.

### 4️⃣ How to Use Example

```
<div className="bg-red-primary hover:bg-red-hover text-basic-white p-4 rounded-md shadow-md">
  Example Card
</div>

<h1 className="text-4xl font-bold text-blue-primary">
  Heading Example
</h1>

<button className="bg-green-primary hover:bg-green-hover text-basic-white py-2 px-6 rounded-lg shadow-md">
  Save
</button>
```

Colors, spacing, font sizes, weights, and shadows are all reusable via classes.

Hover effects are included (hover:bg-\*).

### 5️⃣ Dark Mode Example

```
<div className="dark:bg-background-dark dark:text-basic-white p-6 rounded-lg shadow-lg">
  Dark Mode Card
</div>
```

Toggle dark mode by adding the dark class to a parent element:

```
<body class="dark">
  ...
</body>
```

### 6️⃣ Summary

This Tailwind configuration provides a complete design system foundation:

- ✅ Colors: primary, hover, background, neutral

- ✅ Spacing: padding, margin, gaps

- ✅ Typography: font sizes and weights

- ✅ Borders: radius options

- ✅ Shadows: elevation options

- ✅ Dark mode support

- ✅ Hover states and interactive UI styles

It ensures consistency across all components and makes development faster and more maintainable.
