import { useState, useEffect } from 'react'

const colors = {
  bgGradient: 'linear-gradient(135deg, #fbfaff 0%, #f5f0fa 100%)', // Fondo de cuarzo luminoso
  bgSectionContrast: '#efe6fa', // Fondo lavanda de la sección de servicios
  goldRefined: '#b58d3d', // Oro místico
  goldGlow: 'rgba(181, 141, 61, 0.25)',
  lavenderText: '#6d28d9', 
  primaryText: '#1e0a3d', 
  secondaryText: '#4a3f5a', 
  whatsappOriginal: '#25D366' // Verde oficial de WhatsApp
}

function App() {
  // ESTADOS PARA TAROT & CARGA MÍSTICA (OPCIÓN A)
  const [cartaSeleccionada, setCartaSeleccionada] = useState(null)
  const [canalizando, setCanalizando] = useState(false)
  
  // ESTADO PARA CARRUSEL DE TESTIMONIOS (OPCIÓN B)
  const [testimonioActual, setTestimonioActual] = useState(0)

  // ESTADOS PARA CONSULTOR DEL PÉNDULO INTERACTIVO (OPCIÓN D)
  const [pregunta, setPregunta] = useState('')
  const [respuestaPendulo, setRespuestaPendulo] = useState('')
  const [oscilando, setOscilando] = useState(false)

  useEffect(() => {
    const linkSerif = document.createElement('link');
    linkSerif.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,500&display=swap';
    linkSerif.rel = 'stylesheet';
    
    const linkSans = document.createElement('link');
    linkSans.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap';
    linkSans.rel = 'stylesheet';

    document.head.appendChild(linkSerif);
    document.head.appendChild(linkSans);

    return () => {
      document.head.removeChild(linkSerif);
      document.head.removeChild(linkSans);
    };
  }, []);

  // 🌟 TU LISTA OFICIAL Y EXACTA DE SERVICIOS CON SUS FONDOS ENERGÉTICOS
  const servicios = [
    { 
      titulo: "Mesa Cuántica Energética", 
      desc: "Armonización profunda de tus campos energéticos para desbloquear situaciones estancadas y elevar tu vibración a su estado óptimo.",
      bg: '#ebd5ff', // Violeta Amatista
      glow: 'rgba(168, 85, 247, 0.7)'
    },
    { 
      titulo: "Barras de Acces", 
      desc: "Activación de 32 puntos magnéticos en la cabeza para disolver el estrés, la ansiedad y las creencias limitantes que frenan tu evolución.",
      bg: '#bae6fd', // Azul Celestial
      glow: 'rgba(14, 165, 233, 0.7)'
    },
    { 
      titulo: "Facelift Energético", 
      desc: "Proceso rejuvenecedor que activa la energía de tu cuerpo para liberar el juicio del envejecimiento y revitalizar tu ser desde adentro.",
      bg: '#fbcfe8', // Rosa Cuarzo
      glow: 'rgba(244, 114, 182, 0.7)'
    },
    { 
      titulo: "Terapias con Péndulo Hebreo", 
      desc: "Detección, limpieza y sanación integral del aura, transmutando energías densas, bloqueos y restaurando tu equilibrio sagrado.",
      bg: '#bbf7d0', // Verde Sanación
      glow: 'rgba(34, 197, 94, 0.7)'
    },
    { 
      titulo: "Terapias con Péndulo Iko, Karma, ISIS / Osiris", 
      desc: "Trabajo vibracional avanzado y ancestral para sanar lazos álmicos profundos, limpiar karma y equilibrar tu centro espiritual.",
      bg: '#99f6e4', // Turquesa Energético
      glow: 'rgba(13, 148, 136, 0.7)'
    },
    { 
      titulo: "Terapia Piramidal", 
      desc: "Canalización de energía cósmica a través de geometría sagrada para la restauración física, mental, sutil y celular.",
      bg: '#fef08a', // Oro Radiante
      glow: 'rgba(234, 179, 8, 0.7)'
    },
    { 
      titulo: "Terapia del Desapego", 
      desc: "Sanación profunda guiada con hipnosis clínica y memoria celular para soltar definitivamente patrones dolorosos y lazos del pasado.",
      bg: '#fed7aa', // Ámbar Suave
      glow: 'rgba(249, 115, 22, 0.7)'
    }
  ]

  const testimonios = [
    {
      texto: "«Hice la Mesa Cuántica con Hosanna y a los tres días destrabé un negocio de exportación que venía frenado hace meses. La claridad energética que te da no tiene nombre.»",
      nombre: "Laura Giménez", rol: "Emprendedora de Moda & Comercio Exterior"
    },
    {
      texto: "«Venía sufriendo de un burnout terrible por el estrés de la agencia. Las Barras de Acceso con ella me resetearon la cabeza. Recuperé el foco y la tranquilidad para liderar.»",
      nombre: "Martín Rodríguez", rol: "Director de Agencia de Marketing Digital"
    },
    {
      texto: "«La Terapia del Desapego con hipnosis fue un antes y un después. Me permitió soltar miedos heredados que bloqueaban mi abundancia financiera. Una genia absoluta.»",
      nombre: "Elena Silva", rol: "Mentora de Negocios & Coach Profesional"
    }
  ]

  const prediccionesPendulo = [
    "Sí. Los caminos están totalmente abiertos y la energía cósmica fluye a tu favor. ✨",
    "La energía está en constante movimiento. Esperá, meditá en silencio y volvé a consultar. 🌀",
    "No es el momento propicio para avanzar en esa dirección. Protegé tu energía y tené paciencia. 🌕",
    "Absolutamente. Confiá plenamente en tu intuición, la respuesta ya habita dentro tuyo. 💜",
    "Hay un bloqueo temporal en el entorno. Una limpieza energética profunda traerá la luz que buscás. 🕯️"
  ]

  const handleCartaClick = (carta) => {
    if (canalizando) return;
    setCartaSeleccionada(null);
    setCanalizando(true);
    setTimeout(() => {
      setCanalizando(false);
      setCartaSeleccionada(carta);
    }, 1500);
  };

  const handleConsultarPendulo = (e) => {
    e.preventDefault();
    if (!pregunta.trim() || oscilando) return;

    setOscilando(true);
    setRespuestaPendulo('');

    setTimeout(() => {
      const randomIdx = Math.floor(Math.random() * prediccionesPendulo.length);
      setRespuestaPendulo(prediccionesPendulo[randomIdx]);
      setOscilando(false);
    }, 2000); 
  };

  const fontSerif = { fontFamily: "'Playfair Display', serif" };
  const fontSans = { fontFamily: "'Inter', sans-serif" };

  return (
    <div style={{ background: colors.bgGradient, minHeight: '100vh', color: colors.primaryText, ...fontSans, padding: '0', overflowX: 'hidden' }}>
      
      <style>{`
        body { margin: 0; padding: 0; background-color: #f5f0fa; }
        .carta-tarot:hover {
          transform: scale(1.06) translateY(-10px) !important;
          box-shadow: 0 15px 30px ${colors.goldGlow} !important;
          border-color: ${colors.goldRefined} !important;
        }
        .floating-wp:hover {
          transform: scale(1.1) translateY(-3px) !important;
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.4) !important;
          background-color: #20ba5a !important;
        }
        @keyframes vaiven {
          0% { transform: rotate(-22deg); }
          50% { transform: rotate(22deg); }
          100% { transform: rotate(-22deg); }
        }
        .pendulo-activo {
          animation: vaiven 0.6s ease-in-out infinite;
          transform-origin: top center;
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* ENCABEZADO DECORATIVO SUPERIOR */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid rgba(181, 141, 61, 0.15)', padding: '0.75rem 1rem', textAlign: 'center', fontSize: '0.75rem', letterSpacing: '0.3em', color: colors.goldRefined, fontWeight: '600' }}>
        ✦ ESPACIO HOLÍSTICO VIBRACIONAL DE ALTA FRECUENCIA ✦
      </div>

      {/* HERO SECTION CON LOGO DE FONDO (MARCA DE AGUA AL 28%) */}
      <header style={{ position: 'relative', textAlign: 'center', padding: '6rem 1rem 5rem 1rem', maxWidth: '1200px', margin: '0 auto', overflow: 'hidden' }}>
        <img 
          src="/logo.hosanna.jfif" 
          alt="Marca de agua Hosanna" 
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            width: '460px', 
            height: 'auto', 
            opacity: 0.28, 
            zIndex: 0, 
            pointerEvents: 'none',
            borderRadius: '50%'
          }} 
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ ...fontSerif, fontSize: '6.5rem', fontWeight: '800', color: colors.goldRefined, letterSpacing: '0.3rem', margin: 0, textTransform: 'uppercase', lineHeight: '1' }}>
            Hosanna
          </h1>
          <p style={{ ...fontSerif, fontStyle: 'italic', color: colors.lavenderText, fontSize: '1.75rem', marginTop: '0.75rem', letterSpacing: '0.05em', fontWeight: '500' }}>
            Espacio Holístico & Evolución Espiritual
          </p>
          <p style={{ color: colors.secondaryText, maxWidth: '750px', margin: '1.5rem auto 0 auto', fontSize: '1.2rem', lineHeight: '1.9', fontWeight: '300' }}>
            Un santuario de transmutación y luz diseñado para reconectarte con tu esencia divina, sanar desde la raíz y manifestar tu realidad más elevada.
          </p>
          <div style={{ width: '100px', height: '1px', backgroundColor: colors.goldRefined, margin: '2.5rem auto', opacity: 0.3 }}></div>
        </div>
      </header>

      {/* 🔮 SECCIÓN INTERACTIVA: EL ORÁCULO DE CARTAS */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 6rem auto', textAlign: 'center', backgroundColor: '#ffffff', padding: '4rem 3rem', borderRadius: '2rem', border: '1px solid rgba(181, 141, 61, 0.2)', boxShadow: '0 15px 45px rgba(109, 40, 217, 0.06)' }}>
        <h2 style={{ ...fontSerif, color: colors.primaryText, fontSize: '2.4rem', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>Tu Mensaje del Universo</h2>
        <p style={{ color: colors.lavenderText, fontSize: '1.1rem', marginBottom: '4rem', fontWeight: '400' }}>Centrá tu intención, elegí una de las tres cartas sagradas y descubrí qué energía guía tu camino hoy.</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          {[
            { id: 1, nombre: "El Sol", mensaje: "¡Energía de pura abundancia y claridad! Hosanna te recuerda hoy que el universo te empuja a brillar con toda tu fuerza y confiar plenamente en tus talentos divinos." },
            { id: 2, nombre: "La Estrella", mensaje: "Momento de profunda sanación, paz y esperanza. Estás en el camino correcto, déjate guiar por la suave y protectora luz de tu intuición." },
            { id: 3, nombre: "El Mago", mensaje: "Tenés absolutamente todas las herramientas en tus manos para manifestar lo que deseás. Hosanna te invita a tomar el control y actuar hoy." }
          ].map((carta) => (
            <div 
              key={carta.id}
              onClick={() => handleCartaClick(carta)}
              className="carta-tarot"
              style={{
                width: '180px',
                height: '290px',
                backgroundColor: '#fff',
                border: cartaSeleccionada?.id === carta.id ? `3px solid ${colors.goldRefined}` : `1.5px solid rgba(181, 141, 61, 0.35)`,
                borderRadius: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: canalizando ? 'not-allowed' : 'pointer',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                boxShadow: cartaSeleccionada?.id === carta.id ? `0 0 25px ${colors.goldGlow}` : '0 10px 25px rgba(0,0,0,0.03)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: '10px', left: '10px', right: '10px', bottom: '10px', border: '1px solid rgba(181, 141, 61, 0.15)', borderRadius: '0.75rem', pointerEvents: 'none' }}></div>
              {cartaSeleccionada?.id === carta.id ? (
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔮</div>
              ) : (
                <img src="/logo.hosanna.jfif" alt="Dorso Hosanna" style={{ width: '75%', height: 'auto', marginBottom: '1.25rem', borderRadius: '50%', opacity: canalizando ? 0.3 : 0.9, transition: 'opacity 0.3s' }} />
              )}
              <div style={{ ...fontSerif, fontStyle: 'italic', textTransform: 'uppercase', fontSize: '0.95rem', fontWeight: '600', color: cartaSeleccionada?.id === carta.id ? colors.goldRefined : colors.primaryText, textAlign: 'center', letterSpacing: '0.15em' }}>
                {cartaSeleccionada?.id === carta.id ? 'Revelada' : 'Hosanna'}
              </div>
            </div>
          ))}
        </div>

        {canalizando && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '150px', animation: 'fadeIn 0.5s' }}>
            <div style={{ width: '50px', height: '50px', border: `4px solid rgba(181, 141, 61, 0.1)`, borderTop: `4px solid ${colors.goldRefined}`, borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '1.5rem' }}></div>
            <p style={{ ...fontSerif, color: colors.goldRefined, fontSize: '1.3rem', letterSpacing: '0.1em', fontStyle: 'italic', margin: 0 }}>Canalizando tu energía...</p>
          </div>
        )}

        {cartaSeleccionada && !canalizando && (
          <div style={{ padding: '2.5rem', backgroundColor: '#faf8ff', borderRadius: '1.25rem', borderLeft: `6px solid ${colors.goldRefined}`, textAlign: 'left', animation: 'fadeIn 0.5s ease-out' }}>
            <h3 style={{ ...fontSerif, margin: 0, color: colors.primaryText, fontSize: '1.75rem' }}>Arcano Revelado: {cartaSeleccionada.nombre}</h3>
            <p style={{ margin: '1rem 0 0 0', color: colors.secondaryText, lineHeight: '1.9', fontSize: '1.15rem' }}>{cartaSeleccionada.mensaje}</p>
          </div>
        )}
      </section>

      {/* 💼 SECCIÓN DE SERVICIOS COMPLETA Y CON NOMENCLATURA 100% REAL */}
      <section style={{ backgroundColor: colors.bgSectionContrast, padding: '6rem 2rem', borderTop: '1px solid rgba(181,141,61,0.08)', borderBottom: '1px solid rgba(181,141,61,0.08)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ ...fontSerif, textTransform: 'uppercase', fontSize: '1.8rem', letterSpacing: '0.25em', color: colors.primaryText, textAlign: 'center', marginBottom: '4.5rem', fontWeight: '600' }}>
            Procesos de Sanación Sagrada
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {servicios.map((ser, i) => (
              <div 
                key={i} 
                style={{ 
                  backgroundColor: ser.bg, 
                  padding: '3rem 2.5rem', 
                  borderRadius: '1.5rem', 
                  border: '1px solid rgba(181, 141, 61, 0.2)', 
                  boxShadow: '0 4px 15px rgba(0,0,0,0.02)', 
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
                  e.currentTarget.style.boxShadow = `0 20px 40px ${ser.glow}`;
                  e.currentTarget.style.borderColor = colors.goldRefined;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)';
                  e.currentTarget.style.borderColor = 'rgba(181, 141, 61, 0.2)';
                }}
              >
                <h3 style={{ ...fontSerif, margin: 0, color: colors.primaryText, fontSize: '1.5rem', fontWeight: '700' }}>{ser.titulo}</h3>
                <div style={{ width: '30px', height: '2px', backgroundColor: colors.goldRefined, margin: '0.75rem 0 1.25rem 0', opacity: 0.6 }}></div>
                <p style={{ margin: 0, color: '#2e1065', fontSize: '1.05rem', lineHeight: '1.8', fontWeight: '400' }}>{ser.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔮 SECCIÓN D: EL CONSULTOR DEL PÉNDULO INTERACTIVO */}
      <section style={{ maxWidth: '800px', margin: '6rem auto', padding: '0 1.5rem', textAlign: 'center' }}>
        <h2 style={{ ...fontSerif, textTransform: 'uppercase', fontSize: '1.6rem', letterSpacing: '0.2em', color: colors.primaryText, marginBottom: '0.5rem' }}>
          El Oráculo del Péndulo
        </h2>
        <p style={{ color: colors.secondaryText, fontSize: '1.05rem', marginBottom: '3rem' }}>Sostené el péndulo digital en tu mente. Realizá una pregunta cerrada de Sí o No.</p>
        
        <div style={{ backgroundColor: '#ffffff', padding: '3.5rem 2.5rem', borderRadius: '2rem', border: '1px solid rgba(181, 141, 61, 0.2)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <div style={{ width: '100%', height: '140px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
            <div style={{ width: '8px', height: '8px', backgroundColor: colors.goldRefined, borderRadius: '50%' }}></div>
            <div className={oscilando ? "pendulo-activo" : ""} style={{ width: '2px', height: '90px', backgroundColor: colors.goldRefined, position: 'relative', transformOrigin: 'top center' }}>
              <div style={{ width: '24px', height: '24px', backgroundColor: '#fff', border: `3px solid ${colors.goldRefined}`, borderRadius: '50%', position: 'absolute', bottom: '-24px', left: '-11px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', boxShadow: `0 0 10px ${colors.goldGlow}` }}>🔮</div>
            </div>
          </div>

          <form onSubmit={handleConsultarPendulo} style={{ width: '100%', maxWidth: '500px' }}>
            <input 
              type="text" 
              placeholder="Escribí tu pregunta mística acá..." 
              value={pregunta}
              onChange={(e) => setPregunta(e.target.value)}
              disabled={oscilando}
              style={{ width: '100%', padding: '1rem 1.5rem', border: '1px solid rgba(181, 141, 61, 0.35)', borderRadius: '9999px', fontSize: '1.05rem', outline: 'none', textAlign: 'center', color: colors.primaryText, boxSizing: 'border-box', backgroundColor: '#fdfbfe' }}
            />
            <button 
              type="submit"
              disabled={oscilando || !pregunta.trim()}
              style={{ marginTop: '1.5rem', backgroundColor: oscilando || !pregunta.trim() ? '#d1d5db' : colors.primaryText, color: '#fff', padding: '0.85rem 2.5rem', borderRadius: '9999px', fontSize: '1rem', fontWeight: '600', border: 'none', cursor: oscilando || !pregunta.trim() ? 'not-allowed' : 'pointer', transition: 'all 0.2s' }}
            >
              {oscilando ? "El Péndulo está oscilando..." : "Consultar al Péndulo"}
            </button>
          </form>

          {respuestaPendulo && !oscilando && (
            <div style={{ marginTop: '2.5rem', padding: '1.5rem', backgroundColor: '#faf8ff', borderRadius: '1rem', borderLeft: `4px solid ${colors.goldRefined}`, width: '100%', maxWidth: '500px', boxSizing: 'border-box', animation: 'fadeIn 0.5s' }}>
              <p style={{ margin: 0, fontSize: '1.1rem', fontStyle: 'italic', color: colors.secondaryText, lineHeight: '1.6' }}>{respuestaPendulo}</p>
            </div>
          )}
        </div>
      </section>

      {/* 🎡 SECCIÓN B: CARRUSEL DE TESTIMONIOS */}
      <section style={{ maxWidth: '900px', margin: '0 auto 6rem auto', padding: '0 1rem', textAlign: 'center' }}>
        <h2 style={{ ...fontSerif, textTransform: 'uppercase', fontSize: '1.5rem', letterSpacing: '0.2em', color: colors.goldRefined, marginBottom: '3rem' }}>
          Experiencias en Hosanna
        </h2>
        <div style={{ backgroundColor: '#ffffff', padding: '3.5rem 3rem', borderRadius: '2rem', border: '1px solid rgba(181, 141, 61, 0.2)', boxShadow: '0 15px 45px rgba(0,0,0,0.01)', position: 'relative', minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: colors.primaryText, lineHeight: '1.8', margin: '0 0 2rem 0', fontWeight: '300', key: testimonioActual, animation: 'fadeIn 0.5s' }}>
            {testimonios[testimonioActual].texto}
          </p>
          <div style={{ animation: 'fadeIn 0.5s' }}>
            <h4 style={{ margin: '0', color: colors.lavenderText, fontSize: '1.1rem', fontWeight: '600' }}>{testimonios[testimonioActual].nombre}</h4>
            <p style={{ margin: '0.25rem 0 0 0', color: colors.secondaryText, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{testimonios[testimonioActual].rol}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2.5rem' }}>
            <button onClick={() => setTestimonioActual((p) => (p - 1 + testimonios.length) % testimonios.length)} style={{ background: 'none', border: `1.5px solid ${colors.goldRefined}`, color: colors.goldRefined, width: '45px', height: '45px', borderRadius: '50%', fontSize: '1.2rem', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>←</button>
            <button onClick={() => setTestimonioActual((p) => (p + 1) % testimonios.length)} style={{ background: 'none', border: `1.5px solid ${colors.goldRefined}`, color: colors.goldRefined, width: '45px', height: '45px', borderRadius: '50%', fontSize: '1.2rem', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>→</button>
          </div>
        </div>
      </section>

      {/* 🚀 🌟 NUEVO BLOQUE: MUY PRONTO (SUTIL, COMPACTO Y CON LOS SERVICIOS REALES) */}
      <section style={{ maxWidth: '550px', margin: '0 auto 6rem auto', textAlign: 'center', backgroundColor: '#fcfaff', padding: '2rem 1.5rem', borderRadius: '1.5rem', border: `1px solid ${colors.goldRefined}`, boxShadow: `0 10px 25px rgba(181, 141, 61, 0.04)` }}>
        <span style={{ backgroundColor: colors.goldRefined, color: '#fff', padding: '0.4rem 1.2rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}> Muy pronto </span>
        <h2 style={{ ...fontSerif, fontSize: '1.5rem', marginTop: '1.2rem', color: colors.primaryText, fontWeight: '700', lineHeight: '1.5' }}>
          Reprogramación Cuántica <br />
          <span style={{ color: colors.goldRefined, fontSize: '1.2rem' }}>&</span> <br />
          Reprogramación Espiritual
        </h2>
      </section>

      {/* 📱 FOOTER CON TU FIRMA OCULTA E INSTAGRAM COMPACTO */}
      <footer style={{ textAlign: 'center', padding: '4rem 0 4rem 0', borderTop: '1px solid rgba(181, 141, 61, 0.15)', maxWidth: '800px', margin: '0 auto' }}>
        
        {/* INSTAGRAM COMPACTO CON LOGO SVG OFICIAL */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <a 
            href="https://instagram.com/hosanna.by_cin" 
            target="_blank" 
            rel="noreferrer" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              padding: '0.5rem 1.2rem', 
              borderRadius: '9999px', 
              border: `1.5px solid ${colors.goldRefined}`, 
              color: colors.primaryText, 
              textDecoration: 'none', 
              fontWeight: '600', 
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
              backgroundColor: 'rgba(255,255,255,0.5)'
            }}
            onMouseEnter={(e) => { 
              e.currentTarget.style.backgroundColor = colors.goldRefined; 
              e.currentTarget.style.color = '#fff'; 
              e.currentTarget.querySelector('svg').style.fill = '#fff'; 
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.5)'; 
              e.currentTarget.style.color = colors.primaryText; 
              e.currentTarget.querySelector('svg').style.fill = colors.goldRefined; 
            }}
          >
            <svg viewBox="0 0 448 512" style={{ width: '16px', height: '16px', fill: colors.goldRefined, transition: 'fill 0.3s ease' }}>
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
            </svg>
            <span>@hosanna.by_cin</span>
          </a>
        </div>

        <p style={{ color: colors.secondaryText, fontSize: '0.95rem', letterSpacing: '0.1em', fontWeight: '400', lineHeight: '1.6', margin: 0 }}>
          © 2026 Hosanna. Todos los derechos reservados.<br />
          <a href="https://wa.me/5491154229565" target="_blank" rel="noreferrer" style={{ color: colors.goldRefined, textDecoration: 'none', cursor: 'pointer', fontWeight: '600', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
            Diseño y Desarrollo por Fernando Santos.
          </a>
        </p>
      </footer>

      {/* 🟢 EL BOTÓN FLOTANTE ORIGINAL DE WHATSAPP PARA ELLA */}
      <a 
        href="https://wa.me/5491136251292" 
        target="_blank" 
        rel="noreferrer" 
        className="floating-wp"
        title="Agendá tu sesión con Hosanna"
        style={{ 
          position: 'fixed', 
          bottom: '40px', 
          right: '40px', 
          backgroundColor: colors.whatsappOriginal, 
          width: '65px', 
          height: '65px', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.3)', 
          zIndex: 99999, 
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
          cursor: 'pointer' 
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '32px', height: '32px', fill: '#ffffff' }}>
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>

    </div>
  )
}

export default App