'use client'
import styles from "./card.module.css"
import { useRouter } from "next/navigation";

export default function Card({children,contentName}:{children:React.ReactNode,contentName:string}) {

    let router: ReturnType<typeof useRouter> | null = null
    try {
        router = useRouter()
    } catch (e) {
        router = null
    }

    function onCardSelected() {
        if (router) router.push(`/booking?venue=${encodeURIComponent(contentName)}`)
    }

    function onCardMouseAction(event: React.SyntheticEvent) {
        
        if(event.type === 'mouseover') {
            event.currentTarget.classList.remove('shadow-lg','bg-white')
            event.currentTarget.classList.add('shadow-2xl','bg-neutral-200')
        }
        else {
            event.currentTarget.classList.remove('shadow-2xl','bg-neutral-200')
            event.currentTarget.classList.add('shadow-lg','bg-white')
        }
    }

  return (
    <div className="w-1/5 h-75 rounded-lg shadow-lg bg-white"
    onClick={ ()=>onCardSelected() }
    onMouseOver={ (e)=>onCardMouseAction(e) }
    onMouseOut={ (e)=>onCardMouseAction(e) }>
        {children}
    </div>
  );
}