export const requestStars = payload => ({
    type: 'REQUEST_STARS',
    payload
});

export const createStar = payload => ({
    type: 'CREATE_STAR',
    payload
});

export const receiveStar = payload => ({
    type: 'RECEIVE_STAR',
    payload
});

export const receiveStars = payload => ({
    type: 'RECEIVE_STARS',
    payload
});


export const deleteStar = payload => ({
    type: 'DELETE_STAR',
    payload
});

export const removeStar = payload => ({
    type: 'REMOVE_STAR',
    payload
});
