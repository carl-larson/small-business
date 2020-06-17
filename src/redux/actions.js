const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}

export const fetchMakes = () => {
    fetch(url)
        .then(response => response.json())
        .then((response) => {
            // console.log("FETCHING", response.Results)
            return {
                type: 'FETCH_MAKES',
                value: response.Results
            }
        })
}