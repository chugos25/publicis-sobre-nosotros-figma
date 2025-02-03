import React from "react";

const PhilosophySection = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src="https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/b08e8b18e4a0dd3a6e0fad27569eef51c62658a8427da8b21eda1f8b4766da83?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/b08e8b18e4a0dd3a6e0fad27569eef51c62658a8427da8b21eda1f8b4766da83?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/b08e8b18e4a0dd3a6e0fad27569eef51c62658a8427da8b21eda1f8b4766da83?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/b08e8b18e4a0dd3a6e0fad27569eef51c62658a8427da8b21eda1f8b4766da83?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/b08e8b18e4a0dd3a6e0fad27569eef51c62658a8427da8b21eda1f8b4766da83?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/b08e8b18e4a0dd3a6e0fad27569eef51c62658a8427da8b21eda1f8b4766da83?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/b08e8b18e4a0dd3a6e0fad27569eef51c62658a8427da8b21eda1f8b4766da83?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/b08e8b18e4a0dd3a6e0fad27569eef51c62658a8427da8b21eda1f8b4766da83?placeholderIfAbsent=true" alt="Philosophy Image" className="w-full" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Nuestra filosofía</h2>
          <p className="text-gray-600">
            &quot;Vive la différence&quot; no es solo un lema, es nuestra actitud desde el primer día. Creemos que cada interacción puede ser una experiencia de compra y que cada consumidor es único.
            <br /><br />
            Por eso, trabajamos para transformar datos en decisiones, retos en oportunidades y estrategias en resultados medibles.
          </p>
          <div className="flex space-x-4 mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Solicitar una demostración</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Comenzar gratis</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;