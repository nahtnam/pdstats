<template>
  <div class="home">
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <a href="/"><img src="../assets/images/logo.svg" width="128" class="no-pad-bottom"></a>
          <h1 class="title is-1">
            Primedice Stats
          </h1>
          <h2 class="subtitle is-3">
            share your wins
          </h2>
          <div class="content">
            <h2>
              <strong>
                The PrimeDice API has changed and we are waiting for information on the new one.
              </strong>
            </h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Inputs from '@/components/Inputs.vue';

export default {
  name: 'home',
  components: {
    Inputs,
  },
};
</script>
