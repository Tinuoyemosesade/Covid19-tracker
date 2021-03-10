import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './app.module.css';
import { fetchData } from './api';

class app extends React.Component{

async componentDidMount() {
  const data = await fetchData();

  console.log(data);
}
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