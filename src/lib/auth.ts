const TOKEN_KEY = "sbj_auth_token"

export function setToken(token: string) {
  try {
    localStorage.setItem(TOKEN_KEY, token)
  } catch (e) {
    // ignore
  }
}

export function getToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY)
  } catch (e) {
    return null
  }
}

export function clearToken() {
  try {
    localStorage.removeItem(TOKEN_KEY)
  } catch (e) {
    // ignore
  }
}

export default { setToken, getToken, clearToken }
