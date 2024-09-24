<template>
  <div class="grid place-items-center h-screen bg-[#FFFFFF]">
    <div class="flex w-[65%] h-[800px] p-4 overflow-auto">
      <!-- Room List Panel -->
      <div
        :class="[
          'room-list-container w-[15%] h-full p-0 m-0 text-center flex flex-col border-r border-gray-[#F3F4F6] transition-all duration-300',
          roomListCollapsed ? 'w-[5%]' : 'w-[15%]',
        ]"
      >
        <div
          class="h-[10%] w-full bg-[#1F2937] flex flex-col items-center justify-center rounded-tl-md"
        >
          <div class="text-white" @click="toggleRoomList">
            <svg
              v-if="!roomListCollapsed"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-minimize cursor-pointer"
              viewBox="0 0 24 24"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>

            <svg
              v-if="roomListCollapsed"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-corner-up-right cursor-pointer"
              viewBox="0 0 24 24"
              @click="maximizeAction"
            >
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </div>
          <h1
            :class="{
              'opacity-0 max-h-0': roomListCollapsed,
              'opacity-100 max-h-10': !roomListCollapsed,
            }"
            class="text-white overflow-hidden transition-all duration-500 ease-in-out"
          >
            <!-- Chat Rooms -->
          </h1>
        </div>
        <div class="h-full rounded-bl-md bg-[#1f2c37] pt-4">
          <div
            :class="[
              'overflow-hidden transition-all duration-500 ease-in-out w-full flex flex-col item-center justify-center',
              roomListCollapsed ? 'opacity-0 max-h-0' : 'opacity-100',
            ]"
          >
            <div
              class="room min-h-[50px] max-h-[50px] active-chat my-2 flex items-center justify-center"
            >
              <h1 class="text-slate-200">IT Support</h1>
            </div>
            <div
              class="room min-h-[50px] max-h-[50px] my-2 flex items-center justify-center"
            >
              <h1 class="text-slate-200">Test Channel</h1>
            </div>
            <div
              class="room min-h-[50px] max-h-[50px] my-2 flex items-center justify-center"
            >
              <h1 class="text-slate-200">Team Leaders</h1>
            </div>
          </div>
        </div>
      </div>
      <div
        class="b2 w-[65%] p-0 m-0 text-center flex flex-col transition-all duration-300', (roomListCollapsed && userListCollapsed) ? 'w-full' : roomListCollapsed ? 'w-[80%]' : 'w-[65%]']"
      >
        <div
          class="min-h-[10%] w-full bg-[#1f2c37] flex items-center justify-center"
        >
          <h1 class="text-white">IT Support</h1>
        </div>
        <div class="h-full bg-[#F3F4F6]" />
      </div>
      <!-- User Panel Component -->
      <UserPanel class="pl-3" />
    </div>
  </div>
</template>

<script>
import UserPanel from "./components/UserPanel.vue";

export default {
  components: {
    UserPanel,
  },
  data() {
    return {
      roomListCollapsed: false,
    };
  },
  methods: {
    toggleRoomList() {
      // Toggles collapse for Room Panel
      this.roomListCollapsed = !this.roomListCollapsed;
    },
  },
};
</script>

<style scoped>
.active-chat {
  /* Selected chat (Room Panel) background colour */
  background: #1f384c;
}
</style>
