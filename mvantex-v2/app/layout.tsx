import './globals.css';
import Link from 'next/link';
import type {Metadata} from 'next';
export const metadata:Metadata={title:'VANTEX | Power. Performance. Reliability.',description:'Explore planned game server hosting solutions.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><header><Link className="brand" href="/"><img src="/logo.svg" width="44" height="40" alt=""/>VANTEX</Link><nav><Link href="/fivem">FiveM</Link><Link href="/vps">VPS</Link><Link href="/about">About</Link><Link href="/support">Support</Link><Link href="/login">Account</Link><Link href="/test">Test Lab</Link></nav></header><main>{children}</main><footer><strong>VANTEX</strong><p>POWER. PERFORMANCE. RELIABILITY.</p><nav>{['contact','faq','reviews','terms','privacy','refunds'].map(x=><Link key={x} href={'/'+x}>{x}</Link>)}</nav><small>Pre-launch website • Orders are not yet accepted.</small></footer></body></html>}
