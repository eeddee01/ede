import Style from '../../../styles/Txt.module.css'
import {useQuery,gql} from '@apollo/client'
import {useRouter} from 'next/router'
const GET_TXT = gql`

query($mod: String!, $ep: String!){
  Ep(mod: $mod, ep: $ep) {
    title

    txts {
        id
        txt
        type
    }
    
  }
}

`

export default function Txt({ep,mod}){

    const {loading,error,data} = useQuery(GET_TXT,{variables:{mod,ep}})
    const router = useRouter()
    if(error) router.push('/')

    return <>
            <section className={Style.Txt}>
                <ul dir="rtl">
                    { data ?
                    <>
                    <h1>{data.Ep.title}</h1>
                    {
                        data.Ep.txts.map(e=>{
                            return <li key={e.id}>
                            {e.type === "title"
                                ? <h2 key={e.id}>{e.txt}</h2>
                            :
                                <p key={e.id}>{e.txt.split('---').map(e=>(<>
                                    {e}
                                    <br key={e.id}/>
                                </>))}</p>
                            }
                            </li>
                        })
                    }
                    </>
                    : loading && <h1>loading...</h1>

                    }
                </ul>
            </section>
    </>

}