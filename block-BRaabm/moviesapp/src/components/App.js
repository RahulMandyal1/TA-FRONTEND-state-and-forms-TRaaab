import React from "react";
import data from "../data";
import Cards from "./cards";
class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <>
        <aside>
            <header>
                <nav>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                </nav>
            </header>
        </aside>
        <main>
        <Cards moviesData={data}/>
        </main>
         </>
    }
}
export default App;