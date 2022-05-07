import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import GoogleLogo from "../../../../images/google_logo.png";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  else{
    <Loading></Loading>
  }
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-warning">Error: {error.message}</p>
      </div>
    );
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ width: "50%", height: "1px", background: "white" }}></div>
        <p className="text-white">or</p>
        <div style={{ width: "50%", height: "1px", background: "white" }}></div>
      </div>
      {loading && <p>Loading...</p>}
      {errorElement}
      <Button
        onClick={() => signInWithGoogle()}
        className="w-75 mx-auto d-block"
        variant="light"
      >
        <img src={GoogleLogo} alt="" />
        <span>Login with Google</span>
      </Button>
    </div>
  );
};

export default SocialLogin;
