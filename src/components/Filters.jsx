import React, { PropTypes } from 'react';
import { Input, Select } from 'antd';

const { Group, Search } = Input;

const { Option } = Select;

const Filters = ({ filterByCity, filterByStatus }) => (
  <div className="wrapper margin-bottom">
    <Group>
      <p>Filter by city:</p>
      <Search style={{ width: '15%' }} placeholder="from..." onSearch={value => filterByCity(value, 'from')} />
      <Search style={{ width: '15%' }} placeholder="to..." onSearch={value => filterByCity(value, 'to')} />
    </Group>
    <p className="margin-top">Filter by status:</p>
    <Select defaultValue="all" onChange={value => filterByStatus(value)} style={{ width: 130 }}>
      <Option value="all">all</Option>
      <Option value="departed">departed</Option>
      <Option value="closed">closed</Option>
      <Option value="boarding">boarding</Option>
      <Option value="ready for boarding">ready for boarding</Option>
      <Option value="train">train</Option>
      <Option value="gate open">gate open</Option>
    </Select>
  </div>
);

Filters.propTypes = {
  filterByCity: PropTypes.func.isRequired,
  filterByStatus: PropTypes.func.isRequired
};

export default Filters;
