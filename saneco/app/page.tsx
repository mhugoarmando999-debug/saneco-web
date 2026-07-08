"use client";

import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const enviarWhatsApp = () => {
    const form = document.getElementById('pegirForm');
    if (!form) {
      alert('No se encontró el formulario');
      return;
    }

    const getInputValue = (id: string): string => {
      const element = document.getElementById(id) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
      return element ? element.value : '';
    };

    const razonSocial = getInputValue('razonSocial');
    const nit = getInputValue('nit');
    const direccion = getInputValue('direccion');
    const telefono = getInputValue('telefono');
    const email = getInputValue('email');
    const representanteLegal = getInputValue('representanteLegal');
    const cedulaRepresentante = getInputValue('cedulaRepresentante');
    const actividadEconomica = getInputValue('actividadEconomica');
    const numeroEmpleados = getInputValue('numeroEmpleados');
    const responsableGaga = getInputValue('responsableGaga');
    const volumenKg = getInputValue('volumenKg');
    const unidadMedida = getInputValue('unidadMedida');
    const areaAlmacenamiento = getInputValue('areaAlmacenamiento');
    const observaciones = getInputValue('observaciones');

    const residuos: string[] = [];
    const checkboxes = form.querySelectorAll<HTMLInputElement>('input[name="residuo"]:checked');
    checkboxes.forEach((checkbox) => {
      residuos.push(checkbox.value);
    });

    let mensaje = `📋 *SOLICITUD PEGIR/RESPEL*\n\n`;
    mensaje += `*Datos del Establecimiento:*\n`;
    mensaje += `Razón Social: ${razonSocial}\n`;
    mensaje += `NIT: ${nit}\n`;
    mensaje += `Dirección: ${direccion}\n`;
    mensaje += `Teléfono: ${telefono}\n`;
    mensaje += `Email: ${email}\n`;
    mensaje += `Representante Legal: ${representanteLegal}\n`;
    mensaje += `Cédula: ${cedulaRepresentante}\n\n`;
    mensaje += `*Organización Ambiental:*\n`;
    mensaje += `Tipo de Establecimiento: ${actividadEconomica}\n`;
    mensaje += `Número de Empleados: ${numeroEmpleados}\n`;
    mensaje += `Responsable GAGA: ${responsableGaga}\n\n`;
    mensaje += `*Residuos Peligrosos:*\n`;
    mensaje += residuos.length > 0 ? residuos.join(', ') : 'No especificado';
    mensaje += `\n\n`;
    mensaje += `*Volumen y Almacenamiento:*\n`;
    mensaje += `Volumen Mensual: ${volumenKg} ${unidadMedida}\n`;
    mensaje += `Área de Almacenamiento: ${areaAlmacenamiento}\n\n`;
    mensaje += `*Observaciones:*\n${observaciones}\n\n`;
    mensaje += `📸 *FOTOS:* El cliente adjuntará las 15 fotografías requeridas por CORPONARIÑO`;

    const numeroWhatsApp = '573249020815';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Head>
        <title>Serviambientales de Nariño | Fumigación y Gestión Ambiental</title>
        <meta name="description" content="Servicios profesionales de fumigación, desinfección y gestión PEGIR/RESPEL en Nariño, Cauca y Putumayo." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* TOP BAR */}
      <div className="bg-emerald-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span>📞 324 902 0815</span>
            <span>✉️ serviambientalesnarino@gmail.com</span>
          </div>
          <div className="hidden md:block">
            Horario: Lun-Vie 8am-6pm | Sáb 8am-1pm
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-emerald-800">
            SERVIAMBIENTALES DE NARIÑO
          </div>
          <nav className="hidden md:flex gap-8 font-semibold text-gray-700">
            <a href="#inicio" className="hover:text-emerald-600 transition">Inicio</a>
            <a href="#servicios" className="hover:text-emerald-600 transition">Servicios</a>
            <a href="#pegir" className="hover:text-emerald-600 transition">PEGIR</a>
            <a href="#contacto" className="hover:text-emerald-600 transition">Contacto</a>
          </nav>
          <button className="md:hidden text-emerald-800 text-2xl">☰</button>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1920&q=80" 
            alt="Fumigación profesional" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-900/85 to-teal-950/90"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-full mb-8 shadow-2xl">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="font-semibold tracking-wide">Concepto Sanitario Vigente</span>
            <span className="hidden sm:inline w-px h-4 bg-white/40"></span>
            <span className="hidden sm:inline text-emerald-300">Nariño • Cauca • Putumayo</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
            Fumigación Segura para 
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent">
              Tu Negocio
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Pasamos inspecciones de salud, eliminamos plagas sin olor y te entregamos 
            <span className="font-semibold text-emerald-300"> certificados válidos</span>. 
            Respuesta en menos de 2 horas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="https://wa.me/573249020815" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:scale-105 flex items-center gap-3 overflow-hidden">
              <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              <span className="relative z-10">WhatsApp Directo</span>
            </a>
            
            <a href="#servicios" className="group bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-white text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 flex items-center gap-3">
              <span>Ver Servicios</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/20 pt-8">
            <div className="text-center group">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">📜</div>
              <div className="text-2xl font-bold text-white">Certificados</div>
              <div className="text-emerald-300 text-xs uppercase tracking-wider mt-1">Válidos Alcaldía</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">🌿</div>
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
      </section>

      {/* CONCEPTO SANITARIO */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Respaldo Técnico</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">Concepto Sanitario Vigente</h2>
          <p className="text-lg text-gray-600 mb-8">
            Operamos bajo autorización oficial del Instituto Departamental de Salud de Nariño. Este documento certifica que cumplimos con todos los protocolos sanitarios vigentes y te protege ante inspecciones, multas o cierres.
          </p>
          <a href="/documentos/concepto-sanitario.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-200 transition-colors">
            Ver Documento Oficial
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Nuestros Servicios</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Soluciones Integrales para tu Empresa</h2>
            <p className="text-lg text-gray-600">Protegemos tu negocio con tecnología avanzada y productos certificados.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img src="/servicios/plagas.jpg" alt="Manejo de Plagas" className="w-full h-48 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Manejo Integrado de Plagas (MIP)</h3>
                <p className="text-gray-600 text-sm">Control efectivo de cucarachas, roedores y más con productos seguros.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80" alt="Desinfección" className="w-full h-48 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Desinfección y Salud Pública</h3>
                <p className="text-gray-600 text-sm">Desinfección terminal con productos hospitalarios certificados.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img src="/servicios/tanques.jpg" alt="Tanques" className="w-full h-48 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lavado y Desinfección de Tanques</h3>
                <p className="text-gray-600 text-sm">Limpieza profunda y desinfección de tanques de almacenamiento.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80" alt="PEGIR" className="w-full h-48 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Gestión PEGIR y RESPEL</h3>
                <p className="text-gray-600 text-sm">Asesoría y gestión de residuos peligrosos con trazabilidad normativa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PEGIR - FORMULARIO PASO A PASO */}
      <section id="pegir" className="py-20 bg-gradient-to-br from-emerald-950 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-emerald-400 font-bold tracking-wider uppercase text-sm">Cumplimiento Normativo CORPONARIÑO V.5</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">Genera tu Plan PEGIR/RESPEL Automatizado</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Completa los datos críticos según el formato oficial CORPONARIÑO. Sube las fotos requeridas y envíanos todo por WhatsApp.
            </p>
          </div>

          {/* Badges */}
          <div className="max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <p className="font-bold text-sm">Decreto 4741 de 2015</p>
                <p className="text-xs text-slate-400">Gestión integral de residuos peligrosos</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <p className="font-bold text-sm">CORPONARIÑO V.5</p>
                <p className="text-xs text-slate-400">Formato oficial actualizado</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <p className="font-bold text-sm">Gestión BIOENTORNO</p>
                <p className="text-xs text-slate-400">Convenio municipal</p>
              </div>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            
            {/* Barra de Progreso */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex flex-col items-center flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      currentStep >= step 
                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/50' 
                        : 'bg-white/10 text-slate-400'
                    }`}>
                      {currentStep > step ? '✓' : step}
                    </div>
                    <span className={`text-xs mt-2 text-center ${currentStep >= step ? 'text-emerald-400' : 'text-slate-500'}`}>
                      {step === 1 && 'Datos'}
                      {step === 2 && 'Actividad'}
                      {step === 3 && 'Residuos'}
                      {step === 4 && 'Fotos'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-green-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            <form id="pegirForm">
              
              {/* PASO 1 */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <span className="bg-emerald-500/20 p-2 rounded-lg">1</span>
                    Datos Generales del Establecimiento
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="razonSocial" className="block text-sm font-medium text-slate-300 mb-2">Razón Social / Nombre Completo *</label>
                      <input type="text" id="razonSocial" name="razonSocial" placeholder="Ej: Restaurante El Sabor S.A.S." className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label htmlFor="nit" className="block text-sm font-medium text-slate-300 mb-2">NIT / Cédula *</label>
                      <input type="text" id="nit" name="nit" placeholder="Ej: 900.123.456-7" className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="direccion" className="block text-sm font-medium text-slate-300 mb-2">Dirección Exacta *</label>
                    <input type="text" id="direccion" name="direccion" placeholder="Ej: Cra 32 A # 8-30, Barrio La Aurora, Pasto" className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-slate-300 mb-2">Teléfono *</label>
                      <input type="tel" id="telefono" name="telefono" placeholder="Ej: 324 902 0815" className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Correo Electrónico</label>
                      <input type="email" id="email" name="email" placeholder="Ej: contacto@restaurante.com" className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="representanteLegal" className="block text-sm font-medium text-slate-300 mb-2">Representante Legal</label>
                      <input type="text" id="representanteLegal" name="representanteLegal" placeholder="Nombre completo" className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label htmlFor="cedulaRepresentante" className="block text-sm font-medium text-slate-300 mb-2">Cédula Representante</label>
                      <input type="text" id="cedulaRepresentante" name="cedulaRepresentante" placeholder="Ej: 1.085.337.663" className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                    </div>
                  </div>
                </div>
              )}

              {/* PASO 2 */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <span className="bg-emerald-500/20 p-2 rounded-lg">2</span>
                    Actividad Económica y Organización Ambiental
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="actividadEconomica" className="block text-sm font-medium text-slate-300 mb-2">Tipo de Establecimiento *</label>
                      <select id="actividadEconomica" name="actividadEconomica" className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all">
                        <option value="" className="text-gray-800">Selecciona una opción</option>
                        <option value="restaurante" className="text-gray-800">Restaurante / Comida Rápida</option>
                        <option value="hotel" className="text-gray-800">Hotel / Alojamiento Turístico</option>
                        <option value="comercial" className="text-gray-800">Comercial / Tienda</option>
                        <option value="industrial" className="text-gray-800">Industrial / Manufactura</option>
                        <option value="salud" className="text-gray-800">Centro de Salud / Hospital</option>
                        <option value="educacion" className="text-gray-800">Centro Educativo</option>
                        <option value="agropecuario" className="text-gray-800">Agropecuario</option>
                        <option value="otro" className="text-gray-800">Otro</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="numeroEmpleados" className="block text-sm font-medium text-slate-300 mb-2">Número de Empleados *</label>
                      <input type="number" id="numeroEmpleados" name="numeroEmpleados" placeholder="Ej: 15" className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="responsableGaga" className="block text-sm font-medium text-slate-300 mb-2">Responsable GAGA</label>
                    <input type="text" id="responsableGaga" name="responsableGaga" placeholder="Nombre de la persona encargada" className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="volumenKg" className="block text-sm font-medium text-slate-300 mb-2">Volumen Mensual (Kg/Litros)</label>
                      <input type="number" id="volumenKg" name="volumenKg" placeholder="Ej: 50" className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label htmlFor="unidadMedida" className="block text-sm font-medium text-slate-300 mb-2">Unidad de Medida</label>
                      <select id="unidadMedida" name="unidadMedida" className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all">
                        <option value="kg" className="text-gray-800">Kilogramos (Kg)</option>
                        <option value="litros" className="text-gray-800">Litros (L)</option>
                        <option value="unidades" className="text-gray-800">Unidades</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="areaAlmacenamiento" className="block text-sm font-medium text-slate-300 mb-2">Área de Almacenamiento Temporal</label>
                    <textarea id="areaAlmacenamiento" name="areaAlmacenamiento" rows={3} placeholder="Ej: Bodega ventilada con piso impermeabilizado..." className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"></textarea>
                  </div>
                </div>
              )}

              {/* PASO 3 */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <span className="bg-emerald-500/20 p-2 rounded-lg">3</span>
                    Residuos Peligrosos Generados
                  </h3>
                  <p className="text-sm text-slate-400 mb-4">Selecciona todos los tipos de residuos que genera tu establecimiento:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { value: 'aceites', label: 'Aceites Usados (Motor, Freidora)' },
                      { value: 'baterias', label: 'Baterías y Acumuladores' },
                      { value: 'lamparas', label: 'Lámparas Fluorescentes / LED' },
                      { value: 'quimicos', label: 'Químicos / Solventes / Pinturas' },
                      { value: 'biologico', label: 'Residuos Biológico-Infecciosos' },
                      { value: 'electronicos', label: 'Residuos Electrónicos (RAEE)' },
                      { value: 'agroquimicos', label: 'Envases de Agroquímicos' },
                      { value: 'farmaceuticos', label: 'Medicamentos Vencidos' }
                    ].map((residuo) => (
                      <label key={residuo.value} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-colors">
                        <input type="checkbox" name="residuo" value={residuo.value} className="form-checkbox h-5 w-5 text-emerald-600 bg-slate-700 border-slate-600 rounded focus:ring-emerald-500" />
                        <span className="text-sm text-slate-200">{residuo.label}</span>
                      </label>
                    ))}
                  </div>
                  <div>
                    <label htmlFor="observaciones" className="block text-sm font-medium text-slate-300 mb-2">Observaciones Adicionales</label>
                    <textarea id="observaciones" name="observaciones" rows={4} placeholder="Información adicional..." className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"></textarea>
                  </div>
                </div>
              )}

              {/* PASO 4 */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                    <span className="bg-emerald-500/20 p-2 rounded-lg">4</span>
                    Registro Fotográfico (15 fotos)
                  </h3>
                  <p className="text-sm text-slate-400 mb-4">Sube las fotografías según los requisitos de CORPONARIÑO:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Foto 1: Baño de la bodega',
                      'Foto 2: Puerta de acceso al baño',
                      'Foto 3: Separación de oficinas',
                      'Foto 4: Señal de extintor',
                      'Foto 5: Señal ambiente libre de humo',
                      'Foto 6: Señal zona de aseo',
                      'Foto 7: Señal zona de oficina',
                      'Foto 8: Separación y clasificación',
                      'Foto 9: Uso de estibas',
                      'Foto 10: Uso de estantes',
                      'Foto 11: Ubicación del extintor',
                      'Foto 12: Tipo de extintor',
                      'Foto 13: Botiquín primeros auxilios',
                      'Foto 14: EPP (Gafas, máscaras, guantes)',
                      'Foto 15: Punto ecológico'
                    ].map((foto, index) => (
                      <div key={index}>
                        <label className="block text-sm font-medium text-slate-300 mb-2">{foto}</label>
                        <input type="file" accept="image/*" capture="environment" className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-500 file:text-white hover:file:bg-emerald-600" />
                      </div>
                    ))}
                  </div>

                  {/* Presupuesto */}
                  <div className="bg-white/5 rounded-lg p-6 mt-6">
                    <h4 className="text-lg font-bold text-emerald-400 mb-4">💰 Presupuesto Referencial Semestral</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-2 text-slate-300">Actividad</th>
                            <th className="text-right py-2 text-slate-300">Valor</th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-200">
                          <tr className="border-b border-white/5">
                            <td className="py-2">Identificación de residuos peligrosos</td>
                            <td className="text-right">$100.000</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-2">Almacenamiento seguro</td>
                            <td className="text-right">$100.000</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-2">Manejo de envases vacíos</td>
                            <td className="text-right">$80.000</td>
                          </tr>
                          <tr>
                            <td className="py-2 font-bold">Total Semestral Base</td>
                            <td className="text-right font-bold text-green-400">$300.000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-slate-400 mt-4">*Valores referenciales sujetos a diagnóstico</p>
                  </div>
                </div>
              )}

              {/* BOTONES NAVEGACIÓN */}
              <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                {currentStep > 1 && (
                  <button 
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    Anterior
                  </button>
                )}
                
                {currentStep < 4 ? (
                  <button 
                    type="button"
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2 ml-auto"
                  >
                    Siguiente
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                ) : (
                  <button 
                    type="button"
                    onClick={enviarWhatsApp}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-xl flex items-center justify-center gap-3 text-lg"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    Enviar Datos y Fotos por WhatsApp
                  </button>
                )}
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-slate-400 text-center">
                 Al enviar este formulario, nos pondremos en contacto contigo vía WhatsApp para confirmar los detalles técnicos y generar tu documento oficial personalizado conforme a la normatividad de CORPONARIÑO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section id="metodologia" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Nuestra Metodología</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Cómo Trabajamos</h2>
            <p className="text-lg text-gray-600">Un proceso transparente y eficiente para garantizar resultados.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Diagnóstico", desc: "Evaluación inicial gratuita." },
              { step: "02", title: "Planificación", desc: "Diseño de estrategia a medida." },
              { step: "03", title: "Ejecución", desc: "Aplicación con equipos profesionales." },
              { step: "04", title: "Monitoreo", desc: "Seguimiento post-servicio." },
              { step: "05", title: "Certificación", desc: "Entrega de documentos oficiales." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SANCIONES */}
      <section className="py-20 bg-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">¿Qué pasa si no cumples?</h2>
            <p className="text-lg text-red-100">Las Secretarías de Salud e INVIMA realizan inspecciones sorpresa. No cumplir tiene consecuencias reales.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-yellow-300 mb-2">Amonestación Escrita</h3>
              <p className="text-sm text-red-100 mb-4">Antecedente negativo en futuras inspecciones.</p>
              <div className="border-t border-white/20 pt-3">
                <span className="text-xs uppercase tracking-wide text-red-200">Impacto:</span>
                <p className="font-semibold">Daño a reputación legal</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-bold text-yellow-300 mb-2">Multas hasta 500 SMMLV</h3>
              <p className="text-sm text-red-100 mb-4">Hasta $700 millones por incumplimientos graves.</p>
              <div className="border-t border-white/20 pt-3">
                <span className="text-xs uppercase tracking-wide text-red-200">Impacto:</span>
                <p className="font-semibold">Pérdida económica inmediata</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-yellow-300 mb-2">Cierre Temporal</h3>
              <p className="text-sm text-red-100 mb-4">De 1 a 30 días sin poder operar.</p>
              <div className="border-t border-white/20 pt-3">
                <span className="text-xs uppercase tracking-wide text-red-200">Impacto:</span>
                <p className="font-semibold">Ingresos en cero</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-xl font-bold text-yellow-300 mb-2">Cierre Definitivo</h3>
              <p className="text-sm text-red-100 mb-4">Pierdes tu inversión y empleo.</p>
              <div className="border-t border-white/20 pt-3">
                <span className="text-xs uppercase tracking-wide text-red-200">Impacto:</span>
                <p className="font-semibold">Pérdida total del negocio</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a href="https://wa.me/573249020815" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-red-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
              Protege tu Negocio Ahora
            </a>
          </div>
        </div>
      </section>

      {/* CERTIFICACIONES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Respaldo Técnico</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Certificaciones y Documentos Oficiales</h2>
            <p className="text-lg text-gray-600">Transparencia total. Todos nuestros documentos son verificables y están vigentes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-emerald-200 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                  <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Concepto Sanitario</h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">Autorización oficial del Instituto Departamental de Salud de Nariño.</p>
                  <a href="/documentos/concepto-sanitario.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 text-xs font-semibold transition-colors">Ver PDF →</a>
                </div>
              </div>
            </div>
            <div className="group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-purple-200 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                  <svg className="w-5 h-5 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Certificación Udenar-VIPRI</h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">Formación especializada en Vectores de Importancia en Salud Pública.</p>
                  <a href="/documentos/certificado-udenar-vipri.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-purple-700 hover:text-purple-800 text-xs font-semibold transition-colors">Ver PDF →</a>
                </div>
              </div>
            </div>
            <div className="group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Certificado de Droguería</h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">Autorización para comercialización de productos farmacéuticos.</p>
                  <a href="/documentos/certificado-drogueria.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-800 text-xs font-semibold transition-colors">Ver PDF →</a>
                </div>
              </div>
            </div>
            <div className="group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-green-200 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                  <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Certificado de Herbario</h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">Registro oficial de productos naturales y fitoterapéuticos.</p>
                  <a href="/documentos/certificado-herbario.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-green-700 hover:text-green-800 text-xs font-semibold transition-colors">Ver PDF →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Testimonios</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Negocios que Ya Confían en Nosotros</h2>
            <p className="text-lg text-gray-600">Más de 150 empresas en Nariño, Cauca y Putumayo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"Tenía una inspección de salud en 3 días. Llegaron al día siguiente y me entregaron todos los papeles. <strong className="text-emerald-700">Pasé la inspección sin problemas.</strong>"</p>
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-lg">ML</div>
                <div><h4 className="font-bold text-gray-900">María López</h4><p className="text-sm text-gray-600">Restaurante El Sabor • Pasto</p></div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"Llevaba 3 meses con cucarachas. Probé con otros y nada. <strong className="text-emerald-700">En una sola visita quedaron eliminadas.</strong>"</p>
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">CB</div>
                <div><h4 className="font-bold text-gray-900">Carlos Benavides</h4><p className="text-sm text-gray-600">Tienda Don Carlos • Ipiales</p></div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"Necesitaba certificados para la alcaldía. Me entregaron todo en regla. <strong className="text-emerald-700">Cero problemas con las autoridades.</strong>"</p>
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg">AR</div>
                <div><h4 className="font-bold text-gray-900">Andrea Rosero</h4><p className="text-sm text-gray-600">Hotel Campestre • Popayán</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Planes y Precios</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Soluciones para Cada Tipo de Negocio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6"><h3 className="text-xl font-bold text-gray-900 mb-2">Básico</h3><p className="text-sm text-gray-600">Fumigación Puntual</p></div>
              <ul className="space-y-3 mb-8 text-sm text-gray-700">
                <li className="flex items-center gap-2">✅ Fumigación de una zona</li>
                <li className="flex items-center gap-2">✅ Certificado de servicio</li>
                <li className="flex items-center gap-2">✅ Garantía 30 días</li>
                <li className="flex items-center gap-2">✅ Sin olor ni residuos</li>
              </ul>
              <a href="https://wa.me/573249020815" target="_blank" rel="noopener noreferrer" className="block text-center bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-lg font-semibold transition-colors">Cotizar Ahora</a>
            </div>
            <div className="bg-white border-2 border-emerald-500 rounded-2xl p-8 shadow-xl relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold">MÁS POPULAR</div>
              <div className="text-center mb-6"><h3 className="text-xl font-bold text-gray-900 mb-2">Profesional</h3><p className="text-sm text-gray-600">MIP Trimestral</p></div>
              <ul className="space-y-3 mb-8 text-sm text-gray-700">
                <li className="flex items-center gap-2">✅ 3 servicios al año</li>
                <li className="flex items-center gap-2">✅ Certificados para alcaldía</li>
                <li className="flex items-center gap-2">✅ Monitoreo post-servicio</li>
                <li className="flex items-center gap-2">✅ Atención prioritaria</li>
                <li className="flex items-center gap-2">✅ Factura y soporte técnico</li>
              </ul>
              <a href="https://wa.me/573249020815" target="_blank" rel="noopener noreferrer" className="block text-center bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-lg font-semibold transition-colors">Cotizar Ahora</a>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6"><h3 className="text-xl font-bold text-gray-900 mb-2">Corporativo</h3><p className="text-sm text-gray-600">MIP + PEGIR</p></div>
              <ul className="space-y-3 mb-8 text-sm text-gray-700">
                <li className="flex items-center gap-2">✅ Servicio mensual</li>
                <li className="flex items-center gap-2">✅ Gestión de residuos peligrosos</li>
                <li className="flex items-center gap-2">✅ Auditorías trimestrales</li>
                <li className="flex items-center gap-2">✅ Capacitación a personal</li>
                <li className="flex items-center gap-2">✅ Reportes para INVIMA</li>
              </ul>
              <a href="https://wa.me/573249020815" target="_blank" rel="noopener noreferrer" className="block text-center bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-lg font-semibold transition-colors">Cotizar Ahora</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Encuéntranos</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Nuestra Ubicación</h2>
          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-emerald-900 text-white p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-bold text-emerald-300 text-sm">Dirección</p>
                    <p className="text-white">Cra 32 A # 8-30 Edificio Trento, Barrio La Aurora, Pasto, Nariño</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="font-bold text-emerald-300 text-sm">Teléfono</p>
                    <p className="text-white">324 902 0815</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="font-bold text-emerald-300 text-sm">Email</p>
                    <p className="text-white">serviambientalesnarino@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 h-96 md:h-auto bg-gray-200 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.1234567890!2d-77.2811!3d1.2136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2d0a0b0c0d0e0f%3A0x0!2sCra.+32A+%238-30%2C+Pasto%2C+Nari%C3%B1o!5e0!3m2!1ses!2sco!4v1234567890!5m2!1ses!2sco" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">SERVIAMBIENTALES DE NARIÑO</h3>
              <p className="text-sm leading-relaxed mb-4">Soluciones profesionales en manejo ambiental, control de plagas y gestión de residuos.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#servicios" className="hover:text-emerald-400 transition-colors">Manejo Integrado de Plagas</a></li>
                <li><a href="#servicios" className="hover:text-emerald-400 transition-colors">Desinfección y Salud Pública</a></li>
                <li><a href="#servicios" className="hover:text-emerald-400 transition-colors">Lavado de Tanques</a></li>
                <li><a href="#servicios" className="hover:text-emerald-400 transition-colors">Gestión PEGIR y RESPEL</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contacto</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><span className="text-emerald-400">📞</span><a href="tel:+573249020815" className="hover:text-emerald-400 transition-colors">324 902 0815</a></li>
                <li className="flex items-start gap-2"><span className="text-emerald-400">✉️</span><a href="mailto:serviambientalesnarino@gmail.com" className="hover:text-emerald-400 transition-colors">serviambientalesnarino@gmail.com</a></li>
                <li className="flex items-start gap-2"><span className="text-emerald-400">📍</span><span>Pasto, Nariño</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Horario</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>Lunes - Viernes:</span><span className="text-white">8:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between"><span>Sábados:</span><span className="text-white">8:00 AM - 1:00 PM</span></li>
                <li className="flex justify-between"><span>Domingos:</span><span className="text-emerald-400">Urgencias</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2026 Serviambientales de Nariño. Todos los derechos reservados.</p>
            <p className="text-sm text-gray-500">Concepto Sanitario vigente • Instituto Departamental de Salud de Nariño</p>
          </div>
        </div>
      </footer>

      {/* BOTÓN WHATSAPP FLOTANTE */}
      <a href="https://wa.me/573249020815" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 z-50">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>
    </div>
  );
}