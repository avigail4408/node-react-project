import apiSlice from "../../app/apiSlice";

const UserApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({

        login: build.mutation({
            query: (user) => ({
                url: "/api/user/login",
                method: "POST",
                body: user

            })
        }),

        register: build.mutation({
            query: (user) => ({
                url: "/api/user/register",
                method: "POST",
                body: user

            })
        })

    })
})

export const { useRegisterMutation,useLoginMutation } = UserApiSlice