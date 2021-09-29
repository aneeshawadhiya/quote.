import React from 'react'
import './fetch.css';
import Fab from '@mui/material/Fab';
import { IoIosQuote } from "react-icons/io";




export default class FetchQuote extends React.Component {

    constructor(){
        super();
        this.changeQuote = this.changeQuote.bind(this);
      }

    state = {
        loading : true,
        quote : null,
        random:0
    };
    
    createRandom(){
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max-min);
        const randVal = Math.floor(rand);
        this.setState({random : this.state.random + randVal, loading:false});
    }
    
    async componentDidMount(){
        this.createRandom();
        const url =  "https://type.fit/api/quotes";
        const response = await fetch(url);
        const data = await response.json();
        
        this.setState({ quote : data[this.state.random] , loading:false});
    }
    
    
    changeQuote(event){
        this.createRandom();
        this.componentDidMount();
    }




    render() {
        
        return (
            <>
            <div className="container">
                <div>
                    {this.state.loading || !this.state.quote ? (
                        <div>
                            Loading..
                        </div>
                        ) : (
                        <div>
                            <div>{this.state.quote.text}</div>
                            <div><h4>- {this.state.quote.author}</h4></div>
                        </div>
                        )
                    }
                </div>
            </div>
            <div className="icon-div">
                    <Fab color="#f7f7f7" aria-label="random" className="floating-btn" onClick={this.changeQuote} >
                        <IoIosQuote />
                    </Fab>
                    
            </div>
            </>
        )
        
    }
}
