import {defineStore} from 'pinia'
import axios from "@/libs/axios.js";

export const useProductsStore = defineStore({
    id: 'shopStore',

    state: () => ({
        categories: [],
        products: [],
    }),

    actions: {
        async getCategories() {
            await axios.get('/category').then(response => this.categories = response.data)
        },

        async getCategoryProducts(id, page, perPage) {
            return await axios.get(`/category/${id}/products?page=${page}&per_page=${perPage}`).then((response) => {
                this.products = response.data.products
                return response
            })
        },
    },
})