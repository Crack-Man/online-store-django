<template>
    <div class="reg">
        <h2 class="reg__title">Регистрация</h2>
        <form @submit.prevent="submit" class="auth__form">
            <div class="reg__form-group">
                <label for="username" class="auth__label">Логин:</label>
                <input type="username" id="login" v-model="user.username" class="reg__input" required/>
                <p class="reg__error">{{ usernameError }}</p>
            </div>
            <div class="reg__form-group">
                <label for="password" class="reg__label">Пароль:</label>
                <input type="password" id="password" v-model="user.password" class="reg__input" required/>
                <p class="reg__error">{{ passwordError }}</p>
            </div>
            <div class="reg__form-group">
                <label for="email" class="reg__label">Email:</label>
                <input type="email" id="email" v-model="user.email" class="reg__input" required/>
                <p class="reg__error">{{ emailError }}</p>
            </div>
            <button type="submit" class="reg__btn">Войти</button>
        </form>
        <p class="auth__text">Уже есть аккаунт?
            <router-link to="/login" class="auth__link">Войти</router-link>
        </p>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import axios from "axios";
import api from "@/config/api";

export default {
    data() {
        return {
            user: {
                username: '',
                password: '',
                email: '',
            },
            usernameError: '',
            passwordError: '',
            emailError: '',
        };
    },
    methods: {
        ...mapActions([]),

        submit() {
            axios.post(api.register, this.user).then(res => {
                    if (res.status === 201) {
                        this.$router.push("/login");
                    }
                }
            ).catch(error => {
                if (error.response.status === 400) {
                    const data = error.response.data;
                    if (data.username) {
                        this.usernameError = data.username[0];
                    }
                    if (data.email) {
                        this.emailError = data.email[0];
                    }
                    if (data.password) {
                        this.passwordError = data.password[0];
                    }
                }
            });
        },
    },

    computed: {
        ...mapGetters([]),
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
.reg {
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