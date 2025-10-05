import React from "react";

const Features = ({ features }) => {
  if (!features) {
    console.log(features)
    return <div>Loading features...</div>; // or return null
  }

  const categories = [
    "comfort",
    "entertainment",
    "exterior",
    "interior",
    "power",
    "safety",
  ];

  return (
    <div>
      <h3 className="text-2xl font-medium mb-6">Features</h3>
      <div className="space-y-6">
        {categories.map((category) =>
          features[category] && features[category].length > 0 ? (
            <div key={category} className="border-b border-[#e9e9e9] pb-5">
              <h4 className="text-base mb-4 capitalize font-medium">{category}</h4>
              <ul className="grid grid-cols-3 gap-2 text-sm text-gray-600">
                {features[category].map((item, i) => (
                  <li key={i} className="flex items-center gap-1 capitalize">
                    <span>✅</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Features;
