<template>
    <ul class="main-menu">
        <li v-for="item in GET_MAIN_MENU" :key="item.name" class="main-menu__item" @click="menuItemClick(item)">
            <span v-text="item.verbose" />
        </li>
    </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "MainMenu",
    computed: {
        ...mapGetters(["GET_MAIN_MENU"]),
    },
    methods: {
        menuItemClick(item) {
            this.$router.push({ name: item.name });
        },
    },
};
</script>

<style lang="scss" scoped>
.main-menu {
    list-style-type: none;
    padding: 0;
    margin: 0;

    .main-menu__item {
        border-radius: 0.3em;
        background: #383838;
        box-shadow: 0.2em 0.2em 0.3em #303030, -0.2em -0.2em 0.3em #404040;
        cursor: pointer;
        transition: 0.5s;
        padding: 0.5em;

        &:hover {
            opacity: 0.6;
        }

        &:not(:last-child) {
            margin-bottom: 0.5em;
        }
    }
}
</style>
