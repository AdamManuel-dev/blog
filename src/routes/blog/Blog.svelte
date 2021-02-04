<script>
  export let data; // data is mainly being populated from the /plugins/edlerjs-plugin-markdown/index.js
  const { html, frontmatter } = data;
</script>

<style lang="postcss">
  .py-05 {
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
  }

  :global(strong) {
    @apply font-semibold;
  }

  :global(a) {
    @apply text-blue-600 font-semibold;
  }

  :global(strong a) {
    @apply font-bold;
  }

  :global(h1) {
    @apply leading-tight border-b text-4xl font-semibold mb-4 mt-6 pb-2 text-black;
  }

  :global(h2) {
    @apply leading-relaxed tracking-wide border-b text-2xl font-normal mb-4 mt-6 pb-2 text-black;
  }

  :global(h3) {
    @apply leading-snug text-lg font-semibold mb-4 mt-6 text-black;
  }

  :global(h4) {
    @apply leading-none text-base font-semibold mb-4 mt-6 text-black;
  }

  :global(h5) {
    @apply leading-tight text-sm font-semibold mb-4 mt-6 text-black;
  }

  :global(h6) {
    @apply leading-tight text-sm font-semibold text-gray-600 mb-4 mt-6;
  }

  :global(blockquote) {
    @apply text-base border-l-4 border-gray-300 pl-4 pr-4 text-gray-600;
  }

  :global(code) {
    @apply font-mono text-sm inline bg-gray-300 rounded px-1 py-05;
  }

  :global(pre) {
    @apply bg-gray-100 rounded p-4;
  }

  :global(pre code) {
    @apply block w-full p-4 rounded-lg;
  }

  :global(ul) {
    @apply text-base pl-8 list-disc;
  }

  :global(ol) {
    @apply text-base pl-8 list-decimal;
  }

  :global(kbd) {
    @apply text-xs inline-block rounded border px-1 py-05 align-middle font-normal font-mono shadow;
  }

  :global(table) {
    @apply text-base border-gray-600;
  }

  :global(th) {
    @apply border py-1 px-3;
  }

  :global(td) {
    @apply border py-1 px-3;
  }

  /* Override pygments style background color. */
  :global(.highlight pre) {
    @apply bg-gray-100 !important;
  }
</style>

<svelte:head>
  <title>Adam's Blog: {frontmatter.title}</title>
</svelte:head>
<div class="flex flex-col items-start justify-start w-full h-full text-black">
  <a href="/" class="">&LeftArrow; Home</a>

  <div class="pb-4 my-4 border-b border-gray-300 border-solid">
    <div class="flex flex-row items-center justify-center w-full">
      <img src={frontmatter.coverImage} alt="" class="object-fill w-full overflow-hidden rounded-lg" />
    </div>
    <h1 class="mb-3 text-black">{frontmatter.title}</h1>

    {#if frontmatter.author}<small class="text-black">By {frontmatter.author}</small>{/if}
  </div>

  {#if html}
    {@html html}
  {:else}
    <h1>Oops!! Markdown not found!</h1>
  {/if}
</div>
