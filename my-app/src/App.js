import React from 'react';

import { Cards, Chart, CountryPicker } from "./components";
import styles from './app.module.css';

class app extends React.Component{
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default app;