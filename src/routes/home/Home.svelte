<script>
  export let data;
  const { markdown } = data;
  const blogs = markdown.blog;
</script>

<style lang="postcss">
  .banner {
    @apply py-4 px-8 bg-yellow-400 rounded-lg mb-4;
  }

  .entries {
    display: grid;
    grid-template-columns: 1fr;
    margin: 3rem 0;
  }

  @media (min-width: 768px) {
    .entries {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 3rem 0;
    }
    :global(.entries .entry) {
      margin-right: 1rem;
    }
  }

  :global(.entry) {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 1rem;
    margin-bottom: 1rem;
    background: white;
  }
  .about {
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .hydrate {
      display: grid;
      grid-template-columns: 80% 20%;
    }
  }

  .hooks {
    display: grid;
    grid-template-columns: 100%;
  }

  @media (min-width: 768px) {
    .hooks {
      grid-template-columns: 50% 50%;
    }
  }
</style>

<svelte:head>
  <title>Adam's Blog: Home</title>
</svelte:head>

<section class="text-gray-600 body-font">
  <div class="container px-5 pt-24 mx-auto">
    <div class="flex flex-col w-full mb-12 text-center">
      <h1 class="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
        <a href="https://adam.manuel.dev">Adam Manuel</a>'s Blog
      </h1>
      <p class="mx-auto text-base leading-relaxed lg:w-2/3">
        This is my personal blog, I'll be posting about technical topics ranging from modern Web Components, to
        distributed systems.
      </p>
    </div>
  </div>
</section>

<div class="flex flex-col items-center justify-center">
  {#each blogs as { frontmatter, slug }}
    <div
      class="w-full p-3 m-4 duration-150 ease-in-out bg-gray-200 border border-gray-400 rounded-lg shadow-lg hover:shadow-2xl hover:border-blue-500 hover:border-4 hover:-translate-y-2">
      <a href={'/' + slug} class="text-black no-underline">
        <div class="flex flex-row flex-wrap items-center justify-between sm:flex-no-wrap">
          <div
            class="flex flex-col flex-wrap items-start justify-start w-full space-x-0 space-y-3 sm:w-auto sm:space-y-0 sm:space-x-3 sm:items-center sm:flex-row">
            {#each frontmatter.tags as tag}
              <span
                class="w-full px-4 py-2 text-xl font-light tracking-wider text-white no-underline capitalize bg-gray-700 rounded-full sm:w-auto">
                {tag}</span>
            {/each}
          </div>
          <span
            class="mt-3 sm:mt-0 w-full sm:w-auto sm:px-4 text-center py-2 text-xl font-light tracking-wider text-white no-underline capitalize {frontmatter.state === 'to do' ? 'bg-red-500' : 'bg-blue-500'} rounded-full">{frontmatter.state}</span>
        </div>
        <div class="flex flex-row items-center justify-between">
          <span class="pt-5 pl-4 -mb-5 text-4xl font-light tracking-wider no-underline">{frontmatter.title}</span>
        </div>
        <div
          class="flex flex-col items-start justify-center w-full p-4 my-8 text-left bg-white border-2 border-gray-300 rounded-lg sm:flex-row ">
          <img src={frontmatter.coverImage} class="object-contain w-full rounded-lg sm:w-1/2 md:w-1/4" alt="" /><span
            class="w-full p-4 text-left">{frontmatter.excerpt}</span>
        </div>
        <div class="flex flex-row items-center justify-between">
          <span class="text-lg">{frontmatter.author}</span>
          <span class="text-sm">{new Date(frontmatter.date || undefined).toDateString()}</span>
        </div>
      </a>
    </div>
  {/each}
</div>
