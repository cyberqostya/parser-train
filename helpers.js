// Вспомогательные функции (одна)
// Преобразователь дат в формат ISO-8601 2022-03-25
const convertDate = str => {

  const months = ['янв', 'фев', 'март', 'апр', 'ма', 'июн', 'июл', 'авг', 'сент', 'окт', 'нояб', 'дек'];
  const checkZeros = num => num < 10 ? ('0' + num) : num;

  const year = str.match(/\d{4}/) ? str.match(/\d{4}/)[0] : new Date().getFullYear();
  let month;
  let day;
  if(str.match(/сегодн/i)){
    month = new Date().getMonth() + 1;
    day = new Date().getDate();
  } else if(str.match(/вчер/i)) {
    month = new Date(Date.now() - 1000*60*60*24).getMonth() + 1;
    day = new Date(Date.now() - 1000*60*60*24).getDate();
  } else {
    day = str.match(/\d{2}/i)[0];
    month = months.indexOf( months.find(i => str.match(new RegExp(i,'i'))) ) + 1;
  }

  month = checkZeros(month);
  day = checkZeros(day);

  return `${year}-${month}-${day}`;
}


module.exports = {
  convertDate
}