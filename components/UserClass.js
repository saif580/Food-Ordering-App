import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
      count: 0,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/saif580");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(this.state.userInfo);
  }

  render() {
    const { login, location, avatar_url } = this.state.userInfo;
    return (
      <div className="border p-4 m-4">
        <h1>Github Contact Details:-</h1>
        <h5>
          {login} - {location}
        </h5>
        <img className="m-auto" src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
