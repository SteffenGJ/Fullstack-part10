import { useQuery } from "@apollo/client";
import { SINGLE_REP } from "../graphql/queries";

const useReviews = (variables) => {
    const { data, loading, fetchMore, ...result } = useQuery(SINGLE_REP, {
      variables,
      fetchPolicy: 'cache-and-network'
    });
  
    const handleFetchMore = () => {
      const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
  
      if (!canFetchMore) {
        return;
      }
  
      fetchMore({
        variables: {
          after: data.repositories.pageInfo.endCursor,
          ...variables,
        },
      });
    };
  
    return {
      repositories: data?.repositories,
      fetchMore: handleFetchMore,
      loading,
      ...result,
    };
  };

  export default useReviews;