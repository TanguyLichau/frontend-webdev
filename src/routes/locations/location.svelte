<script>
  import * as utilities from "$lib/utilities.js";
  export let location;
  export let role;
  export let jwt;
  let isModify = false;
  let displayModal = false;

  async function deleteLocation() {
    await utilities.deleteLocation(location._id, jwt);
    window.location.reload();
  }

  async function modifyLocation() {
    displayModal = isModify = false;
    const locationObject = {
      filmType: document.getElementById("filmType").value,
      filmProducerName: document.getElementById("filmProducerName").value,
      filmDirectorName: document.getElementById("filmDirectorName").value,
      address: document.getElementById("address").value,
      year: document.getElementById("year").value,
    };
    await utilities.updateLocation(location._id, jwt, locationObject);
    window.location.reload();
  }
</script>

<div>
  {#if role === "admin"}
    <button
      on:click={() => {
        isModify = !isModify;
        displayModal = true;
      }}>Modify</button
    >
    <button on:click={deleteLocation}>Delete</button>
  {/if}
  <button
    on:click={() => {
      displayModal = !displayModal;
    }}>-</button
  >
  <p id="location">{location.filmName}</p>
  {#if displayModal && isModify}
    <div>
      <input id="filmType" placeholder="filmType" value={location.filmType} />
      <input
        id="filmProducerName"
        placeholder="filmProducerName"
        value={location.filmProducerName}
      />
      <input
        id="filmDirectorName"
        placeholder="filmDirectorName"
        value={location.filmDirectorName}
      />
      <input id="address" placeholder="address" value={location.address} />
      <input id="year" placeholder="year" value={location.year} />
      <button on:click={modifyLocation}>Save</button>
    </div>
  {:else if displayModal}
    <p>film type : {location.filmType}</p>
    <p>film producer name : {location.filmProducerName}</p>
    <p>film director name : {location.filmDirectorName}</p>
    <p>address : {location.address}</p>
    <p>year : {location.year}</p>
  {/if}
</div>

<style>
  div {
    text-align: center;
  }
  #location {
    display: inline-block;
  }
  input {
    margin-right: 7px;
  }
</style>
