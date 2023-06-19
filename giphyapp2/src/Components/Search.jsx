import React, {useEffect, useState} from "react"; 

const Search = () => {
    
  const [gif, setGif] = useState(""); //first variable is what the user puts in, second variable is the api result
  const [searchResults, setSearchResults] = useState([]); //first variable is what the API gives back, and we set it in the 2nd variable
  const [selectedSearch, setSelectedSearch] = useState(""); //set what kind of search user wants (regular, trending, or random)

  //fetching data from the API
  async function handleGifSearch() {
    try {
        if(selectedSearch==="Regular"){
          const response = await fetch(
            `http://api.giphy.com/v1/gifs/search?q=${gif}&api_key=UMD4uLrpQMCG9KsLap8Ma0WPrtbrQ4UC`
          );
          const data = await response.json();
          setSearchResults(data.data); //getting the data from the API and putting it into our search results variable
        }

        if(selectedSearch==="Trending"){
          const response = await fetch(
            ` http://api.giphy.com/v1/gifs/trending?api_key=UMD4uLrpQMCG9KsLap8Ma0WPrtbrQ4UC`
          );
          const data = await response.json();
          setSearchResults(data.data); //getting the data from the API and putting it into our search results variable
        }
        //random will only return one single gif, not an array of gifs like trending & regular

        if(selectedSearch==="Random"){
          const response = await fetch(
            `http://api.giphy.com/v1/gifs/random?api_key=UMD4uLrpQMCG9KsLap8Ma0WPrtbrQ4UC`
          );
          const data = await response.json();
          setSearchResults([data.data]); //getting the data from the API and putting it into our search results variable
        }
        
    } catch (error) {
      console.log(error);
    }
  }

  //set our gif variable to whatever user types in
  function handleGif(event) { //event handler 
    setGif(event.target.value); //setting to the value of our event 
  }

  //set our selectedSearch variable to whatever the user selects from the drop down menu
  function searchType(event){
    setSelectedSearch(event.target.value);
  }

  // load trending gifs when the app starts
  useEffect(() => {
    async function loadTrendingGifs() {
      try {
        const response = await fetch(
          `http://api.giphy.com/v1/gifs/trending?api_key=UMD4uLrpQMCG9KsLap8Ma0WPrtbrQ4UC`
        );
        const data = await response.json();
        setSearchResults(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadTrendingGifs();
  }, []);
  
  return (
    <div>
      <h1>Search for a Gif!</h1>
      <input
        type="text"
        value={gif}
        onChange={handleGif}
        placeholder="Click and search a gif"
      />
      <button onClick={handleGifSearch}>Search</button>
      <select id="gif-type" onChange = {searchType}>
        <option value ="">Default</option>
        <option value ="Regular">Regular</option>
        <option value ="Trending">Trending</option>
        <option value ="Random">Random</option>
      </select>
      <p>
      </p>

      <div> 
        {searchResults.map((element) => (
          <img
            key={element.id}
            src={element.images.fixed_height.url}
            alt={element.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;

    
    // async function handleGifSearch(){
    //     //slides
    //     fetch(`http://api.giphy.com/v1/gifs/search?q=${gif}&api_key=UMD4uLrpQMCG9KsLap8Ma0WPrtbrQ4UC`)
    //     .then(response => response.json())
    //     .then(data => {
    //         setGif(data);
    //     }) 
    //     .catch(error => {
    //         console.log(error);
    //     })
    // }

//     function handleGif(event){
//      setGif(event.target.value);
//      }

//     return(
//         <div>
//             <h1> Search for a Gif  </h1>
//             <input
//                 type = "text"
//                 value = {gif}
//                 onChange = {handleGif}
//                 placeholder='Click and search a gif'
//             />

//             <button onClick={handleGifSearch}>Search</button>
//         </div>
//     );
// };

// export default Search;