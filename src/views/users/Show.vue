<template>
  <div class="about">
    <h1>Coming Soon</h1>
  </div>
</template>

<script>
import request from 'graphql-request';

export default {
  async created() {
    const { username } = this.$route.params;
    const query = `{
      user(name: "${username}") {
        id
        name
        createdAt
        statistic {
          bets
          wins
          losses
          amount
          profit
        }
        messageCount
        betList(limit: 25) {
          iid
          createdAt
          amount
          payoutMultiplier
          condition
          target
          result
          payout
        }
      }
    }`;
    const response = await request('https://api.primedice.com/graphql', query);
    const { user } = response;
    console.log(user);
  },
};
</script>
