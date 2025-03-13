import React from "react";

const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="w-48 h-48"
      >
        {/* Replace this path with the one from your SVG logo */}
        <path
          d="M 68 74.500 L 68 106 99.500 106 L 131 106 131 74.500 L 131 43 118.427 43 C 106.991 43, 105.884 43.158, 106.188 44.750 C 106.477 46.258, 107.940 46.539, 116.762 46.785 L 127 47.070 127 74.535 L 127 102 99.500 102 L 72 102 72 74.500 L 72 47 85 47 L 98 47 98 59.500 L 98 72 88 72 L 78 72 78 83.906 C 78 95.320, 78.083 95.791, 80 95.290 C 81.821 94.814, 82 93.926, 82 85.383 L 82 76 91.947 76 L 101.894 76 101.886 60.922 C 101.881 52.629, 101.632 45.204, 101.332 44.422 C 100.891 43.273, 97.642 43, 84.393 43 L 68 43 68 74.500 M 84.118 128.415 C 80.753 135.502,  "/* Example line path */
          className="stroke-black fill-none"
          strokeWidth="2"
        />
      </svg>

      <style>{`
        svg path {
          stroke-dasharray: 500; /* Adjust based on path length */
          stroke-dashoffset: 500; /* Initial state */
animation: draw 2s linear forwards;
    animation: draw 2s linear infinite alternate;        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
