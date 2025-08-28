import { useState } from "react";
import AppCard from "./component/AntdCard";
import "./App.css";
import { Input, Divider, Button } from "antd";
import style from "../src/component/antdcard.module.css";
import axios from "axios";

function App() {
  let [inputValue, setInoutValue] = useState("");
  let [userDetails, setUserDetails] = useState({});
  let [userNotFound, setUserNotFount] = useState(false);

  let fatchUserDetails = async () => {
    try {
      let response = await axios.get(
        `https://api.github.com/users/${inputValue}`
      );

      setUserDetails(response.data);
      setUserNotFount(false);
      console.log(userDetails);
    } catch (e) {
      setUserNotFount(true);
      console.log(e.message);
    }
  };

  return (
    <div className={style.container}>
      <Input
        placeholder="Basic usage"
        onChange={(e) => {
          setInoutValue(e.target.value);
        }}
        value={inputValue}
      />
      <Button value="default" onClick={fatchUserDetails}>
        Search
      </Button>

      {userNotFound ? (
        <h1 style={{textAlign:"center"}}>Please Insert Correct User Name</h1>
      ) : (
        <AppCard userD={userDetails} />
      )}

      <Divider />
    </div>
  );
}

export default App;
