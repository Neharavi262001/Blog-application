import { apiSlice } from "./apiSlice";
const USERS_BACKEND_URL='/api/user'

export const userApiSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(credentials)=>({
               url:`${USERS_BACKEND_URL}/login` ,
               method:'POST',
               body:credentials
            })

        }),
        register:builder.mutation({
            query:(credentials)=>({
               url:`${USERS_BACKEND_URL}/register` ,
               method:'POST',
               body:credentials
            })
        }),



        logout:builder.mutation({
            query:()=>({
                url:`${USERS_BACKEND_URL}/logout` ,
                method:'POST',
            })
        }),

        getAllPosts:builder.query({
            query:()=>({
                url:`${USERS_BACKEND_URL}`,
                method: 'GET',
            }),
            providesTags:['Posts']
        }),
        createPost:builder.mutation({
            query:(newPost)=>({
                url:`${USERS_BACKEND_URL}/post` ,
                method:'POST',
                body:newPost

            }),
            invalidatesTags:['Posts']
        }),
        getUserPosts:builder.query({
            query:()=>({
                url:`${USERS_BACKEND_URL}/post`,
                method: 'GET',
            }),
            invalidatesTags:['Posts']
        }),
    })
})


export const {useLoginMutation,
    useRegisterMutation,
    useLogoutMutation,
    useGetAllPostsQuery,
    useCreatePostMutation,
    useGetUserPostsQuery
}=userApiSlice