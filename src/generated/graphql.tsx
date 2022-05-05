import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded date */
  ISO8601Date: any;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

export type GqlBird = {
  __typename?: 'Bird';
  birthday?: Maybe<Scalars['Int']>;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  records?: Maybe<Array<GqlRecord>>;
  updatedAt: Scalars['ISO8601DateTime'];
};

export type GqlMutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type GqlQuery = {
  __typename?: 'Query';
  /** Find a bird by ID */
  bird: GqlBird;
};

export type GqlQueryBirdArgs = {
  id: Scalars['ID'];
};

export type GqlRecord = {
  __typename?: 'Record';
  bird: GqlBird;
  bodyWeight?: Maybe<Scalars['Float']>;
  createdAt: Scalars['ISO8601DateTime'];
  date?: Maybe<Scalars['ISO8601Date']>;
  foodWeight?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  note?: Maybe<Scalars['String']>;
  roomTemperature?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['ISO8601DateTime'];
  weather?: Maybe<Scalars['String']>;
};

export type GqlRecordListQueryVariables = Exact<{ [key: string]: never }>;

export type GqlRecordListQuery = {
  __typename?: 'Query';
  bird: { __typename?: 'Bird'; name?: string | null };
};

export const RecordListQueryDocument = gql`
  query RecordListQuery {
    bird(id: 1) {
      name
    }
  }
`;

/**
 * __useRecordListQuery__
 *
 * To run a query within a React component, call `useRecordListQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecordListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecordListQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecordListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GqlRecordListQuery,
    GqlRecordListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GqlRecordListQuery, GqlRecordListQueryVariables>(
    RecordListQueryDocument,
    options,
  );
}
export function useRecordListQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GqlRecordListQuery,
    GqlRecordListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GqlRecordListQuery, GqlRecordListQueryVariables>(
    RecordListQueryDocument,
    options,
  );
}
export type RecordListQueryHookResult = ReturnType<typeof useRecordListQuery>;
export type RecordListQueryLazyQueryHookResult = ReturnType<
  typeof useRecordListQueryLazyQuery
>;
export type RecordListQueryQueryResult = Apollo.QueryResult<
  GqlRecordListQuery,
  GqlRecordListQueryVariables
>;
