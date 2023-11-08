export function validateEmail(email) {
  var regex = /\A[A-Z0-9+_.-]+@[A-Z0-9.-]+\Z/i
  return regex.test(String(email).toLowerCase())
}
