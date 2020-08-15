export default function convertData(date) {
  const regex = /\d{4}-\d{2}-\d{2}/
  const monthes = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

  const fixed = date.match(regex);
  const monthNumber = Number(fixed[0].split('-')[1])
  const representedMonth = monthes[monthNumber-1];

  return `${fixed[0].split('-')[2]} ${representedMonth}, ${fixed[0].split('-')[0]}`;
}
