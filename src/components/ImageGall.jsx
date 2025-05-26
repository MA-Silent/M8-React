import { useState } from 'react';

export default function ImageGallery({ images }) {
  const [current, setCurrent] = useState(0);
  const vorige = () => {setCurrent(current == 0 ? images.length -1 : current -1)};
  const volgende = () => {setCurrent(current == images.length -1 ? 0 : current+1 )};
  
  return (
    <div className="bg-slate-400 p-4 rounded-2xl w-full max-w-3xl mt-8">
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-200 ease-linear" style={{ transform: `translateX(-${current * 100}%)` }} >
          {images.map((img, i) => (
            <img src={img} className="min-w-full h-96 object-contain" key={i} alt={"Image" + i} />
          ))}
        </div>

        <button onClick={vorige} className="absolute top-1/2 bg-slate-400 rounded-md text-white text-4xl">
          {"<"}
        </button>
        <button onClick={volgende} className="absolute top-1/2 right-0 bg-slate-400 rounded-md text-white text-4xl">
          {">"}
        </button>
      </div>
    </div>
  );
}