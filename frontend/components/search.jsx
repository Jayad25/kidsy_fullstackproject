import React from 'react';

class SearchForm extends React.Component{

    render(){
        return(
            <form className="search-form">
                <input type="text" placeholder="Search for items " className="inputSearch"/><input type="submit" value="Search" className="search-button"/>
            </form>
        )
    }
}

export default SearchForm;