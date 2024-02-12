import { Edit, Send } from "@mui/icons-material";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";

const Profile = () => {
  // States to store each value from API
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // Toggle each of the inputs
  const [toggleFirstName, setToggleFirstName] = useState(false);
  const [toggleLastName, setToggleLastName] = useState(false);
  const [toggleEmail, setToggleEmail] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  // API endpoint
  const url = "https://vanlife-api-82gp.onrender.com/user/profile";

  useEffect(() => {
    axios
      .get(url)
      .then((user) => {
        console.log(user);
        setFirstName(user.data.firstname);
        setLastName(user.data.lastname);
        setEmail(user.data.email);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="w-full text-center h-80v pt-60">
          <Spinner size="xl" />
        </div>
      ) : (
        <div className="relative w-full p-3 mx-auto md:w-2/5 min-h-80v">
          <div className="w-full p-5 bg-white rounded-lg shadow-lg">
            <h3 className="tracking-wide text-center text-blue-700 underline">Profile</h3>
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
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
