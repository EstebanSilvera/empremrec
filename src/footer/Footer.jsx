import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white p-8">
        <div className="max-w-6xl mx-auto py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-bold mb-4">Sobre Nosotros</h3>
              <p>Descripción de tu empresa o proyecto.</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
              <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Acerca de</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#contact">Contacto</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-bold mb-4">Contacto</h3>
              <p>Dirección de la empresa</p>
              <p>Email: info@tuempresa.com</p>
              <p>Teléfono: (123) 456-7890</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-bold mb-4">Redes Sociales</h3>
              <ul>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-600 pt-4">
          <p className="text-sm text-center">&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer