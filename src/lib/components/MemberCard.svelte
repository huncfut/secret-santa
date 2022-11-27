<script lang="ts">
  import Card from "$lib/components/Card.svelte"

  export let { name, key }: MemberData = {
    name: "",
    key: ""
  };

  $: shortKey = `${key.slice(0, 4)}...${key.slice(key.length - 5)}`
</script>

<Card>
  <h1>{name}</h1>
  <p>{shortKey}</p>
</Card>

<style>
  h1 {
    font-size: 2rem;
  }
  p {
    font-family: monospace;
    opacity: 60%;
  }
</style>