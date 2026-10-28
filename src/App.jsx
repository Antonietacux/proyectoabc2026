import React from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';

function App() {
    return (
        <div style={{ maxWidth: '900px', margin: '20px auto', padding: '60px', fontFamily: 'Segoe UI' }}>
            <HeaderClase tituloTema="USO DE LAS MAYUSCULAS" nombreDocente="MARIA ANTONIETA BEATRIZ CUX MORALES" horario="Lunes 7:30 AM" Grado="Primero Básico" />
            <ObjetivosCard competencia="Practicar el uso correcto de las mayúsculas en textos y en era digital. (Netiquetas)" indicadorLogro="El estudiante identifica y aplica correctamente las mayúsculas en textos y en era digital. (Netiquetas)" />
            <ActividadItem tituloActividad="Actividad práctica interactiva de clasificación: coloca la letra mayúscula en el lugar correcto" duracion="25 min" etapaDidactica="Reglas y Ejemplos" />
            
        </div>
    );
}

export default App;