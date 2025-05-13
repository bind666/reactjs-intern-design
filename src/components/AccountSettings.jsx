import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AccountSettings = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        fullName: "",
        email: "",
    });

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const stateUser = location.state;

        if (stateUser && stateUser.fullName && stateUser.email) {
            setUser(stateUser);
        } else if (storedUser && storedUser.fullName && storedUser.email) {
            setUser({
                fullName: storedUser.fullName,
                email: storedUser.email,
            });
        } else {
            navigate("/signup");
        }
    }, [location.state, navigate]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#f5f6fa]">
            <div className="border-[#e5e5e5]  bg-whitep-0 rounded shadow-md max-w-xs h-[95vh] overflow-hidden border">
                <h2 className="m-0 font-normal text-[20px] px-[25px] py-[20px] bg-white border-b border-white shadow-none">
                    Account Settings
                </h2>

                <div className="p-[25px]">
                    <div className="flex items-center gap-[20px]">
                        <div className="relative w-[55px] h-[55px]">
                            <img
                                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/rohit-sharma-131403815-1x1_0.jpg?VersionId=HqiqXF3v93KyhiUD4JWFfFsmqvBLhSo8"
                                alt="Profile"
                                className="w-full h-full rounded-full object-cover"
                            />
                            <div className="absolute bottom-0 right-0 w-[20px] h-[20px] bg-[#555] p-[5px] rounded-full">
                                <img
                                    src="https://img.icons8.com/fluency-systems-filled/24/ffffff/camera.png"
                                    alt="Camera Icon"
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="m-0 font-semibold">{user.fullName}</h3>
                            <p className="my-1 text-gray-600">{user.email}</p>
                        </div>
                    </div>

                    <p className="mt-[15px] text-sm text-[#1e1d1d] text-left leading-[1.5] border-b border-dashed border-[#ccc] pb-[15px]">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
                        Erat, Sed Diam
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;
