import React from 'react';
import {connect} from "react-redux";
import {PRODUCTS} from "../constants/Constants";
import ProductCategoryRow from "../components/ProductCategoryRow";
import ProductRow from "../components/ProductRow";
import ProductSearchUnit from "../components/ProductSearchUnit";
import {changeCbxCreator, searchTextCreator} from "../actions";

class Unit extends React.Component {

    render() {

        let showData = ()=> {
            let inputText = this.props.inputText;
            let checkBoxData =   this.props.checkBoxData;
            const rows = [];
            let lastCategory = null;
            PRODUCTS.forEach((product) => {
                if (product.name.indexOf(inputText) === -1) {
                    return;
                }
                if (checkBoxData && !product.stocked) {
                    return;
                }
                if (product.category !== lastCategory) {
                    rows.push(<ProductCategoryRow category={product.category} key={product.category} /> );
                }
                rows.push(<ProductRow product={product} key={product.name} />);
                lastCategory = product.category;
            });

            return rows;
        }

        return (
            <div>
                <ProductSearchUnit inputText={this.props.inputText} checkBoxData={this.props.checkBoxData} showData={showData()}
                                   onChangeSearchText={this.props.searchTextCreator} onChangeCbx={this.props.changeCbxCreator}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    inputText: state.products.inputText,
    checkBoxData: state.products.checkBoxData
});

export const UnitContainer = connect( mapStateToProps,  {searchTextCreator, changeCbxCreator})(Unit);