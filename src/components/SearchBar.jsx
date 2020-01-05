import React from 'react';

const SearchBar = (props)=> {
    return (
        <form>
            <input
                type="text"
                id="text"
                placeholder="Search..."
                value={props.filterText}
                onChange={props.onChangeSearchText}
            />
            <p>
                <input
                    type="checkbox"
                    id="checkbox"
                    checked={props.inStockOnly}
                    onChange={props.onChangeCbx}
                />
                {' '}
                Only show products in stock
            </p>
        </form>
    );
}

export default SearchBar;
