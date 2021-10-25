import Link from 'next/link'
import Style from '../../styles/Cours.module.css'
export default function Switcher({mod,ep,type}){

    return(
        <>
            <div className={Style.Swtichers}>
                <ul>
                    <Link href={`/cours/${mod}?ep=${ep}&type=txt`}><li className={type === "txt" ? Style.Ss : undefined}>نص</li></Link>
                    <Link href={`/cours/${mod}?ep=${ep}&type=vd`}><li className={type === "vd" ? Style.Ss : undefined}>فيديو</li></Link>
                </ul>
            </div>
        </>
    )

}