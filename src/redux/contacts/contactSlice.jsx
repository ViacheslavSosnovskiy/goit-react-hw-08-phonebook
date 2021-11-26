import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
    reducerPath:  'contactApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6199033d3fc322001722f610.mockapi.io/api/v1/'
    }),
    tagTypes: ['Contact'],
    endpoints: builder => ({
        fetchContact: builder.query({
            query: () => `/contacts`,
        providesTags: ['Contact'],
        }),
        deleteContact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact']
        }),
        createContact: builder.mutation({
            query: ({name, number}) => ({
                url: '/contacts',
                method: 'POST',
                body: {
                    name,
                    number,
                }
            }),
            invalidatesTags: ['Contact']
        })
    }),
});

export const {useFetchContactQuery, useDeleteContactMutation, useCreateContactMutation} = contactApi 