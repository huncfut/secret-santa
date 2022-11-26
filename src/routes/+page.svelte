<script lang="ts">
    import PH from "$lib/components/PageHeading.svelte";
    import Section from "$lib/components/Section.svelte";
</script>

<Section class="container">
  <PH>Welcome to secret santa!</PH>
  <p>
    Have you ever wanted to draw secret santa for everybody
    in your party, without having somebody know who got who?
    Here comes the solution! Make every person create their
    unique key pair: public and private. Than add all the
    people with their public keys to the drawing, shuffle,
    and there you go! Every person will get a unique ciphered
    message, that only they will be able to decipher using
    their private key!
  </p>
</Section>

<style>
  p {
    text-indent: 2rem;
    text-align: justify;
  }
</style>