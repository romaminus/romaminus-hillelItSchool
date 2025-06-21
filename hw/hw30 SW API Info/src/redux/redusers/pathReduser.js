import { createSlice } from "@reduxjs/toolkit";

const pathSlice = createSlice({
  name: "path",
  initialState: {
    path: {
      api: "https://swapi.info/api",
      films: "https://swapi.info/api/films",
      people: "https://swapi.info/api/people",
      planets: "https://swapi.info/api/planets",
      species: "https://swapi.info/api/species",
      vehicles: "https://swapi.info/api/vehicles",
      starships: "https://swapi.info/api/starships",
    },
  },
  // initialState: {
  //   api: {url: "https://swapi.info/api", data: null},
  //   films: {url: "https://swapi.info/api/films", data: null},
  //   people: {url: "https://swapi.info/api/people", data: null},
  //   planets: {url: "https://swapi.info/api/planets", data: null},
  //   species: {url: "https://swapi.info/api/species", data: null},
  //   vehicles: {url: "https://swapi.info/api/vehicles", data: null},
  //   starships: {url: "https://swapi.info/api/starships", data: null},
  // },
  reducers: {
    
  },
});

// export const {} = pathSlice.actions;
export default pathSlice.reducer;
