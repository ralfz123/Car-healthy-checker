<script>
  import { endpoint } from './utils/api.js';

  const fetchData = (async () => {
    const response = await fetch(endpoint);
    return await response.json();
  })();

  // Search exported inputValue in data by correct datakey
  const findLicenseData = (inputValue, data) => {
    // if (valueInput == data){
    // find correct data
    // }
  };
</script>

{#await fetchData}
  <p>...waiting</p>
{:then data}
  {#each data as { kenteken }}
    <!-- <p>{kenteken}</p> -->
  {/each}
{:catch error}
  <p>404 - An error occurred!</p>
{/await}
