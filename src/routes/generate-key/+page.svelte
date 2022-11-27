<script lang="ts">
  import Section from "$lib/components/Section.svelte"
  import PH from "$lib/components/PageHeading.svelte"
  import Card from "$lib/components/Card.svelte"
  import crypto from "asymmetric-crypto"

  const { subtle } = globalThis.crypto

  const publicExponent = new Uint8Array([1, 0, 1])

  let key: { 
    publicKey: string | null,
    secretKey: string | null
  }

  const keyGen = async () => {
    key = crypto.keyPair()
  }

</script>

<Section>
  <PH>Key Generation</PH>
  {#if key}
  <Card>
    <div>
      <h1>Public key:</h1>
      <textarea rows="2">{key.publicKey}</textarea>
    </div>
    <div>
      <h1>Private key:</h1>
      <textarea rows="2">{key.secretKey}</textarea>
    </div>
  </Card>
  {/if}
  <button on:click={keyGen}>Generate</button>
</Section>

<style>
  textarea {
    outline: none;
    resize: none;
    flex-grow: 1;
  }
  h1 {
    font-size: 1.5rem;
  }
  div {
    padding: 0.5rem;
    gap: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
  }
</style>