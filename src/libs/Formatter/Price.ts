const formatter = new Intl.NumberFormat('ja-JP', {
  style: 'currency',
  currency: 'JPY'
});

export const Price = {
  format(price: number): string {
    return formatter.format(price);
  }
};
