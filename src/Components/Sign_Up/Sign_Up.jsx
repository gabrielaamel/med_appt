import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sign_Up.css';

const Sign_Up = () => {
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showerr, setShowerr] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'role') setRole(value);
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'phone') {
      setPhone(value);
      if (value.length !== 10 && value.length > 0) {
        setShowerr('Phone number must be exactly 10 digits');
      } else {
        setShowerr('');
      }
    }
    if (name === 'password') setPassword(value);
  };

  const register = (e) => {
    e.preventDefault();
    if (phone.length !== 10) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("phone", phone);
    sessionStorage.setItem("email", email);

    alert('Sign Up Successful!');
    navigate('/');
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <div className="signup-grid">
        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>
        <div className="signup-text1" style={{ textAlign: 'left' }}>
          Already a member? <Link to="/Login" style={{ color: '#2190FF' }}>Login</Link>
        </div>
        <div className="signup-form">
          <form onSubmit={register}>
            {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
            
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select name="role" id="role" className="form-control" onChange={handleChange} required>
                <option value="">Select option</option>
                <option value="Doctor">Doctor</option>
                <option value="Patient">Patient</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              {showerr && <div className="err" style={{ color: 'red', fontSize: '14px', marginBottom: '5px' }}>{showerr}</div>}
              <input type="tel" name="phone" id="phone" className="form-control" placeholder="Enter 10-digit phone number" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" className="form-control" placeholder="Enter your password" onChange={handleChange} required />
            </div>

            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
              <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light" onClick={() => {
                setRole('');
                setName('');
                setPhone('');
                setEmail('');
                setPassword('');
                setError(null);
                setShowerr('');
              }}>Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign_Up;