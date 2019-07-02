<template>
  <header>
    <nav
      class="nav flex items-center justify-between flex-wrap text-right border-b border-KR-dark-purple text-KR-blue font-display text-xl mb-10 py-1"
    >
      <router-link class="cursor-pointer" :to="$withBase('/')">
        <div>
          <img class="w-20" src="/images/logo.svg" alt="Sunset in the mountains" />
        </div>
      </router-link>

      <div v-on:click="openNav()" class="lg:hidden">
        <button
          class="flex m-5 px-3 py-2 border text-KR-dark-purple rounded border-KR-dark-purple hover:text-KR-red hover:border-KR-red"
        >
          <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div class="w-full block justify-end lg:flex lg:w-auto">
        <div class="lg:flex-grow">
          <span v-for="item in $site.themeConfig.nav">
            <span :class="hidden">
              <router-link
                class="text-sans mr-10 lg:mt-0 no-underline uppercase text-KR-blue hover:text-KR-red hover:underline"
                :to="$withBase(item.link)"
              >
                {{ item.text }}
                <span class="arrow"></span>
              </router-link>
            </span>
          </span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
    data() {
      return {
        hidden: "lg:inline-block md:hidden sm:hidden hidden"
      };
  },
  methods: {
    openNav() {
      if (this.hidden == "lg:inline-block md:hidden sm:hidden hidden")
        this.hidden = "p-2 block";
      else {
        this.hidden = "lg:inline-block md:hidden sm:hidden hidden";
      }
    }
  }
};
</script>
