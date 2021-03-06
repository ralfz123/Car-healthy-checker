<script>
  import { dataGlobal } from '../carcheck.svelte';

  // Get data from input value
  function handleClickSearch() {
    const valueInput = document.querySelector('input').value;
    const inputData = findLicenseData(valueInput, dataGlobal);
    // render retrieved input data
  }

  // Find data object that's linked to input value
  const findLicenseData = (inputValue, globalData) => {
    // console.log(globalData);
    // console.log(inputValue);
    // if (inputValue == data) {
    //   // find correct data object with all unique data keys
    //   // return retrievedData
    // }
  };
</script>

<input type="text" />
<button on:click={handleClickSearch}>Search</button>

<style>
  @font-face {
    font-family: LicenseFont;
    src: url('/licensePlateFont.ttf');
  }

  input {
    background: #ffee00;
    text-transform: uppercase;
    height: 2em;
    border: 1px solid #000000;
    border-radius: 5px;
    font-family: LicenseFont;
    font-weight: 700;
    font-size: 2rem;
  }

  input:focus {
    outline: 0;
    box-shadow: 0px 0px 12px 0px #bbbbbb;
  }
</style>
