'use client'
import styles from "./topmenu.module.css"
import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function TopMenu() {
    const { data: session } = useSession();
    return (
        <div className={styles.menucontainer} style={{ justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                {session ? (
                    <Link href="#" onClick={(e) => { e.preventDefault(); signOut(); }}
                    className={styles.itemcontainer}>
                    Sign-Out
                    </Link>
                ) : (
                    <Link href="/api/auth/signin" className={styles.itemcontainer}>
                    Sign-In
                    </Link>
                )}
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <TopMenuItem title="Booking" pageRef="/booking" />
                <Image src={"/img/logo.png"} className={styles.logoimg} alt="logo"
                 width={0} height={0} sizes="100vh" style={{ height: '50px', width: 'auto' }} />
            </div>
        </div>
    );
}