<script>
  export let templateHtml;
</script>

<style>
  :global(h1) {
    font-style: italic;
  }
  .container {
    margin: 0 auto;
    padding: 2rem;
  }
</style>

<svelte:head>
  <link rel="stylesheet" href="/style.css" />
  <link rel="stylesheet" href="https://unpkg.com/balloon-css/balloon.min.css" />
</svelte:head>
<div class="container">
  {@html templateHtml}
</div>
