
import "../styles/app.scss"
const GenreFilter=({genres})=>{
  
    const filterGenre=(genre)=>{
    console.log(`${genre} is clicked`);
    }
    return(
    
        <div className="genre-filter">
           <div> <h1>Filter By Genre</h1></div>
           {
            genres.map((gen)=>{
             return(
               
                <button onClick={()=>filterGenre(gen)} >{gen}</button>
               
             )
            })
           }
           
            
        </div>
    )
}
export default GenreFilter