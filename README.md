# Bloggy: A Simple Blog Web Application  

**Goal**  
The goal of this project is to create a blog web application using **Node.js**, **Express.js**, and **EJS**. The application allows users to create, view, edit, and delete blog posts. Posts will not persist between sessions since no database is used in this version. The project focuses on functionality and user-friendly styling.  

Example Inspiration: [Paul Graham's Articles](http://www.paulgraham.com/articles.html)  

---

## Features  
1. **Post Creation**: Users can create new blog posts.  
2. **Post Viewing**: The homepage displays all posts.  
3. **Post Update/Delete**: Users can edit or delete existing posts.  
4. **Styling**: Responsive design ensures a great user experience on both desktop and mobile devices.  

---

## Deliverables  
- A **Node.js** project to handle the website’s functionality.  
- At least one **EJS file** for structuring the website.  
- At least one **CSS file** for styling the website.  

---

## Technical Requirements  
1. **Node.js & Express.js**: Used to build the web server, manage routes, and handle middleware.  
2. **EJS**: Used as the templating engine for generating dynamic HTML.  
3. **CSS**: For ensuring the website is visually appealing and responsive.  

---

## Getting Started  

### Prerequisites  
- Install [Node.js](https://nodejs.org) (v14 or above recommended).  

### Setup  
1. **Clone the repository**:  
   ```bash
   git clone https://github.com/Drishti006/Bloggy.git
   cd Bloggy
   ```

2. **Initialize the project**:  
   Run the following to set up a `package.json` file:  
   ```bash
   npm init -y
   ```

3. **Install Dependencies**:  
   Install the required Node.js packages:  
   ```bash
   npm install express ejs body-parser
   ```

4. **Run the Application**:  
   Start the server:  
   ```bash
   node app.js
   ```  
   Visit the app at `http://localhost:3000` in your browser.

---

## Future Enhancements  
- Add database support (e.g., MongoDB) for persistent data storage.  
- Implement user authentication for managing posts.  
- Add categories/tags for blog posts.  

Enjoy building your blog! 😊


