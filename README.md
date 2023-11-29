# React App Starter

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

   Replace `your-username` with your GitHub username and `your-repo` with the name of your repository.

2. **Navigate to the Project Directory:**

   ```bash
   cd your-repo
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

   This command will download and install all the required dependencies for the project.

4. **Start the Development Server:**

   ```bash
   npm start
   ```

   The development server will start, and your default web browser will open the app at `http://localhost:3000/`.

5. **If you want to Sign-in**

   username -> admin <br>
   password -> admin

6. **If Tailwind CSS is Not Working**

   1.Install tailwindcss via npm, and then run the init command to generate your tailwind.config.js file.

   ```
   npm install -D tailwindcss
   npx tailwindcss init
   ```

   2.Add the paths to all of your template files in your tailwind.config.js file.

   ```
   /** @type {import('tailwindcss').Config} */
   module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
    extend: {},
   },
   plugins: [],
   }
   ```

   3Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

   ```
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
