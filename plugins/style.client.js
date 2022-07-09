export default (context, inject) => {
  let count = 0
  inject('style', () => {
    count++
    console.log('global', count, count % 2 ? 'light' : 'dark')
    if (count % 2) {
      document.querySelector(':root').style.setProperty('--A', 'var(--blanc')
      document.querySelector(':root').style.setProperty('--B', 'var(--noir')
    } else {
      document.querySelector(':root').style.setProperty('--A', 'var(--noir')
      document.querySelector(':root').style.setProperty('--B', 'var(--blanc')
    }
  })
}
