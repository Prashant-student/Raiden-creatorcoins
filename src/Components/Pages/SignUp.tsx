import { Container } from "@material-ui/core";
import { Link } from "react-router-dom"
import "./NavbarSignUp.css";



const SignUp = () => {
    return (
        
            <div className="NavbarSignUp">
                <div className="info">
                    <p>Welcom to Raiden</p>
                    <p>Create acc and explore raiden</p>
                </div>
                <div className="containerGrid">
                    <div className="childGrid">
                        <button style={{
                            backgroundColor:"cyan"                        
                        }}>
                            <Link to="buyerSignUp" style={{
                                color:"black",
                                textDecoration:"none",
                            }}>Buyer</Link>
                        </button>
                    </div>
                    <div className="childGrid">
                    <button style={{
                            backgroundColor:"cyan"
                        }}>
                            <Link to="CreatorSignUp" style={{
                                color:"black",
                                textDecoration:"none",
                            }}>Creator</Link>
                        </button>
                    </div>
                </div>
            </div>

        

    )
}

export default SignUp;