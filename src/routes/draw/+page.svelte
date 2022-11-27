<script lang="ts">
  import MemberCard from "$lib/components/MemberCard.svelte";
  import Section from "$lib/components/Section.svelte"
  import PH from "$lib/components/PageHeading.svelte"
  import TextInput from "$lib/components/TextInput.svelte";
  import Form from "$lib/components/Form.svelte"

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

  const draw = () => {

  }
</script>

<!-- HTML -->
<Section>
  <PH>Add your party members!</PH>
  <Form onSubmit={addMember}>
    <TextInput bind:value={data.name}
      name="Name"
      id="name"
      error={errors.name}/>
    <TextInput bind:value={data.key}
      name="Public Key"
      id="key"
      error={errors.key}/>
  </Form>
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
  party {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  button {
    padding-inline: 1rem;
    padding-block: 0.25rem;

    border: 1px solid var(--clr-neutral-500);
    background-color: var(--clr-neutral-300);
    border-radius: 4px;

    transition: border-color 0.2s;
  }
  button.error {
    border-color: var(--clr-primary-500);
  }

</style>