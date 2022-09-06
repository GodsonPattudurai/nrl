import React from "react";
import Select from "react-select";

interface IProps {
    selectedOptions: string;
    options: any[];
    handleChangeCallback:  any;
}
export default class MultiselectDropdown extends React.Component<IProps, any> {

    styleConf: any;
    animatedComponents: any;
    optionsValue: any[];

    constructor(props: IProps) {
        super(props);
        this.state = {
            selectedFilter: ''
        };
        this.optionsValue = this.constructDataFormat(props.options);
    }
    private onChangeCallback(item: any) {
        this.props.handleChangeCallback(item);
    }

    componentWillReceiveProps(nextProps: IProps) {
        this.optionsValue = this.constructDataFormat(nextProps.options);
    }

    constructDataFormat(optionList: any[]) {
        const constructedOptionList = optionList.map(value => {
           return { value: value.key, label: value.value}
        });
        return constructedOptionList;
    }

    render() {
        let selectedOptions: any = this.props.selectedOptions;
        return (
            <div>
                <Select defaultValue={selectedOptions}
                        isMulti={false}
                        options={this.optionsValue}
                        defaultMenuIsOpen={false}
                        onChange={(item:any)=>this.onChangeCallback(item)}
                />
            </div>
        );
    }
}
