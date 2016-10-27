import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';

import { employeeUpdate, employeeCreate } from '../actions/EmployeeActions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  constructor(props) {
    super(props);
    this.onSaveClick = this.onSaveClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onSaveClick() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  onDeleteClick() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onSaveClick}>
            Save
          </Button>
          <Button onPress={this.onDeleteClick}>
            Delete
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


export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeEdit);
