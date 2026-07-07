'use client';

import { useState } from 'react';

export default function SolicitarPlan() {
  const [pasoActual, setPasoActual] = useState(1);
  const [formData, setFormData] = useState<{[key: string]: string}>({
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
    capacidadTanque: '',
    cantidadTanques: '',
    tipoResiduos: '',
    frecuenciaRetiro: '',
    volumenMensual: '',
    necesitaTransporte: 'No',
    necesitaAlmacenamiento: 'No',
    necesitaTratamiento: 'No',
    notasAdicionales: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked ? 'Sí' : 'No' }));
  };

  const nextStep = () => {
    if (pasoActual < 3) setPasoActual(pasoActual + 1);
  };

  const prevStep = () => {
    if (pasoActual > 1) setPasoActual(pasoActual - 1);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Solicitud de Plan Ambiental</h1>
      <p>Paso {pasoActual} de 3</p>

      {pasoActual === 1 && (
        <div>
          <h2>Datos de la Empresa</h2>
          <input type="text" name="razonSocial" placeholder="Razón Social" onChange={handleChange} />
          <input type="text" name="representanteLegal" placeholder="Representante Legal" onChange={handleChange} />
          <input type="text" name="cedula" placeholder="Cédula" onChange={handleChange} />
          <input type="text" name="nit" placeholder="NIT" onChange={handleChange} />
          <input type="text" name="direccion" placeholder="Dirección" onChange={handleChange} />
          <input type="text" name="ciudad" placeholder="Ciudad" onChange={handleChange} />
          <input type="tel" name="telefono" placeholder="Teléfono" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        </div>
      )}

      {pasoActual === 2 && (
        <div>
          <h2>Información Operativa</h2>
          <input type="text" name="tipoNegocio" placeholder="Tipo de Negocio" onChange={handleChange} />
          <input type="number" name="areaBodega" placeholder="Área Bodega (m²)" onChange={handleChange} />
          <input type="number" name="areaOficina" placeholder="Área Oficina (m²)" onChange={handleChange} />
          <input type="number" name="largoBodega" placeholder="Largo Bodega (m)" onChange={handleChange} />
          <input type="number" name="anchoBodega" placeholder="Ancho Bodega (m)" onChange={handleChange} />
          <input type="number" name="altoBodega" placeholder="Alto Bodega (m)" onChange={handleChange} />
          <input type="number" name="capacidadTanque" placeholder="Capacidad Tanque (L)" onChange={handleChange} />
          <input type="number" name="cantidadTanques" placeholder="Cantidad Tanques" onChange={handleChange} />
          <input type="text" name="tipoResiduos" placeholder="Tipos de Residuos" onChange={handleChange} />
          <input type="text" name="frecuenciaRetiro" placeholder="Frecuencia de Retiro" onChange={handleChange} />
          <input type="number" name="volumenMensual" placeholder="Volumen Mensual (L)" onChange={handleChange} />
        </div>
      )}

      {pasoActual === 3 && (
        <div>
          <h2>Necesidades Adicionales</h2>
          <label>
            <input 
              type="checkbox" 
              checked={formData.necesitaTransporte === 'Sí'} 
              onChange={(e) => handleCheckboxChange('necesitaTransporte', e.target.checked)} 
            />
            Necesita Transporte
          </label><br/>
          <label>
            <input 
              type="checkbox" 
              checked={formData.necesitaAlmacenamiento === 'Sí'} 
              onChange={(e) => handleCheckboxChange('necesitaAlmacenamiento', e.target.checked)} 
            />
            Necesita Almacenamiento
          </label><br/>
          <label>
            <input 
              type="checkbox" 
              checked={formData.necesitaTratamiento === 'Sí'} 
              onChange={(e) => handleCheckboxChange('necesitaTratamiento', e.target.checked)} 
            />
            Necesita Tratamiento
          </label><br/><br/>
          <textarea name="notasAdicionales" placeholder="Notas adicionales..." onChange={handleChange}></textarea>
        </div>
      )}

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
        {pasoActual > 1 && <button onClick={prevStep}>Anterior</button>}
        {pasoActual < 3 && <button onClick={nextStep}>Siguiente</button>}
        {pasoActual === 3 && <button onClick={() => alert('Formulario enviado')}>Enviar</button>}
      </div>
    </div>
  );
}