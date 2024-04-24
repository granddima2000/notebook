import { Component } from 'react';

import './app-add-form.css'

class AppAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: ''
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {label} = this.state
        if (label.length >= 3) {
            this.props.onAdd(label);
        }
        this.setState({
            label: ''
        }); 
    };

    render() {
        const {label} = this.state;
        return (
            <form className='bottom-panel d-flex justify-content-between'
            onSubmit={this.onSubmit}>
                <input type="text"
                placeholder='О чем вы думаете сейчас?'
                className='form-control new-post-label'
                name='label'
                value={label}
                onChange={this.onValueChange}/>
                <button 
                type='submit' 
                className='btn btn-outline-secondary'
                >Добавить</button>
            </form>
            
        )
    }
    
};

export default AppAddForm;