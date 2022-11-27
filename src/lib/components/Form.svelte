<script lang="ts">
  export let onSubmit = (e: SubmitEvent) => {}
</script>

<form on:submit|preventDefault={onSubmit}>
  <slot />
  <div>
    <button>Submit</button>
  </div>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  form > div {
    display: flex;
    justify-content: space-around;
  }
  button {
    height: 100%;
    padding: 0.25rem 1.25rem;
    background-color: var(--clr-accent-300);
    border: 1px solid var(--clr-accent-500);
    border-radius: 4px;
    transition: opacity 0.15s;
  }
  button:hover {
    cursor: pointer;
    opacity: 70%;
  }
</style>