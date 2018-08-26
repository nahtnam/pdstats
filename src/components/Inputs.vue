<template>
  <div>
    <div class="columns">
      <div class="column is-one-half">
        <div class="field">
          <div class="control is-expanded">
            <input
              type="text"
              v-model="username"
              @keyup.enter="redirectUsername"
              id="username"
              placeholder="Enter a Username"
              class="input is-large has-text-centered"
              autocomplete="off"
            >
          </div>
        </div>
        <p class="help" v-if="username">Hit enter to search for {{ username }}.</p>
        <p class="help" v-else>Please enter a username.</p>
      </div>
      <div class="column is-one-half">
        <div class="field">
          <div class="control is-expanded">
            <input
              type="text"
              v-model="bet"
              @keypress="strip"
              @keyup.enter="redirectBet"
              id="bet"
              placeholder="Enter a Bet ID"
              class="input is-large has-text-centered"
              autocomplete="off"
            >
          </div>
        </div>
        <p class="help" v-if="bet">Hit enter to search for {{ bet }}.</p>
        <p class="help" v-else>Please enter a bet ID.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'inputs',

  data() {
    return {
      username: '',
      bet: '',
    };
  },

  methods: {
    strip() {
      const { event } = window;
      const charCode = (event.which) ? event.which : event.keyCode;
      if (
        (charCode > 31 && (charCode < 48 || charCode > 57)) &&
        charCode !== 46 && charCode !== 44 && charCode !== 35
      ) {
        event.preventDefault();
        return false;
      }
      return true;
    },

    redirectUsername() {
      window.location = `/u/${this.username}`;
    },

    redirectBet() {
      const bet = this.bet.replace(/\D/g, '');
      window.location = `/b/${bet}`;
    },
  },
};
</script>
