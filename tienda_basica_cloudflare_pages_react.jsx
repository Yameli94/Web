export default function BasicStore() {
  const products = [
    {
      id: 1,
      name: "Audífonos Bluetooth",
      price: "$39",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Smartwatch",
      price: "$59",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: "$29",
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Mi Tienda</h1>
          <nav className="flex gap-6 text-sm font-medium">
            <a href="#productos" className="hover:text-blue-600">
              Productos
            </a>
            <a href="#nosotros" className="hover:text-blue-600">
              Nosotros
            </a>
            <a href="#contacto" className="hover:text-blue-600">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Tu tienda online lista para vender
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Productos modernos, pagos rápidos y una experiencia sencilla para tus clientes.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-2xl hover:scale-105 transition-transform">
            Comprar ahora
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop"
          alt="Store"
          className="rounded-3xl shadow-xl h-[400px] w-full object-cover"
        />
      </section>

      <section id="productos" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-3xl font-bold">Productos destacados</h3>
          <input
            type="text"
            placeholder="Buscar producto"
            className="px-4 py-2 rounded-xl border bg-white"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold">{product.name}</h4>
                  <span className="font-bold text-lg">{product.price}</span>
                </div>

                <button className="w-full bg-black text-white py-3 rounded-2xl hover:opacity-90 transition-opacity">
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="nosotros"
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center"
      >
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop"
          alt="Nosotros"
          className="rounded-3xl shadow-xl"
        />

        <div>
          <h3 className="text-4xl font-bold mb-6">Sobre nosotros</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Somos una tienda enfocada en productos tecnológicos modernos y accesibles.
            Nuestra misión es ayudarte a vender rápido y mostrar tus productos de forma profesional.
          </p>
        </div>
      </section>

      <section id="contacto" className="bg-black text-white py-16 px-6 mt-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Contáctanos</h3>
          <p className="text-gray-300 mb-8">
            Escríbenos para pedidos, consultas o soporte.
          </p>

          <form className="grid gap-4 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Nombre"
              className="px-4 py-3 rounded-xl text-black"
            />

            <input
              type="email"
              placeholder="Correo"
              className="px-4 py-3 rounded-xl text-black"
            />

            <textarea
              placeholder="Mensaje"
              rows={4}
              className="px-4 py-3 rounded-xl text-black"
            />

            <button className="bg-white text-black py-3 rounded-2xl font-semibold hover:scale-105 transition-transform">
              Enviar
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm">
        © 2026 Mi Tienda. Todos los derechos reservados.
      </footer>
    </div>
  );
}
