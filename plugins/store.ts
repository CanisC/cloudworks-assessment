import { reactive } from 'vue';

// I have decided to use reactive instead of vue.observable, as it is deprecated in Vue 3, and I believe this is a better practice while achieving the same result.

export default defineNuxtPlugin((nuxtApp) => {
  // Create a reactive object
  const store = reactive({
    // Array of users
    users: [
        {
          name: "John Doe",
          role: "Agent",
          departmentID: 1,
          locationID: 2,
          statusID: 2,
        },
        {
          name: "Jane Smith",
          role: "Manager",
          departmentID: 1,
          locationID: 1,
          statusID: 1,
        },
        {
          name: "Michael Johnson",
          role: "IT",
          departmentID: 3,
          locationID: 1,
          statusID: 3,
        },
        {
          name: "Emily Davis",
          role: "Team Leader",
          departmentID: 1,
          locationID: 1,
          statusID: 5,
        },
        {
          name: "Chris Lee",
          role: "Agent",
          departmentID: 2,
          locationID: 1,
          statusID: 1,
        },
        {
          name: "Anna Brown",
          role: "Manager",
          departmentID: 2,
          locationID: 2,
          statusID: 2,
        },
        {
          name: "David Wilson",
          role: "IT",
          departmentID: 3,
          locationID: 1,
          statusID: 1,
        },
        {
          name: "Sophia Martinez",
          role: "Agent",
          departmentID: 2,
          locationID: 2,
          statusID: 3,
        },
        {
          name: "Daniel Garcia",
          role: "IT",
          departmentID: 1,
          locationID: 1,
          statusID: 4,
        },
        {
          name: "Olivia Rodriguez",
          role: "Team Leader",
          departmentID: 3,
          locationID: 2,
          statusID: 1,
        },
      ],
  });

  // Provide this globally as $store, accessible by using this.$nuxt.$store
  nuxtApp.provide('store', store);
});
