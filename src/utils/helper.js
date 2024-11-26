function compareDates(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);


  console.log("Arrival Time",d1.getTime())

  console.log("Departure Time",d2.getTime())    

  return d1.getTime() > d2.getTime();
}

module.exports = { compareDates };
