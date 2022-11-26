<script lang="ts">
  import '../app.css'
  import Header from "$lib/components/Header.svelte";
</script>

<div>
  <Header/>

  <main>
    <slot/>
  </main>

  <footer>
    Author:
    <a href="https://github.com/huncfut">Kuba Zeligowski</a>
  </footer>
</div>

<style>
  main {
    margin-top: 0.5rem;
    background-color: var(--clr-neutral-100);
  }

  div {
    height: 100%;
    background-color: var(--clr-neutral-200);
  }

  footer {
    padding: 1rem;
    display: none;
    text-align: right;
    height: 2rem;
    opacity: 50%;
  }

  a {
    color: var(--clr-primary-900)
  }
</style>