import React, { Component } from "react";

class TaskInputField extends Component {
  render() {
    const {
      id,
      type,
      name,
      className,
      handleChange,
      inputValue,
      labelName,
    } = this.props;
    return (
      <div>
        <label htmlFor={labelName}>{name}</label>
        <input
          type={type}
          className={className}
          name={name}
          id={id}
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    );
  }
}

export default TaskInputField;
