<template>
    <div>
        <div class="item" v-if="item">
            <img :src="item.image" alt="Item Image" class="item__image">
            <h1 class="item__title">{{ item.title }}</h1>
            <p class="item__price">{{ item.price }} руб</p>
            <p class="item__description">{{ item.description }}</p>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';
import {useRoute} from 'vue-router';
import api from "@/config/api";

const route = useRoute();
const item = ref(null);

onMounted(async () => {
    const itemId = route.params.id;
    const res = await axios.get(api.getItemById + itemId);
    item.value = res.data;
});
</script>

<style scoped lang="scss">
.item {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;

    &__image {
        width: 100%;
        height: auto;
    }

    &__title {
        font-size: 18px;
        margin-top: 1rem;
    }

    &__description {
        font-size: 16px;
        margin-top: 1rem;
    }

    &__price {
        font-size: 16px;
        font-weight: bold;
        margin-top: 1rem;
        color: #007bff;
    }
}
</style>