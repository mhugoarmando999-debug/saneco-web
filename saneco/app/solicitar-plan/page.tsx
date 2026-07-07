'use client';

import { useState } from 'react';

export default function SolicitarPlan() {
  const [pasoActual, setPasoActual] = useState(1);
  const [formData, setFormData] = useState({
    razonSocial: '',
    representanteLegal: '',
    cedula: '',
    nit: '',
    direccion: '',
    ciudad: '',
    telefono: '',
    email: '',
    tipoNegocio: '',
    areaBodega: '',
    areaOficina: '',
    largoBodega: '',
    anchoBodega: '',
    altoBodega: '',
    tipoPiso: '',
    tipoMuros: '',
    tipoTecho: '',
    descripcionDrenaje: '',
    descripcionVentilacion: '',
    descripcionIluminacion: '',
    descripcionElectrica: '',
    tieneBanos: false,
    cantidadBanos: '',
    descripcionBanos: '',
    cantidadPuertas: '',
    descripcionPuertas: '',
    tieneSenalizacion: false,
    tiposSeñales: [],
    productosQuimicos: '',
    tieneEstibas: false,
    tieneEstantes: false,
    sistemaRotacion: '',
    tiposResiduos: [],
    cantidadResiduosMes: '',
    tienePuntoEcologico: false,
    gestorResiduos: '',
    cantidadExtintores: '',
    tipoExtintores: '',
    fechaRecargaExtintor: '',
    tieneBotiquin: false,
    descripcionBotiquin: '',
    tieneGafas: false,
    tieneMascaras: false,
    tieneGuantes: false,
    tieneTrajeAntifluido: false,
    tieneBotas: false,
    tieneKitDerrames: false,
    materialesAbsorbentes: '',
    equipoLimpieza: '',
    aceptaTerminos: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const nextStep = () => {
    if (pasoActual < 8) setPasoActual(pasoActual + 1);
  };

  const prevStep = () => {
    if (pasoActual > 1) setPasoActual(pasoActual - 1);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    
    const mensaje = `Hola SERVIAMBIENTALES DE NARINO, he enviado mi solicitud de Plan de Gestión Integral de Residuos Peligrosos (PGIRSP).

📋 DATOS DEL ESTABLECIMIENTO:
• Razón Social: ${formData.razonSocial}
• NIT: ${formData.nit}
• Representante Legal: ${formData.representanteLegal}
• Cédula: ${formData.cedula}
• Dirección: ${formData.direccion}
• Ciudad: ${formData.ciudad}
• Teléfono: ${formData.telefono}
• Email: ${formData.email}
• Tipo de Negocio: ${formData.tipoNegocio}

📐 INFRAESTRUCTURA:
• Área Bodega: ${formData.areaBodega} m²
• Área Oficina: ${formData.areaOficina} m²
• Tipo de Piso: ${formData.tipoPiso}
• Tipo de Muros: ${formData.tipoMuros}
• Tipo de Techo: ${formData.tipoTecho}

🚿 SERVICIOS:
• Baños: ${formData.tieneBanos ? 'Sí (' + formData.cantidadBanos + ')' : 'No'}
• Puertas: ${formData.cantidadPuertas}
• Señalización: ${formData.tieneSenalizacion ? 'Sí' : 'No'}

 PRODUCTOS Y ALMACENAMIENTO:
• Productos químicos: ${formData.productosQuimicos}
• Estibas: ${formData.tieneEstibas ? 'Sí' : 'No'}
• Estantes: ${formData.tieneEstantes ? 'Sí' : 'No'}
• Sistema de rotación: ${formData.sistemaRotacion}

️ RESIDUOS:
• Tipos: ${formData.tiposResiduos.join(', ')}
• Cantidad mensual: ${formData.cantidadResiduosMes} kg
• Punto ecológico: ${formData.tienePuntoEcologico ? 'Sí' : 'No'}
• Gestor: ${formData.gestorResiduos}

 SEGURIDAD:
• Extintores: ${formData.cantidadExtintores} (${formData.tipoExtintores})
• Fecha recarga: ${formData.fechaRecargaExtintor}
• Botiquín: ${formData.tieneBotiquin ? 'Sí' : 'No'}

🦺 EPP:
• Gafas: ${formData.tieneGafas ? 'Sí' : 'No'}
• Máscaras: ${formData.tieneMascaras ? 'Sí' : 'No'}
• Guantes: ${formData.tieneGuantes ? 'Sí' : 'No'}
• Traje antifluido: ${formData.tieneTrajeAntifluido ? 'Sí' : 'No'}
• Botas: ${formData.tieneBotas ? 'Sí' : 'No'}

 EMERGENCIAS:
• Kit derrames: ${formData.tieneKitDerrames ? 'Sí' : 'No'}
• Materiales absorbentes: ${formData.materialesAbsorbentes}

Por favor contáctenme para generar mi plan completo según el formato de la Corporación Autónoma Regional.`;

    const whatsappUrl = `https://wa.me/573249020815?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
    
    setSubmitSuccess(true);
    setSubmitting(false);
  };

  const FileUploadField = ({ 
    label, 
    required = false 
  }: { 
    label: string; 
    required?: boolean 
  }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        📷 {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="file"
        accept="image/*"
        multiple
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
      />
      <p className="text-xs text-gray-500 mt-1">Puedes subir varias fotos</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-700 to-green-900 text-white rounded-lg p-8 mb-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-2"> Solicitud de Plan de Gestión Integral de Residuos Peligrosos</h1>
          <p className="text-green-100">
            Complete el formulario y adjunte las fotos requeridas según el formato de la Corporación Autónoma Regional
          </p>
          <p className="text-sm text-green-200 mt-2">
            Basado en Decreto 4741 de 2005 y Resolución 2184 de 2019
          </p>
        </div>

        {submitSuccess ? (
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-green-800 mb-4">✅ ¡Solicitud Enviada!</h2>
            <p className="text-gray-700 mb-4">
              Serás redirigido a WhatsApp para enviar la información completa.
            </p>
            <p className="text-sm text-gray-600">
              Nuestro equipo revisará la documentación y se pondrá en contacto en menos de 24 horas para generar tu PGIRSP completo.
            </p>
          </div>
        ) : (
          <>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((paso) => (
                  <div
                    key={paso}
                    className={`flex-1 h-2 mx-1 rounded ${
                      paso <= pasoActual ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-center text-sm text-gray-600">
                Paso {pasoActual} de 8
              </p>
            </div>

            {/* Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* PASO 1: Datos Básicos */}
              {pasoActual === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-green-800 mb-6">
                    1. Datos del Establecimiento
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Razón Social *
                      </label>
                      <input
                        type="text"
                        name="razonSocial"
                        value={formData.razonSocial}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Representante Legal *
                      </label>
                      <input
                        type="text"
                        name="representanteLegal"
                        value={formData.representanteLegal}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cédula *
                      </label>
                      <input
                        type="text"
                        name="cedula"
                        value={formData.cedula}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        NIT *
                      </label>
                      <input
                        type="text"
                        name="nit"
                        value={formData.nit}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tipo de Negocio *
                      </label>
                      <select
                        name="tipoNegocio"
                        value={formData.tipoNegocio}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      >
                        <option value="">Seleccione...</option>
                        <option value="agroquimicos">Almacén de Agroquímicos</option>
                        <option value="fumigacion">Empresa de Fumigación</option>
                        <option value="restaurante">Restaurante</option>
                        <option value="hospital">Hospital/Clínica</option>
                        <option value="colegio">Colegio</option>
                        <option value="industria">Industria</option>
                        <option value="hotel">Hotel</option>
                        <option value="taller">Taller Mecánico</option>
                        <option value="laboratorio">Laboratorio</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dirección *
                      </label>
                      <input
                        type="text"
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ciudad *
                      </label>
                      <input
                        type="text"
                        name="ciudad"
                        value={formData.ciudad}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-green-800 mb-4">
                      📷 Fotos del Establecimiento
                    </h3>
                    <FileUploadField label="Foto de Fachada" required />
                    <FileUploadField label="Foto de Bodega/Almacén" required />
                    <FileUploadField label="Foto de Oficina" required />
                  </div>
                </div>
              )}

              {/* PASO 2: Infraestructura */}
              {pasoActual === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-green-800 mb-6">
                    2. Características Físicas del Establecimiento
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Área de Bodega (m²)
                      </label>
                      <input
                        type="number"
                        name="areaBodega"
                        value={formData.areaBodega}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Área de Oficina (m²)
                      </label>
                      <input
                        type="number"
                        name="areaOficina"
                        value={formData.areaOficina}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Largo Bodega (m)
                      </label>
                      <input
                        type="number"
                        name="largoBodega"
                        value={formData.largoBodega}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ancho Bodega (m)
                      </label>
                      <input
                        type="number"
                        name="anchoBodega"
                        value={formData.anchoBodega}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Alto Bodega (m)
                      </label>
                      <input
                        type="number"
                        name="altoBodega"
                        value={formData.altoBodega}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tipo de Piso
                      </label>
                      <select
                        name="tipoPiso"
                        value={formData.tipoPiso}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      >
                        <option value="">Seleccione...</option>
                        <option value="concreto">Concreto</option>
                        <option value="ceramico">Cerámico</option>
                        <option value="epoxico">Epóxico</option>
                        <option value="antideslizante">Antideslizante</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tipo de Muros
                      </label>
                      <input
                        type="text"
                        name="tipoMuros"
                        value={formData.tipoMuros}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="Ej: Ladrillo, bloque, concreto..."
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tipo de Techo
                      </label>
                      <input
                        type="text"
                        name="tipoTecho"
                        value={formData.tipoTecho}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="Ej: Teja, losa, lámina..."
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Descripción del Drenaje
                      </label>
                      <textarea
                        name="descripcionDrenaje"
                        value={formData.descripcionDrenaje}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="Describa el sistema de drenaje..."
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Descripción de Ventilación
                      </label>
                      <textarea
                        name="descripcionVentilacion"
                        value={formData.descripcionVentilacion}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Descripción de Iluminación
                      </label>
                      <textarea
                        name="descripcionIluminacion"
                        value={formData.descripcionIluminacion}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-green-800 mb-4">
                      📷 Fotos de Infraestructura
                    </h3>
                    <FileUploadField label="Foto del Piso" />
                    <FileUploadField label="Foto de Muros" />
                    <FileUploadField label="Foto de Techo" />
                    <FileUploadField label="Foto de Ventilación" />
                    <FileUploadField label="Foto de Iluminación" />
                    <FileUploadField label="Foto de Instalaciones Eléctricas" />
                  </div>
                </div>
              )}

              {/* PASO 3: Servicios y Señalización */}
              {pasoActual === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-green-800 mb-6">
                    3. Servicios Sanitarios y Señalización
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="flex items-center space-x-2 mb-4">
                        <input
                          type="checkbox"
                          name="tieneBanos"
                          checked={formData.tieneBanos}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-green-600"
                        />
                        <span className="text-gray-700">Cuenta con baños</span>
                      </label>

                      {formData.tieneBanos && (
                        <div className="ml-6 space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Cantidad de baños
                            </label>
                            <input
                              type="number"
                              name="cantidadBanos"
                              value={formData.cantidadBanos}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Descripción de los baños
                            </label>
                            <textarea
                              name="descripcionBanos"
                              value={formData.descripcionBanos}
                              onChange={handleInputChange}
                              rows={3}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                          </div>
                          <FileUploadField label="Foto de Baños" />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cantidad de puertas
                      </label>
                      <input
                        type="number"
                        name="cantidadPuertas"
                        value={formData.cantidadPuertas}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Descripción de puertas
                        </label>
                        <textarea
                          name="descripcionPuertas"
                          value={formData.descripcionPuertas}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div className="mt-4">
                        <FileUploadField label="Foto de Puertas" />
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center space-x-2 mb-4">
                        <input
                          type="checkbox"
                          name="tieneSenalizacion"
                          checked={formData.tieneSenalizacion}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-green-600"
                        />
                        <span className="text-gray-700">Cuenta con señalización</span>
                      </label>

                      {formData.tieneSenalizacion && (
                        <div className="ml-6">
                          <p className="text-sm text-gray-600 mb-2">
                            Tipos de señales (seleccione las que tenga):
                          </p>
                          <div className="space-y-2">
                            {['Extintor', 'Salida de Emergencia', 'Baños', 'Espacio Libre de Humo', 'Zona de Aseo', 'Zona de Oficina', 'Peligro', 'Uso Obligatorio de EPP'].map((senal) => (
                              <label key={senal} className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  checked={formData.tiposSeñales.includes(senal)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setFormData(prev => ({
                                        ...prev,
                                        tiposSeñales: [...prev.tiposSeñales, senal]
                                      }));
                                    } else {
                                      setFormData(prev => ({
                                        ...prev,
                                        tiposSeñales: prev.tiposSeñales.filter(s => s !== senal)
                                      }));
                                    }
                                  }}
                                  className="w-4 h-4 text-green-600"
                                />
                                <span className="text-gray-700">{senal}</span>
                              </label>
                            ))}
                          </div>
                          <div className="mt-4">
                            <FileUploadField label="Foto de Señalización" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* PASO 4: Productos y Almacenamiento */}
              {pasoActual === 4 && (
                <div>
                  <h2 className="text-2xl font-bold text-green-800 mb-6">
                    4. Productos y Almacenamiento
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Productos químicos que maneja
                      </label>
                      <textarea
                        name="productosQuimicos"
                        value={formData.productosQuimicos}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="Liste los productos químicos que utiliza (ej: Solfac, Amonio Cuaternario, Fipronil, Rodilon...)"
                      />
                    </div>

                    <div>
                      <label className="flex items-center space-x-2 mb-4">
                        <input
                          type="checkbox"
                          name="tieneEstibas"
                          checked={formData.tieneEstibas}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-green-600"
                        />
                        <span className="text-gray-700">Utiliza estibas</span>
                      </label>
                      {formData.tieneEstibas && (
                        <div className="ml-6 mt-2">
                          <FileUploadField label="Foto de Estibas" />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center space-x-2 mb-4">
                        <input
                          type="checkbox"
                          name="tieneEstantes"
                          checked={formData.tieneEstantes}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-green-600"
                        />
                        <span className="text-gray-700">Utiliza estantes</span>
                      </label>
                      {formData.tieneEstantes && (
                        <div className="ml-6 mt-2">
                          <FileUploadField label="Foto de Estantes" />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sistema de rotación de inventario
                      </label>
                      <textarea
                        name="sistemaRotacion"
                        value={formData.sistemaRotacion}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="Describa cómo realiza la rotación de productos (PEPS, FEFO, etc.)..."
                      />
                    </div>

                    <div className="mt-6">
                      <FileUploadField label="Foto de Separación de Productos" />
                      <FileUploadField label="Foto de Etiquetas de Productos" />
                    </div>
                  </div>
                </div>
              )}

              {/* PASO 5: Residuos */}
              {pasoActual === 5 && (
                <div>
                  <h2 className="text-2xl font-bold text-green-800 mb-6">
                    5. Gestión de Residuos
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tipos de residuos que genera
                      </label>
                      <div className="space-y-2">
                        {['Orgánicos', 'Reciclables', 'Peligrosos', 'Ordinarios', 'Aceites', 'Químicos', 'Envases', 'Cortopunzantes', 'Biológicos'].map((residuo) => (
                          <label key={residuo} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={formData.tiposResiduos.includes(residuo)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setFormData(prev => ({
                                    ...prev,
                                    tiposResiduos: [...prev.tiposResiduos, residuo]
                                  }));
                                } else {
                                  setFormData(prev => ({
                                    ...prev,
                                    tiposResiduos: prev.tiposResiduos.filter(r => r !== residuo)
                                  }));
                                }
                              }}
                              className="w-4 h-4 text-green-600"
                            />
                            <span className="text-gray-700">{residuo}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cantidad aproximada de residuos por mes (kg)
                      </label>
                      <input
                        type="number"
                        name="cantidadResiduosMes"
                        value={formData.cantidadResiduosMes}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="flex items-center space-x-2 mb-4">
                        <input
                          type="checkbox"
                          name="tienePuntoEcologico"
                          checked={formData.tienePuntoEcologico}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-green-600"
                        />
                        <span className="text-gray-700">Cuenta con punto ecológico</span>
                      </label>
                      {formData.tienePuntoEcologico && (
                        <div className="ml-6 mt-2">
                          <FileUploadField label="Foto del Punto Ecológico" />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa gestora de residuos
                      </label>
                      <input
                        type="text"
                        name="gestorResiduos"
                        value={formData.gestorResiduos}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="Nombre de la empresa que recoge los residuos"
                      />
                    </div>

                    <div className="mt-6">
                      <FileUploadField label="Foto de Contenedores de Residuos" />
                      <FileUploadField label="Foto de Área de Almacenamiento Temporal" />
                    </div>
                  </div>
                </div>
              )}

              {/* PASO 6: Seguridad Industrial */}
              {pasoActual === 6 && (
                <div>
                  <h2 className="text-2xl font-bold text-green-800 mb-6">
                    6. Seguridad Industrial y EPP
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Cantidad de extintores
                        </label>
                        <input
                          type="number"
                          name="cantidadExtintores"
                          value={formData.cantidadExtintores}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tipo de extintores
                        </label>
                        <input
                          type="text"
                          name="tipoExtintores"
                          value={formData.tipoExtintores}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          placeholder="Ej: PQS, CO2, ABC"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Fecha de recarga del extintor
                        </label>
                        <input
                          type="date"
                          name="fechaRecargaExtintor"
                          value={formData.fechaRecargaExtintor}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <FileUploadField label="Foto de Extintores" />
                    </div>

                    <div>
                      <label className="flex items-center space-x-2 mb-4">
                        <input
                          type="checkbox"
                          name="tieneBotiquin"
                          checked={formData.tieneBotiquin}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-green-600"
                        />
                        <span className="text-gray-700">Cuenta con botiquín</span>
                      </label>
                      {formData.tieneBotiquin && (
                        <div className="ml-6 mt-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Descripción del botiquín
                          </label>
                          <textarea
                            name="descripcionBotiquin"
                            value={formData.descripcionBotiquin}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          />
                          <div className="mt-4">
                            <FileUploadField label="Foto del Botiquín" />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-8">
                      <h3 className="text-lg font-bold text-green-800 mb-4">
                        🦺 Elementos de Protección Personal (EPP)
                      </h3>
                      
                      {[
                        { field: 'tieneGafas', label: 'Gafas de seguridad' },
                        { field: 'tieneMascaras', label: 'Máscaras con filtros' },
                        { field: 'tieneGuantes', label: 'Guantes' },
                        { field: 'tieneTrajeAntifluido', label: 'Traje antifluido' },
                        { field: 'tieneBotas', label: 'Botas industriales' },
                      ].map((item) => (
                        <div key={item.field} className="mb-4">
                          <label className="flex items-center space-x-2 mb-2">
                            <input
                              type="checkbox"
                              name={item.field}
                              checked={formData[item.field as keyof typeof formData] as boolean}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-green-600"
                            />
                            <span className="text-gray-700">{item.label}</span>
                          </label>
                        </div>
                      ))}

                      <div className="mt-6 space-y-4">
                        <FileUploadField label="Foto de Gafas" />
                        <FileUploadField label="Foto de Máscaras" />
                        <FileUploadField label="Foto de Guantes" />
                        <FileUploadField label="Foto de Traje Antifluido" />
                        <FileUploadField label="Foto de Botas" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PASO 7: Emergencias */}
              {pasoActual === 7 && (
                <div>
                  <h2 className="text-2xl font-bold text-green-800 mb-6">
                    7. Equipos para Emergencias
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="flex items-center space-x-2 mb-4">
                        <input
                          type="checkbox"
                          name="tieneKitDerrames"
                          checked={formData.tieneKitDerrames}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-green-600"
                        />
                        <span className="text-gray-700">Cuenta con kit para derrames</span>
                      </label>
                      {formData.tieneKitDerrames && (
                        <div className="ml-6 mt-2">
                          <FileUploadField label="Foto del Kit de Derrames" />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Materiales absorbentes disponibles
                      </label>
                      <textarea
                        name="materialesAbsorbentes"
                        value={formData.materialesAbsorbentes}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="Describa los materiales absorbentes..."
                      />
                    </div>

                    <div className="mt-4">
                      <FileUploadField label="Foto de Materiales Absorbentes" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Equipo de limpieza y recolección
                      </label>
                      <textarea
                        name="equipoLimpieza"
                        value={formData.equipoLimpieza}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="Describa el equipo disponible..."
                      />
                    </div>

                    <div className="mt-4">
                      <FileUploadField label="Foto de Equipo de Limpieza" />
                    </div>
                  </div>
                </div>
              )}

              {/* PASO 8: Revisión y Envío */}
              {pasoActual === 8 && (
                <div>
                  <h2 className="text-2xl font-bold text-green-800 mb-6">
                    8. Revisión y Envío
                  </h2>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                    <h3 className="font-bold text-yellow-800 mb-2">⚠️ Antes de enviar:</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700">
                      <li>Verifique que todos los campos obligatorios estén completos</li>
                      <li>Asegúrese de haber subido todas las fotos requeridas</li>
                      <li>Las fotos deben ser claras y mostrar bien los elementos</li>
                      <li>Revise que la información sea correcta</li>
                      <li>El plan se generará según el formato de la Corporación Autónoma Regional</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="font-bold text-gray-800 mb-4">📋 Resumen de la información:</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Razón Social:</strong> {formData.razonSocial}</p>
                      <p><strong>NIT:</strong> {formData.nit}</p>
                      <p><strong>Ciudad:</strong> {formData.ciudad}</p>
                      <p><strong>Tipo de Negocio:</strong> {formData.tipoNegocio}</p>
                      <p><strong>Teléfono:</strong> {formData.telefono}</p>
                      <p><strong>Email:</strong> {formData.email}</p>
                      <p><strong>Área Bodega:</strong> {formData.areaBodega} m²</p>
                      <p><strong>Residuos:</strong> {formData.tiposResiduos.join(', ')}</p>
                      <p><strong>Extintores:</strong> {formData.cantidadExtintores}</p>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                    <h3 className="font-bold text-green-800 mb-2">📄 ¿Qué incluye tu plan?</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-green-700">
                      <li>Datos completos del establecimiento</li>
                      <li>Grupo Administrativo de Gestión Ambiental (GAGA)</li>
                      <li>Caracterización de residuos según tipo de negocio</li>
                      <li>Infraestructura y almacenamiento</li>
                      <li>Prevención y control de incendios</li>
                      <li>Equipos y materiales para emergencias</li>
                      <li>Plan de contingencia</li>
                      <li>Transporte y disposición final</li>
                      <li>Cronograma de actividades</li>
                      <li>Presupuesto anual estimado</li>
                      <li>Normatividad colombiana aplicable</li>
                    </ul>
                  </div>

                  <div>
                    <label className="flex items-center space-x-2 mb-4">
                      <input
                        type="checkbox"
                        name="aceptaTerminos"
                        checked={formData.aceptaTerminos}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-green-600"
                        required
                      />
                      <span className="text-gray-700">
                        Acepto los términos y condiciones, y autorizo el tratamiento de mis datos personales para la elaboración del plan
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Botones de navegación */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`px-6 py-3 rounded-lg font-bold ${
                    pasoActual === 1
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                  disabled={pasoActual === 1}
                >
                  ← Anterior
                </button>

                {pasoActual < 8 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 bg-green-700 text-white rounded-lg font-bold hover:bg-green-800"
                  >
                    Siguiente →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitting || !formData.aceptaTerminos}
                    className={`px-6 py-3 rounded-lg font-bold ${
                      submitting || !formData.aceptaTerminos
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-green-700 text-white hover:bg-green-800'
                    }`}
                  >
                    {submitting ? 'Enviando...' : '📤 Enviar Solicitud por WhatsApp'}
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}{/* Servicio - Planes de Manejo Ambiental */}
<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-2 border-green-200">
  <div className="text-5xl mb-4">📋</div>
  <h3 className="text-xl font-bold text-green-800 mb-3">
    Planes de Manejo Ambiental (PGIRSP)
  </h3>
  <p className="text-gray-600 mb-4">
    Generamos tu Plan de Gestión Integral de Residuos Peligrosos adaptado a tu tipo de negocio, 
    según normatividad colombiana (Decreto 4741/2005, Res. 2184/2019).
  </p>
  <ul className="text-sm text-gray-600 mb-4 space-y-1">
    <li>✓ Adaptado a legislación colombiana</li>
    <li>✓ Incluye registro fotográfico</li>
    <li>✓ Listo para presentar ante la CAR</li>
  </ul>
  <a 
    href="/solicitar-plan" 
    className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-800 transition"
  >
    📄 Solicitar Plan →
  </a>
</div>