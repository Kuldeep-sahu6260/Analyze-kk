import React from 'react';
import "./Analyze.css";

const Analyze = () => {
  return (
    <div className="container">
        <div className="title">
          <h1>Analyze product listings with Listing Analyzer</h1>
          <p>Research up to 10 Amazon product listings to see the quality of your and your competitors’ listings.</p>
        </div>
        <div className="action">
            <input type="text" placeholder="Enter ASIN"/>
            <button type="submit">Analyze</button>

        </div>
    </div>
  )
}

export default Analyze