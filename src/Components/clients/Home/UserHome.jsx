import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import userAxios from "../../../Axios/userAxios.js";

function UserHome() {
    const [name, setName] = useState("");
    const token = useSelector((store) => store.Client.Token);

    useEffect(() => {
        if (token) {
            userAxios
                .get("/getDetails", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    setName(res.data.name);
                });
        } else {
            console.log("no token");
        }
    }, [token]);

    return (
        <div>
            <div className="p-3">
                <div className="m-5">
                    <div className="d-flex justify-content-center p-3">{name ? <b>Welcome {name}</b> : ""}</div>
                    <div className="d-flex justify-content-center">
                        <img
                            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                            alt="...."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserHome;
