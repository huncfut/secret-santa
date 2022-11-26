<script lang="ts">
  export let deleteFunc = () => {}
  export let { name, key }: MemberData = {
    name: "",
    key: ""
  };
</script>

<card>
  <h4>{name}</h4>
  <p>{`${key.slice(0, 4)}...${key.slice(key.length - 5)}`}</p>
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
  h4 {
    font-size: 2rem;
  }
  p {
    font-family: monospace;
    opacity: 60%;
  }
</style>