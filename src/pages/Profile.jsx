import { Edit, Send } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const url = "https://vanlife-api-82gp.onrender.com/user/profile";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [toggleFirstName, setToggleFirstName] = useState(false);
  const [toggleLastName, setToggleLastName] = useState(false);
  const [toggleEmail, setToggleEmail] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((user) => {
        console.log(user);
        setFirstName(user.data.firstname);
        setLastName(user.data.lastname);
        setEmail(user.data.email);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full p-3 mx-auto md:w-2/5">
      <div className="w-full p-5 bg-white rounded-lg shadow-lg">
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
              <div>
                <input
                  type="text"
                  placeholder="New First Name"
                  className="text-sm bg-gray-100 border-none focus:ring-0"
                />
              </div>
              <div>
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
              <div>
                <input
                  type="text"
                  placeholder="New Last Name"
                  className="text-sm bg-gray-100 border-none focus:ring-0"
                />
              </div>
              <div>
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
              <div>
                <input
                  type="text"
                  placeholder="New Email"
                  className="text-sm bg-gray-100 border-none focus:ring-0"
                />
              </div>
              <div>
                <Send className="text-blue-800 transition cursor-pointer hover:text-yellow-400" />
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Profile;
