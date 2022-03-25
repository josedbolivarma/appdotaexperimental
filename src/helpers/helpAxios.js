
    const getData = (url) => {
        axios.get(url)
            .then(response => {
                setRegistro(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }


export default getData;