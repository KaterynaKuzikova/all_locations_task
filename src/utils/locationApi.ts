import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Location {
    id: number;
    createdAt: string;
    name: string;
    userCount: number;
    description: string;
    views: number;
  }

  export const locationApi = createApi({
    reducerPath: 'locationApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6033c4d8843b15001793194e.mockapi.io/api' }),
    endpoints: builder => ({
      getLocations: builder.query<Location[], void>({
        query: () => 'locations',
        transformResponse: (response: Location[]) => {
          return response.map(location => ({
            ...location,
            views: location.views || 0,
          }));
        },
      }),
    }),
  });
  
  export const { useGetLocationsQuery } = locationApi;
