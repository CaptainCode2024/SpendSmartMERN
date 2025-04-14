import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import logo_spend_smart from '../../img/logo_spend_smart.png';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(username, password).catch(err => {
      setError('Signup failed. Please try again.');
    });
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #000000, #00ffff, #9999ff, #ff66cc, #000000)',
      backgroundSize: '400% 400%',
      animation: 'gradientAnimation 15s ease infinite',
    },
    '@keyframes gradientAnimation': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },
    form: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0px 8px 24px rgba(255, 255, 255, 0.1)',
      maxWidth: '400px',
      width: '90%',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '12px 0',
      borderRadius: '10px',
      border: '1px solid #555',
      backgroundColor: '#1a1a1a',
      color: '#fff',
      fontSize: '16px',
      boxSizing: 'border-box',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#ab03ff',
      color: '#fff',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '15px',
      transition: 'background-color 0.3s ease',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#ffffff',
      fontSize: '26px',
    },
    subtitle: {
      textAlign: 'center',
      marginBottom: '30px',
      color: '#cccccc',
      fontSize: '16px',
    },
    link: {
      textAlign: 'center',
      marginTop: '16px',
      color: '#00ffff',
      fontSize: '14px',
    },
    logo: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    logoImg: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
    },
    error: {
      color: 'red',
      textAlign: 'center',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
      <div style={styles.logo}>
        <img
          src={logo_spend_smart}
          alt="SpendSmart Logo"
          style={styles.logoImg}
        />
      </div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>Create Account</h2>
        <p style={styles.subtitle}>Join SpendSmart and master your money game.</p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#8800cc')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#ab03ff')}
        >
          Signup
        </button>
        {error && <p style={styles.error}>{error}</p>}
        <p style={styles.link}>
          Already have an account? <Link to="/login" style={{ color: '#9999ff' }}>Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;