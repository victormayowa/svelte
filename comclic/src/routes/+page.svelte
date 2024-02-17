<script>
   import Sidebar from "../components/sidebar.svelte";
</script>

<h1 class="text-3xl font-bold underline">
    <Sidebar />
  </h1>
  
  <style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style>