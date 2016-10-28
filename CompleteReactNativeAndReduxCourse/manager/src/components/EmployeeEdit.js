import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';

import { Card, CardSection, Button } from './common';

import { employeeUpdate, employeeSave } from '../actions/EmployeeActions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  constructor(props) {
    super(props);
    this.onSavePress = this.onSavePress.bind(this);
    this.onDeletePress = this.onDeletePress.bind(this);
    this.onTextPress = this.onDeletePress.bind(this);
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
    const { name, phone, shift } = this.props;
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onSavePress}>
            Save
          </Button>
          <Button onPress={this.onDeletePress}>
            Delete
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress}>
            Text
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};


export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
