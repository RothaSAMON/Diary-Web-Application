# Diary Web Application

Here is the link to check **the details** of the **Diary Web Application** Website Project : https://www.notion.so/Third-Mission-Diary-Web-Application-b124c5f5f3f24a008b86a539840ab98f

Checkout the **Website after deploy** :
+ 000webhost: https://diary-web-rotha.000webhostapp.com/ 
+ Github: None

## Project Setup & Installation
This project involves creating a Diary web application using HTML, CSS, and JavaScript. The project is structured to separate content, styling, and functionality specially the CRUD concept of the JavaScript.

### Directory Structure

The project is organized into several directories and files:

1. **Root Directory**: Contains the main HTML file (`index.html`, . . .).
2. **CSS Directory**: Contains the CSS file (`styles.css`, . . .) used for styling the HTML content.
3. **JavaScript Directory**: Contains the JavaScript file (`main.js`, . . .) used for adding interactivity to the webpage.
4. **images Directory**: Contains any image files used in the project.

## Language for Website
The structure of a website begins with **HTML**, **CSS** the foundational language. **HTML** serves as the skeleton of a webpage, and **CSS** comes into play to enhance the presentation of the webpage. **CSS** adds style and visual appeal to the **HTML** like colors, fonts, layouts, and other aesthetic properties. And **JavaScript** adds interactivity and dynamic behavior to the website. Developers can create interactive features such as dropdown menus, sliders, form validation, and more. 

**Here is** what I used for build my Diary Web Application project :

- HTML
- CSS
- JavaScript

This Web Application is based on the core web languages to build the whole project, which can improve my foundational skills and many other properties.

## Project Folder Structure
- In the `index.html` file, it is located outside the other folder because this file is for deploying the website.
- In the `public/` folder, It controls the pages of the website that are connected to each other and the index.html file. These files include create.html, diary-list.html, edit-diary.html, and view-detail.html.
- In the `src/` folder, it's the source folder of the website that contains three main folders within it. They are :
    - In the `images/` folder, it’s controls the images for the other pages and also icons.
    - In the `js/` folder, it’s controls the JavaScript files. There are also two main folders : one for components and another one for data, along with other miscellaneous files that contribute to the functionality of the website.
    - In the `styles/` folder, it’s controls the CSS files, which define the styles for the webpages of the website. Each CSS file corresponds to a specific component or page.
```bash
SAMONROTHA-DIARY-WEB/
│
│
├── public/
│   ├── create.html
│   ├── diary-list.html
│   ├── edit-diary.html
│   └── view-detail.html
│
├── src/
│   ├── images/
│   │   └── (images here . . .)
│   ├── js/
│   │   ├── components/
│   │   │   ├── footer-compo.js
│   │   │   ├── header-title-compo.js
│   │   │   ├── sidebar-compo.js
│   │   │   └── sidebar-respon-compo.js
│   │   ├── data/
│   │   │   ├── footer-data.js
│   │   │   ├── header-title-data.js
│   │   │   ├── sidebar-data.js
│   │   │   └── sidebar-respon-data.js
│   │   ├── main.js
│   │   └── view-detail.js
│   ├── styles/
│   │   ├── dashboard.css
│   │   ├── footer.css
│   │   ├── input-create.css
│   │   ├── input.css
│   │   ├── sidebar.css
│   │   ├── styles.css
│   │   ├── todo-card.css
│   │   └── view-detail.css
│
├── .gitignore
├── .reviewboardrc
├── index.html
└── README.md
```