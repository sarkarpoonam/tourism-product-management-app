# 🌍 Tourism Product Management App

## 📌 Project Overview

The **Tourism Product Management App** is a responsive web application that allows users to manage travel packages. The application provides functionality to add, edit, delete, and search tourism packages such as destination tours, city experiences, and travel adventures.

This project demonstrates front-end development concepts including responsive UI design, JavaScript interactivity, and REST API integration.

---

## 🚀 Features

* Add new travel packages
* Edit existing package information
* Delete travel packages
* Search destinations
* Filter packages by country
* Responsive tourism dashboard UI
* Integration with a mock REST API

---

## 🛠 Technologies Used

* **HTML5** – structure of the web application
* **CSS3** – styling and responsive layout using Flexbox/Grid
* **JavaScript (ES6+)** – dynamic functionality and API calls
* **MockAPI** – mock REST API for storing package data
* **Git & GitHub** – version control and project hosting

---

## 📂 Project Structure

```
tourism-product-management-app

index.html
styles/
   style.css
js/
   app.js
db.json
README.md
package.json
tests/
   app.test.js
```

---

## ⚙️ Setup Instructions (Run Locally)

### 1 Install Node.js

Download and install Node.js
https://nodejs.org

### 2 Install json-server

```
npm install -g json-server
```

### 3 Start the Mock API

```
json-server --watch db.json
```

API will run at:

```
http://localhost:3000/packages
```

### 4 Run the Website

Open:

```
index.html
```

in your browser.

---

## 🌐 Live Deployment

The application is deployed using **GitHub Pages**.

Live website:

```
https://sarkarpoonam.github.io/tourism-product-management-app/
```

---

## 🔗 API Integration

For live deployment, the application connects to a **MockAPI REST endpoint**:

Example API endpoint:

```
https://<mockapi-project-id>.mockapi.io/api/v1/packages
```

The following operations are supported:

* **GET** – Retrieve list of travel packages
* **POST** – Add new package
* **PUT** – Update existing package
* **DELETE** – Remove a package

---

## 🧪 Testing

Basic integration tests were implemented using **Jest** to validate:

* Adding a new package
* Editing package details
* Removing a package
* Input validation

Run tests using:

```
npm test
```

---

## ⚠️ Known Limitations

* The application uses a mock API rather than a real backend.
* Authentication and user management are not implemented.

---

## 👩‍💻 Author

Poonam Sarkar
