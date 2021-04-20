import React from 'react';
import '../styles/styles.css';

function Loginform({Login,error}) {
  const [details, setDetails] = React.useState({name:"",password:""});

  const handleSubmit = e => {
    e.preventDefault();

    Login(details);

  };

  return (
    <div class="container">
    <form onSubmit={handleSubmit}>
            <div class="box">
                  <img src="https://i.pinimg.com/originals/4c/41/ef/4c41eff22888e5e5d8277cf5121691db.png"/>
                  <h1>Sign In Here</h1>
                  <div class="row">
                      <input type="text" placeholder="Username" onChange={e => setDetails({...details, name:e.target.value})} value={details.name}/>
                  </div>
                  <div class="row">
                    <input type="password" placeholder="Password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password}/>
                  </div>
                  <a class="login" onClick={handleSubmit}>Login</a>

                {(error !== "") ?  <div class="forget" href="#">{error}</div> : ""}
            </div>
             </form>
       </div>

  )
}

export default Loginform;
