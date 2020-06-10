import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import './styles.scss';

const getData = (stats, name) => {
  return {
    labels: stats.map(el => el.date).slice(-7),
    datasets: [
      {
        label: name,
        borderColor: '#3A80BA',
        lineTension: 0.3,
        pointRadius: 1,
        fill: false,
        data:
          name === 'Views'
            ? stats.map(el => (el.page_views ? el.page_views : 0)).slice(-7)
            : stats.map(el => (el.clicks ? el.clicks : 0)).slice(-7),
      },
    ],
  };
};

const ChartLine = ({ statistics }) => {
  const [inputStart, setInputStart] = useState('');
  const [inputEnd, setInputEnd] = useState('');
  const [data, setData] = useState(false);
  const [dat, setDat] = useState(false);
  const [clicks, setClicks] = useState({});
  const [views, setViews] = useState({});

  const dataClicks = dat === false ? getData(statistics, 'Clicks') : clicks;
  const dataViews = data === false ? getData(statistics, 'Views') : views;

  const handleSubmit = event => {
    event.preventDefault();
    const start = statistics.indexOf(
      statistics.find(el => el.date === inputStart),
    );
    const end = statistics.indexOf(statistics.find(el => el.date === inputEnd));
    if (start >= end) {
      alert('Incorrect data!!!');
      return;
    }
    const arr = statistics.slice(start, end + 1);
    setClicks(getData(arr, 'Clicks'));
    setViews(getData(arr, 'Views'));
    setDat(true);
    setData(true);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <select
          name="select"
          value={inputStart}
          onChange={event => setInputStart(event.target.value)}
        >
          <option> select start date </option>
          {statistics.map(el => (
            <option key={el.date}>{el.date}</option>
          ))}
        </select>
        <select
          name="select"
          value={inputEnd}
          onChange={event => setInputEnd(event.target.value)}
        >
          <option> select end date </option>
          {statistics.map(el => (
            <option key={el.date}>{el.date}</option>
          ))}
        </select>
        <button className="btnOk" type="submit">
          &#10004;
        </button>
      </form>
      <p className="titleChart">Clicks</p>
      <div className="chart">
        <Line
          width={1500}
          height={500}
          options={{
            legend: false,
          }}
          data={dataClicks}
        />
      </div>
      <p className="titleChart">Views</p>
      <div className="chart">
        <Line
          width={1500}
          height={500}
          options={{
            legend: false,
          }}
          data={dataViews}
        />
      </div>
    </>
  );
};

ChartLine.propTypes = {
  statistics: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ChartLine;
