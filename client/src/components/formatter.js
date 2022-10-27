const format_currency=(value)=>{
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      });
      return formatter.format(value)
}

export default format_currency;