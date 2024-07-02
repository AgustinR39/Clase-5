import React from "react";
import axios from "axios";

class Diario extends React.Component{

    constructor() {
        super()
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=b0e260e1d6404bc99dbc8abb615cf379").then( res => {
            this.setState({news: res.data.articles.slice(0, 10) })
        })
    }

    render() {
        return(
            <div>
                <h1>Diario LaNación</h1>

                <div className="container">
                    <div className="row">
                        {this.state.news.map((item, index) => {
                            return(
                                <div className="col-4">
                                    <h2>{item.title}</h2>
                                    <h3>{item.description}</h3>
                                    <img className="w-100" src={item.urlToImage}></img>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }   
}

export default Diario;