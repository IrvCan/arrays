const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

const rta = orders.map(item=>item.total);
console.log('rta',rta)

/** Modifica el Array orinal */
// const rta2 = orders.map(item=>{
//     item.tax = 0.19;
//     return item;
// })
// console.log('rta2',rta2)

/** Genera una copia del array original y no lo modifica */
const rta3 = orders.map(item=>{
    return {
        ...item,
        tax: 0.19
    };
})
console.log('rta3',rta3)