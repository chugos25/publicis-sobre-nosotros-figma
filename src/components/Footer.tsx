import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="md:w-1/3">
          <h4 className="text-lg font-bold mb-2">CONTACTO Y UBICACIONES</h4>
          <ul className="text-gray-600 space-y-1">
            <li>Escríbenos</li>
            <li>Trabaja con nosotros</li>
            <li>Oficinas</li>
            <li>Recursos</li>
            <li>Últimas noticias</li>
          </ul>
        </div>
        <div className="md:w-1/3">
          <h4 className="text-lg font-bold mb-2">NUESTRAS SOLUCIONES</h4>
          <ul className="text-gray-600 space-y-1">
            <li>Commerce Content</li>
            <li>Retail Media</li>
            <li>Operations Excellence</li>
            <li>Market Intelligence</li>
            <li>Business Growth</li>
            <li>Amazon Services</li>
          </ul>
        </div>
        <div className="md:w-1/3">
          <h4 className="text-lg font-bold mb-2">LEGAL</h4>
          <ul className="text-gray-600 space-y-1">
            <li>Atención al cliente</li>
            <li>Política de Privacidad</li>
            <li>Política de Cookies</li>
            <li>Política de Privacidad</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <img src="https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/ac679686c3e2258a4870857bdf1fa9cc2b01cb590d986cca4c65201af05b4b40?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/ac679686c3e2258a4870857bdf1fa9cc2b01cb590d986cca4c65201af05b4b40?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/ac679686c3e2258a4870857bdf1fa9cc2b01cb590d986cca4c65201af05b4b40?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/ac679686c3e2258a4870857bdf1fa9cc2b01cb590d986cca4c65201af05b4b40?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/ac679686c3e2258a4870857bdf1fa9cc2b01cb590d986cca4c65201af05b4b40?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/ac679686c3e2258a4870857bdf1fa9cc2b01cb590d986cca4c65201af05b4b40?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/ac679686c3e2258a4870857bdf1fa9cc2b01cb590d986cca4c65201af05b4b40?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/ac679686c3e2258a4870857bdf1fa9cc2b01cb590d986cca4c65201af05b4b40?placeholderIfAbsent=true" alt="Footer Logo" className="mx-auto mb-4" />
        <p className="text-gray-600">Copyright © 2025 Publicis Commerce</p>
      </div>
    </footer>
  );
};

export default Footer;