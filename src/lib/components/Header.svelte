<script>
  import { page } from '$app/stores'
</script>

<!-- HTML -->
<header>
  <h1>Secret Santa</h1>
  <nav>
    <a href="/"
      class:active={$page.url.pathname === '/'}>
      Home
    </a>
    <a href="/generate-key"
      class:active={$page.url.pathname === '/generate-key'}>
      Key
    </a>
    <a href="/draw"
      class:active={$page.url.pathname === '/draw'}>
      Draw
    </a>
    <a href="/decrypt"
      class:active={$page.url.pathname === "/decrypt"}>
      Decrypt
    </a>
  </nav>
</header>

<!-- CSS -->
<style>
  nav {
    display: flex;
    gap: 2.5rem;
  }

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
  a:hover {
    border-color: var(--clr-neutral-300);
  }

  a.active {
    border-color: var(--clr-accent-500);
    transition: border-color 0.4s;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--clr-neutral-100);
  }
</style>