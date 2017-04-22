import React, { Component, PropTypes } from 'react';
import { Table, Button, Input, DatePicker, Select } from 'antd';
import moment from 'moment';

class Flights extends Component {
  static propTypes = {
    requestFlights: PropTypes.func.isRequired,
    editFlight: PropTypes.func.isRequired,
    saveEditedFlight: PropTypes.func.isRequired,
    qty: PropTypes.number,
    flights: PropTypes.arrayOf(PropTypes.object),
    showEditForm: PropTypes.func.isRequired,
    deleteFlight: PropTypes.func.isRequired,
    addFlight: PropTypes.func.isRequired
  }

  static defaultProps = {
    qty: 0,
    flights: [
      {
        flight: 'flight',
        from: 'city',
        to: 'city',
        aircraft: 'aircraft',
        time: 'time',
        exp: 'status',
        status: 'status',
        id: 0
      }
    ]
  }

  componentWillMount() {
    this.props.requestFlights();
  }

  renderColumn(text, record, index, field) {
    if (record.editable) {
      return (
        <Input
          value={text}
          onChange={e => this.props.editFlight(index, field, e.target.value)}
        />
      );
    }
    return <div>{text}</div>;
  }

  renderDate(text, record, index, field) {
    if (record.editable) {
      return (
        <div>
          <DatePicker
            showTime
            format="DD-MM-YYYY, HH:mm"
            placeholder={moment(Date(text)).format('DD-MM-YYYY, HH:mm')}
            onChange={date => this.props.editFlight(index, field, moment(date).format('DD-MM-YYYY, HH:mm'))}
          />
        </div>
      );
    }
    return <div>{text}</div>;
  }

  renderSelect(text, record, index, field) {
    const { Option } = Select;
    if (record.editable) {
      return (
        <div>
          <Select
            defaultValue={text}
            onChange={value => this.props.editFlight(index, field, value)}
            style={{ width: 130 }}
          >
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
    const {
      saveEditedFlight,
      showEditForm,
      deleteFlight,
      qty,
      flights,
      addFlight
    } = this.props;

    const columns = [
      {
        title: 'Fligth',
        dataIndex: 'flight',
        key: 'flight',
        width: '12.5%',
        render: (text, record) => (this.renderColumn(text, record, record.id, 'flight'))
      },
      {
        title: 'From',
        dataIndex: 'from',
        key: 'from',
        width: '12.5%',
        render: (text, record) => (this.renderColumn(text, record, record.id, 'from'))
      },
      {
        title: 'To',
        dataIndex: 'to',
        key: 'to',
        width: '12.5%',
        render: (text, record) => (this.renderColumn(text, record, record.id, 'to'))
      },
      {
        title: 'Aircraft',
        dataIndex: 'aircraft',
        key: 'aircraft',
        width: '12.5%',
        render: (text, record) => (this.renderColumn(text, record, record.id, 'aircraft'))
      },
      {
        title: 'Scheduled',
        dataIndex: 'time',
        key: 'time',
        width: '12.5%',
        render: (text, record) => (this.renderDate(text, record, record.id, 'time'))
      },
      {
        title: 'Expected',
        dataIndex: 'exp',
        key: 'exp',
        width: '12.5%',
        render: (text, record) => (this.renderDate(text, record, record.id, 'exp'))
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: '12.5%',
        render: (text, record) => (this.renderSelect(text, record, record.id, 'status'))
      },
      {
        title: 'Operation',
        key: 'operation',
        width: '12.5%',
        render: (text, record) => {
          if (record.editable) {
            return (
              <div className="editable-row-operations">
                <Button
                  size="small"
                  onClick={() => saveEditedFlight(record.id, {
                    flight: record.flight,
                    from: record.from,
                    to: record.to,
                    aircraft: record.aircraft,
                    time: moment(Date(record.time)).format(),
                    exp: moment(Date(record.exp)).format(),
                    status: record.status,
                  })}
                >
                  Save
                </Button>
              </div>
            );
          }
          return (
            <div>
              <Button
                onClick={() => showEditForm(record.id)}
                size="small"
              >
                Edit
              </Button>
              <span className="ant-divider" />
              <Button
                type="danger"
                size="small"
                onClick={() => deleteFlight(record.id)}
              >
                Delete
              </Button>
            </div>
          );
        }
      }
    ];
    return (
      <div className="wrapper">
        <p className="margin-bottom">All flights: {qty}</p>
        <Table
          rowKey={i => i.id}
          dataSource={flights}
          columns={columns}
          size="middle"
          bordered
          pagination={false}
        />
        <Button
          className="margin-top editable-add-btn"
          onClick={() => addFlight()}
        >
          Add
        </Button>
      </div>
    );
  }
}

export default Flights;
