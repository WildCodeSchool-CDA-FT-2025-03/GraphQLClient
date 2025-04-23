import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Grapes = {
  __typename?: 'Grapes';
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  wines: Array<Wines>;
};

export type Mutation = {
  __typename?: 'Mutation';
  signup: Scalars['Boolean']['output'];
};


export type MutationSignupArgs = {
  data: UsersInput;
};

export type Query = {
  __typename?: 'Query';
  getAllWines: Array<Wines>;
};

export type UsersInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Wines = {
  __typename?: 'Wines';
  country: Scalars['String']['output'];
  description: Scalars['String']['output'];
  fruit: Scalars['String']['output'];
  grapes: Array<Grapes>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  price_range: Scalars['String']['output'];
  region: Scalars['String']['output'];
  shelf_life: Scalars['String']['output'];
  tanin: Scalars['String']['output'];
};

export type SignupMutationVariables = Exact<{
  data: UsersInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: boolean };

export type GetAllWinesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllWinesQuery = { __typename?: 'Query', getAllWines: Array<{ __typename?: 'Wines', fruit: string, id: number, name: string, region: string, tanin: string }> };


export const SignupDocument = gql`
    mutation Signup($data: UsersInput!) {
  signup(data: $data)
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const GetAllWinesDocument = gql`
    query GetAllWines {
  getAllWines {
    fruit
    id
    name
    region
    tanin
    fruit
  }
}
    `;

/**
 * __useGetAllWinesQuery__
 *
 * To run a query within a React component, call `useGetAllWinesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllWinesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllWinesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllWinesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllWinesQuery, GetAllWinesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllWinesQuery, GetAllWinesQueryVariables>(GetAllWinesDocument, options);
      }
export function useGetAllWinesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllWinesQuery, GetAllWinesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllWinesQuery, GetAllWinesQueryVariables>(GetAllWinesDocument, options);
        }
export function useGetAllWinesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllWinesQuery, GetAllWinesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllWinesQuery, GetAllWinesQueryVariables>(GetAllWinesDocument, options);
        }
export type GetAllWinesQueryHookResult = ReturnType<typeof useGetAllWinesQuery>;
export type GetAllWinesLazyQueryHookResult = ReturnType<typeof useGetAllWinesLazyQuery>;
export type GetAllWinesSuspenseQueryHookResult = ReturnType<typeof useGetAllWinesSuspenseQuery>;
export type GetAllWinesQueryResult = Apollo.QueryResult<GetAllWinesQuery, GetAllWinesQueryVariables>;