import Link from "next/link";

export function UserPolicy() {
    return(
        <div className="flex fixed gap-5 underline text-sm bottom-0">
            <Link href={"terms"}><p>Terms</p></Link>
            
            <Link href={"privacy-policy"}><p>Privacy Policy</p></Link>
            
            <Link href={"cookie-policy"}><p>Cookie Policy</p></Link>
            
        </div>
    )
}