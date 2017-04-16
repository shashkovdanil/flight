import React, { Component } from 'react';
import { Table, Button, Input, DatePicker, Select } from 'antd';

import 'antd/dist/antd.css';

class Flights extends Component {
  componentWillMount() {
    this.props.requestFlights();
  }

  renderColumn(text, record) {
    if (record.editable) {
      return <Input value={text} />;
    }
    return <div>{text}</div>;
  }

  renderDate(text, record) {
    if (record.editable) {
      return (
        <div>
          <DatePicker
            showTime
            format="DD-MM-YYYY, HH:mm"
            placeholder="Select Time"
          />
        </div>
      );
    }
    return <div>{text}</div>;
  }

  renderSelect(text, record) {
    const { Option } = Select;
    if (record.editable) {
      return (
        <div>
          <Select defaultValue={text} style={{ width: 130 }}>
            <Option value="departed">departed</Option>
            <Option value="closed">closed</Option>
            <Option value="boarding">boarding</Option>
            <Option value="ready for boarding">ready for boarding</Option>
            <Option value="train">train</Option>
            <Option value="gate open">gate open</Option>
          </Select>
        </div>
      );
    }
    return <div>{text}</div>;
  }

  render() {
    const columns = [
      {
        title: 'Fligth',
        dataIndex: 'flight',
        key: 'flight',
        width: '10%',
        render: (text, record) => (this.renderColumn(text, record))
      },
      {
        title: 'Destination',
        dataIndex: 'destination',
        key: 'destination',
        width: '10%',
        render: (text, record) => (this.renderColumn(text, record))
      },
      {
        title: 'Aircraft',
        dataIndex: 'aircraft',
        key: 'aircraft',
        width: '10%',
        render: (text, record) => (this.renderColumn(text, record))
      },
      {
        title: 'Scheduled',
        dataIndex: 'time',
        key: 'time',
        width: '20%',
        render: (text, record) => (this.renderDate(text, record))
      },
      {
        title: 'Expected',
        dataIndex: 'exp',
        key: 'exp',
        width: '20%',
        render: (text, record) => (this.renderDate(text, record))
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: '10%',
        render: (text, record) => (this.renderSelect(text, record))
      },
      {
        title: 'Operation',
        key: 'operation',
        width: '20%',
        render: (text, record, index) => {
          if (record.editable) {
            return (
              <div className="editable-row-operations">
                <Button size="small">Save</Button>
                <span className="ant-divider" />
                <Button size="small" onClick={() => this.props.hideEditForm(index)}>Cancel</Button>
              </div>
            );
          }
          return (
            <div>
              <Button
                onClick={() => this.props.showEditForm(index)}
                size="small"
              >
                Edit
              </Button>
              <span className="ant-divider" />
              <Button type="danger" size="small">Delete</Button>
            </div>
          );
        }
      }
    ];
    return (
      <div>
        <p>All flights: {this.props.qty}</p>
        <Table
          rowKey={i => i.id}
          dataSource={this.props.flights}
          columns={columns}
          size="middle"
          bordered
          pagination={false}
        />
        <Button className="editable-add-btn">Add</Button>
      </div>
    );
  }
}

export default Flights;
