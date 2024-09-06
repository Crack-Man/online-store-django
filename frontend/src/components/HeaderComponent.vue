<template>
    <header class="header">
        <router-link
            class="header__name-link"
            :to="{ path: '/' }"
        >
            Online Store
        </router-link>
        <div v-if="userIsAuthorized" class="header__cta">
            <div class="header__cta-text header__cta-text--username">{{ user.username }}</div>
            <div class="header__cta-text header__cta-text--logout" @click="logoutUser">Выйти</div>
        </div>
        <div v-else class="header__cta">
            <router-link to="/login" class="header__cta-link header__cta-link--login">Войти</router-link>
            <router-link to="/register" class="header__cta-link header__cta-link--signup">Зарегистрироваться</router-link>
        </div>
    </header>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    methods: {
        ...mapActions(["logoutUser"]),
    },

    computed: {
        ...mapGetters(["user", "userIsAuthorized"])
    },
}
</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #f6594b;
    border-bottom: 2px solid #d9574f;

    &__name-link {
        font-size: 28px;

        &, &:active, &:visited {
            color: white;
            text-decoration: none;
        }
    }

    &__cta {
        display: flex;
        gap: 20px;
    }

    &__cta-text {
        color: #fff;
        padding: 10px 20px;
    }

    &__cta-link {
        text-decoration: none;
        color: #fff;
        padding: 10px 20px;
        transition: color 0.3s;

        &:hover {
            color: #c6c6c6;
        }
    }

    &__cta-text--logout {
        cursor: pointer;
    }
}
</style>