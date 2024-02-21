<script>
   import Sidebar from "../lib/components/sidebar.svelte";
   import Header from "../lib/components/header.svelte";
</script>

<h1 class="text-3xl font-bold underline">
    <Header />
    <Sidebar />
  </h1>
  
  <style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style>