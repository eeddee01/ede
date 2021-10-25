import {useEffect} from 'react'
import { useRouter } from 'next/router'
import Swticher from '../../components/cours/switcher'
import Txt from '../../components/cours/txt'
import Vd from '../../components/cours/vd'
import Vdlist from '../../components/cours/vdlist'

export default function Learn(){   

    const router = useRouter()
    const {mod,type,ep,...huh} = router.query;


    useEffect(() => {
    if(mod){
        if(type && ep){
            if(huh){
                router.replace({
                    pathname:`/cours/${mod}`,
                    query:{ep,type}
                })
            }
            if(type !== "vd" && type !== "txt"){
                router.replace({
                    pathname:`/cours/${mod}`,
                    query:{ep,type:"txt"}
                })
            }
        }else if(ep) router.replace({
            pathname:`/cours/${mod}`,
            query:{ep,type:"txt"}
        })
        else router.replace({
            pathname:`/cours/${mod}`,
            query:{ep:0,type:"txt"}
        })
    }
    }, [mod,type,ep])
    
        

    
    

    

    return <>
        
        <Swticher mod={mod} ep={ep} type={type} />
        {type === "txt" && <Txt ep={ep} mod={mod} /> }
        {type === "vd" && <Vd ep={ep} mod={mod} /> }
        <Vdlist mod={mod} type={type} />

        
    </>
}