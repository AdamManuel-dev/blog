<script>
  export let quote = 'Computer science is no more about computers than astronomy is about telescopes.';
  export let author = 'Edsger Dijkstra';
  export let image = 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Edsger_Wybe_Dijkstra.jpg';
</script>

<style>
  /* your styles go here */
</style>

<div class="flex flex-row flex-wrap w-full overflow-hidden bg-gray-200 rounded-lg shadow-lg md:flex-no-wrap">
  <img src={image} alt="" class="object-cover xl:w-1/6 lg:w-1/4 md:w-1/3 xs:w-full" />
  <div class="flex flex-col w-full p-6">
    <span class="w-full text-5xl font-light"> "{quote}" </span>
    <span class="w-full text-3xl font-bold text-right"> - {author} </span>
  </div>
</div>
