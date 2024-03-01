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
        getUserPosts:builder.query({
            query:()=>({
                url:`${USERS_BACKEND_URL}/post`,
                method: 'GET',
            }),
            providesTags:['UserPosts']
        }),
        createPost:builder.mutation({
            query:(newPost)=>({
                url:`${USERS_BACKEND_URL}/post` ,
                method:'POST',
                body:newPost

            }),
            invalidatesTags:['Posts','UserPosts']
        }),
     
        getSinglePost:builder.query({
            query:(postId)=>({
                url:`${USERS_BACKEND_URL}/post/${postId}`,
                method: 'GET',
            }),
            invalidatesTags:['Posts']
        }),
        editPost:builder.mutation({
            query:(newPost,postId)=>({
                url:`${USERS_BACKEND_URL}/post/${postId}` ,
                method:'PUT',
                body:newPost
            }),
            invalidatesTags:['Posts','UserPosts']
        }),
        deletePost:builder.mutation({
            query:(postId)=>({
                url:`${USERS_BACKEND_URL}/post/${postId}` ,
                method:'DELETE',
            }),
            invalidatesTags:['Posts','UserPosts']
        }),
    })
})


export const {useLoginMutation,
    useRegisterMutation,
    useLogoutMutation,
    useGetAllPostsQuery,
    useCreatePostMutation,
    useDeletePostMutation,
    useEditPostMutation,
    useGetUserPostsQuery,
    useGetSinglePostQuery,
    
}=userApiSlice