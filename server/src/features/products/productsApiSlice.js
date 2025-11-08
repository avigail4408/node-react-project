import apiSlice from "../../app/apiSlice";

const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({

        getAllProduct: build.query({
            query: () => ({
                url: "/api/product/products"
            }),
            providesTags: ["products"]
        }),

        getById: build.query({
            query: (id) => ({
                url: `/api/product/${id}`,
            })
        }),

        addProduct: build.mutation({
            query: (product) => ({
                url: "/api/product/addProduct",
                method: "POST",
                body: product
            }),
            invalidatesTags: ["products"]
        }),

        updateProduct: build.mutation({
            query: (product) => ({
                url: "/api/product/updateProduct",
                method: "PUT",
                body: product
            }),
            invalidatesTags: ["products"]
        }),

        deleteProdect: build.mutation({
            query: ({name}) => ({
                url: "/api/product/deletProduct",
                method: "DELETE",
                body: {name}
            }),
            invalidatesTags: ["products"]
        }),

        deleteAllProdect: build.mutation({
            query: () => ({
                url: "/api/product/deletAllProduct",
                method: "DELETE",
            }),
            invalidatesTags: ["products"]
        }),
    })
})
export const { useGetAllProductQuery, useGetByIdQuery, useAddProductMutation, useDeleteAllProdectMutation, useDeleteProdectMutation, useUpdateProductMutation } = productsApiSlice
