const ordersArr = [4, 2, 1, 3];
  const patients = [
{ id: 1, name: "Максим" },
{ id: 2, name: "Николай" },
{ id: 3, name: "Ангелина" },
{ id: 4, name: "Виталий" },
];
//giveTalonsInOrder()
function giveTalonsInOrder (patients, ordersArr) {
  let array = [];
  for (let order of ordersArr) {
    for (let patient of  patients) {
      if (order == patient.id) {
        array.push(patient)
      }
    }
  }
  return array
}


 /* let array = [];
    for (let orders of ordersArr) {
    let patient = patients.map((patient) => patient.id === orders);
      array.push(patient);
    }
    return array;*/
      
     /* let patient = patients.find(item => item.id === ordersArr.id);
      alert(patient.name); */
  
  /*for (const id of orders) {
        if(patient.id === id){
         onlineUsers.push(patient.name)
        }*/
  
  /*for(let if of orders) {
    if(patients[id].id == id){
         onlineUsers.push(patients[id].name )
    }*/
  
 /* const map = new Map(patients.map((patient) => [patient.id, patient]));
  return ordersArr.map((id) => map.get(id));*/

    /*let map = new Map(Object.entries(patients));
    alert( map.get('name') );*/
  
 /* const obj = {};
  patients.forEach((e, i) => obj[e.id] = i);
  return orders.map(id => patients[obj[id]]);*/

const result = giveTalonsInOrder(patients, ordersArr);
console.log('result', result);
/* Возвращает массив
[
{ id: 4, name: 'Виталий' },
{ id: 2, name: 'Николай' },
{ id: 1, name: 'Максим' },
{ id: 3, name: 'Ангелина' }
]
*/
