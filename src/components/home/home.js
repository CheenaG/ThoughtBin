import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import "./home.css";
import { getByPlaceholderText } from "@testing-library/react";

export default function FreeSolo() {
  const [data, setData] = useState(posts);
  const [filterData, setFilterData] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    if (value !== "") {
      searchFilterData();
    }
  }, [value]);

  const searchFilterData = () => {
    const newData = [...data];
    const filteredData = newData.filter((obj) => obj.title === value);
    console.log(filteredData, "hello");

    setFilterData(filteredData);
  };
  return (
    <div className="home_container_main">
      <div>
        <div className="section_home">
          <div className="home_text">A Word in Your Mind...</div>
          <div>
            {filterData.length > 0 &&
              filterData.map((item, index) => {
                return <div key={index}>{item.title}</div>;
              })}
          </div>
          <div>
            <div className="search_div">
              <div className="searchimg_div">
                <img src="/images/pic19.png" />
              </div>
              <input
                type="text"
                className="input_div"
                placeholder="e.g Fun Life"
                onChange={(e) => setValue(e.target.value)}
              />
            </div>

            <div className="post_div2">
              <button className="btn_post">Find Related Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const posts = [
  { title: "career" },
  { title: "want Justice" },
  { title: "Politics" },
  { title: "Mental Health" },
  { title: "Fun Life" },
  { title: "Path to success" },
  { title: "Travel and health" },
  { title: "Heal Your Heart" },
];
