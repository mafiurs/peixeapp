import { createStore, combineReducers, applyMiddleware } from "redux";
import dashboard from "../../../redux/dashboard/reducer";
import actions from "../../../redux/dashboard/actions";
const initialState = {
 dashboard: {
  lastIndices: {
   dolar: null,
   euro: null,
   yen: null,
   oro: null,
   plata: null,
   uf: null,
   utm: null,
   cobre: null,
   ipc: null,
   ivp: null,
  },
  indicesHist: [],
  loading: true,
 },
};

const storeFactory = (stateData) =>
 applyMiddleware()(createStore)(
  combineReducers({ dashboard }),
  localStorage["redux-store"]
   ? JSON.parse(localStorage["redux-store"])
   : stateData
 );

describe("dashboard setLoading", () => {
 let store;
 beforeAll(() => {
  store = storeFactory(initialState);
  store.dispatch(actions.setLoading(false));
 });
 it("loading should be false", () => {
  return expect(store.getState().dashboard.loading).toBe(false);
 });
});

describe("dashboard setLastIndices", () => {
 let store;
 const payload = {
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
 };
 beforeAll(() => {
  store = storeFactory(initialState);
  store.dispatch(actions.setLastIndices(payload));
 });

 it("dolar key should be dolar", () => {
  return expect(store.getState().dashboard.lastIndices.dolar.key).toBe("dolar");
 });
 it("cobre key should be cobre", () => {
  return expect(store.getState().dashboard.lastIndices.cobre.key).toBe("cobre");
 });
});

describe("dashboard setIndicesHist", () => {
 let store;
 const payload = [
  {
   key: "cobre",
   name: "Precio del cobre, dolares por libra",
   unit: "dolar",
   values: { "1546387200": 2.71 },
  },
  {
   key: "dolar",
   name: "Dólar observado",
   unit: "pesos",
   values: { "1546387200": 694.77 },
  },
 ];
 beforeAll(() => {
  store = storeFactory(initialState);
  store.dispatch(actions.setIndicesHist(payload));
 });

 it("indicesHist length should be 2", () => {
  return expect(store.getState().dashboard.indicesHist.length).toBe(2);
 });
 it("indicesHist cobre unit should be dolar", () => {
  return expect(store.getState().dashboard.indicesHist[0].unit).toBe("dolar");
 });
 it("indicesHist array should be properly formed", () => {
  return expect(
   store.getState().dashboard.indicesHist[0].values[0]
  ).toMatchObject({ date: "01-01-2019", value: 2.71 });
 });
});

describe("dashboard setError", () => {
 let store;
 beforeAll(() => {
  store = storeFactory(initialState);
  store.dispatch(actions.setError(new Error("error message")));
 });
 it("error should be set", () => {
  return expect(store.getState().dashboard.error).toStrictEqual(
   new Error("error message")
  );
 });
});
