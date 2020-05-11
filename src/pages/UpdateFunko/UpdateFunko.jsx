import React, { Component } from 'react';
import '../AddFunko/AddFunko.css'

class UpdateFunko extends Component {
    state = {  
        formData: this.props.location.state
    }

    formRef = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleUpdateFunko(this.state.formData)
    }
    handleChange = (e) => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({formData})
    }

    render() { 
        return ( 
        <>  
            <h3>Update below FunkoPop</h3>
            <form onSubmit={this.handleSubmit} className="panel panelform">
                <label >Name </label> &nbsp;&nbsp;
                <input 
                    type="text"
                    name="name"
                    value={this.state.formData.name}
                    onChange={this.handleChange} /><br/>
                <label >Category </label> &nbsp;&nbsp;
                <input 
                    type="text"
                    name="category"
                    value={this.state.formData.category}
                    onChange={this.handleChange} /><br/>
                <label >ItemNo </label> &nbsp;&nbsp;
                <input 
                    type="text" 
                    name="itemNo"
                    value={this.state.formData.itemNo}
                    onChange={this.handleChange} /><br/>
                <label >Exclusivity </label> &nbsp;&nbsp;
                <input 
                    type="text"
                    name="exclusivity"
                    value={this.state.formData.exclusivity}
                    onChange={this.handleChange} /><br/>
                
                <button className="btn btn-primary addfunkobtn" type="submit">Update FunkoPop</button>
            </form>
        </>
        );
    }
}
 
export default UpdateFunko;