//
// import React from "react";
//
// class Login extends React.Component {
//   state = {
//     items: Array.from({ length: 20 }),
//
//   };
//
//
//
//
//   handleLogout() {
//       this.props.history.push("/");
//     }
//
//   render() {
//
//     return (
//       <div style={{backgroundColor:"white",textAlign: "center"}}>
//       <div style={{textAlign: "center"}}>
//         <h1> Welcome {name}</h1>
//         <button
//                    onClick={() => this.handleLogout()}
//                  >
//                    Log Out{" "}
//                  </button>
//                  </div>
//         <hr />
//
//
//       </div>
//     );
//   }
// }
//  <div style={{backgroundColor:"white"}}>
//  <iframe src="https://www.youtube.com/embed/cWDJoK8zw58" />
//
// </div>
// export default Login;

import React, { useState } from "react";
import "../styles/styles.css";

function Login(props) {
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");

  const userName = localStorage.getItem("name");
  //const link = "https://www.youtube.com/embed/cWDJoK8zw58"
//  https://www.youtube.com/embed/22SAhH5JxYk
// https://www.facebook.com/embed
  const handleLogout = () => {
    props.history.push("/");
  };

  const onLink1Change = e => {
    console.log(e.target.value, "item");
    setItem1(e.target.value);
  };
  const onLink2Change = e => {
    console.log(e.target.value, "item2");

    setItem2(e.target.value);
  };
  console.log(item1, item2, "kkkkkkkk");
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "black",
          color: "white"
        }}
      >
        <div class="col">
          {" "}
          <h1> Welcome {userName}</h1>
        </div>
        <div class="col">
          <input
            type="text"
            style={{ width: 300, height: 30 }}
            placeholder="Search Here"
            size="small"
            variant="outlined"
            onChange={onLink1Change}
          />
        </div>
        <div class="col">
          <input
            type="text"
            style={{ width: 300, height: 30 }}
            placeholder="Search Here"
            size="small"
            variant="outlined"
            onChange={onLink2Change}
          />
        </div>
        <div class="col">
          {" "}
          <button onClick={() => handleLogout()} style={{ fontSize: "30px" }}>
            Log Out{" "}
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "400px"
        }}
      >
        <div class="column">
          <iframe style={{ height: "500px", width: "100%" }} src={item1} />
        </div>
        <div class="column">
          <iframe style={{ height: "500px", width: "100%" }} src={item2} />
        </div>
      </div>
    </div>
  );
}

export default Login;
