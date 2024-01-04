export function getTokenDuration(){
  const storedExpirationDate = sessionStorage.getItem('expiration')
  const expirationDate = new Date(storedExpirationDate)
  const now = new Date()
  const duration = expirationDate.getTime()-now.getTime()
  return duration
}

export function getAuthToken() {
    const token = sessionStorage.getItem('token')
    // const storedExpirationDate = sessionStorage.getItem('expiration')

    if(!token){
      return null
    }
    
    const tokenDuration = getTokenDuration()
    
    if (tokenDuration<0){
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('expiration')
    }

    return token;
  }