import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (
            storedUser &&
            storedUser.email === email &&
            storedUser.password === password
        ) {
            navigate("/account", {
                state: {
                    fullName: storedUser.fullName,
                    email: storedUser.email,
                },
            });
        } else {
            alert("Invalid email or password. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen p-5 bg-[#f7f7f7fb]">
            <div className="w-full max-w-xs border-[#e5e5e5] bg-white p-[30px] sm:p-[25px_20px] rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] h-[97%]">
                <h2 className="text-[34px] sm:text-[20px] font-bold text-[#222] leading-none mb-1">Signin to your</h2>
                <h3 className="text-[28px] font-bold text-[#222] mb-5">PopX account</h3>
                <p className="text-[#7c7979] text-[14px] mb-[3px] mt-[1%]">Lorem ipsum dolor sit amet,</p>
                <p className="text-[#7c7979] text-[14px] mb-[3px] mt-[1%]">consectetur adipiscing elit,</p>

                <form onSubmit={handleLogin} className="flex flex-col mt-4">
                    <div className="w-full relative">
                        <label className="absolute left-[10px] bg-white px-1 bottom-[23px] block text-sm font-medium text-[#6e44ff] mt-1 mb-1">Email address<span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="p-2 w-full border border-[#dcdcdc] rounded-md text-sm text-black bg-transparent"
                        />
                    </div>

                    <div className="w-full relative mt-4">
                        <label className="absolute left-[10px] bg-white px-1 bottom-[23px] block text-sm font-medium text-[#6e44ff] mt-1 mb-1">Password<span className="text-red-500">*</span></label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="p-2 w-full border border-[#dcdcdc] rounded-md text-sm text-black bg-transparent"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#b1b0b0] hover:bg-[#8d8d8e] text-white font-semibold rounded-md px-4 py-3 text-[14px] mt-10 sm:text-[13px] sm:py-[10px] transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
