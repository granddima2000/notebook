import { Component } from 'react';

import './app-list-item.css';

class AppListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {
        const {label, important, like, onDelete, onToggleProp} = this.props;

        let classNames = "list-group-item" 
        if (important) {
            classNames += ' important';
        }
        if (like) {
            classNames += ' like';
        }
        return (
            <li className={classNames}>
                <div className="list-group-item-label">
                    <span className="list-group-item-label"
                    onClick={onToggleProp}
                    data-toggle='important'>{label}</span>
                    <div className="">
                        <button 
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                            <i className="fa fa-trash"></i>
                        </button>
                        <button 
                        className="btn-star btn-sm"
                        onClick={onToggleProp}
                        data-toggle="important">
                            <i className="fa fa-star"></i>
                        </button>
                        <button 
                        className="btn-heart btn-sm"
                        onClick={onToggleProp}
                        data-toggle="like">
                            <i className="fa fa-heart"></i>
                        </button>
                        
                    </div>
                </div>
            </li>
        )
    }
    
};

export default AppListItem;