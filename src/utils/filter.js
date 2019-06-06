import Vue from 'vue'

Vue.filter('number', function (value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})

Vue.filter('DateDMY', function (value) {
  if (value) {
    let monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]

    let date = new Date(value)
    let day = date.getDate()
    let monthIndex = date.getMonth()
    let year = date.getFullYear()

    return day + ' ' + monthNames[monthIndex] + ' ' + year
  } else {
    return '-'
  }
})
