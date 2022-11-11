//import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {

const {error, data, loading} = useQuery(ALL_REPOSITORIES);

console.log(data);

if (error) {
    console.log("SOMETHING WENT WRONG");
}

if (loading) {
    console.log(loading);
}



};

export default useRepositories;