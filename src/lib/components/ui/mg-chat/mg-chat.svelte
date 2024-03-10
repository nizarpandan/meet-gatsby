<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
</script>

<div class="mg-chat flex items-start mt-10">
  <div class="flex-none mr-4">
    <Avatar.Root>
      <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
      <Avatar.Fallback>CN</Avatar.Fallback>
    </Avatar.Root>
  </div>
  <div class="flex-1 w-full py-2">
    <div class="font-semibold">You</div>
    <div class="mt-2">asdasd </div>
  </div>
</div>