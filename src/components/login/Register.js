import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { registerUser } from "../../config/firebase";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    //-----------------------
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

    const handleRegister = () => {
        registerUser(email, password)
            .then((userCredential) => {
                Toast.fire({
                    icon: "success",
                    title: "User created successfully!",
                });
                navigate("/login");
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
    // ----------------------

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
                            Register
                        </h1>
                        <div>
                            <label className="mb-1 block font-semibold text-gray-600">
                                Email
                                <input
                                    placeholder="email@address.com"
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
                                    placeholder="Password"
                                    type="password"
                                    value={password}
                                    onChange={handlePassword}
                                    className="w-full rounded-md bg-indigo-50 px-4 py-2 outline-none"
                                />
                            </label>
                        </div>
                    </div>
                    <button
                        onClick={handleRegister}
                        className="mt-4 w-full rounded-md bg-gradient-to-tr from-blue-600 to-indigo-600 py-2 text-lg tracking-wide text-slate-50"
                    >
                        Register
                    </button>

                    <div className="mt-4 text-center">
                        Already have an account?{" "}
                        <span
                            onClick={() => navigate("/login")}
                            style={{
                                color: "#293462",
                                fontWeight: "bold",
                                cursor: "pointer",
                            }}
                        >
                            Log in
                        </span>
                    </div>
                </div>
            </div>
        </div>
        // <div style={{ textAlign: "center" }}>
        //     <div>
        //         <h3>Registro</h3>
        //     </div>
        //     <div>
        //         <input
        //             value={email}
        //             onChange={handleEmail}
        //             placeholder="Escribi un e-mail"
        //         />
        //     </div>
        //     <div>
        //         <input
        //             type="password"
        //             value={password}
        //             onChange={handlePassword}
        //             placeholder="Escribi una contraseña"
        //         />
        //     </div>
        //     <button onClick={handleRegister}>Enviar</button>
        //     <div style={{ fontSize: "12px" }}>
        //         ¿Ya tenes una cuenta?{" "}
        //         <span
        //             onClick={() => navigate("/login")}
        //             style={{
        //                 color: "#293462",
        //                 fontWeight: "bold",
        //                 cursor: "pointer",
        //             }}
        //         >
        //             Inicia Sesion
        //         </span>
        //     </div>
        // </div>
    );
};

export default Register;
