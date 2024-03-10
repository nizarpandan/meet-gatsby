<script lang="ts">
	import { cn } from "$lib/utils";
	import { Button } from "$lib/components/ui/button";
	import * as Collapsible from "$lib/components/ui/collapsible";
	import { ChevronDown } from "svelte-radix";

	let className: string | null | undefined = undefined;

	export { className as class };
</script>

<div id="application-sidebar" 
	class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700">
	<div class="px-6">
			<a class="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/" aria-label="Meet Gatsby">Meet Gatsby</a>
	</div>
	<div class={cn("pb-12", className)}>
		<div class="space-y-4 py-4">
			<div class="px-3 py-2">
				<div class="space-y-1">
					<Button variant="secondary" class="w-full justify-start">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="mr-2 h-4 w-4"
						>
							<circle cx="12" cy="12" r="10" />
							<polygon points="10 8 16 12 10 16 10 8" />
						</svg>
						New Chat
				</Button>
				<Collapsible.Root class="w-full justify-start">
					<Collapsible.Trigger asChild let:builder>
						<Button 
							builders={[builder]}  
							variant="ghost" 
							class={cn(
								"w-full justify-start transition-all [&[data-state=open]>svg]:rotate-180",
								className
							)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="mr-2 h-4 w-4"
							>
								<rect width="7" height="7" x="3" y="3" rx="1" />
								<rect width="7" height="7" x="14" y="3" rx="1" />
								<rect width="7" height="7" x="14" y="14" rx="1" />
								<rect width="7" height="7" x="3" y="14" rx="1" />
							</svg>
							Browse
							<ChevronDown
								class="ms-auto block h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
							/>
						</Button>
					</Collapsible.Trigger>
					<Collapsible.Content class="space-y-2">
						<Button variant="ghost" class="w-full justify-start">
							<span class="ml-6">Radio</span> 
						</Button>
					</Collapsible.Content>
				</Collapsible.Root>
				<Button variant="ghost" class="w-full justify-start">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="mr-2 h-4 w-4"
					>
						<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
						<path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
						<circle cx="12" cy="12" r="2" />
						<path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
						<path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
					</svg>
						Radio
					</Button>
				</div>
			</div>
		</div>
	</div>
</div>