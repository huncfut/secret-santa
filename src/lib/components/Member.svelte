<script lang="ts">
  export let name: string
  export let key: string
</script>

<card>
  <span>{name}</span>
  <span>{key.slice(0, 4)}</span>
</card>

<style>
  card {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-grow: 1;
    align-items: center;

    min-width: 16ch;
    padding: 1rem;

    border-radius: 2px;    
    background-color: var(--clr-neutral-300);
  }
</style>