import React from 'react'
import { Select } from 'antd';

const { Option, OptGroup } = Select;

export const Boxes = ({name}) => {
    return (
        <Select defaultValue={name} style={{ width: 200 }} onChange={() => {}}>
            <OptGroup label="Manager">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
            </OptGroup>
        </Select>
    )
}
const SelectBoxes = () => {
    return (
        <>
            <Boxes name="25 mm/sec"/>
            <Boxes name="10 mm/mV"/>
            <Boxes name="Lead All"/>
        </>
    )
}

export default SelectBoxes 