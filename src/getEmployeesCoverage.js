const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const empPorNomeSobreNome = (emp) => {
  const emPrega = employees.find((item) => item.id === emp.id
  || item.firstName === emp.name
  || item.lastName === emp.name);
  if (emPrega === undefined) {
    throw new Error('Informações inválidas');
  }
  return emPrega;
};
const animalEmpregado = (func) => species.filter((item) => func.includes(item.id));
const obPd = (empregadosData, especiesData) => {
  const objeto = {
    id: empregadosData.id,
    fullName: `${empregadosData.firstName} ${empregadosData.lastName}`,
    species: especiesData.map((item) => item.name),
    locations: especiesData.map((item) => item.location),
  };
  return objeto;
};

function getEmployeesCoverage(id) {
  if (id === undefined) {
    const geralEmpregados = [];
    employees.forEach((i) => geralEmpregados.push(obPd(i, animalEmpregado(i.responsibleFor))));
    return geralEmpregados;
  }
  const empregados = empPorNomeSobreNome(id);
  const respoPor = empregados.responsibleFor;
  const pegaTudo = animalEmpregado(respoPor);
  return obPd(empregados, pegaTudo);
}

module.exports = getEmployeesCoverage;
