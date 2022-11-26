<section>
  <slot/>
</section>

<style>
  section {
  --padding: 1rem;
  --max-width: 60ch;

  padding: 1rem 0;
  max-width: min(var(--max-width), 100% - (2 * var(--padding)));
  margin-inline: auto;
}
</style>