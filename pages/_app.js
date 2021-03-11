import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "../styles/style.css"
import "../styles/style1.css"
import "../styles/style2.css"
import {CookiesProvider} from "react-cookie"
import axios from 'axios';

// axios = axios.create({
//   baseURL:"http://attendceappuy1.herokuapp.com/api/",
//   headers: {
//     'Access-Control-Allow-Origin':'*'
//   }
// })

axios.defaults.baseURL = "https://attendceappuy1.herokuapp.com/api/"
axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://192.168.225.201:8000/api/"

export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <Component {...pageProps} />
        <CookiesProvider/>
      </>
    )
}
