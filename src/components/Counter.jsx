import React, { Component } from 'react';

export default class Counter extends Component {
    style = {
        fontSize:24,
        fontWeight:"bold",
    };

    constructor(props){
        super(props);
        this.state = { 
            count:0,
            imageUrl:"https://picsum.photos/200",
            tags:[
                "tag1",
                "tag2",
                "tag3",
            ]
        };
    };

    // handlePress() {
    //     this.setState({
    //         count:this.state.count + 1,
    //     });
    // }

    handlePress() {
        this.setState(prevState => ({
            count: prevState.count + 1,
        }));
    };

    render() {
        return (
            <div>
                <img src={this.state.imageUrl} alt=""></img>
                <span className={this.getClases()}>{ this.formatCount() }</span>
                <button onClick={()=> this.handlePress()} style={this.style} className="btn btn-secondary btn-sm">Increment</button> 
                { this.state.tags.length === 0 && "Plese add a tag!"}
                { this.getTags() }             
            </div>
        );
    }

    getTags() {
        if (this.state.tags.length === 0) return <p>There no tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={ tag }>{ tag }</li>)}</ul>;
    }

    getClases() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count; 
    } 
}
