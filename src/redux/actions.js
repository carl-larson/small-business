
export const addBusiness = (business) => {
        console.log("Adding business: ", business);
        return {
        type: 'ADD_BUSINESS',
        value: business

    }
}

export const removeBusiness = (index) => {
    return {
        type: 'REMOVE_BUSINESS',
        value: index
    }
}

export const login = () => {
    return {
        type: 'LOG_IN',
        value: true
    }
}

// export const fetchMakes = () => {
//     fetch(url)
//         .then(response => response.json())
//         .then((response) => {
//             // console.log("FETCHING", response.Results)
//             return {
//                 type: 'FETCH_MAKES',
//                 value: response.Results
//             }
//         })
// }