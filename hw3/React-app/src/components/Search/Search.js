import React, { useState, useEffect } from "react";

const Search = () => {
  const [charName, setCharName] = useState([]);
  const [imgList, setImgList] = useState([]);
  const [result, setResult] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [value, setValue] = useState("");
  const [valueIndex, setValueIndex] = useState(-1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const valueIndex = charName.indexOf(value);
    if (valueIndex < 0) {
      setResult(false);
      setNoResult(true);
    } else {
      setResult(true);
      setNoResult(false);
      setValueIndex(valueIndex);
    }
  };

  useEffect(() => {
    let url = "https://thronesapi.com/api/v2/Characters";
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        const arr1 = [];
        const arr2 = [];
        result.forEach((element) => {
          arr1.push(element.fullName);
          arr2.push(element.imageUrl);
        });
        setCharName(arr1);
        setImgList(arr2);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container w-75 mx-auto">
      <h1>Search for the character</h1>
      <div className="container-sm border rounded bg-light search-container">
        <form onSubmit={handleSubmit} className="p-3">
          <div className="mb-3">
            <label htmlFor="input-char">Enter the character full name:</label>
            <input
              type="text"
              id="input-char"
              name="input-char"
              value={value}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <button type="submit" name="getInfoBtn" className="btn btn-primary search-btn">
              Submit
            </button>
          </div>
        </form>

        {result ? (
          <figure>
            <img src={imgList[valueIndex]} alt-text="GOT Character" />
            <figcaption className="figure-caption">
              {charName[valueIndex]}
            </figcaption>
          </figure>
        ) : (
          ""
        )}
        {noResult && <p>Please enter correct full name</p>}
      </div>
    </div>
  );
};

export default Search;
