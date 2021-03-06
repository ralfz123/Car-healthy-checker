<script>
  // import './components/utils/fetch.js'
  import Header from './components/header/header.svelte';
  import LicensePlateInput from './components/input/input.svelte';
  import Carcheck from './components/carcheck.svelte';
  import Footer from './components/footer/footer.svelte';
</script>

<main>
  <Header />
  <LicensePlateInput />
  <Carcheck />
  <Footer />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
