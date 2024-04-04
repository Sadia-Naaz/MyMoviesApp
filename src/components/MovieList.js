const MovieList =({movies})=>{
 

const columns = movies.length > 0 ? Object.keys(movies[0]):[];
    return( 
      <div className="movie-list-container">
        <table >
            <thead> 
               <tr>
                {columns.map((coulmn)=>{
                    return(
                        <th>{coulmn}</th>
                    )
                })}
               </tr> 
            </thead>
          <tbody>
            {movies.map((movie)=>{
                return(
                    <tr>
                        {
                            columns.map((coulmn)=>{
                                return(
                                    <td>{movie[coulmn]}</td>
                                )
                            })
                        }
                    </tr>
                )
            })}
          </tbody>
        </table>
        </div>
    )
  
}
export default MovieList;