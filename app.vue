<template>
	<div class="
      min-h-screen
      flex flex-col
      items-center
      justify-center
      bg-[#170D19]
      text-white
      gap-4
    ">
		<p class="absolute text-stone-700 top-0 left-0 p-2 font-mono">
			{{ data.hostname }}
		</p>
		<img src="/hello-there.png" alt="Kenobi" class="w-72 rounded-lg" />
	</div>
</template>

<script setup>
const { data } = useLazyFetch("/api/hostname");
</script>