import * as yup   from "yup";

const validasyon = yup.object().shape({
    email: yup.string().email('email formatinda giriniz').required('Bu alan zorunludur'),
    password: yup.string().min(5 , 'girdiginiz deger minimum 5 karakterli olmalidir').required('Bu alan zorunludur'),
    confirmPassword: yup.string().oneOf([yup.ref('password')],'Dogrulama Hatasi').required('Bu alan zorunludur'),
});

   

export default validasyon;