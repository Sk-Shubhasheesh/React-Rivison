import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmit(data){
    await new Promise((reslove)=>setInterval(reslove,5000));
    console.log("Submitting the form", data);
    
  }

  return (
   <form onSubmit={handleSubmit(onSubmit)}>


    <div>
      <label>First Name: </label>
      <input className={errors.firstName ? 'input-error':""}
       {...register('firstName', { required: true, minLength:{value:3, message:'Min Length atlest 3'} })} />
      {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
    </div>
    <br />

    <div>
      <label>Middle Name: </label>
      <input {...register('middleName')} />
    </div>
    <br />

    <div>
      <label>Last Name: </label>
      <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
    </div>
    <br />
   <input type="submit" disabled={isSubmitting}
   value={isSubmitting?"Submitting":"Submit"}
   />



   </form>
  )
}

export default App
