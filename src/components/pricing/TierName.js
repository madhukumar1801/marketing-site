import React from 'react';

const TierName = ({ name, comingSoon = false }) => (
  <div>
    <h2 className="Text size-5">{name}</h2>
    {comingSoon && (
      <span className="Badge size-2 indigo">coming soon</span>
    )}
  </div>
);

export default TierName;
