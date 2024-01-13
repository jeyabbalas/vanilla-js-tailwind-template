# Vanilla JS + Tailwind CSS template
A minimalist example template for an ES6 library built with vanilla JS, and an associated demo website, styled using Tailwind CSS (without compilation).

## Step 1: Setup a remote repository and communication with a cloned local repository
1. Create a new repository on GitHub.
2. Clone the repository to your local machine.

## Step 2: Setup directory for a Vanilla JS - Tailwind CSS project
1. Create an `index.html` file in the root directory with a template HTML.
2. Import the Tailwind CSS stylesheet in the `<head>` of the `index.html` file.
```html
<head>
    <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css">
</head>
```
3. Insert a `<div>` tag with the `id` attribute set to `app` into the `<body>` of the `index.html` file. Use this `<div>` tag to mount the app.
```html
<body>
    <div id="app"></div>
</body>
```
4. Create a `library.js` file in the root of the directory. There may be multiple such library files, and can also be placed within a directory structure. 
5. Create `index.js` file to import all the ES6 modules from the library files and export them as a single module. This is the entry point of the library.
6. Create `app.js` in the root of the directory. This is the entry point of the web app. Import `index.js` (either locally or through a CDN where it is hosted) into `app.js` and use the exported functions to render the app.
```javascript
import { test } from './index.js';
```
7. Load `app.js` in the `<body>` of the `index.html` file.
```html
<body>
    <div id="app"></div>
    <script src="app.js"></script>
</body>
```

## Step 3: Deploy in GitHub Pages
1. On GitHub, navigate to the site's repository. Settings > Pages > Build and deployment > Source > select `Deploy from a branch`. Then Branch > select `main` branch and `/root` folder > Save.
2. The website is live at `https://<username>.github.io/<repository-name>/`.