<script lang="ts">
  import MemberCard from "$lib/components/MemberCard.svelte";
  import Section from "$lib/components/Section.svelte"
  import PH from "$lib/components/PageHeading.svelte"
  import TextInput from "$lib/components/TextInput.svelte";

  // State
  let data: MemberData = {
    name: "",
    key: ""
  }
  let party: MemberData[] = []

  let badSubmit = false
  $: errors = {
    name: badSubmit && !data.name,
    key: badSubmit && !data.key
  }

  // Form stuff
  const addMember = (e: SubmitEvent) => {
    // Error Check
    badSubmit = !data.name || !data.key
    if(badSubmit) return

    party = [...party, data]
    data = { name: "", key: "" }
  }
</script>

<!-- HTML -->
<Section>
  <PH>Add your party members!</PH>
  <form on:submit|preventDefault={addMember}>
    <TextInput bind:value={data.name}
      name="Name"
      id="name"
      error={errors.name}/>
    <TextInput bind:value={data.key}
      name="Public Key"
      id="key"
      error={errors.key}/>
    <div>
      <button>
        Submit
      </button>
    </div>
  </form>
</Section>
<Section>
  <party>
    {#each party as member}
      <MemberCard {...member} />
    {/each}
  </party>
</Section>
<Section>
  <button>Draw!</button>
</Section>

<!-- CSS -->
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
  party {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

</style>