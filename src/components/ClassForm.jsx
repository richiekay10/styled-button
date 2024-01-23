import React from "react";

class ClassForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ClassForm;
