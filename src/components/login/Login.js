import React, { useState } from "react";
import { loginUser } from "../../config/firebase";
import Swal from "sweetalert2";

// usamos este hook para navegar entre paginas
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    // ------------------------------------

    const Toast = Swal.mixin({
        toast: true,
        position: "top-right",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

    const handleSubmit = () => {
        loginUser(email, password)
            .then((userCredential) => {
                Toast.fire({
                    icon: "success",
                    title: "Login successfully!",
                });
                navigate("/");
            })
            .catch((error) => {
                Toast.fire({
                    icon: "error",
                    title: "Something went wrong! :(",
                });
                const errorCode = error.code;
                console.log(errorCode);
            });
    };

    // ------------------------------------

    return (
        <div className="flex h-screen w-full items-center justify-center bg-slate-700">
            <div>
                <div className="relative w-screen max-w-sm rounded-xl bg-white px-10 py-8 shadow-md">
                    <button
                        className="group absolute top-0 right-0 mx-2 my-2 rounded-full bg-slate-100 px-2 py-1 hover:bg-red-500 md:bg-transparent"
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        <span className="text-xl font-bold text-gray-700 group-hover:text-white">
                            X
                        </span>
                    </button>
                    <div className="space-y-4">
                        <h1 className="text-center text-2xl font-semibold text-gray-600">
                            Login
                        </h1>
                        <div>
                            <label className="mb-1 block font-semibold text-gray-600">
                                Email
                                <input
                                    placeholder="your email"
                                    value={email}
                                    onChange={handleEmail}
                                    className="w-full rounded-md bg-indigo-50 px-4 py-2 outline-none"
                                />
                            </label>
                        </div>
                        <div>
                            <label className="mb-1 block font-semibold text-gray-600">
                                Password
                                <input
                                    type="password"
                                    placeholder="your password"
                                    value={password}
                                    onChange={handlePassword}
                                    className="w-full rounded-md bg-indigo-50 px-4 py-2 outline-none"
                                />
                            </label>
                        </div>
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="mt-4 w-full rounded-md bg-gradient-to-tr from-blue-600 to-indigo-600 py-2 text-lg tracking-wide text-slate-50"
                    >
                        Sign in
                    </button>

                    <div className="mt-4 text-center">
                        No have account?{" "}
                        <span
                            onClick={() => navigate("/register")}
                            style={{
                                color: "#293462",
                                fontWeight: "bold",
                                cursor: "pointer",
                            }}
                        >
                            Register
                        </span>
                    </div>
                </div>
            </div>
        </div>
        // <div style={{ textAlign: "center" }}>
        //     <div>
        //         <h3>Iniciar</h3>
        //     </div>
        //     <div>
        //         <input
        //             value={email}
        //             onChange={handleEmail}
        //             placeholder="Ingresa tu e-mail"
        //         />
        //     </div>
        //     <div>
        //         <input
        //             type="password"
        //             value={password}
        //             onChange={handlePassword}
        //             placeholder="Ingresa tu contraseña"
        //         />
        //     </div>
        //     <button onClick={handleSubmit}>Enviar</button>
        //     <div style={{ fontSize: "12px" }}>
        //         ¿No tenes una cuenta? Registrate{" "}
        //         <span
        //             onClick={() => navigate("/register")}
        //             style={{
        //                 color: "#293462",
        //                 fontWeight: "bold",
        //                 cursor: "pointer",
        //             }}
        //         >
        //             Aca
        //         </span>
        //     </div>
        // </div>
    );
};

export default Login;
