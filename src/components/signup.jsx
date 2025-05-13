import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        company: "",
        agency: "",
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === "radio" ? value : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem("user", JSON.stringify(formData));

        navigate("/account", {
            state: {
                fullName: formData.fullName,
                email: formData.email,
            },
        });
    };

    return (
        <div className="flex items-center justify-center h-screen p-1 bg-[#f7f7f7fb]">
            <div className="w-full max-w-xs border-[#e5e5e5] rounded-md bg-white p-8 shadow-lg h-[95%]">
                <h2 className="text-[25px] font-bold text-[#222] leading-none mb-0">Create your</h2>
                <h3 className="text-[25px] font-bold text-[#222] leading-[1.2] mb-6">PopX account</h3>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div className="w-full relative">
                        <label className="absolute left-[10px] bg-white px-1 bottom-[23px] block text-sm font-medium text-[#6e44ff] mt-1 mb-1">
                            Full Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="p-2 w-full border border-[#dcdcdc] rounded-md text-sm text-black bg-transparent"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="w-full relative">
                        <label className="absolute left-[10px] bg-white px-1 bottom-[23px] block text-sm font-medium text-[#6e44ff] mt-1 mb-1">
                            Phone number<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Phone number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="p-2 w-full border border-[#dcdcdc] rounded-md text-sm text-black bg-transparent"
                        />
                    </div>

                    {/* Email Address */}
                    <div className="w-full relative">
                        <label className="absolute left-[10px] bg-white px-1 bottom-[23px] block text-sm font-medium text-[#6e44ff] mt-1 mb-1">
                            Email address<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="p-2 w-full border border-[#dcdcdc] rounded-md text-sm text-black bg-transparent"
                        />
                    </div>

                    {/* Password */}
                    <div className="w-full relative">
                        <label className="absolute left-[10px] bg-white px-1 bottom-[23px] block text-sm font-medium text-[#6e44ff] mt-1 mb-1">
                            Password<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="p-2 w-full border border-[#dcdcdc] rounded-md text-sm text-black bg-transparent"
                        />
                    </div>

                    {/* Company Name*/}
                    <div className="w-full relative">
                        <label className="absolute left-[10px] bg-white px-1 bottom-[23px] block text-sm font-medium text-[#6e44ff] mt-1 mb-1">
                            Company name
                        </label>
                        <input
                            type="text"
                            placeholder="Company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="p-2 w-full border border-[#dcdcdc] rounded-md text-sm text-black bg-transparent"
                        />
                    </div>

                    {/* Radio Buttons */}
                    <p className="text-sm font-medium mt-3 mb-1">Are you an Agency?*</p>
                    <div className="flex flex-wrap gap-4 mb-6">
                        <label className="flex items-center gap-2 text-sm">
                            <input
                                type="radio"
                                name="agency"
                                value="Yes"
                                onChange={handleChange}
                                required
                            />
                            Yes
                        </label>
                        <label className="flex items-center gap-2 text-sm">
                            <input
                                type="radio"
                                name="agency"
                                value="No"
                                onChange={handleChange}
                                required
                            />
                            No
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="mt-24 bg-[#6e44ff] text-white font-semibold py-3 rounded-md text-sm hover:bg-[#5a34d2] transition duration-300"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
