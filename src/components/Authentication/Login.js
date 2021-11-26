import React from 'react';
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth"
const Login = () => {
    const {
      user, 
      isLogin,
      signInUsingGoogle,
      setUser,
      setIsLoading,
    } = useAuth();

    const history = useHistory();
    const location = useLocation();
  
    const handleWithGoogle = () => {
      signInUsingGoogle()
        .then((result) => {
          setUser(result.user);
          history.push(location.state?.from || "/Home");
        })
        .finally(() => setIsLoading(false));
    };

    
    return (
        <div>
            <div className="App">
      <div className="container mt-5">
        <h5 className="text-center fw-bolder text-primary mt-0 mb-4">
          Please {isLogin ? "Login" : "Register"}
        </h5>
        <h2>{user?.displayName}</h2>
        <hr />
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8">
            
          {user?.email ? (
            <h4 className="text-success"> Successful !!</h4>
          ) : (
            <button style={{backgroundColor: "white"}} className="mt-5 border-0" onClick={handleWithGoogle}>
              <img width='70%' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR4Rjost60tDsAWMDSld9Nja7eO8LMt8FQgatBKYyrs2-n1RBV3t2W3QbZO0FtbbHLFQ&usqp=CAU" alt="" />
            </button>
          )}
          </div>
          <div className="col-lg-8">
            <img width="100%"
              src="https://i.pinimg.com/736x/ec/fb/9f/ecfb9ffd184bceec03b3c19161eee7fd.jpg"
              alt=""
            />
          </div>

        </div>
      </div>
    </div>
        </div>
    );
};

export default Login;


















