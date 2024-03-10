<script lang="ts">
	import { enhance } from "$app/forms";
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import MgChat from "$lib/components/ui/mg-chat/mg-chat.svelte";
	import { PaperPlane } from "svelte-radix";

	export let data;
	export let form;

	const sections = {
		"Title 1": "paragraph",
  	"Title 2": "paragraph",
		"Title 3": "paragraph",
		"Title 4": "paragraph",
		"Title 5": "paragraph",
		"Title 6": "paragraph",
  	"Title 7": "paragraph",
		"Title 8": "paragraph",
	}
</script>

<div class="lg:ml-64 flex flex-col flex-auto">
	<div class="pb-2.5 flex flex-col justify-between w-full flex-auto overflow-auto h-0">
		<div class="h-full w-full flex flex-col py-8">
			<div class="w-full pb-10">
				<div class="flex flex-col justify-between px-5 mb-3 max-w-3xl mx-auto rounded-lg group">
					<div class="container mx-auto px-4 max-w-3xl">
						<!-- <h1>{data.todos}</h1> -->
						{#each Object.entries(sections) as [title, paragraph]}
							<MgChat/>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="w-full">
		<div class="bg-white dark:bg-gray-900">
			<div class="max-w-3xl px-2.5 mx-auto inset-x-0">
				<div class="pb-2">
					<form method="POST" use:enhance class="px-4" on:submit={() => console.log(form)}>
						<div class="flex">
							<Input name="search" placeholder="Ask or search anything" class="" />
							<Button type="submit" class="flex-shrink-1 inline-flex ml-1" variant="outline" size="icon">
								<PaperPlane class="h-4 w-4" />
							</Button>
						</div>
					</form>
					<div class="mt-1.5 text-xs text-gray-500 text-center">
						LLMs can make mistakes. Verify important information.
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
