<template>
  <div class="flex flex-wrap -mx-1 overflow-hidden lg:-mx-1 text-xl">
    <div v-for="project in projects" class="my-1 px-2 w-1/2 overflow-hidden lg:my-1 lg:px-2 lg:w-1/3 xl:my-1 xl:px-2 xl:w-1/3">
      <div class="bg-cover flex items-center bg-white border-4 border-white shadow-md mb-4 mt-2 cursor-pointer hover:border-4 hover:border-callout">
        <img :src="project.frontmatter.image">
      </div>
      <div>  
        <div class="px-6 py-2 w-full text-white font-bold text-xl bg-secondary font-display">
          {{project.frontmatter.title}}
        </div>
        <div class="px-6 py-2 w-full border border-secondary font-body m-0">
          <p>
            {{project.frontmatter.description}}
          </p>
        </div>
      </div>  
    </div> 
  </div>
</template>

<script>
export default {
  name: "Projects",
  computed: {
    projects() {
      let currentPage = this.page ? this.page : this.$page.path;
      let projects = this.$site.pages
        .filter(x => {
          return x.path.match(new RegExp(`(${currentPage})(?=.*html)`));
        })
      return projects;
    }
  }
};
</script>