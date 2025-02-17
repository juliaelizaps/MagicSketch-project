import React, { useState } from 'react';

interface LoginFormProps {
  onClose: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Adicionar a lógica de autenticação aqui depois
    console.log('Email:', email);
    console.log('Password:', password);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='login-text'>Login to MagicSketch</h2>
      <div className='email'>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='password'>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="submit-login" type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
