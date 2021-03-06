<script>
  const valueInput = document.querySelector('#inputCar');
  //   if (valueInput.value > 0) {
  //     let number = valueInput.value;
  //   }

  // Search in data for the inputted value
  function handleClick() {}
</script>

<input type="text" id="inputCar" />
<button on:click={handleClick}>Search</button>

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
