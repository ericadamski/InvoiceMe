export default function format(amount, options = {}) {
  const formatter = new Intl.NumberFormat({
    maximumSignificantDigits: 2,
  });

  const toTransform = +amount.toString().replace(/,/g, "");

  if (isNaN(toTransform)) {
    return amount;
  }

  return formatter.format(toTransform);
}
