import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";
import Grid from "@material-ui/core/Grid";
import CurrencyBox from "./CurrencyBox";
import ChartBox from "./ChartBox";
import actions from "../../redux/dashboard/actions";
import "./dashboard.css";

const Dashboard = (props) => {
 const dispatch = useDispatch();
 const { loading, lastIndices, indicesHist, error } = useSelector(
  ({ dashboard }) => dashboard
 );
 const { dolar, euro, yen, oro, plata, cobre, uf, utm, ipc, ivp } = lastIndices; //divisas
 const lastIndicesArray = [
  dolar,
  euro,
  yen,
  oro,
  plata,
  cobre,
  uf,
  utm,
  ipc,
  ivp,
 ];

 useEffect(() => {
  dispatch(actions.fetchLastIndices());
 }, [dispatch]);

 if (loading)
  return (
   <div className="skeleton-container">
    <Grid item xs={12}>
     <Skeleton variant="text" width="50%" height={60} />
     <Skeleton variant="rect" width="100%" height={170} />
     <Skeleton variant="text" width="50%" height={60} />
     <Skeleton variant="rect" width="100%" height={300} />
    </Grid>
   </div>
  );
 if (error) return <p>{error.message}</p>;

 const divisas = lastIndicesArray.filter(
  (item) => ["dolar", "euro", "yen"].indexOf(item.key) !== -1
 );
 const metales = lastIndicesArray.filter(
  (item) => ["cobre", "plata", "oro"].indexOf(item.key) !== -1
 );
 const unidadDeCuenta = lastIndicesArray.filter(
  (item) => ["uf", "utm"].indexOf(item.key) !== -1
 );
 const indices = lastIndicesArray.filter(
  (item) => ["ipc", "ivp"].indexOf(item.key) !== -1
 );
 return (
  <Grid item xs={12}>
   <h2>Últimos Indicadores</h2>
   <div className="last-indices-container">
    {/* <h3>Metales</h3> */}

    <div className="indices-container">
     <div className="indices-container__title">Divisas</div>
     <div className="indices-container__flexbox">
      {divisas.map((item, idx) => (
       <CurrencyBox currency={item} key={idx} flagCode="us" />
      ))}
     </div>
    </div>
    <div className="indices-container">
     <div className="indices-container__title">Metales</div>
     <div className="indices-container__flexbox">
      {metales.map((item, idx) => (
       <CurrencyBox currency={item} key={idx} flagCode="us" />
      ))}
     </div>
    </div>
    <div className="indices-container">
     <div className="indices-container__title">Unidades de cuenta</div>
     <div className="indices-container__flexbox">
      {unidadDeCuenta.map((item, idx) => (
       <CurrencyBox currency={item} key={idx} flagCode="us" />
      ))}
     </div>
    </div>
    <div className="indices-container">
     <div className="indices-container__title">Indices</div>
     <div className="indices-container__flexbox">
      {indices.map((item, idx) => (
       <CurrencyBox currency={item} key={idx} flagCode="us" />
      ))}
     </div>
    </div>
   </div>
   <h2>Histórico de Indicadores</h2>
   <ChartBox data={indicesHist} />
  </Grid>
 );
};

export default Dashboard;
