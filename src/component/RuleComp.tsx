import React from "react";
import DynamicComponent from "./DynamicComponent";
import {initialRules} from "../util/rules";

interface IProps {
}
interface IState {
    selectedFilter: string;
    rules: any
}
export default class RuleComp extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            selectedFilter: "",
            rules: [{ index: 1, key: 'If SOMETHING_DROPDOWN then SOMETHING_DROPDOWN' , value: 'If something then something', selected: false}]
        }
    }
    private dropdownCallback(item: any) {
        const selectedRulesArray = this.state.rules.map((rule: any) => {
            if(item.index === rule.index) return {...rule, selected: true}
            else return rule
        });
        selectedRulesArray.push({ index: selectedRulesArray.length + 1, key: 'If SOMETHING_DROPDOWN then SOMETHING_DROPDOWN' , value: 'If something then something', selected: false})
        this.setState({selectedFilter: "", rules: selectedRulesArray })
    }

    render() {
        return (
            <DynamicComponent selectedFilter={this.state.selectedFilter} rules={this.state.rules} handleChangeCallback={this.dropdownCallback.bind(this)}></DynamicComponent>
        );
    }
}
