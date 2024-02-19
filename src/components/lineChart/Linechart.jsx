import React, { useState } from 'react';
import './lineChart.css';

function Linechart() {
  let avgData = [19, 23, 17, 21, 19];
  let cautiousData = [21,21,17,19,21];
  let complacentData = [16,24,19,28,10];
  let confidentData = [19,22,19,23,17];

// Function to calculate remaining percentage
  const other = (arr) => {
    let o
    let sum = 0;
    for (const value of arr){
      sum = value + sum;
       o = 100 - sum;
    }
    return o
  };
// Push the remaining percentage to each data array
  avgData.push(other(avgData));
  cautiousData.push(other(cautiousData));
  complacentData.push(other(complacentData));
  confidentData.push(other(confidentData));
// State variables to manage line percentage visibility
  const [showAvgLine, setShowAvgLine] = useState(false);
  const [showCautiousLine, setShowCautiousLine] = useState(false);
  const [showComplacentLine, setShowComplacentLine] = useState(false);
  const [showConfidentLine, setShowConfidentLine] = useState(false);
// Toggle functions to handle line percentage visibility
  const toggleAvgLine = () => {
    setShowAvgLine(!showAvgLine);
  };

  const toggleCautiousLine = () => {
    setShowCautiousLine(!showCautiousLine);
  };

  const toggleComplacentLine = () => {
    setShowComplacentLine(!showComplacentLine);
  };

  const toggleConfidentLine = () => {
    setShowConfidentLine(!showConfidentLine);
  };

  return (
    <div>
      <div className="line-chart">
        <div className="markers">
          <div className="each-marker">
            <div className='diamond blue'></div>
            <p>Adherence</p>
          </div>
          <div className="each-marker">
            <div className='diamond green'></div>
            <p>Combination therapy</p>
          </div>
          <div className="each-marker">
            <div className='diamond yellow'></div>
            <p>Dosing</p>
          </div>
          <div className="each-marker">
            <div className='diamond orange'></div>
            <p>Guidelines</p>
          </div>
          <div className="each-marker">
            <div className='diamond purple'></div>
            <p>Saftey</p>
          </div>
          <div className="each-marker">
            <div className='diamond gray'></div>
            <p>Other</p>
          </div>
        </div>

        <div className="avg-line line">
          <h3 className="chart-title">Avg. all</h3>
          <div className="line-flex-holder" onClick={toggleAvgLine}>
            <div className={`part radius-start ${showAvgLine ? 'show' : ''}`} data-percentage={avgData[0]} style={{ width: `${avgData[0]}%`, backgroundColor: 'var(--blue)' }}></div>
            <div className={`part ${showAvgLine ? 'show' : ''}`} data-percentage={avgData[1]} style={{ width: `${avgData[1]}%`, backgroundColor: 'var(--green)' }}></div>
            <div className={`part ${showAvgLine ? 'show' : ''}`} data-percentage={avgData[2]} style={{ width: `${avgData[2]}%`, backgroundColor: 'var(--yellow)' }}></div>
            <div className={`part ${showAvgLine ? 'show' : ''}`} data-percentage={avgData[3]} style={{ width: `${avgData[3]}%`, backgroundColor: 'var(--orange)' }}></div>
            <div className={`part ${showAvgLine ? 'show' : ''}`} data-percentage={avgData[4]} style={{ width: `${avgData[4]}%`, backgroundColor: 'var(--purple)' }}></div>
            <div className= "part radius-end " data-percentage={avgData[5]} style={{ width: `${avgData[5]}%`, backgroundColor: 'var(--gray)' }}></div>
          </div>
        </div>
        <div className="cautious-line line">
          <h3 className="chart-title">Cautious</h3>
          <div className="line-flex-holder" onClick={toggleCautiousLine}>
            <div className={`part radius-start ${showCautiousLine ? 'show' : ''}`} data-percentage={cautiousData[0]} style={{ width: `${cautiousData[0]}%`, backgroundColor: 'var(--blue)' }}></div>
            <div className={`part ${showCautiousLine ? 'show' : ''}`} data-percentage={cautiousData[1]} style={{ width: `${cautiousData[1]}%`, backgroundColor: 'var(--green)' }}></div>
            <div className={`part ${showCautiousLine ? 'show' : ''}`} data-percentage={cautiousData[2]} style={{ width: `${cautiousData[2]}%`, backgroundColor: 'var(--yellow)' }}></div>
            <div className={`part ${showCautiousLine ? 'show' : ''}`} data-percentage={cautiousData[3]} style={{ width: `${cautiousData[3]}%`, backgroundColor: 'var(--orange)' }}></div>
            <div className={`part  ${showCautiousLine ? 'show' : ''}`} data-percentage={cautiousData[4]} style={{ width: `${cautiousData[4]}%`, backgroundColor: 'var(--purple)' }}></div>
            <div className="part radius-end" data-percentage={cautiousData[5]} style={{ width: `${cautiousData[5]}%`, backgroundColor: 'var(--gray)' }}></div>
          </div>
        </div>
        <div className="complacent-line line">
          <h3 className="chart-title">Complacent</h3>
          <div className="line-flex-holder" onClick={toggleComplacentLine}>
            <div className={`part radius-start ${showComplacentLine ? 'show' : ''}`} data-percentage={complacentData[0]} style={{ width: `${complacentData[0]}%`, backgroundColor: 'var(--blue)' }}></div>
            <div className={`part ${showComplacentLine ? 'show' : ''}`} data-percentage={complacentData[1]} style={{ width: `${complacentData[1]}%`, backgroundColor: 'var(--green)' }}></div>
            <div className={`part ${showComplacentLine ? 'show' : ''}`} data-percentage={complacentData[2]} style={{ width: `${complacentData[2]}%`, backgroundColor: 'var(--yellow)' }}></div>
            <div className={`part ${showComplacentLine ? 'show' : ''}`} data-percentage={complacentData[3]} style={{ width: `${complacentData[3]}%`, backgroundColor: 'var(--orange)' }}></div>
            <div className={`part  ${showComplacentLine ? 'show' : ''}`} data-percentage={complacentData[4]} style={{ width: `${complacentData[4]}%`, backgroundColor: 'var(--purple)' }}></div>
            <div className="part radius-end" data-percentage={complacentData[5]} style={{ width: `${complacentData[5]}%`, backgroundColor: 'var(--gray)' }}></div>
          </div>
        </div>
        <div className="confident-line line">
          <h3 className="chart-title">Confident</h3>
          <div className="line-flex-holder" onClick={toggleConfidentLine}>
            <div className={`part radius-start ${showConfidentLine ? 'show' : ''}`} data-percentage={confidentData[0]}  style={{ width: `${confidentData[0]}%`, backgroundColor: 'var(--blue)' }}></div>
            <div className={`part ${showConfidentLine ? 'show' : ''}`} data-percentage={confidentData[1]}  style={{ width: `${confidentData[1]}%`, backgroundColor: 'var(--green)' }}></div>
            <div className={`part ${showConfidentLine ? 'show' : ''}`} data-percentage={confidentData[2]}  style={{ width: `${confidentData[2]}%`, backgroundColor: 'var(--yellow)' }}></div>
            <div className={`part ${showConfidentLine ? 'show' : ''}`} data-percentage={confidentData[3]}  style={{ width: `${confidentData[3]}%`, backgroundColor: 'var(--orange)' }}></div>
            <div className={`part radius-end ${showConfidentLine ? 'show' : ''}`} data-percentage={confidentData[4]}  style={{ width: `${confidentData[4]}%`, backgroundColor: 'var(--purple)' }}></div>
            <div className="part radius-end" data-percentage={confidentData[5]}  style={{ width: `${confidentData[5]}%`, backgroundColor: 'var(--gray)' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Linechart;
