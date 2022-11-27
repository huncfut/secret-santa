<script lang="ts">
  import Card from "$lib/components/Card.svelte"
  import PH from "$lib/components/PageHeading.svelte"
  import Section from "$lib/components/Section.svelte"
  import TextInput from "$lib/components/TextInput.svelte"
  import Form from "$lib/components/Form.svelte"


  let message: string
  let key: string

  let deciphered: string

  let badSubmit = false
  $: errors = {
    message: badSubmit && !message,
    key: badSubmit && !key
  }

  const onSubmit = () => {
    badSubmit = !message || !key
    if(badSubmit) return
    console.log("hello")
  }
</script>

<Section>
  <PH>Decrypt your message!</PH>
  <Form {onSubmit}>
    <TextInput name="Message"
      id="message"
      bind:value={message}
      error={errors.message}/>
    <TextInput name="Private Key"
      id="key"
      bind:value={key}
      error={errors.key}/>
  </Form>
  {#if deciphered}
  <Card>
    <p>{deciphered}</p>
  </Card>
  {/if}
</Section>