import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const[name,setName] = useState();
  const[phone,setPhone] = useState();
  const[address,setAddress] = useState();
  const [error, setError] = useState();
  const[prole, setRole]= useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      if(!prole){
        setRole("Customer"); 
    }

      const newUser = { email, password, passwordCheck, name, phone, address} ;
      await Axios.post("http://localhost:5000/users/register",newUser );
      const loginRes = await Axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      localStorage.setItem("user-id",loginRes.data.id);
      history.push("/");

      if(prole==="Broker"){
      const uid = loginRes.data.token;
      const commission = "2";
      const company = "devas";

      const newBroker = { uid, commission, company };
      await Axios.post("http://localhost:5000/users/broker",newBroker);
      }
      else {
        const uid = loginRes.data.token;
        const requirement = "RENT";
        const budget = "30000";
  
        const newCustomer = { uid, requirement, budget };
        await Axios.post("http://localhost:5000/users/customer",newCustomer);
      }

    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="page">
      <h2>Register</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="form" onSubmit={submit}>
        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Verify password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />

          <label htmlFor="register-name">Name</label>
          <input id="register-name" type="text" onChange={(e) => setName(e.target.value)} />

          <label htmlFor="register-phone">Phone</label>
          <input id="register-phone" type="number" pattern="[0-9]" onChange={(e) => setPhone(e.target.value)} />

          <label htmlFor="register-address">Address</label>
          <input id="register-address" type="text" onChange={(e) => setAddress(e.target.value)} />

          <label htmlFor="property-role">Role</label>
          <select id="property-role" type="text" onChange={(e) => setRole(e.target.value) }>
          <option value="Customer">Customer</option>
          <option value="Broker">Broker</option>
          </select>

        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
