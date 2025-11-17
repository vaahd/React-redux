import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginimage } from "../assets/images";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    dispatch(login({ name: email.split("@")[0] }));
    navigate("/products");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Account created successfully!");
    setShowSignup(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 ">
      <div className="card shadow-lg p-4" style={{maxWidth: "400px",width: "100%",borderRadius: "15px",backgroundColor: "#fff"}}>
        <div className="text-center mb-3">
          <img src={loginimage} alt="login" className="img-fluid" style={{width: "100%",maxHeight: "160px",objectFit: "cover",borderRadius: "10px"}}/>
        </div>

        <h3 className="text-center fw-semibold mb-2">Welcome Back!</h3>
        <p className="text-center text-muted small mb-4">
          Login to continue shopping with <b>Loop-Cart</b>
        </p>

      
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <div className="input-group">
              <span className="input-group-text bg-light">
                <i className="bi bi-envelope"></i>
              </span>
              <input type="email" className="form-control" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <div className="input-group">
              <span className="input-group-text bg-light">
                <i className="bi bi-lock"></i>
              </span>
              <input type="password" className="form-control" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>

          <button type="submit" className="btn w-100 text-white fw-semibold" style={{background: "linear-gradient(135deg, #343a40, #555)",borderRadius: "8px",transition: "0.3s"}}>
            Login
          </button>
        </form>

        <p className="mt-3 text-center small text-muted">
          Don’t have an account?{" "}
          <button className="btn btn-link p-0 m-0 align-baseline" onClick={() => setShowSignup(true)}>
            Sign up
          </button>
        </p>
      </div>

      {showSignup && (
        <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Account</h5>
                <button type="button" className="btn-close" onClick={() => setShowSignup(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSignup}>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter your name" required/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Enter your email" required/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Create password" required/>
                  </div>
                  <button type="submit" className="btn btn-dark w-100 fw-semibold">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
