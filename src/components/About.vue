<template>
  <p>
    Welcome to the Starbucks Barista certification quiz! Below, you will need to answer all <b>ten</b> questions correctly in order to pass. Once you have passed, you will be prompted to print a certificate to serve as proof you have taken and passed this quiz. <br> <br>
    Good luck!
  </p>
</template>

<script>
export default {
  name: 'About',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  p {
    background-color: $white;
    margin: 20vw auto;
    color: $black;
    width: 50vw;
    padding: 1em;
    border: .05em solid $black;
    font-size: 1.5vw;
    text-align: center;
  }
</style>
