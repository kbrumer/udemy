import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';

import { Card, CardSection, Button, Confirm } from './common';

import { employeeUpdate, employeeSave, employeeDelete } from '../actions/EmployeeActions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {

  constructor(props) {
    super(props);

    this.state = { showModal: false };
    this.onSavePress = this.onSavePress.bind(this);
    this.onDeletePress = this.onDeletePress.bind(this);
    this.onTextPress = this.onTextPress.bind(this);
    this.onAcceptDelete = this.onAcceptDelete.bind(this);
    this.onDeclineDelete = this.onDeclineDelete.bind(this);
  }

  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onSavePress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onDeletePress() {
    this.setState({ showModal: !this.state.showModal });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAcceptDelete() {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  }

  onDeclineDelete() {
    this.setState({ showModal: false });
  }


  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onSavePress}>
            Save
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress}>
            Text
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onDeletePress}>
            Delete
          </Button>
          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAcceptDelete}
            onDecline={this.onDeclineDelete}
          >
            Are you sure you want to delete this?
          </Confirm>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};


export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
