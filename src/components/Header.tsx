import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <img src="https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/d0aad49067bb31fc899aa1ec36ff0be23b42475088806caa9986f3f7aaea454b?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/d0aad49067bb31fc899aa1ec36ff0be23b42475088806caa9986f3f7aaea454b?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/d0aad49067bb31fc899aa1ec36ff0be23b42475088806caa9986f3f7aaea454b?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/d0aad49067bb31fc899aa1ec36ff0be23b42475088806caa9986f3f7aaea454b?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/d0aad49067bb31fc899aa1ec36ff0be23b42475088806caa9986f3f7aaea454b?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/d0aad49067bb31fc899aa1ec36ff0be23b42475088806caa9986f3f7aaea454b?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/d0aad49067bb31fc899aa1ec36ff0be23b42475088806caa9986f3f7aaea454b?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/60ab9767ff6f4175a00bf8a26717061b/d0aad49067bb31fc899aa1ec36ff0be23b42475088806caa9986f3f7aaea454b?placeholderIfAbsent=true" alt="Logo" className="h-8" />
        <nav className="flex space-x-4">
          <a href="#services" className="text-gray-700">Servicios</a>
          <a href="#about" className="text-gray-700">Sobre nosotros</a>
          <a href="#contact" className="text-gray-700">Contacto</a>
        </nav>
        <div className="flex space-x-4">
          <Button variant="outline" className="text-gray-700">Te llamamos</Button>
          <Button className="text-white">Solicita una demostración</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;