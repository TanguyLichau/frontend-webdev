<script>
  import Location from "./location.svelte";
  export let data;
  let role = data.role.value;
  let jwt = data.jwt.value;
  let display = false;
</script>

{#if role === "admin"}
  <div>
    <button on:click={() => (display = !display)}>Add a location</button>
  </div>
  {#if display}
    <form method="POST">
      <input name="name" placeholder="filmName" />
      <input name="type" placeholder="filmType" />
      <input name="producername" placeholder="filmProducerName" />
      <input name="directorname" placeholder="filmDirectorName" />
      <input name="address" placeholder="address" />
      <input name="year" placeholder="year" />
      <button
        on:click={() => {
          window.location.reload();
        }}
        type="submit">Save</button>
    </form>
  {/if}
{/if}
{#each data.locationlist as item}
  <Location location={item} {role} {jwt} />
{/each}

<style>
  div,
  form {
    text-align: center;
    margin-bottom: 20px;
  }
</style>
