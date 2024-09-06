<template>
    <div class="auth">
        <h2 class="auth__title">Авторизация</h2>
        <form @submit.prevent="submit" class="auth__form">
            <div class="auth__form-group">
                <label for="username" class="auth__label">Логин:</label>
                <input type="username" id="login" v-model="user.username" class="auth__input" required/>
            </div>
            <div class="auth__form-group">
                <label for="password" class="auth__label">Пароль:</label>
                <input type="password" id="password" v-model="user.password" class="auth__input" required/>
            </div>
            <button type="submit" class="auth__btn">Войти</button>
            <p class="auth__error">{{ authError }}</p>
        </form>
        <p class="auth__text">Ещё не создали аккаунт?
            <router-link to="/register" class="auth__link">Зарегистрироваться</router-link>
        </p>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    data() {
        return {
            user: {
                username: '',
                password: '',
            },
        };
    },
    methods: {
        ...mapActions(["loginUser"]),

        submit() {
            if (!this.usernameError && !this.passwordError) {
                this.loginUser(this.user);
            }
        },
    },

    computed: {
        ...mapGetters(["authError", "userIsAuthorized"]),
    },

    watch: {
        userIsAuthorized(newValue) {
            if (newValue) {
                this.$router.push("/");
            }
        }
    }
};
</script>

<style scoped lang="scss">
.auth {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;

    &__title {
        text-align: center;
    }

    &__form-group {
        margin-bottom: 20px;
    }

    &__label {
        display: block;
        margin-bottom: 5px;
    }

    &__input {
        width: calc(100% - 20px);
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    &__btn {
        width: 100%;
        padding: 10px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background-color: #0056b3;
        }
    }

    &__text {
        text-align: center;
        margin-top: 10px;
    }

    &__link {
        color: #007bff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    &__error {
        color: red;
    }
}
</style>