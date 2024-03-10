<script lang="ts">
  import Sidebar from "$lib/components/ui/sidebar/sidebar.svelte";
	import SidebarToggle from "$lib/components/ui/sidebar/sidebar-toggle.svelte";
	import Topbar from "$lib/components/ui/topbar/topbar.svelte";
</script>

<body class="bg-gray-50 dark:bg-slate-900">
  <div class="app relative">
    <div class="text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900 min-h-screen overflow-auto flex flex-row">
      <div class="min-h-screen max-h-screen w-full flex flex-col">
        <Topbar/>
        <SidebarToggle/>
	      <Sidebar/>
        <slot/>
      </div>
    </div>
  </div>
</body>
