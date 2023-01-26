<script>
  import Location from "./location.svelte";
  export let data;
</script>

{#each data.response as item}
  <Location location={item} />
{/each}
