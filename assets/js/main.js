const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

//  Fetch nos retorna uma promise para lidar com assincronismo no javascript
// TRY = faça alguma coisa
// Catch = se der erro
// finally =  independente se der certo ou errado

/*try {

} catch(error){

} finally {

}*/

 fetch(url).then(function (response) {
        return response.json()
    })
    .then(function(jsonBody){
        console.log(jsonBody)
    })
    .catch(function (error) {
        console.error(error)
    })
    .finally(function (){
        console.log('Requisição Concluída! Haha')
    })

