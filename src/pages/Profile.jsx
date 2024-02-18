import { Edit, Send } from "@mui/icons-material";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const url = import.meta.env.VITE_REGISTER_UPDATE_URL;

  // States to store each value localStorage
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [allData, setAllData] = useState({});

  // Toggle each of the inputs
  const [toggleFirstName, setToggleFirstName] = useState(false);
  const [toggleLastName, setToggleLastName] = useState(false);
  const [toggleEmail, setToggleEmail] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  // Function to get user information
  const getUserInfo = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    setFirstName(user.firstname);
    setLastName(user.lastname);
    setEmail(user.email);
    setPassword(user.password);
    setUserId(user._id);
  };

  useEffect(() => {
    getUserInfo();
    setIsLoading(false);
  }, []);

  // Function to update password
  const updatePassword = () => {
    if (oldPassword === password) {
      if (newPassword === confirmNewPassword) {
        const newUserDetails = { userId, newPassword };
        setAllData(newUserDetails);
        axios
          .post(url, allData)
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              toast.success(res.data.message);
              setTogglePassword(false);
              setTimeout(() => {
                navigate("/login");
              }, 2500);
            }
          })
          .catch((err) => {
            console.log(err);
            toast.error(err.response.data.message);
            setTogglePassword(false);
          });
      } else {
        toast.error("Passwords do not match");
        setTogglePassword(false);
      }
    } else {
      toast.error("Incorrect password");
      setTogglePassword(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="w-full text-center h-80v pt-60">
          <Spinner size="xl" />
        </div>
      ) : (
        <div className="relative w-full p-3 mx-auto md:w-2/5 min-h-80v">
          <div className="w-full p-5 bg-white rounded-lg shadow-lg">
            <h3 className="tracking-wide text-center text-blue-700 underline">
              Profile
            </h3>
            <div>
              <div className="flex justify-between my-5 item-center">
                <div>
                  <span className="mr-2 font-semibold">First Name:</span>
                  <span>{firstName}</span>
                </div>
                <div>
                  <Edit
                    className={
                      "text-yellow-400 transition cursor-pointer hover:text-blue-800"
                    }
                    onClick={() => setToggleFirstName(!toggleFirstName)}
                  />
                </div>
              </div>
              {toggleFirstName && (
                <div
                  className={
                    "flex items-center justify-between px-2 bg-gray-100 rounded-lg"
                  }
                >
                  <div className="basis-5/6">
                    <input
                      type="text"
                      placeholder={firstName}
                      className="w-full text-sm bg-gray-100 border-none focus:ring-0 md:h-16"
                    />
                  </div>
                  <div className="basis-1/6 text-end">
                    <Send className="text-blue-800 transition cursor-pointer hover:text-yellow-400" />
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="flex justify-between my-5 item-center">
                <div>
                  <span className="mr-2 font-semibold">Last Name:</span>
                  <span>{lastName}</span>
                </div>
                <div>
                  <Edit
                    className={
                      "text-yellow-400 transition cursor-pointer hover:text-blue-800"
                    }
                    onClick={() => setToggleLastName(!toggleLastName)}
                  />
                </div>
              </div>
              {toggleLastName && (
                <div
                  className={
                    "flex items-center justify-between px-2 bg-gray-100 rounded-lg"
                  }
                >
                  <div className="basis-5/6">
                    <input
                      type="text"
                      placeholder={lastName}
                      className="w-full text-sm bg-gray-100 border-none focus:ring-0 md:h-16"
                    />
                  </div>
                  <div className="basis-1/6 text-end">
                    <Send className="text-blue-800 transition cursor-pointer hover:text-yellow-400" />
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="flex justify-between my-5 item-center">
                <div>
                  <span className="mr-2 font-semibold">Email:</span>
                  <span>{email}</span>
                </div>
                <div>
                  <Edit
                    className={
                      "text-yellow-400 transition cursor-pointer hover:text-blue-800"
                    }
                    onClick={() => setToggleEmail(!toggleEmail)}
                  />
                </div>
              </div>
              {toggleEmail && (
                <div
                  className={
                    "flex items-center justify-between px-2 bg-gray-100 rounded-lg"
                  }
                >
                  <div className="basis-5/6">
                    <input
                      type="text"
                      placeholder={email}
                      className="w-full text-sm bg-gray-100 border-none focus:ring-0 md:h-16"
                    />
                  </div>
                  <div className="basis-1/6 text-end">
                    <Send className="text-blue-800 transition cursor-pointer hover:text-yellow-400" />
                  </div>
                </div>
              )}
            </div>

            <div>
              <button
                className="w-full h-12 font-semibold text-white transition bg-blue-800 rounded-lg hover:opacity-80"
                onClick={() => setTogglePassword(!togglePassword)}
              >
                Change Password
              </button>
              {togglePassword && (
                <div>
                  <input
                    type="text"
                    placeholder="Old password"
                    className="w-full my-2 text-sm bg-gray-100 border-none rounded-lg focus:ring-0 md:h-16"
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="New password"
                    className="w-full my-2 text-sm bg-gray-100 border-none rounded-lg focus:ring-0 md:h-16"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Confirm new password"
                    className="w-full my-2 text-sm bg-gray-100 border-none rounded-lg focus:ring-0 md:h-16"
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                  />
                  <button
                    className="w-full h-12 font-semibold text-white transition bg-yellow-400 rounded-lg hover:opacity-80"
                    onClick={updatePassword}
                  >
                    Update
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
