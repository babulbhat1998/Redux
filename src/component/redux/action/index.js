export const FETCH_PENDING = 'FETCH_PENDING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchpendingUser = () => {
    return {
        type : FETCH_PENDING
    }
}

export const fetchsuccessUser = (user) => {  
      
    return{
        type : FETCH_SUCCESS,
        payload: user
    }
}

export const fetcherrorUser = () => {
    return{
        type : FETCH_ERROR
    }
}

