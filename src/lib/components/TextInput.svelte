<script lang="ts">
  export let value = ""
  export let name = ""
  export let id = ""
  export let error = false
</script>

<label>
  <h1>{name}</h1>
  <input type="text"
  {id}
  class:error
  bind:value
  />
</label>

<style>
  label {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  input {
    flex-grow: 1;
    height: 100%;

    background-color: var(--clr-neutral-100);

    padding-inline: 0.25rem;
    padding-top: 0.75rem;

    border: 0px;
    border-bottom: 2px solid var(--clr-neutral-300);
    transition: border-color 0.2s;
  }
  input:focus, input:hover {
    border-color: var(--clr-neutral-500);
  }
  input.error {
    border-color: var(--clr-primary-500);
  }
  input.error:focus, input.error:hover {
    border-color: var(--clr-primary-800);
  }
</style>