import {useRef} from 'react'
import Style from '../../../styles/Vd.module.css'
import {useQuery,gql} from '@apollo/client'
import {useRouter} from 'next/router'

const GET_VD = gql`

    query($mod: String!, $ep: String!){
        Cours(mod:$mod){
            teacher
        }
        Ep(mod: $mod, ep: $ep) {
            title
            vd
        }
    }
`

export default function Vd({ep,mod}){
    const {loading,error,data} = useQuery(GET_VD,{variables:{mod,ep}})
    const router = useRouter()
    if(error) router.push('/')
    const loadingRef = useRef()
    return <>
        <section className={Style.Vd}>
            {
                data ?
                <>
                    <div className={Style.Ivd}>
                        <iframe 
                        onLoadCapture={()=>loadingRef.current.style.display = "none"}
                        src={data.Ep.vd} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" onLoad={()=>console.log('im loading...')} allowFullScreen/>
                        <div ref={loadingRef} className={Style.logo}><h1>loading...</h1></div>
                    </div>
                    <Vdinfo title={data.Ep.title} teacher={data.Cours.teacher} ep={ep} /> 
                </>
                : loading && <h1>loading...</h1>

            }
        </section>
    </>

}

function Vdinfo({title,teacher,ep}){

    return <>
        <div className={Style.Ivdinfo}>
            <h1>{title}</h1>
            <p dir="rtl">
                الاستاذ : <span>{teacher}</span>
                <br/>
                الحلقة : <span>{parseInt(ep) + 1}</span>
            </p>
        </div>
    </>

}