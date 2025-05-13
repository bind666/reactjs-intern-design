import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center h-screen p-5 bg-[#f5f5f5]">
            {/* Outer container with border like the screenshot */}
            <div className="w-full flex flex-col justify-end max-w-xs border border-[#e5e5e5] rounded-md bg-white p-5 pb-10 shadow-sm">
                <h2 className="text-[20px] font-semibold text-[#262626] mb-1 text-left">
                    Welcome to PopX
                </h2>
                <p className="text-[#6b6b6b] text-sm mb-6 text-left">
                    Lorem ipsum dolor sit amet, <br />
                    consectetur adipiscing elit,
                </p>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => navigate("/signup")}
                        className="w-full py-3 rounded-md bg-[#8320fd] text-white text-[14px] font-semibold hover:bg-[#6c1acf] transition"
                    >
                        Create Account
                    </button>
                    <button
                        onClick={() => navigate("/login")}
                        className="w-full py-3 rounded-md bg-[#f1e6fe] text-[#5a0f91] text-[14px] font-semibold hover:bg-[#e8d6fd] transition"
                    >
                        Already Registered? Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
