<template>
    <header>
        Kroger Store #408
        <img alt="Vue logo" src="../assets/starbux.png">
       barista certification
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss">
    header {
        background-image: url($wood);
        display: flex;
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        text-transform: uppercase;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        color: $white;
        // border: .1em solid $black;
    }

    header img {
        width: 13%;
        align-self: center;
        padding: 1em;
    }
</style>
