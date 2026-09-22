const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const frontendHostname = typeof window !== 'undefined' ? window.location.hostname : ''
const codespaceApiUrl = frontendHostname.match(/^(.+)-5173\.app\.github\.dev$/)
  ? `https://${frontendHostname.replace(/-5173\.app\.github\.dev$/, '-8000.app.github.dev')}`
  : ''

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : codespaceApiUrl || 'http://localhost:8000'

export function recordsFromResponse(payload) {
  if (Array.isArray(payload)) return payload
  if (!payload || typeof payload !== 'object') return []
  for (const key of ['data', 'items', 'records', 'results']) {
    if (Array.isArray(payload[key])) return payload[key]
  }
  return []
}

export async function fetchRecords(component) {
  const response = await fetch(`${apiBaseUrl}/api/${component}/`)
  if (!response.ok) throw new Error(`Unable to load ${component}`)
  return recordsFromResponse(await response.json())
}