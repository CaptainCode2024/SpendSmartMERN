import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import logo_spend_smart from '../../img/logo_spend_smart.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #000000, #00ffff, #9999ff, #ff66cc, #000000)',
      backgroundSize: '300% 300%',
      animation: 'gradientFlow 15s ease infinite',
    },
    '@keyframes gradientFlow': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },
    form: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 0 20px 4px #9999ff',
      maxWidth: '400px',
      width: '100%',
      backdropFilter: 'blur(12px)',
      border: '1px solid #ff66cc',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '12px 0',
      borderRadius: '10px',
      border: '1px solid #00ffff',
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      color: '#ffffff',
      fontSize: '16px',
      boxSizing: 'border-box',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#ff66cc',
      color: '#fff',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '15px',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '30px',
      color: '#ffffff',
      fontSize: '26px',
    },
    subtitle: {
      textAlign: 'center',
      marginBottom: '30px',
      color: '#cccccc',
      fontSize: '16px',
    },
    logo: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    logoImg: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      boxShadow: '0 0 12px #00ffff',
    },
    error: {
      color: '#ff4d6d',
      textAlign: 'center',
      marginBottom: '10px',
    },
    link: {
      textAlign: 'center',
      marginTop: '20px',
      color: '#00ffff',
      textDecoration: 'none',
      fontSize: '14px',
    },
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
      <div style={styles.logo}>
        <img src={logo_spend_smart} alt="SpendSmart Logo" style={styles.logoImg} />
      </div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>Login</h2>
        <p style={styles.subtitle}>Streamline your expense management...</p>
        {error && <p style={styles.error}>{error}</p>}
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
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#c084ff';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#ff66cc';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Login
        </button>
        <p style={styles.link}>
          New here? <Link to="/signup" style={{ color: '#9999ff' }}>Create an Account</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;