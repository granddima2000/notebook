import { Component } from 'react';

import AppHeader from '../app-header/app-header';
import Searchpanel from '../search-panel/search-panel';
import AppAddForm from '../app-add-form/app-add-form';
import AppList from '../app-list/app-list';
import AppFilter from '../app-filter/app-filter';


// import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, like: false, id: 1},
                {label: 'Going to cooking', important: false, like: true, id: 2},
                {label: 'I need a break...', important: false, like: false, id: 3},
            ],
            term: '',
            filter: 'all'
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }));
    };

    addItem = (label) => {
        const newItem = {
            label,
            important: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            };
        });
    };

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }));
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.label.indexOf(term) > -1
        });
    };

    onUpdateSearch = (term) => {
        this.setState({term});
    };

    filterPost = (items, filter) => {
        switch (filter) {
            case 'like':
                return items.filter(item => item.like)
            case 'important':
                return items.filter(item => item.important)
            default:
                return items;
        };
    };

    onFilterSelect = (filter) => {
        this.setState({filter});
    };

    render() {
        const {data, term, filter} = this.state;
        const task = this.state.data.length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter)
        return (
            <AppBlock>
                <AppHeader task={task}/>
                
                <div className="search-panel d-flex">
                    <Searchpanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onFilterSelect={this.onFilterSelect}/>
                </div>
                <AppList
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}/>
                
                <AppAddForm onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}