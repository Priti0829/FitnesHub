import React, { useEffect, useState } from "react";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    console.log(bodyParts)

    fetchExercisesData();
  }, []);


  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      console.log(exercisesData)

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "37px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: "44px",
          textAlign: "center",
          marginBottom: "49px",
        }}
      >
        <strong>
          Awesome Exercises You <br /> Should Know
        </strong>
      </div>
      <div 
        style={{
          position: "relative",
          marginBottom: "72px",
        }}
      >
        <input 
          style={{
            height: "58px",
            fontWeight: "700",
            border: "none",
            borderRadius: "4px",
            width: "350px",
            backgroundColor: "#fff",
            borderRadius: "40px",
            padding: "0 20px",
          }}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Exercises"
        />
        <button
          style={{
            backgroundColor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: "80px",
            height: "57px",
            fontSize: "14px",
            border: "none",
            borderRadius: "40px",
            cursor: "pointer",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          padding: "20px",
        }}
      >
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </div>
    </div>
  );
};

export default SearchExercises;
