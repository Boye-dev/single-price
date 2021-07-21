import React from "react";

function App() {
  return (
    <>
      <div className="container">
        <div className="head">
          <p className="join">Join our community</p>
          <p className="guarant"> 30-day, hassle-free money back guarantee </p>
          <p className="gain">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div className="foot1">
          <p className="monthly"> Monthly Subscription</p>
          <p className="per">
            <span className="dollar">$29</span> per month
          </p>
          <p className="access">Full access for less than $1 a day </p>
          <button type="button" className="btn">
            Sign Up
          </button>
        </div>
        <div className="foot2">
          <p className="monthly">Why Us </p>
          <span className="info">Tutorials by industry experts</span>
          <span className="info">Peer &amp; expert code review</span>
          <span className="info"> Coding exercises</span>
          <span className="info"> Access to our GitHub repos </span>
          <span className="info">Community forum </span>
          <span className="info">Flashcard decks</span>
          <span className="info">New videos every week</span>
        </div>
      </div>
    </>
  );
}

export default App;
