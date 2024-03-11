import React, { Component } from "react"
import '../components/header/css/Header.css'
import Header from '../components/header/Header'
import '../pagescss/profile.css'



class Profilepage extends Component {
    render() {
        return (
            <div>
                <Header />
                    <div id= "searchbar">
                    <form>
                        <label>
                            <input type="text" name="name" />
                            </label>
                            <input  type="submit" value="Submit" />
                    </form>
                    </div>
                    <div className="container1">
                        <div className="savedRecipie">Recipe 1</div>
                        <div className="savedRecipie">Recipe 2</div>
                        <div className="savedRecipie">Recipe 3</div>
                        <div className="savedRecipie">Recipe 4</div>
                    </div>
                    <div className="profilecontainer">
                    </div>
                    
                </div>
            
            
            
        )
    }
}

export default Profilepage