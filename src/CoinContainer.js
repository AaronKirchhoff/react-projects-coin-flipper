import React, {Component} from 'react';
import {choice} from "./helpers";
import Coin from "./Coin";
import frogfront from "./frog-front.jpg";
import frogback from "./frog-back.jpg";

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            {side: "heads", imgSrc: frogfront},
            {side: "tails", imgSrc: frogback}
        ]
    }
    constructor(props){
        super(props);
        this.state = {
            currCoin: null,
            numFlips: 0,
            numHeads: 0,
            numTails: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            let newState = {
                ...st,
                currCoin: newCoin,
                numFlips: st.numFlips + 1,
                // also works with ternary operator instead of if statement
                // numHeads: st.numHeads + (newCoin.side === "heads" ? 1 : 0),
                // numTails: st.numTails + (newCoin.side === "tails" ? 1 : 0)

            }
            if(newCoin.side === "heads"){
                newState.numHeads += 1
            } else{
                newState.numTails += 1
            }
            return newState;
            
        });
    }

    handleClick(e){
        // the function call in the div below is good practice to just call a function that leads to the logic of the app, always starts with handle something.
        this.flipCoin();
    }

    render(){
        return (
            <div className="CoinConatainer">
                <h2>Leap frog!</h2>
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <button onClick={this.handleClick} >Press here to flip the frog</button>
                <p>Out of {this.state.numFlips} flips, there are {this.state.numHeads} Frog faces and {this.state.numTails} tails.</p>

            </div>
        )
    }

}

export default CoinContainer;