import React, { useEffect, useState } from 'react';

// css
import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {

  // states for registration - checking local storage first for saved states
  const [firstName, setFirstName] = useState(() => {
    const savedValue = localStorage.getItem("firstName");
    const initialValue = JSON.parse(savedValue);
    return initialValue || '';
  });

  const [lastName, setLastName] = useState(() => {
    const savedValue = localStorage.getItem("lastName");
    const initialValue = JSON.parse(savedValue);
    return initialValue || '';
  });

  const [NPI, setNPI] = useState(() => {
    const savedValue = localStorage.getItem("NPI");
    const initialValue = JSON.parse(savedValue);
    return initialValue || '';
  });

  const [address, setAddress] = useState(() => {
    const savedValue = localStorage.getItem("address");
    const initialValue = JSON.parse(savedValue);
    return initialValue || '';
  });

  const [phone, setPhone] = useState(() => {
    const savedValue = localStorage.getItem("phone");
    const initialValue = JSON.parse(savedValue);
    return initialValue || '';
  });

  const [email, setEmail] = useState(() => {
    const savedValue = localStorage.getItem("email");
    const initialValue = JSON.parse(savedValue);
    return initialValue || '';
  });

  // states for error handling
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);


  // handling form changes
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };

  const handleNPI = (e) => {
    setNPI(e.target.value);
    setSubmitted(false);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
    setSubmitted(false);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  
  // disable mouse wheel scroll on NPI form
  document.addEventListener("wheel", function(e) {
    if (document.activeElement.type === "number") {
        document.activeElement.blur();
    }
  });

  // regex variable to compare against phone input
  let phoneValidator = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  // only allow a certain number of characters on input (for NPI)
  const maxLengthCheck = (e) => {
    if (e.target.value.length > e.target.maxLength) {
     e.target.value = e.target.value.slice(0, e.target.maxLength)
    }
  };
  
  // handling submission errors
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((
      firstName === '' ||
      lastName === '' ||
      NPI === '' ||
      address === '' ||
      phone === '' ||
      email === '') || (phone.match(phoneValidator) === null) || (NPI.length !== 10))
    {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // let user know registration was successful
  const successMessage = () => {
    return (
      <div
        className={styles.success}
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h2>Hey {firstName}! Your registration was successful!</h2>
      </div>
    );
  };

  // let user know registration was unsuccessful
  const errorMessage = () => {
    return (
      <div
        className={styles.error}
        style={{
          display: error ? '' : 'none',
        }}>
        <h2>Please ensure all fields are correct.</h2>
      </div>
    );
  };

  // storing inputs in local storage
  useEffect(() => {
    localStorage.setItem("firstName", JSON.stringify(firstName))
    localStorage.setItem("lastName", JSON.stringify(lastName))
    localStorage.setItem("NPI", JSON.stringify(NPI))
    localStorage.setItem("address", JSON.stringify(address))
    localStorage.setItem("phone", JSON.stringify(phone))
    localStorage.setItem("email", JSON.stringify(email))
  }, [firstName, lastName, NPI, address, phone, email]);

  return (
    <>
    <div className={styles.registrationContainer}>
      
      <form className={styles.formContainerLeft} id='registration-form' onSubmit={handleSubmit}>
        
        <div>
          <h1 className={styles.formHeading}>User Registration</h1>
        </div>

        <label className={styles.label}>First Name</label>
        <input onChange={handleFirstName} className={styles.input}
          value={firstName} type="text" maxLength="50" placeholder="Zachary"/>

        <label className={styles.label}>Last Name</label>
        <input onChange={handleLastName} className={styles.input}
          value={lastName} type="text" maxLength="75" placeholder="Blackburn"/>  

        <label className={styles.label}>NPI Number</label>
        <input onChange={handleNPI} className={styles.input}
          value={NPI} type="number" maxLength="10" minLength="10" onInput={maxLengthCheck} placeholder="0123456789"/> 

        <label className={styles.label}>Business Address</label>
        <input onChange={handleAddress} className={styles.input}
          value={address} type="text" placeholder="123 Healthcare Dr, Suite 7, Jacksonville, FL" />  

        <label className={styles.label}>Email</label>
        <input onChange={handleEmail} className={styles.input}
          value={email} type="email" maxLength="75" placeholder="you@email.com" />

        <label className={styles.label}>Phone</label>
        <input onChange={handlePhone} className={styles.input}
          value={phone} type="tel" placeholder="123-456-7890" />
        
        <div className={styles.messages}>
          {errorMessage()}
          {successMessage()}
        </div>

        <button onClick={handleSubmit} className={styles.registerBtn} >
          Register
        </button>

      </form>
      
      <div className={styles.formContainerRight}>
        <p className={styles.loginText}>Already registered?</p>
        <button className={styles.loginBtn}>
          Login
        </button>
      </div>

    </div>
    </>
  );
}

export default RegistrationForm;