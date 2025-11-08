import apiSlice from "../../app/apiSlice";

const basketApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAll: build.query({
            query: () => ({
                url: "/api/basket/"
            }),
            providesTags: ["basket"]
        }),
        addProductToBasket: build.mutation({
            query: ({ productID }) => ({
                url: "/api/basket/addProductToBasket",
                method: "POST",
                body: { productID }
            }),
            invalidatesTags: ["basket"]
        }),
        deleteProduct: build.mutation({
            query: ({productID}) => ({
                url: "/api/basket/deleteOne",
                method: "DELETE",
                body: {productID}
            })
            ,
            invalidatesTags: ["basket"]
        }),
        deleteAllProduct: build.mutation({
            query: () => ({
                url: "/api/basket/deleteAll",
                method: "DELETE"
            })
            ,
            invalidatesTags: ["basket"]
        }),
        getById: build.query({
            query: ({ id }) => ({
                url: `/api/basket/${id}`
            })
            ,
            invalidatesTags: ["basket"]
        }),
        plusOne: build.mutation({
            query: ({ productID }) => ({
                url: "/api/basket/plusOne",
                method: "PUT",
                body: { productID }
            })
            ,
            invalidatesTags: ["basket"]
        }),
        minusOne: build.mutation({
            query: ({ productID }) => ({
                url: "/api/basket/minusOne",
                method: "PUT",
                body: { productID }
            })
            ,
            invalidatesTags: ["basket"]
        })
    })
})
export const { useGetAllQuery, useGetByIdQuery, useAddProductToBasketMutation, usePlusOneMutation, useDeleteProductMutation, useDeleteAllProductMutation, useMinusOneMutation } = basketApiSlice;