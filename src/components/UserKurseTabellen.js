import React from "react";
import { BookingBtn } from "./UserKurseTabellenButton.js";
import { useState, useContext, useEffect } from "react";
import { LoginContext } from "../context/loginContext.js";
import axios from "axios";


export function UserKurseTabellen(props) {

  const { login, id } = useContext(LoginContext);
    const [isLogged] = login;
    const [userId, setUserId] = id;
    const baseUrl = `http://localhost:4000/courses/`;
    const [userInfo, setUserInfo] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        
        const showUserInfo = async () => {
            setUserId(userId)
            const userInfo = await axios.get(`${baseUrl}${userId}`,{withCredentials: true});
            setUserInfo(userInfo.data);
        }
        showUserInfo();
    }, [id])

  return (
    <>
      <table>
        <tr>
          <th>{props.date.toDateString()}</th>
          <th className="kursname">{props.kurs}</th>
        </tr>
        <tr>
          <td>9 Uhr</td>
          <td className="td-button"><BookingBtn /></td>
        </tr>
        <tr>
          <td>11 Uhr</td>
          <td className="td-button"><BookingBtn /></td>
        </tr>
        <tr>
          <td>17 Uhr</td>
          <td className="td-button"><BookingBtn /></td>
        </tr>
        <tr>
          <td>19 Uhr</td>
          <td className="td-button"><BookingBtn /></td>
        </tr>
      </table>
    </>
  );
}
