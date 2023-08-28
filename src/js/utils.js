export function formatDate(date) {
  return new Date(date).toLocaleDateString('fi-FI', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
