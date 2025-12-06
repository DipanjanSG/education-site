import { useState, useEffect } from 'react';
import { Chrono } from 'react-chrono';

export default function EarnWhileLearning() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const items = [
    { title: 'May 1940', cardTitle: 'Dunkirk', cardDetailedText: 'Allied evacuation from France' },
    { title: 'June 1944', cardTitle: 'D-Day', cardDetailedText: 'Normandy invasion begins' }
  ];

  if (!isMounted) {
    return <div style={{ width: "100%", height: "600px" }}>Loading timeline...</div>;
  }

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Chrono items={items} mode="VERTICAL" />
    </div>
  );
}
