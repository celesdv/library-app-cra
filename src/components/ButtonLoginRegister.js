import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../config/firebase";
import { AuthContext } from "../context/authContext";

const ButtonLoginRegister = () => {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <>
            {currentUser ? (
                <button
                    className="group absolute top-0 right-0 mx-6 my-6 cursor-pointer rounded-full border border-rose-700 bg-slate-100 px-2 py-1 hover:bg-rose-800 focus:outline-none focus:ring-1 focus:ring-rose-300"
                    onClick={logoutUser}
                >
                    <span className="text-center text-lg font-semibold text-rose-700 group-hover:text-white">
                        Log Out
                    </span>
                </button>
            ) : (
                <button
                    className="group absolute top-0 right-0 mx-6 my-6 cursor-pointer rounded-full border border-teal-700 bg-slate-100 px-2 py-1 hover:bg-teal-800 focus:outline-none focus:ring-1 focus:ring-teal-300"
                    onClick={() => {
                        navigate("/login");
                    }}
                >
                    <span className="text-center text-lg font-semibold text-teal-700 group-hover:text-white">
                        Sign In
                    </span>
                </button>
            )}
        </>
    );
};
export default ButtonLoginRegister;
