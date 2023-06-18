import React, {useState} from "react"; 

const Search = () => {
    
  const [gif, setGif] = useState(""); //first variable is what the user puts in, second variable is the api result
  const [searchResults, setSearchResults] = useState([]); //first variable is what the API gives back, and we set it in the 2nd variable

  //fetching data from the API
  async function handleGifSearch() {
    try {
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/search?q=${gif}&api_key=UMD4uLrpQMCG9KsLap8Ma0WPrtbrQ4UC`
      );
      const data = await response.json();
      setSearchResults(data.data); //getting the data from the API and putting it into our search results variable
    } catch (error) {
      console.log(error);
    }
  }

  //set our gif variable to whatever user types in
  function handleGif(event) { //event handler 
    setGif(event.target.value); //setting to the value of our event 
  }

  
  return (
    <div>
      <h1>Search for a Gif</h1>
      <input
        type="text"
        value={gif}
        onChange={handleGif}
        placeholder="Click and search a gif"
      />
      <button onClick={handleGifSearch}>Search</button>
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