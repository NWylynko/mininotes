
export function feature() {

  const base = window.location.pathname.replace("/", "-")
  const hash = base.split('!')

  if (hash.length >= 2) {
    return hash[hash.length - 1]
  } else {
    return null
  }
}

export function id() {

  const base = window.location.pathname.replace("/", "-")
  const hash = base.split('!')

  if (hash.length >= 2) {
    hash.pop()
    return hash.join('!')
  } else {
    return hash.join()
  }
}

export function name() {
  return id().replace("-", "")
}

