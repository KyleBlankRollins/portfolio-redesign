<template>
  <div class="initial">
    <div class="max-w-sm lg:max-w-full mb-8" v-for="post in posts">
      <div class="lg:max-w-full no-underline text-KR-dark-purple lg:flex">
        <div class="w-1/3">
          <router-link :to="post.path">
            <img class="rounded" :src="post.frontmatter.image" :alt="post.frontmatter.imgAlt" />
          </router-link>
        </div>
        <div class="flex flex-col justify-between border w-2/3">
          <div class="lg:flex w-full">
            <div class="w-2/3 p-2">
              <router-link :to="post.path">
                <h3 class="text-KR-blue font-displayB text-3xl m-0">{{ post.frontmatter.title }}</h3>
              </router-link>
            </div>
            <div class="w-1/3 px-2 text-KR-red text-right font-mono">
              <p>{{ post.frontmatter.date }}</p>
            </div>
          </div>

          <div class="p-2 font-bodyB text-lg">
            <p>{{ post.frontmatter.description }}</p>
          </div>

          <div class="flex flex-wrap p-2">
            <div
              class="bg-grey p-2 mx-1 bg-KR-light-purple border-2 border-KR-dark-purple items-center"
              v-for="tag in post.frontmatter.tags"
            >
              <p class="mb-0 p-0 font-mono">{{ tag.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Posts",
  computed: {
    posts() {
      let currentPage = this.page ? this.page : this.$page.path;
      let posts = this.$site.pages
        .filter(x => {
          return x.path.match(new RegExp(`(${currentPage})(?=.*html)`));
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
      return posts;
    }
  }
};
</script>

<style>
.initial {
  all: initial;
  * {
    all: unset;
  }
}
</style>
