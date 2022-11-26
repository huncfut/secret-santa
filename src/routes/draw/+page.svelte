<script lang="ts">
  import MemberCard from "$lib/components/MemberCard.svelte";

  // State
  let badSubmit = false
  $: errors = {
    name: badSubmit && !data.name,
    key: badSubmit && !data.key
  }
  let data: MemberData = {
    name: "",
    key: ""
  }
  let party: MemberData[] = [{
    name: "Kuba",
    key: "97as678fg327ed9"
  }, {
    name: "wwwwwwwwwwwwww",
    key: "7gy9a687as9"
  }, {
    name: "Dupa",
    key: "dasy98g7iuh3"
  }, {
    name: "Jeff",
    key: "dskhasudk"
  }]

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
<section>
  <h2>Add your party members!</h2>
  <form on:submit|preventDefault={addMember}>
    <label>
      Name
      <input type="text"
        name="name"
        class:error={errors.name}
        bind:value={data.name}
        />
    </label>
    <label>
      Public Key
      <input type="text"
        name="key"
        class:error={errors.key}
        bind:value={data.key}
        />
    </label>
    <div>
      <button>
        Submit
      </button>
    </div>
  </form>
</section>
<section>
  <members>
    {#each party as member}
      <MemberCard {...member} />
    {/each}
  </members>
</section>

<!-- CSS -->
<style>
  h2 {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  label {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  input {
    flex-grow: 1;
    background-color: var(--clr-neutral-100);
    border: 0px;
    border-bottom: 2px solid var(--clr-neutral-300);
    padding: 0.75rem;
    padding-bottom: 0;
    height: 100%;
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
  members {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

</style>