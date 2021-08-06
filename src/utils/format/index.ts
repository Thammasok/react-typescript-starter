import xxuFormatProps from 'utils/Format/types'

const xxuFormat = {
  currency: ({
    number,
    isDecimal = false
  }: xxuFormatProps.CurrencyPropTypes): string | number => {
    let money = number
    if (isDecimal) {
      money = number.toLocaleString('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
      })
    } else {
      money = number.toLocaleString('en-US')
    }

    return money
  }
}

export default xxuFormat
