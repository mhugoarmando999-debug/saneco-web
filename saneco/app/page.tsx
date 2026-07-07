"use client";

import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen">
      {/* TOP BAR - Información de Contacto Rápido */}
      <div className="bg-emerald-900 text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+573249020815" className="flex items-center gap-2 hover:text-emerald-300 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>324 902 0815</span>
            </a>
            <a href="mailto:serviambientalesnarino@gmail.com" className="flex items-center gap-2 hover:text-emerald-300 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>serviambientalesnarino@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Lun-Vie: 8:00 AM - 6:00 PM | Sáb: 8:00 AM - 1:00 PM</span>
          </div>
        </div>
      </div>

      {/* HEADER / MENÚ */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-emerald-800">SERVIAMBIENTALES DE NARIÑO</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#inicio" className="hover:text-emerald-600 transition-colors font-semibold">Inicio</a>
            <a href="#servicios" className="hover:text-emerald-600 transition-colors font-semibold">Servicios</a>
            <a href="#metodologia" className="hover:text-emerald-600 transition-colors font-semibold">Metodología</a>
            <a href="#contacto" className="hover:text-emerald-600 transition-colors font-semibold">Contacto</a>
          </nav>
          <button className="md:hidden text-emerald-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-3">
            <a href="#inicio" className="hover:text-emerald-600" onClick={() => setIsMenuOpen(false)}>Inicio</a>
            <a href="#servicios" className="hover:text-emerald-600" onClick={() => setIsMenuOpen(false)}>Servicios</a>
            <a href="#metodologia" className="hover:text-emerald-600" onClick={() => setIsMenuOpen(false)}>Metodología</a>
            <a href="#contacto" className="hover:text-emerald-600" onClick={() => setIsMenuOpen(false)}>Contacto</a>
          </nav>
        )}
      </header>

      {/* HERO SECTION - VERSIÓN PREMIUM */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1920&q=80" 
            alt="Fumigación profesional" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-900/85 to-teal-950/90"></div>
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-full mb-8 animate-fade-in-down shadow-2xl">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="font-semibold tracking-wide">Concepto Sanitario Vigente</span>
            <span className="hidden sm:inline w-px h-4 bg-white/40"></span>
            <span className="hidden sm:inline text-emerald-300">Nariño • Cauca • Putumayo</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 drop-shadow-2xl animate-fade-in-up">
            Fumigación Segura para 
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent">
              Tu Negocio
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay font-light">
            Pasamos inspecciones de salud, eliminamos plagas sin olor y te entregamos 
            <span className="font-semibold text-emerald-300"> certificados válidos</span>. 
            Respuesta en menos de 2 horas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up-delay-2">
            <a href="https://wa.me/573249020815" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl shadow-green-900/50 hover:scale-105 hover:shadow-green-500/50 flex items-center gap-3 overflow-hidden">
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              <span className="relative z-10">WhatsApp Directo</span>
            </a>
            <a href="#servicios" className="group bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 flex items-center gap-3">
              <span>Ver Servicios</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/20 pt-8 animate-fade-in-up-delay-3">
            <div className="text-center group">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">📜</div>
              <div className="text-2xl font-bold text-white">Certificados</div>
              <div className="text-emerald-300 text-xs uppercase tracking-wider mt-1">Válidos Alcaldía</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">🍃</div>
              <div className="text-2xl font-bold text-white">Sin Olor</div>
              <div className="text-emerald-300 text-xs uppercase tracking-wider mt-1">Productos Seguros</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">🛡️</div>
              <div className="text-2xl font-bold text-white">Anti-Multas</div>
              <div className="text-emerald-300 text-xs uppercase tracking-wider mt-1">Respaldo Legal</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">⚡</div>
              <div className="text-2xl font-bold text-white">&lt; 2 Horas</div>
              <div className="text-emerald-300 text-xs uppercase tracking-wider mt-1">Respuesta Rápida</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/70">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* SECCIÓN CONCEPTO SANITARIO */}
      <section id="concepto" className="py-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Respaldo Técnico</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Concepto Sanitario Vigente
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Operamos bajo autorización oficial del Instituto Departamental de Salud de Nariño. Este documento certifica que cumplimos con todos los protocolos sanitarios vigentes y te protege ante inspecciones, multas o cierres.
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8 text-center">
            <svg className="w-16 h-16 text-emerald-700 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Documento Oficial Verificable</h3>
            <p className="text-gray-600 mb-6">Descarga nuestro concepto sanitario y verifica nuestra autorización.</p>
            <a href="/documentos/concepto-sanitario.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Ver PDF
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Nuestros Servicios</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Soluciones Ambientales Profesionales
            </h2>
            <p className="text-lg text-gray-600">
              Servicios profesionales con certificación oficial para proteger tu empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Servicio 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img src="/servicios/plagas.jpg" alt="Manejo de Plagas" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Manejo Integrado de Plagas (MIP)</h3>
              <p className="text-gray-600">Control efectivo de cucarachas, roedores y más con productos seguros.</p>
            </div>

            {/* Servicio 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" alt="Desinfección profesional" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Desinfección y Salud Pública</h3>
              <p className="text-gray-600">Desinfección terminal con productos hospitalarios certificados.</p>
            </div>

            {/* Servicio 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img src="/servicios/tanques.jpg" alt="Tanques" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lavado y Desinfección de Tanques</h3>
              <p className="text-gray-600">Limpieza profunda y desinfección de tanques de almacenamiento.</p>
            </div>

            {/* Servicio 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="mb-4 overflow-hidden rounded-lg">
<img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80" alt="Gestión PEGIR y RESPEL" className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gestión PEGIR y RESPEL</h3>
              <p className="text-gray-600">Asesoría y gestión de residuos peligrosos con trazabilidad normativa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN METODOLOGÍA */}
      <section id="metodologia" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Cómo Trabajamos</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Nuestro Proceso Certificado en 5 Pasos
            </h2>
            <p className="text-lg text-gray-600">
              No improvisamos. Seguimos un protocolo técnico que garantiza resultados y cumplimiento normativo en cada servicio.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-emerald-200"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="relative text-center group">
                <div className="w-16 h-16 bg-emerald-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg group-hover:bg-emerald-800 transition-colors relative z-10">1</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Diagnóstico Técnico</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Visita in situ para identificar el tipo de plaga, nivel de infestación y zonas críticas. Sin costo ni compromiso.</p>
              </div>
              <div className="relative text-center group">
                <div className="w-16 h-16 bg-emerald-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg group-hover:bg-emerald-800 transition-colors relative z-10">2</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Plan Personalizado</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Diseñamos un protocolo MIP específico para tu negocio: productos, horarios y frecuencia según tus necesidades.</p>
              </div>
              <div className="relative text-center group">
                <div className="w-16 h-16 bg-emerald-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg group-hover:bg-emerald-800 transition-colors relative z-10">3</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Aplicación Certificada</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Personal autorizado aplica productos aprobados por INVIMA. Horarios flexibles para no interrumpir tu operación.</p>
              </div>
              <div className="relative text-center group">
                <div className="w-16 h-16 bg-emerald-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg group-hover:bg-emerald-800 transition-colors relative z-10">4</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Monitoreo Continuo</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Seguimiento post-servicio para verificar efectividad. Ajustes gratuitos si es necesario.</p>
              </div>
              <div className="relative text-center group">
                <div className="w-16 h-16 bg-emerald-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg group-hover:bg-emerald-800 transition-colors relative z-10">5</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Certificados y Respaldo</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Entrega de documentos válidos ante Secretaría de Salud, Alcaldía e INVIMA. Te protegemos de multas y cierres.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="#contacto" className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg">
              📋 Solicitar Diagnóstico Gratuito
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE MIEDO / SANCIONES */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              ⚠️ Información Importante
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              ¿Sabías que una sola inspección puede <span className="text-yellow-300">cerrar tu negocio</span>?
            </h2>
            <p className="text-xl text-red-100 leading-relaxed">
              Las Secretarías de Salud e INVIMA realizan inspecciones sorpresa. No cumplir con los protocolos sanitarios tiene consecuencias reales y costosas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-300">Amonestación Escrita</h3>
              <p className="text-red-100 text-sm leading-relaxed mb-3">Primera falta. Deja un antecedente en tu establecimiento que se revisa en futuras inspecciones.</p>
              <div className="border-t border-white/20 pt-3">
                <span className="text-xs text-red-200 uppercase tracking-wide">Impacto:</span>
                <p className="text-white font-semibold">Antecedente sanitario permanente</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-300">Multas hasta 500 SMMLV</h3>
              <p className="text-red-100 text-sm leading-relaxed mb-3">Hasta <strong className="text-white">$700 millones de pesos</strong> por incumplimientos graves en manipulación de alimentos o control de plagas.</p>
              <div className="border-t border-white/20 pt-3">
                <span className="text-xs text-red-200 uppercase tracking-wide">Impacto:</span>
                <p className="text-white font-semibold">Pérdida económica inmediata</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-300">Cierre Temporal</h3>
              <p className="text-red-100 text-sm leading-relaxed mb-3">De 1 a 30 días sin poder operar. Pierdes ingresos, clientes y reputación mientras resuelves el problema.</p>
              <div className="border-t border-white/20 pt-3">
                <span className="text-xs text-red-200 uppercase tracking-wide">Impacto:</span>
                <p className="text-white font-semibold">Ingresos en cero + daño a marca</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-300">Cierre Definitivo</h3>
              <p className="text-red-100 text-sm leading-relaxed mb-3">La peor consecuencia. Pierdes tu inversión, tu empleo y el sustento de tu familia por no prevenir a tiempo.</p>
              <div className="border-t border-white/20 pt-3">
                <span className="text-xs text-red-200 uppercase tracking-wide">Impacto:</span>
                <p className="text-white font-semibold">Pérdida total del negocio</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              🎯 Causas más comunes de sanción en Nariño
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-xl font-bold">✗</span>
                <p className="text-red-100">Presencia de plagas (cucarachas, roedores) en áreas de preparación de alimentos</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-xl font-bold"></span>
                <p className="text-red-100">No contar con certificado de fumigación vigente</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-xl font-bold">✗</span>
                <p className="text-red-100">Falta de plan de gestión de residuos peligrosos (PEGIR)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-xl font-bold">✗</span>
                <p className="text-red-100">Productos químicos almacenados sin control ni trazabilidad</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-xl font-bold">✗</span>
                <p className="text-red-100">Personal sin capacitación en manipulación de alimentos</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-xl font-bold">✗</span>
                <p className="text-red-100">Ausencia de desinfección terminal en áreas críticas</p>
              </div>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-500 text-white px-5 py-2 rounded-full mb-6 font-bold">
              ✅ LA SOLUCIÓN ESTÁ EN TUS MANOS
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Protege tu negocio hoy con un diagnóstico gratuito
            </h3>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Por menos de lo que cuesta una multa, te blindamos legalmente. Certificados válidos, cumplimiento normativo y tranquilidad para que te enfoques en hacer crecer tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/573249020815" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:scale-105 flex items-center justify-center gap-2">
                📱 WhatsApp Directo - Diagnóstico Gratis
              </a>
              <a href="tel:+573249020815" className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                📞 Llamar Ahora: 324 902 0815
              </a>
            </div>
            <p className="mt-6 text-sm text-red-200">
              ⚡ Respuesta en menos de 2 horas en Pasto, Ipiales y Popayán
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN CERTIFICACIONES */}
      <section id="certificaciones" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Respaldo Técnico</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Certificaciones y Documentos Oficiales
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Transparencia total. Todos nuestros documentos son verificables y están vigentes. Tu tranquilidad legal es nuestra prioridad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* Tarjeta 1 */}
            <div className="group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-emerald-200 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                  <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Concepto Sanitario</h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">Autorización oficial del Instituto Departamental de Salud de Nariño.</p>
                  <a href="/documentos/concepto-sanitario.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 text-xs font-semibold transition-colors">
                    Ver PDF
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-purple-200 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                  <svg className="w-5 h-5 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Certificación Udenar-VIPRI</h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">Formación especializada en Vectores de Importancia en Salud Pública.</p>
                  <a href="/documentos/certificado-udenar-vipri.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-purple-700 hover:text-purple-800 text-xs font-semibold transition-colors">
                    Ver PDF
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Certificado de Droguería</h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">Autorización para comercialización de productos farmacéuticos y químicos.</p>
                  <a href="/documentos/certificado-drogueria.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-800 text-xs font-semibold transition-colors">
                    Ver PDF
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Tarjeta 4 */}
            <div className="group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-green-200 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                  <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Certificado de Herbario</h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">Registro oficial de productos naturales y fitoterapéuticos con respaldo científico.</p>
                  <a href="/documentos/certificado-herbario.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-green-700 hover:text-green-800 text-xs font-semibold transition-colors">
                    Ver PDF
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN TESTIMONIOS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Lo Que Dicen Nuestros Clientes</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Negocios que Ya Confían en Nosotros
            </h2>
            <p className="text-lg text-gray-600">
              Más de 150 empresas en Nariño, Cauca y Putumayo nos eligieron para proteger su negocio. Estas son sus historias reales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonio 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex gap-1 mb-4">
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Tenía una inspección de salud en 3 días y estaba desesperado. Llegaron al día siguiente, fumigaron de noche y me entregaron todos los papeles. <strong className="text-emerald-700">Pasé la inspección sin problemas.</strong>"
              </p>
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-lg">ML</div>
                <div>
                  <h4 className="font-bold text-gray-900">María López</h4>
                  <p className="text-sm text-gray-600">Restaurante El Sabor • Pasto</p>
                </div>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex gap-1 mb-4">
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Llevaba 3 meses con cucarachas en la bodega. Probé con otros y nada. <strong className="text-emerald-700">En una sola visita quedaron eliminadas.</strong> Además el precio fue justo, sin sobrecostos."
              </p>
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">CB</div>
                <div>
                  <h4 className="font-bold text-gray-900">Carlos Benavides</h4>
                  <p className="text-sm text-gray-600">Tienda Don Carlos • Ipiales</p>
                </div>
              </div>
            </div>

            {/* Testimonio 3 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex gap-1 mb-4">
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Necesitaba certificados para la alcaldía y gestión de residuos. Me entregaron todo en regla. <strong className="text-emerald-700">Cero problemas con las autoridades.</strong> Muy profesionales."
              </p>
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg">AR</div>
                <div>
                  <h4 className="font-bold text-gray-900">Andrea Rosero</h4>
                  <p className="text-sm text-gray-600">Hotel Campestre • Popayán</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">¿Quieres ser el próximo caso de éxito?</p>
            <a href="https://wa.me/573249020815" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg">
               Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN PLANES Y PRECIOS */}
      <section id="planes" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Planes y Precios</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Soluciones para Cada Tipo de Negocio
            </h2>
            <p className="text-lg text-gray-600">
              Elige el plan que se adapte a tu negocio. Todos incluyen certificados válidos ante autoridades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan Básico */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Básico</h3>
                <p className="text-sm text-gray-600">Fumigación Puntual</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-700">
                <li className="flex items-center gap-2">✅ Fumigación de una zona</li>
                <li className="flex items-center gap-2">✅ Certificado de servicio</li>
                <li className="flex items-center gap-2">✅ Garantía 30 días</li>
                <li className="flex items-center gap-2">✅ Sin olor ni residuos</li>
              </ul>
              <a href="https://wa.me/573249020815" target="_blank" rel="noopener noreferrer" className="block text-center bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-lg font-semibold transition-colors">
                Cotizar Ahora
              </a>
            </div>

            {/* Plan Profesional */}
            <div className="bg-white border-2 border-emerald-500 rounded-2xl p-8 shadow-xl relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                MÁS POPULAR
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Profesional</h3>
                <p className="text-sm text-gray-600">MIP Trimestral</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-700">
                <li className="flex items-center gap-2">✅ 3 servicios al año</li>
                <li className="flex items-center gap-2">✅ Certificados para alcaldía</li>
                <li className="flex items-center gap-2">✅ Monitoreo post-servicio</li>
                <li className="flex items-center gap-2">✅ Atención prioritaria</li>
                <li className="flex items-center gap-2">✅ Factura y soporte técnico</li>
              </ul>
              <a href="https://wa.me/573249020815" target="_blank" rel="noopener noreferrer" className="block text-center bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-lg font-semibold transition-colors">
                Cotizar Ahora
              </a>
            </div>

            {/* Plan Corporativo */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Corporativo</h3>
                <p className="text-sm text-gray-600">MIP + PEGIR</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-700">
                <li className="flex items-center gap-2">✅ Servicio mensual</li>
                <li className="flex items-center gap-2">✅ Gestión de residuos peligrosos</li>
                <li className="flex items-center gap-2">✅ Auditorías trimestrales</li>
                <li className="flex items-center gap-2">✅ Capacitación a personal</li>
                <li className="flex items-center gap-2">✅ Reportes para INVIMA</li>
              </ul>
              <a href="https://wa.me/573249020815" target="_blank" rel="noopener noreferrer" className="block text-center bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-lg font-semibold transition-colors">
                Cotizar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN GARANTÍA */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-teal-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                🛡️ Garantía de Satisfacción Total
              </h3>
              <p className="text-lg text-emerald-100 leading-relaxed">
                Si no pasas la inspección de salud después de nuestro servicio, <strong className="text-white">volvemos GRATIS</strong> hasta que cumplas. Así de seguros estamos de nuestro trabajo.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a href="https://wa.me/573249020815" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-emerald-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-50 transition-colors shadow-xl">
                Contratar con Confianza
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Preguntas Frecuentes</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Resolvemos Tus Dudas
            </h2>
            <p className="text-lg text-gray-600">
              Las respuestas a las preguntas que más nos hacen nuestros clientes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                <span className="text-emerald-600 text-xl">❓</span>
                ¿Es seguro para mis alimentos?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sí. Usamos productos autorizados por INVIMA, sin olor ni residuos. No necesitas botar nada ni dejar de operar.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                <span className="text-emerald-600 text-xl">❓</span>
                ¿Cuánto dura el efecto de la fumigación?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Entre 30 y 90 días según el tipo de plaga y las condiciones del lugar. Por eso recomendamos el plan trimestral.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                <span className="text-emerald-600 text-xl"></span>
                ¿Huelen los productos?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                No. Nuestros productos son de última generación, sin olor fuerte. Puedes seguir operando normalmente.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                <span className="text-emerald-600 text-xl">❓</span>
                ¿Necesito cerrar mi negocio durante la fumigación?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                No. Trabajamos en horarios flexibles (noches y fines de semana) para no interrumpir tu operación.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                <span className="text-emerald-600 text-xl"></span>
                ¿Los certificados sirven para la alcaldía?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sí. Todos nuestros certificados son válidos ante Secretaría de Salud, Alcaldía e INVIMA. Te protegemos de multas.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                <span className="text-emerald-600 text-xl">❓</span>
                ¿Cuánto tiempo tardan en responder?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Menos de 2 horas en Pasto, Ipiales y Popayán. Atendemos urgencias el mismo día.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">¿Tienes otra pregunta?</p>
            <a href="https://wa.me/573249020815" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
              💬 Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN CONTACTO / MAPA */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Contáctanos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Estamos Cerca de Ti
            </h2>
            <p className="text-lg text-gray-600">
              Atendemos en Nariño, Cauca y Putumayo. Visítanos o escríbenos.
            </p>
          </div>

          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200">
           <iframe 
  src="https://www.google.com/maps?q=Cra+32A+%238-30+Edificio+Trento+Barrio+La+Aurora+Pasto+Nari%C3%B1o&output=embed" 
  width="100%" 
  height="400" 
  style={{ border: 0 }} 
  allowFullScreen 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
  title="Ubicación Serviambientales de Nariño - Pasto"
></iframe>
          </div>

          <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">📞</div>
              <h3 className="font-bold text-gray-900 mb-1">Teléfono</h3>
              <a href="tel:+573249020815" className="text-emerald-700 font-semibold hover:underline">324 902 0815</a>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">✉️</div>
              <h3 className="font-bold text-gray-900 mb-1">Email</h3>
              <a href="mailto:serviambientalesnarino@gmail.com" className="text-emerald-700 font-semibold hover:underline text-sm">serviambientalesnarino@gmail.com</a>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">📍</div>
              <h3 className="font-bold text-gray-900 mb-1">Ubicación</h3>
              <p className="text-gray-700 text-sm">Pasto, Nariño - Colombia</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER COMPLETO */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Columna 1 */}
            <div>
              <h3 className="text-white font-bold text-xl mb-4">SERVIAMBIENTALES DE NARIÑO</h3>
              <p className="text-sm leading-relaxed mb-4">
                Soluciones profesionales en manejo ambiental, control de plagas y gestión de residuos. Concepto sanitario vigente.
              </p>
              <div className="flex gap-3">
                <a href="https://wa.me/573249020815" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-emerald-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </a>
                <a href="tel:+573249020815" className="w-10 h-10 bg-emerald-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </a>
              </div>
            </div>

            {/* Columna 2 */}
            <div>
              <h4 className="text-white font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#servicios" className="hover:text-emerald-400 transition-colors">Manejo Integrado de Plagas</a></li>
                <li><a href="#servicios" className="hover:text-emerald-400 transition-colors">Desinfección y Salud Pública</a></li>
                <li><a href="#servicios" className="hover:text-emerald-400 transition-colors">Lavado de Tanques</a></li>
                <li><a href="#servicios" className="hover:text-emerald-400 transition-colors">Gestión PEGIR y RESPEL</a></li>
                <li><a href="#servicios" className="hover:text-emerald-400 transition-colors">Certificaciones Oficiales</a></li>
              </ul>
            </div>

            {/* Columna 3 */}
            <div>
              <h4 className="text-white font-bold mb-4">Contacto</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">📞</span>
                  <a href="tel:+573249020815" className="hover:text-emerald-400 transition-colors">324 902 0815</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✉️</span>
                  <a href="mailto:serviambientalesnarino@gmail.com" className="hover:text-emerald-400 transition-colors">serviambientalesnarino@gmail.com</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">📍</span>
                  <span>Pasto, Nariño - Colombia</span>
                </li>
              </ul>
            </div>

            {/* Columna 4 */}
            <div>
              <h4 className="text-white font-bold mb-4">Horario de Atención</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span className="text-white">8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="text-white">8:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="text-emerald-400">Urgencias</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-emerald-900/30 border border-emerald-700/50 rounded-lg">
                <p className="text-xs text-emerald-300">
                  🚨 Atención de urgencias las 24 horas
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 Serviambientales de Nariño. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-500">
              Concepto Sanitario vigente • Instituto Departamental de Salud de Nariño
            </p>
          </div>
        </div>
      </footer>

      {/* BOTÓN WHATSAPP FLOTANTE */}
      <a href="https://wa.me/573249020815" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-50">
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>
    </main>
  );
}