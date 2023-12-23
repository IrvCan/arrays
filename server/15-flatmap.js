const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
    { userId: 2, username: "Mike", attributes: ["Lovely"] },
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
  ];

const rta = users.map(user => user.attributes).flat();
const rta2 = users.flatMap(user => user.attributes);

console.log('map-flat', rta);
console.log('rta2',rta2);

  const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

const rta3 = Object.keys(calendars); //devuelve los atributos dentro de un array
console.log(rta3)

const rta4 = Object.values(calendars); //devuevle todo vuelvto un array
console.log(rta4)

const rta5 = Object.values(calendars).flatMap(items=>{
    return items.map(date => date.startDate);
}); 
console.log(rta5)