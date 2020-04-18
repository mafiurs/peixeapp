import deepFreeze from "deep-freeze";
import dasboardReducer from "../../../redux/dashboard/reducer";
import types from "../../../redux/dashboard/types";

describe("dashboard reducer", () => {
 it("SET_LOADING success", () => {
  const state = {
   lastIndices: { dolar: null, euro: null, yen: null },
   indicesHist: [],
   loading: true,
  };
  const action = {
   type: types.SET_LOADING,
   payload: false,
  };
  const results = dasboardReducer(state, action);
  deepFreeze(state);
  deepFreeze(action);
  expect(results).toMatchObject({
   lastIndices: { dolar: null, euro: null, yen: null },
   indicesHist: [],
   loading: false,
  });
 });

 it("SET_LAST_INDICES success", () => {
  const state = {
   lastIndices: { dolar: null, euro: null, yen: null },
   indicesHist: [],
   loading: true,
  };
  const action = {
   type: types.SET_LAST_INDICES,
   payload: {
    dolar: { key: "dolar" },
    euro: { key: "euro" },
    yen: { key: "yen" },
    oro: { key: "oro" },
    plata: { key: "plata" },
    uf: { key: "uf" },
    utm: { key: "utm" },
    cobre: { key: "cobre" },
    ipc: { key: "ipc" },
    ivp: { key: "ivp" },
   },
  };
  const results = dasboardReducer(state, action);
  deepFreeze(state);
  deepFreeze(action);
  expect(results).toMatchObject({
   lastIndices: {
    dolar: { key: "dolar" },
    euro: { key: "euro" },
    yen: { key: "yen" },
    oro: { key: "oro" },
    plata: { key: "plata" },
    uf: { key: "uf" },
    utm: { key: "utm" },
    cobre: { key: "cobre" },
    ipc: { key: "ipc" },
    ivp: { key: "ivp" },
   },
   indicesHist: [],
   loading: true,
  });
 });
 it("SET_INDICES_HIST success", () => {
  const state = {
   lastIndices: { dolar: null, euro: null, yen: null },
   indicesHist: [],
   loading: true,
  };
  const action = {
   type: types.SET_INDICES_HIST,
   payload: [
    {
     key: "cobre",
     name: "Precio del cobre, dolares por libra",
     unit: "dolar",
     values: { "1546387200": 2.71 },
    },
   ],
  };
  const results = dasboardReducer(state, action);
  deepFreeze(state);
  deepFreeze(action);
  expect(results).toMatchObject({
   lastIndices: { dolar: null, euro: null, yen: null },
   indicesHist: [
    {
     key: "cobre",
     name: "Precio del cobre, dolares por libra",
     unit: "dolar",
     values: [{ date: "01-01-2019", value: 2.71 }],
    },
   ],
   loading: true,
  });
 });
 it("SET_ERROR success", () => {
  const state = {
   lastIndices: { dolar: null, euro: null, yen: null },
   indicesHist: [],
   loading: true,
   error: null,
  };
  const action = {
   type: types.SET_ERROR,
   payload: new Error("Error message"),
  };
  const results = dasboardReducer(state, action);
  deepFreeze(state);
  deepFreeze(action);
  expect(results).toStrictEqual({
   lastIndices: { dolar: null, euro: null, yen: null },
   indicesHist: [],
   loading: true,
   error: new Error("Error message"),
  });
 });
});
