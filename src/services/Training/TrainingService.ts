
export const TrainingService = () => {
    const url = "https://arenacross.herokuapp.com/posts/get"

    return fetch(url, {
        method: 'GET'
    })
    // .then(response => response.json())
    // .then(data => {
    //     return data.response;
    // })
    // .catch()
}