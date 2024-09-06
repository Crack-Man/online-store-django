import axios from "axios";
import api from "@/config/api";

export default {
    state: () => ({
        tokenAccess: localStorage.getItem("user-token-access") || "",
        tokenRefresh: localStorage.getItem("user-token-refresh") || "",
        userData: {},
        userAuthorizeStatus: false,
        messageAuthorize: "",
    }),

    actions: {
        getUserData(ctx, tokenAccess) {
            const header = {
                headers: {
                    Authorization: `Bearer ${tokenAccess}`,
                },
            };
            axios
                .get(api.getUser, header)
                .then((res) => {
                    ctx.commit("setUserData", res.data);
                    ctx.commit("setUserStatus", true);
                })
                .catch(() => {
                    ctx.dispatch("getAccessToken");
                });
        },

        loginUser(ctx, user) {
            axios
                .post(api.signin, user)
                .then((res) => {
                    ctx.commit("setTokens", res.data);
                    ctx.dispatch("checkTokens");
                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        ctx.commit("setMessageAuth", error.response.data.detail);
                    }
                })
                .finally(() => {
                });
        },

        logoutUser(ctx) {
            ctx.commit("clearTokens");
            ctx.dispatch("checkTokens");
        },

        getAccessToken(ctx) {
            axios
                .post(api.getToken, {
                    refresh: ctx.state.tokenRefresh,
                })
                .then((res) => {
                    ctx.commit("setTokens", res.data);
                    ctx.dispatch("getUserData", res.data.access);
                })
                .catch(() => {
                    ctx.commit("clearTokens");
                    ctx.commit("setUserStatus", false);
                });
        },

        checkTokens(ctx) {
            ctx.commit("initTokens");
            if (ctx.state.tokenAccess) {
                ctx.dispatch("getUserData", ctx.state.tokenAccess);
            } else if (ctx.state.tokenRefresh) {
                    ctx.dispatch("getAccessToken");
            } else {
                ctx.commit("setUserStatus", false);
            }
        },
    },

    mutations: {
        initTokens(state) {
            state.tokenAccess = localStorage.getItem("user-access-token") || "";
            state.tokenRefresh = localStorage.getItem("user-refresh-token") || "";
        },

        setTokens(state, { access: tokenAccess, refresh: tokenRefresh }) {
            localStorage.setItem("user-token-access", tokenAccess);
            localStorage.setItem("user-refresh-token", tokenRefresh);
        },

        clearTokens() {
            localStorage.removeItem("user-token-access");
            localStorage.removeItem("user-refresh-token");
        },

        setUserData(state, user) {
            state.userData = user;
        },

        setUserStatus(state, status) {
            state.userAuthorizeStatus = status;
        },

        setMessageAuth(state, message) {
            state.messageAuthorize = message;
        }
    },

    getters: {
        user(state) {
            return state.userData;
        },

        userIsAuthorized(state) {
            return state.userAuthorizeStatus;
        },

        authError(state) {
            return state.messageAuthorize;
        },
    }
}