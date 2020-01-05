import React from 'react';
import SearchBar from "./SearchBar";

const ProductSearchUnit = (props) => {

    return (

        <div>
            <SearchBar filterText={props.inputText}
                       inStockOnly={props.checkBoxData}
                       onChangeSearchText={props.onChangeSearchText}
                       onChangeCbx={props.onChangeCbx}/>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{props.showData}</tbody>
            </table>
        </div>
    );
}

export default ProductSearchUnit;
