import Style from '../../styles/Vdlist.module.css'
import Link from 'next/link'
import {useQuery,gql} from '@apollo/client'
const GET_LIST = gql`

query($mod: String!){
  Cours(mod: $mod) {
    eps {
      title
    }
  }

}
`
export default function Vdlist({mod,type}){

    const {loading,error,data} = useQuery(GET_LIST,{variables:{mod}})
    return <nav dir="rtl" className={Style.Ivdlist}>
        <ul>
            {
                data ? data.Cours.eps.map((e,i)=><Link key={i} href={`/cours/${mod}?ep=${i}&type=${type}`}><li>{e.title}</li></Link>)
                : loading && <li><h1>loading...</h1></li>
            }
        </ul>
    </nav>


}