export default class {
  constructor (data) {
    this.data = data
  }

  dataFormat (chartType = 'line') {
    let result = null
    switch (chartType) {
      case 'line':
        result = this.commonChart()
        break
      case 'radar':
        result = this.data.value
        break
    }
    return result
  }

  commonChart () {
    const label = []
    const value = []
    this.data.value.forEach(item => {
      label.push(item.label)
      value.push(item.value)
    })
    return {
      label: label,
      value: value
    }
  }
}
