export default function getProgressValue(allocated, sale) {
  let result = 0;

  if (allocated !== '' && sale !== '') {
    result = (allocated / sale) * 100;
  }

  return result;
}
