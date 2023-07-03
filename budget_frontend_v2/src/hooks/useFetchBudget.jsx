import { useEffect,
         useState } from 'react';
import { fakeBudget } from '../development-files';
import { ApiBaseURL } from '../services/config'
import { fetchBudgetService } from '../services/budget-service'

export function useFetchBudget(requestedId = '-1', params = "") {

  const [ isLoading, setLoading ] = useState(true);
  const [ BudgetState, setBudget ] = useState(fakeBudget);
  const [ errorMessage, setErrorMessage ] = useState("")

  useEffect(() => {
    async function fetchBudget() {
      try {
        const response = await fetchBudgetService(requestedId, params)
        const jsonData = await response.json()

        setBudget(jsonData.data)
        setLoading(false)

      } catch (error) {
        setLoading(null),
        setErrorMessage("failed Loading")
      }
    }

    fetchBudget()
  }, [])

  return [ BudgetState, isLoading, errorMessage ]
}