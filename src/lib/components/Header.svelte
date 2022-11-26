<script>
  import { page } from '$app/stores'
</script>

<header>
  <h1>Secret Santa</h1>
  <nav>
    <a href="/"
      class:active={$page.url.pathname == '/'}>
      Home
    </a>
    <a href="/draw"
      class:active={$page.url.pathname == '/draw'}>
      Draw
    </a>
    <a href="/decipher"
      class:active={$page.url.pathname == "/decipher"}>
      Decipher
    </a>
  </nav>
</header>

<style>

  nav {
    display: flex;
    gap: 2rem;
  }

  /* nav > * {
    border: 4px solid firebrick;
  } */

  h1 {
    margin: 1rem 0 0.5rem 0;
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--clr-primary-700);
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
    font-size: 1.25rem;
    transition: border-color 0.2s;
    border-bottom: 3px solid var(--clr-neutral-100);
  }

  .active {
    border-color: var(--clr-accent-500);
    transition: border-color 0.4s;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--clr-neutral-100);
  }

  /* header > * {
    border: 2px solid salmon
  } */



</style>