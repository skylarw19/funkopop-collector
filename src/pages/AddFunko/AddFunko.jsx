import React, { Component } from 'react';

class AddFunko extends Component {
    state = {  
        // invalidForm: true,
        formData:{
            name: "",
            category: "",
            itemNo: "",
            exclusivity: ""
        }
    }

    formRef = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddFunko(this.state.formData)
    }
    handleChange = (e) => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData,
            // invalidForm: !this.formRef.current.checkValidity()
        })
    }

    render() { 
        return ( 
        <> 
            <h1>Add a FunkoPop to your collection!</h1>
            <form onSubmit={this.handleSubmit} >
                <label >Name (required) </label>
                <input 
                    type="text"
                    name="name"
                    onChange={this.handleChange} /><br/>
                <label >Category </label>
                <input 
                    type="text"
                    name="category"
                    onChange={this.handleChange} /><br/>
                <label >ItemNo </label>
                <input 
                    type="text" 
                    name="itemNo"
                    onChange={this.handleChange} /><br/>
                <label >Exclusivity </label>
                <input 
                    type="text"
                    name="exclusivity"
                    onChange={this.handleChange} /><br/>
                
                <button type="submit">Add Funko Pop</button>
            </form>
        </>
        );
    }
}
 
export default AddFunko;