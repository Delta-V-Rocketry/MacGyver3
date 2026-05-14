function Login() {
    return (
        <div className="login-container">
          <div className="login-card">
            <div className="login-logo">
                <img src="/assets/logo.png" alt="MacGyver Logo" />
                <h1>DeltaV Rocketry</h1>
            </div> {/* Logo e título */}

        <h2>Login</h2>
        <div className="login-field">
            <label>E-mail</label>
            <input type="email" placeholder="Enter your e-mail" />
        </div> {/* Campo de e-mail */}

        <div className="login-field">
            <label>Senha</label>
            <input type="password" placeholder="Insira sua senha" />
        </div> {/* Campo de senha */}
        
        <button className="login-btn">Acessar</button>
      </div> {/* Botão de login */}
    
    </div>
  );
}

export default Login;