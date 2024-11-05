// src/pages/Services.js
export default function Services() {
    const services = [
      { name: "False Ceiling", description: "T ceiling, Gypsum Ceiling, PVC ceiling" },
      { name: "Electric Fitting", description: "Complete electrical solutions" },
      { name: "Modular Kitchen", description: "Custom cupboards, wardrobes, etc." },
      // Add more services here
    ];
  
    return (
      <section className="p-8 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.name} className="p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold">{service.name}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  