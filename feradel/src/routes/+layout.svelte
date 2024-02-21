<script lang='ts'>
	import Header from "$lib/components/Header.svelte";
	import Sidebar from "$lib/components/Sidebar.svelte";
import "../app.pcss";
</script>

<Header />
<Sidebar />
<slot></slot>