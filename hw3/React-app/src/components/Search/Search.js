import React, {Component} from "react";

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            charName: [],
            imgList: [],
            Result: false,
            NoResult: false,
            value: "",
            valueIndex: -1
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const complete = {...this.state};
        complete.value = event.target.value;
        this.setState(complete);
    }

    handleSubmit(event){
        const complete = { ...this.state };
        console.log(complete.value);
        complete.valueIndex = complete.charName.indexOf(complete.value);
        console.log(complete.valueIndex);
        if (complete.valueIndex < 0) {
            complete.Result = false;
            complete.NoResult = true;
        } else {
            complete.Result = true;
            complete.NoResult = false;
        }
        this.setState(complete);
        event.preventDefault();
    }

    componentDidMount(){
        let url = 'https://thronesapi.com/api/v2/Characters';
        fetch(url)
        .then(response => response.json())
        .then(result => {
            let arr1 = [];
            let arr2 = [];
            result.forEach((element) => {
                arr1.push(element.fullName);
                arr2.push(element.imageUrl);
            });
            this.setState({ charName: arr1, imgList: arr2 });
        })
        .catch((error) => {
            console.error(error);
        })
    }

    render() {
        return (
            <div className="container w-75 mx-auto">
                <h1>Search for the character</h1>
                <div className="container-sm border rounded bg-light search-container">
                    <form onSubmit={this.handleSubmit} className="p-3">
                        <div className="mb-3 ">
                            <label htmlFor="input-char">Enter the character full name:</label>
                            <input type="text" id="input-char" name="input-char" value={this.state.value} onChange={this.handleChange} required/>
                        </div>
    
                        <div className="mb-3">
                            <button type="submit" name="getInfoBtn" className="btn btn-primary search-btn">Submit</button>
                        </div>
                    </form>

                    {this.state.Result ? (
                        <figure>
                        <img src={this.state.imgList[this.state.valueIndex]} alt-text="GOT Character"/>
                        <figcaption className="figure-caption">
                            {this.state.charName[this.state.valueIndex]}
                        </figcaption>
                        </figure>
                        ) : ("")
                    }
                    {
                        this.state.NoResult ? (
                            <p>Please enter correct full name</p>
                        ) : ("")
                    }
                </div>
          </div>
        );
      }
}

export default Search;