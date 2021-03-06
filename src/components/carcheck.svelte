<script context="module">
  import { endpoint } from './utils/api.js';

  // global variable data
  export let dataGlobal = [];

  // Fetch data and assign to global variable
  const fetchData = async () => {
    const response = await fetch(endpoint);
    const json = await response.json();
    dataGlobal = json;
    return dataGlobal;
  };
</script>

{#await fetchData()}
  <!-- <p>Loading...</p> -->
{:then data}
  {#each data as { kenteken }}
    <!-- <p>{kenteken}</p> -->
  {/each}
{:catch error}
  <p>404 - An error occurred!</p>
{/await}
