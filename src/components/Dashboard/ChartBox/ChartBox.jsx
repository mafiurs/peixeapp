import React, { useState, useEffect } from "react";

import Chart from "../Chart";
import SelectInput from "./SelectInput";
import "./chartBox.css";

const ChartBox = ({ data }) => {
 const [selectedDataset, setSelectedDataset] = useState(null);

 useEffect(() => {
  const dolar = data.find((item) => item.key === "dolar");
  setSelectedDataset(dolar);
 }, [data]);

 const metales = data.filter(
  (item) => ["cobre", "plata", "oro"].indexOf(item.key) !== -1
 );
 const divisas = data.filter(
  (item) => ["dolar", "euro", "yen"].indexOf(item.key) !== -1
 );
 const unidadDeCuenta = data.filter(
  (item) => ["uf", "utm"].indexOf(item.key) !== -1
 );
 const indices = data.filter((item) => ["ipc", "ivp"].indexOf(item.key) !== -1);

 const handleChange = (event) => {
  setSelectedDataset(data.find((item) => item.key === event.target.value));
 };

 if (!selectedDataset) return null;
 const xAxisLabels = selectedDataset.values.map((item) => item.date);
 const yAxisData = selectedDataset.values.map((item) => item.value);
 const selectedValue =
  selectedDataset.values[selectedDataset.values.length - 1];

 return (
  <React.Fragment>
   <div className="chart-box">
    <div className="moneyLabel displayInlineBlock">
     <b>{selectedValue.value}</b>{" "}
     <span className="moneyLabel__info displayBlock">
      Valor: {selectedDataset.unit}
     </span>
     <span className="moneyLabel__info displayBlock">
      A la fecha: {selectedValue.date}
     </span>
    </div>
    <SelectInput
     defaultValue="dolar"
     value={selectedDataset.key}
     handleChange={handleChange}
     metales={metales}
     divisas={divisas}
     unidadDeCuenta={unidadDeCuenta}
     indices={indices}
    />
    <Chart
     xAxisLabels={xAxisLabels}
     yAxisData={yAxisData}
     label={selectedDataset.unit}
     backgroundColor={"rgba(54, 162, 235, 0.2)"}
     borderColor={"rgba(54, 162, 235, 1)"}
    />
   </div>
  </React.Fragment>
 );
};

export default ChartBox;
