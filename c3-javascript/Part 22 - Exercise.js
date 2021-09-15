const data = [
  {
    id: 1,
    first_name: 'Berky',
    city: 'United States',
    age: 23,
  },
  {
    id: 2,
    first_name: 'Renado',
    city: 'United States',
    age: 42,
  },
  {
    id: 3,
    first_name: 'Amalie',
    city: 'Thailand',
    age: 25,
  },
  {
    id: 4,
    first_name: 'Phaidra',
    city: 'Thailand',
    age: 25,
  },
  {
    id: 5,
    first_name: 'Tess',
    city: 'United States',
    age: 38,
  },
  {
    id: 6,
    first_name: 'Rosaline',
    city: 'United States',
    age: 23,
  },
  {
    id: 7,
    first_name: 'Cyndia',
    city: 'Thailand',
    age: 54,
  },
  {
    id: 8,
    first_name: 'Bil',
    city: 'United States',
    age: 25,
  },
  {
    id: 9,
    first_name: 'Ondrea',
    city: 'Thailand',
    age: 41,
  },
  {
    id: 10,
    first_name: 'Alicia',
    city: 'United States',
    age: 30,
  },
];

// Print ชื่อของทุกคน (ใช้ forEach)
/* data.forEach((el, idx) => {
  console.log(idx, el.first_name);
}); */

// สร้าง Array ที่มีแต่ Object ของคนที่ค่า City ไม่ใช่ Thailand (ใช้ filter)
/* var dataNew = data.filter( (el) => {return el.city !== 'Thailand'})
console.log(dataNew)
 */

// สร้าง Array ที่มี Object ที่มี first_name เป็นตัวเล็ก (ใช้ map)
/* var dataNew = data.map((el) => {
  return {
    id: el.id,
    first_name: el.first_name.toLowerCase(),
    city: el.city,
    age: el.age,
  };
});
console.log(dataNew); */

// รวมอายุทุกคน ใช้ (ใช้ reduce)
/* var sumAge = data.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.age;
}, 0);
console.log(sumAge); */
