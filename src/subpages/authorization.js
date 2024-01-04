
import { json, redirect } from 'react-router-dom'
import {Form, useNavigation, useActionData} from 'react-router-dom'
import './authorization.css'

export async function action ( {request} ) {

  const data = await request.formData()
  const password = data.get("password")
  const errors = {}

  if (password.length < 6) {
    errors.password = "Hasło musi zawierać min. 6 znaków"
  }

  if (Object.keys(errors).length) {
    return errors;
  }


  const authData = {
  userName: data.get('login'),
  password: password,
  }

  const response = await fetch('https://sisicakebackend.azurewebsites.net/Accounts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(authData)
  })

  if (response.status === 422 || response.status === 401) {
    errors.responses = 'Błędne dane logowania!'
    return errors
   }
   
  if (!response.ok) {
    throw json({ message: 'Could not authenticate user.' }, { status: 500 })
   }
  
   const resData = await response.json()
   const token = resData.accessToken
 
  sessionStorage.setItem('token', token)
  const expiration = new Date()
  console.log(expiration)
  expiration.setHours(expiration.getHours() +1)
  console.log(expiration)
  sessionStorage.setItem('expiration', expiration.toISOString())


  return redirect('/')
 }



export default function Authorization (){

  const errors = useActionData()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
  <div className='divLoginForm'>
    <Form method='post' className='loginForm'>
        <h2>Logowanie</h2>       
        <label htmlFor='login'>Podaj login</label>
        <input type='text' placeholder="login" id="login" name="login" required/>
        <label htmlFor='password'>Podaj hasło</label>
        <input type='password' placeholder="hasło" id="password" name="password"required/>
        {errors?.password && <span className='error'>{errors.password}</span>}
        <button type='submit' disabled={isSubmitting}>{isSubmitting? 'Logowanie...' : 'Zaloguj'}</button>
        {errors?.responses && <span className='error'>{errors.responses}</span>}
    </Form>
</div>)
}


