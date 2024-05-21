/* const grid = new gridjs.Grid({
    columns: ['Title', 'Director', 'Producer'],
    server: {
      url: 'https://swapi.dev/api/films/',
      then: data => data.results.map(movie => 
        [
          movie.title,
          movie.director,
          movie.producer
        ]
      )
    } 
  }).render(document.getElementById("wrapper")); */



  const grid = new gridjs.Grid({
    search:true, // busqueda del lado del cliente   
    pagination: {
      limit: 5, // Number of rows per page
    },
    columns: ['Id', 'Name', 'Email', 'Gender', 'Status'],
    server: {
      url: 'https://gorest.co.in/public/v2/users',
      then: data => {
        console.log(data); // Log the raw data from the API
        return data.map(item => [
          item.id,
          item.name,
          item.email,
          item.gender,
          item.status
        ]);
      }
    }   
  }).render(document.getElementById("wrapper"));
  