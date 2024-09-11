import { fetcherrorUser, fetchpendingUser, fetchsuccessUser } from "../redux/action";

export function fetchUsers() {
    return dispatch => {
      dispatch(fetchpendingUser());
      return fetch("http://localhost:8000/api/forminput/formvalue")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchsuccessUser(json));
          return json;
        })
        .catch(error => dispatch(fetcherrorUser(error)));
    };
  }

// Helper function for error handling
function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }