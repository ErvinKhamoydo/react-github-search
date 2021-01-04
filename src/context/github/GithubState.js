import {useReducer, useState} from 'react';
import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from '../actionTypes';
import { GitHubContext } from './githubContext';
import { githubReducer } from './githubReducer';

export const GitHubState = ({children}) => {
   const initialState = {
      user: {},
      users: [],
      loading: false,
      repos: []
   }

   const [state, dispatch] = useReducer(githubReducer, initialState);

   const search = async value => {
      setLoading();
      //TODO:

      dispatch({
         type: SEARCH_USERS,
         payload: []
      })
   }

   const getUser = async name => {
      setLoading();
      //TODO:

      dispatch({
         type: GET_USER,
         payload: []
      })
   }

   const getRepos = async name => {
      setLoading();
      //TODO:

      dispatch({
         type: GET_REPOS,
         payload: []
      })
   }

   const clearUsers = () => {
      dispatch({
         type: CLEAR_USERS
      })
   }

   const setLoading = () => {
      dispatch({
         type: SET_LOADING
      })
   }

   const {user, users, repos, loading} = state;

   return (
      <GitHubContext.Provider value={{
         search,
         getUser,
         getRepos,
         clearUsers,
         setLoading,
         user, 
         users, 
         repos, 
         loading
      }}>
         {children}
      </GitHubContext.Provider>
   )
}