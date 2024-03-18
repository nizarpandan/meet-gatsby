<script lang="ts">
	import MgHeader from "$lib/components/mg/header/mg-header.svelte";
	import MgHero from "$lib/components/mg/hero/mg-hero.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<MgHeader
	isAuthenticated={data.isAuthentication} 
	user={data.userProfile}
/>
<MgHero/>
