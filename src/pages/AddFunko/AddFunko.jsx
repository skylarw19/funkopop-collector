import React, { Component } from 'react';
import './AddFunko.css'

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
            
            <form onSubmit={this.handleSubmit} className="panel panelform" >
                <label >Name (required) </label> &nbsp;&nbsp;
                <input 
                    type="text"
                    name="name"
                    onChange={this.handleChange} /><br/>
                <label >Category </label> &nbsp;&nbsp;
                <input 
                    type="text"
                    name="category"
                    onChange={this.handleChange} /><br/>
                <label >ItemNo </label> &nbsp;&nbsp;
                <input 
                    type="text" 
                    name="itemNo"
                    onChange={this.handleChange} /><br/>
                <label >Exclusivity </label> &nbsp;&nbsp;
                <input 
                    type="text"
                    name="exclusivity"
                    onChange={this.handleChange} /><br/>
                
                <button className="btn btn-primary addfunkobtn" type="submit">Add Funko Pop</button>
            </form>
        </>
        );
    }
}
 
export default AddFunko;