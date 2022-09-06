import React from "react";
import MultiselectDropdown from "./MultiselectDropdown";
import {fieldDropdownValues, initialRules, somethingDropdownRules, somethingOptionDropdownRules} from "../util/rules";

interface IProps {
    selectedFilter: string;
    handleChangeCallback: any;
    rules: any;
}
interface IState {
    appliedFilter: string;
}
export default class DynamicComponent extends React.Component<IProps, IState> {


    getComponent = (rules: any[], rule: any) => {
        const selectedFilter = rule.key ? rule.key.split(' ') : [];
        let div = <span>{rule}</span>;
        selectedFilter.forEach((item:any) => {
            switch (item) {
                case 'SOMETHING_DROPDOWN':
                    div = (<MultiselectDropdown selectedOptions={rule} options={somethingDropdownRules()} handleChangeCallback={this.props.handleChangeCallback}/>);
                    break;
                case 'FIELD_DROPDOWN':
                    div = (<MultiselectDropdown selectedOptions={rule} options={fieldDropdownValues()} handleChangeCallback={this.props.handleChangeCallback}/>);
                    break;
                case 'SOMETHING_OPTION_DROPDOWN':
                    div = (<MultiselectDropdown selectedOptions={rule} options={somethingOptionDropdownRules()} handleChangeCallback={this.props.handleChangeCallback}/>);
                    break;
                case 'TEXT':
                    div = <input type="text" />;
                    break;
                default:
                    div = <span>{rule}</span>
                    break;
            }
        });
        return div;
    };
    render() {

        return (
            <div>
                {
                    this.props.rules.map((rule:any) =>
                        <span>{this.getComponent(this.props.rules, rule)}</span>
                    )
                }
            </div>
        )
    }
}
