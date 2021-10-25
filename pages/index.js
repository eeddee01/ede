import {useState,useEffect} from 'react'
import Style from '../styles/Home.module.css'
import List from '../components/home/list'
import {useQuery,gql} from '@apollo/client'


const GET_COURSES = gql`

  query{
    Courses {
      img
      module
      teacher
      eps{
        __typename
      }
    }
  }

`

export default function Home() {

  const {loading,error,data} = useQuery(GET_COURSES)
  const [result,setResult] = useState(data ? data.Courses : [])
  return (
    <>
      <section>
        <Srch data={data} setResult={setResult} />
        <ul dir="rtl" className={Style.List}>
          { data ?
           result.length > 0 ?
            result.map((e,i)=>
            <List key={i} eplen={e.eps.length} module={e.module} teacher={e.teacher} img={e.img} />  
            )
            :
            <h1>there is nothing</h1>
          :
          error ?
          <h1>somthing went wrong!</h1>
          :
          loading &&
          <h1>loading....</h1>
          }
        </ul>
      </section>
    </>
  )
}


function Srch({data,setResult}){
  const [val,setVal] = useState('')

  useEffect(() => {
    if(data){
      if(val){
      const c = data.Courses.filter(e=>e.module.indexOf(val) !== -1)
        if(c.length > 0){
          setResult(c)
        }
        else{
          setResult([])
        }
      }else{
        setResult(data.Courses)
      }
    }
  }, [val,data])

  return <form className={Style.Homeform}>
    <input 
    value={val}
    onChange={e=>setVal(e.target.value)}
    type="text" placeholder="ابحث عن درس..."/>
  </form>
}