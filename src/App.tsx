import React, { useEffect, useState } from 'react';

function App() {
  const [foodItems, setFoodItems] = useState<Array<{ id: number; type: string; left: number; top: number; delay: number; size: number }>>([]);

  useEffect(() => {
    const items = [
      'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=150&auto=format', // Tiffin box
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=150&auto=format', // Curry
      'https://images.unsplash.com/photo-1604152135912-04a022e23696?q=80&w=150&auto=format', // Roti
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=150&auto=format'  // Rice
    ];

    const newItems = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      type: items[Math.floor(Math.random() * items.length)],
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * -20,
      size: Math.random() * 30 + 60
    }));
    setFoodItems(newItems);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated food background */}
      {foodItems.map((item) => (
        <img
          key={item.id}
          src={item.type}
          alt="Indian food"
          className="food-item"
          style={{
            
            width: `${item.size}px`,
            height: `${item.size}px`,
            left: `${item.left}%`,
            top: `${item.top}%`,
            animationDelay: `${item.delay}s`,
            objectFit: 'cover',
            borderRadius: '50px', 
            opacity: '0.3',

          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/logo.svg" 
              alt="MealOBox Logo" 
              className="h-20 md:h-24 w-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-[#4CAF50]">MealOBox</span>
            <span className="text-gray-800"> is coming soon!</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Please check back with us in the near future for updates.
          </p>
          <p className="text-gray-500 text-sm">
            Bringing homemade Indian meals to your doorstep
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;