import React from 'react';

const products = [
  {
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80",
    title: "Sample 6' POST",
    color: "Natural Color",
  },
  {
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80",
    title: "Sample 4' POST",
    color: "Espresso Color",
  },
];

export default function ProductDisplay() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-200">{product.color}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}