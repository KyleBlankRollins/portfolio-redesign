<template>
  <div class="flex flex-wrap text-xl">
    <div v-for="project in projects" class="projects my-12 items-center shadow-md rounded">
      <div class="px-6 py-2 text-white font-bold text-2xl bg-secondary font-display">
        {{ project.frontmatter.title }}
      </div>
      <div class="gradient-bar h-1"></div>
      <div class="bg-cover bg-white">
        <img :src="project.frontmatter.image" />
      </div>
      <div class="bg-white mx-8 my-8 rounded">
        <div class="px-6 py-2 font-body m-0">
          <p>{{ project.frontmatter.description }}</p>
          <ul>
            <li class="py-2">
              <div class="flex">
                <div class="pr-2">
                  <p class="margin-override">Status:</p>
                </div>
                <div>
                  <p class="margin-override italic text-primary font-bold">{{ project.frontmatter.status }}</p>
                </div>
              </div>
            </li>
            <li>
              <div class="flex">
                <div class="pr-2">
                  <p class="margin-override">URL:</p>
                </div>
                <div>
                  <p class="margin-override">{{ project.frontmatter.url }}</p>
                </div>
              </div>
            </li>
          </ul>

          <div>
            <h3 class="margin-override pb-2 pt-6">Tech breakdown</h3>
          </div>
          <div class="flex flex-wrap p-2">
            <div
              class="p-2 m-1 bg-secondary hover:bg-callout text-sm text-white border-2 border-primary items-center rounded"
              v-for="tech in project.frontmatter.tech"
            >
              <p class="margin-override font-mono">{{ tech.name }}</p>
            </div>
          </div>
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
      let projects = this.$site.pages.filter(x => {
        return x.path.match(new RegExp(`(${currentPage})(?=.*html)`));
      });
      return projects;
    }
  }
};
</script>

<style>
.projects:nth-child(odd) {
  background-color: #6290a4;
}

.projects:nth-child(even) {
  background-color: #756265;
}
</style>
