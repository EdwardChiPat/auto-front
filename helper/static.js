export const months = [
  {
    id: "01",
    name: "Enero"
  },
  {
    id: "02",
    name: "Febrero"
  },
  {
    id: "03",
    name: "Marzon"
  },
  {
    id: "04",
    name: "Abril"
  },
  {
    id: "05",
    name: "Mayo"
  },
  {
    id: "06",
    name: "Junio"
  },
  {
    id: "07",
    name: "Julio"
  },
  {
    id: "08",
    name: "Agosto"
  },
  {
    id: "09",
    name: "Septiembre"
  },
  {
    id: "10",
    name: "Octubre"
  },
  {
    id: "11",
    name: "Noviembre"
  },
  {
    id: "12",
    name: "Diciembre"
  }
];

export const msi = [
  {
    id: 12,
    name: '12 pagos'
  },
  {
    id: 24,
    name: '24 pagos'
  },
  {
    id: 36,
    name: '36 pagos'
  },
  {
    id: 42,
    name: '42 pagos'
  },
  {
    id: 60,
    name: '60 pagos'
  }
];

export const inputs = [
  {
    title: "Nombre(s):",
    name: 'name',
  }, 
  {
    title: "Apellido(s):",
    name: 'lastname',
    required: false
  },
  {
    title: "Número de tarjeta:",
    name: 'card',
    maxLength: 16,
  },
  {
    title: "CVV",
    name: 'cvv',
    maxLength: 3,
  },
  {
    title: "Año",
    name: 'year',
    maxLength: 4,
  },
  {
    title: "Mes",
    name: 'month',
    type: 'select',
    content: months
  },
  {
    title: "Enganche",
    name: 'advanced'
  },
  {
    title: "Cuotas",
    name: "msi",
    type: 'select',
    content: msi
  }
];

export default {
  inputs
}