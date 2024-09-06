<template>
    <div class="items-grid">
        <router-link
            v-for="item in items" :key="item.id"
            class="item-card"
            :to="'item/' + item.id"
        >
            <div class="item-card__image">
                <img :src="item.image" class="item-card__img"  alt="">
            </div>
            <div class="item-card__details">
                <h3 class="item-card__title">{{ item.title }}</h3>
                <p class="item-card__price">{{ item.price }} руб</p>
            </div>
        </router-link>
    </div>
</template>

<script>

export default {
    props: ["items"],
}

</script>

<style scoped lang="scss">
.items-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
}

.item-card {
    display: block;
    width: 200px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 20px;
    transition: box-shadow 0.3s;
    text-decoration: none;

    &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }

    &__image {
        width: 100%;
        height: 150px;
        overflow: hidden;
    }

    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &__details {
        padding: 10px;
        text-align: center;
    }

    &__title {
        font-size: 18px;
        font-weight: bold;
        margin: 10px 0;
        color: #333;
    }

    &__price {
        font-size: 16px;
        color: #007bff;
        font-weight: bold;
        text-decoration: none;
    }
}
</style>