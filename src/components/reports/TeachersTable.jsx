import React from "react";

const TeachersTable = () => {
  const teachers = [
    {
      id: 47,
      name: "Adilson Caiala",
      sexo: "M",
      estado: "Casado(a)",
      residencia: "Cazenga",
      contacto: "924390476",
      nivel: "--",
      area: "--",
    },
    {
      id: 54,
      name: "Alfredo Joveta Muzumbo",
      sexo: "M",
      estado: "Solteiro(a)",
      residencia: "Ngola Kiluanje",
      contacto: "943386848",
      nivel: "Frequência universitária",
      area: "Licenciatura em Ensino Primário",
    },
  ];

  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "13px",
        }}
      >
        <thead>
          <tr>
            <th style={thBlue}>ID</th>
            <th style={th}>NOME COMPLETO</th>
            <th style={th}>SEXO</th>
            <th style={th}>ESTADO CIVIL</th>
            <th style={th}>RESIDÊNCIA</th>
            <th style={th}>CONTACTO</th>
            <th style={th}>NÍVEL ACADÉMICO</th>
            <th style={th}>ÁREA DE FORMAÇÃO</th>
          </tr>
        </thead>

        <tbody>
          {teachers.map((t, i) => (
            <tr
              key={t.id}
              style={{
                backgroundColor: i % 2 === 0 ? "#f8f9fa" : "#fff",
              }}
            >
              <td style={td}>{t.id}</td>
              <td style={td}>{t.name}</td>
              <td style={td}>{t.sexo}</td>
              <td style={td}>{t.estado}</td>
              <td style={td}>{t.residencia}</td>
              <td style={td}>{t.contacto}</td>
              <td style={td}>{t.nivel}</td>
              <td style={td}>{t.area}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const th = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
  textAlign: "left",
};

const thBlue = {
  ...th,
  backgroundColor: "#0d6efd",
  color: "#fff",
};

const td = {
  padding: "10px",
  borderBottom: "1px solid #eee",
};

export default TeachersTable;