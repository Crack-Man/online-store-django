<template>
    <item-list-component :items="items"/>
</template>

<script>
import ItemListComponent from "@/components/ItemListComponent.vue";
import axios from "axios";
import api from "@/config/api";

export default {
    name: 'StoreView',

    components: {ItemListComponent},

    data: () => ({
        items: []
    }),

    methods: {
        async getItems() {
            const res = await axios.get(api.getItems);
            this.items = res.data;
        }
    },

    mounted() {
        this.getItems();
    }
}
</script>
