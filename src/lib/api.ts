import { getToken } from "./auth"

const API_URL = (import.meta.env.VITE_API_URL as string) || ""

async function postJSON<T = any>(path: string, body: any) {
  const url = API_URL ? `${API_URL}${path}` : path

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  }

  const token = getToken()
  if (token) headers["Authorization"] = `Bearer ${token}`

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  })

  let data: any
  try {
    data = await res.json()
  } catch (e) {
    // no json
  }

  if (!res.ok) {
    const message = data?.message || res.statusText || "Request failed"
    const err: any = new Error(message)
    err.status = res.status
    err.payload = data
    throw err
  }

  return data as T
}

export type LoginResponse = {
  token?: string
  user?: any
  message?: string
}

export async function login(payload: { email: string; password: string }) {
  return postJSON<LoginResponse>("/auth/login", payload)
}

export async function register(payload: { name: string; email: string; password: string }) {
  return postJSON<LoginResponse>("/auth/register", payload)
}

export default { login, register }
