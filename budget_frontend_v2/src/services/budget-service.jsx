import { ApiBaseURL } from "./config"

export async function fetchBudgetService(requestedId, params) {
  return await fetch(`${ApiBaseURL}${requestedId}?${params}`)
}