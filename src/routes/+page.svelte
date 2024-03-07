<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
	import { PaperPlane } from "svelte-radix";

    export let data;
    export let form;
</script>

<div class="container mx-auto px-4 max-w-screen-sm">
    <h1>{data.todos}</h1>
</div>

<form method="POST">
    <div class="relative max-w-screen-sm mx-auto ">
        <div class="fixed bottom-0 p-4">
            <div class="w-[640px]">
                <div class="flex">
                    <Input name="search" placeholder="Ask or search anything" class="" />
                    <Button type="submit" class="flex-shrink-1 inline-flex ml-1" variant="outline" size="icon">
                        <PaperPlane class="h-4 w-4" />
                    </Button>
                </div>
                <p class="text-sm text-muted-foreground text-center mt-2">Enter your email address.</p>
            </div>
        </div>
    </div>
</form>
