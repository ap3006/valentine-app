
import React from 'react';
import { Link } from 'react-router-dom';

export default function Success() {
  return( 
    <div className="page-container success">
      <div className="card">
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm5qanhhcm93cWZlenpsbTFod3hrcTcybXZqaTV3ZnJta2FnaDZxZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ofSBt73ZyyHVjDzIQ/giphy.gif"
          alt="Spongebob Valentines GIF"
          style={{ width: '220px', borderRadius: '12px', marginBottom: '18px' }}
        />
        <h1>Hooray! 🥰</h1>
        <p>You've just made my day. See you on the 21st (As you're too busy for me on actual Valentine's Day 🥶)! 🌹</p>
        <Link to="/" className="btn back">Back</Link>
      </div>
    </div>
  );
}
