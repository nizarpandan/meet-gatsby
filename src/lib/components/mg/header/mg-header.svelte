<script lang="ts">
	import UserNav from '$lib/components/ui/topbar/user-nav.svelte';
  import type {UserType} from '@kinde-oss/kinde-auth-sveltekit';
  
  export let user: UserType | null;
	export let isAuthenticated: boolean;
</script>

<header class="flex flex-wrap mb-5 sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
  <nav class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
    <div class="flex items-center justify-between">
      <a class="flex-none text-xl font-semibold dark:text-white" href="/" aria-label="Brand">Brand</a>
      <div class="sm:hidden">
        <button type="button" class="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="/navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
          <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg class="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>
    <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
      <div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
        <a class="font-medium text-blue-600 sm:py-6 dark:text-blue-500" href="/" aria-current="page">Landing</a>
        <a class="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="/">Account</a>
        <a class="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="/">Work</a>
        <a class="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="/">Blog</a>
        <div class="flex items-center gap-x-2 sm:ms-auto">
          {#if isAuthenticated}
            <UserNav user={user}/>
          {:else}
            <a 
              class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500" 
              href="/api/auth/login"
            >
              <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Log in
            </a>
          {/if}
        </div>
      </div>
    </div>
  </nav>
</header>