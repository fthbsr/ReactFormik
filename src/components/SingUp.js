import { useFormik} from 'formik';
import validationSchema from './validasyon';
import './/SignUp.css';


function SignUp() {
  const { handleSubmit, handleChange, values , errors ,touched , handleBlur} = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
    validationSchema,
  });


  return( 
    <div>
   <h1>Kayit Ekrani</h1>
      
          
      <form onSubmit={handleSubmit}>
      <label>Mailinizi Giriniz</label>
      <input  name='email' value={values.email} onChange={handleChange}  onBlur={handleBlur}/>

      {errors.email && touched.email && <p className='error'>{errors.email}</p>}
      <br/>
      
      
      <label >Parolanizi Giriniz</label>
      <input  name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
      {errors.password && touched.password  && <p className='error'>{errors.password}</p>}
      
    
      <br/>
      <label >Parolanizi Dogrulayiniz</label>
      <input  name='confirmPassword' value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
      {errors.confirmPassword && touched.confirmPassword  && <p className='error' >{errors.confirmPassword}</p>}

    
      <br></br>
      <button type='submit'>Kayit Ol</button>
      
    </form>
    </div>)
}

export default SignUp;
