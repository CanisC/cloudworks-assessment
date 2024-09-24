## Table of Contents
- [Installation]

1. Clone the repository: git clone https://github.com/CanisC/cloudworks-assessment.git

2. Navigate to the project directory:

    - CD to project folder with editor

3. Install dependencies:

    npm install

4. Start the development server:

    npm run dev

- [Usage]

    Once the server is running, you can access the app at `http://localhost:3000/#/en-gb/dashboard`.

- [Features]

    1. Collapsable User Panel
    2. Collapsable Room Panel

- [Technologies Used]
    
    1. Nuxt
    2. VueJS
    3. ESLint 
    4. i18n
    5. TailwindCSS

- [Challenges Faced]

    I encountered an issue with `Vue.observable`, which is deprecated in Vue 3. I switched to using `reactive`. I believe this was a good choice, as it is the updated method and aligns with Vue 3's best practices.
