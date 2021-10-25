import Link from 'next/link'
import Style from '../../styles/Home.module.css'
export default function List({eplen,teacher,img,module}){

    return <>
        <Link href={`/cours/${module}`}><li>
            <div 
            style={{
                background:`url(${img})`,
                backgroundSize:"cover",
                backgroundPosition:"center"
            }}
            className={Style.Listimg}></div>
            <div className={Style.ListContent}>
                <h2>{module}</h2>
                <p>
                    عدد الحلقات : <span>{eplen}</span>
                    <br/>
                    <br/>
                    الاستاذ : <span>{teacher}</span>
                </p>
            </div>
        </li></Link>
    </>

}