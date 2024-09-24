<template>
  <div
    class="user-list-container w-[20%] p-0 m-0 text-center rounded-l-md flex flex-col border-l border-gray-[#F3F4F6] rounded-bl-md"
  >
    <div
      class="min-h-[10%] w-full bg-[#1F2937] flex flex-row items-center rounded-tr-md"
    >
      <div
        class="min-w-[25%] flex items-center justify-center h-full border-r border-[#F3F4F6]"
      >
        <svg
          v-if="!userListCollapsed"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-arrow-up cursor-pointer"
          viewBox="0 0 24 24"
          @click="toggleUserList"
        >
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
        <svg
          v-if="userListCollapsed"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-arrow-down cursor-pointer"
          viewBox="0 0 24 24"
          @click="toggleUserList"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </div>
      <div class="text-white w-[75%] flex flex-col text-sm text-gray-500">
        <p class="my-1">Available Users ({{ countAvailableUsers() }})</p>
        <p class="my-1">Total Users ({{ store.users.length }})</p>
      </div>
    </div>

    <!-- Outer container transitions -->
    <div
      :class="[
        'transition-all duration-500 ease-in-out overflow-scroll',
        userListCollapsed ? 'max-h-0 delay-300' : 'max-h-full',
      ]"
    >
      <div
        v-for="(user, index) in store.users"
        :key="index"
        :class="[
          'transition-opacity duration-300 ease-in-out bg-[#F3F4F6] rounded-br-md',
          userListCollapsed ? 'opacity-0 delay-0' : 'opacity-100 delay-200'
        ]"
      >
        <!-- No additional delay or transition here -->
        <div
          class="user-info flex flex-row items-center p-4 min-w-[30px] max-w-full"
        >
          <div class="avatar-wrapper pr-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6858/6858504.png"
              alt="Avatar"
              class="avatar"
            >
            <div class="relative">
              <span :class="`status-circle ${getStatus(user.statusID).class}`" />
              <span class="tooltip absolute hidden bg-gray-700 text-white text-xs rounded py-1 px-2 -mt-6 ml-8">
                {{ getStatus(user.statusID).displayName }}
              </span>
            </div>
          </div>
          <div class="user-details text-left break-all">
            <p class="text-md text-gray-600 pb-1">{{ user.name }}</p>
            <p class="text-sm text-gray-500 pl-1">{{ user.role }}</p>
            <p class="text-xs text-gray-400 pt-1 pl-1">
              {{ getLocation(user.locationID).displayName }} -
              {{ getDepartment(user.departmentID).displayName }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      statuses: [
        { id: 1, class: "online", displayName: "Online" },
        { id: 2, class: "offline", displayName: "Offline" },
        { id: 3, class: "in-meeting", displayName: "In meeting" },
        { id: 4, class: "troubleshooting", displayName: "Troubleshooting" },
        { id: 5, class: "on-break", displayName: "On break" },
      ],
      locations: [
        { id: 1, displayName: "Office" },
        { id: 2, displayName: "Home" },
      ],
      departments: [
        { id: 1, displayName: "D1" },
        { id: 2, displayName: "D2" },
        { id: 3, displayName: "D3" },
      ],
      userListCollapsed: false,
    };
  },
  computed: {
    store() {
      return this.$nuxt.$store; // Access store using $nuxt.$store
    },
  },
  methods: {
    getStatus(id) {
      // Subtract 1 to get the correct index from the array
      return this.statuses[id - 1] || {};
    },
    getLocation(id) {
      // Subtract 1 to get the correct index from the array
      return this.locations[id - 1] || {};
    },
    getDepartment(id) {
      // Subtract 1 to get the correct index from the array
      return this.departments[id - 1] || {};
    },
    toggleUserList() {
      // Toggles collapse for User Panel
      this.userListCollapsed = !this.userListCollapsed;
    },
    countAvailableUsers() {
      // Filter users with statusID === 1 and return the count
      return this.store.users.filter((user) => user.statusID === 1).length;
    },
  },
};
</script>

<style scoped>
.avatar-wrapper {
  position: relative;
  display: inline-block;
}

.avatar {
  vertical-align: middle;
  min-width: 50px;
  min-height: 50px;
  max-width: 50px;
  max-height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.status-circle {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
}

.online {
  background-color: green; /* Color for "available" status */
}

.on-break {
  background-color: rgb(244, 248, 0); /* Color for "away" status */
}

.in-meeting {
  background-color: red; /* Color for "busy" status */
}

.troubleshooting {
  background-color: red; /* Color for "busy" status */
}

.offline {
  background-color: grey; /* Color for "offline" status */
}

.relative:hover .tooltip {
  display: block;
}
</style>
