import './app-filter.css';

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'Все'},
        {name: 'like', label: 'Понравилось'},
        {name: 'important', label: 'Важные'}
    ];


    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-secondary' : 'btn-outline-secondary';
        return (
            <button
                className={`btn ${clazz}`}
                type='button'
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    });
    
        
        
    return (
        <div className="btn-group">
            {buttons}
        </div>
        
    )
};

export default AppFilter;