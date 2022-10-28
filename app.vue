<template>
  <div
    class="
      min-h-screen
      flex flex-col
      items-center
      justify-center
      bg-[#170D19]
      text-white
      gap-4
    "
  >
    <img src="/hello-there.png" alt="Kenobi" class="w-72" />
    <p class="text-lg text-center">
      This page has been served to you by: <br />
      <b class="font-mono bg-zinc-900 p-1 rounded">
        {{ hostname.hostname }}
      </b>
    </p>
  </div>
</template>

<script setup>
const { pending, data: hostname } = useLazyFetch("/api/hostname");
watch(hostname, (newHostname) => {
  // Because posts starts out null, you will not have access
  // to its contents immediately, but you can watch it.
});
</script>