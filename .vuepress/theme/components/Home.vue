<template>
  <main>
    <div class="md:flex lg:flex xl:flex">
      <Content class="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 markdown-body rounded mr-5" />
      <div class="w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
        <img src="/images/Kyle.jpg" alt="Kyle and family at SeaWorld" class="rounded pb-4">

        <div class="px-2 py-2">
          <div class="text-center">
            <p class="text-xl font-bold m-0 py-2">Write the Docs</p>
            <div class="gradient-bar h-1"></div>
          </div>
          <a href="https://www.meetup.com/wtd-dallas/">
            <img src="/images/v2-wide.svg" alt="Write the Docs Dallas logo" class="rounded pt-4 pb-2">
          </a>
          <div class="md:flex lg:flex xl:flex">
            <a href="http://www.writethedocs.org/" class="w-1/3 rounded">
              <img src="/images/WTDgeneric.svg" alt="Write the Docs logo">
            </a>
            <a href="https://www.meetup.com/Write-the-Docs-SLC/" class="w-2/3 rounded">
              <img src="/images/WTD_slc.svg" alt="Write the Docs Salt Lake City logo">
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Page from '@theme/components/Page.vue'

export default {
  components: {

  }
//   computed: {
//     data () {
//       return this.$page.frontmatter
//     },

//     actionLink () {
//       return {
//         link: this.data.actionLink,
//         text: this.data.actionText
//       }
//     }
//   }
}
</script>
