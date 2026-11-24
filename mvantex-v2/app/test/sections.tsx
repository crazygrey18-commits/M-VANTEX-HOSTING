'use client';
import {useState} from 'react';
export const groups:Record<string,string[]>={Overview:['Dashboard'],Settings:['Settings','Configuration profiles','Config files','Startup settings','Cfx Marketplace'],Tools:['Console','File manager','Backups','Automated tasks','Resource manager','Framework installer','Database manager','txAdmin access'],Information:['Event log','Log files','CPU usage','Memory usage','Storage usage','Player activity','Network information'],Management:['Up-/Downgrade','Reinstall','Switch game','Monetize your server'],Support:['Help','Support tickets','Knowledge base']};
const specs:Record<string,[string,string[],string[]]>={
Settings:['Configure your server identity and gameplay preferences.',['Server name','Maximum players','Server description'],['Save settings']],
'Configuration profiles':['Manage reusable server configuration profiles.',['Profile name','Active profile'],['Create profile','Activate profile']],
'Config files':['Edit server configuration after connecting a node.',['server.cfg','permissions.cfg'],['Open configuration']],
'Startup settings':['Manage FXServer startup parameters.',['FXServer build','Startup command','Cfx.re key: stored securely on node'],['Save startup settings']],
Console:['View live output and send commands to your server.',['Console connection: disconnected'],['Send command','Clear console']],
'File manager':['Browse and manage server files.',['Path: /','No remote files available'],['Upload','New folder','Download']],
Backups:['Create and restore server snapshots.',['Backup name','Created at','Size','No remote backups available'],['Create backup','Restore backup']],
'Automated tasks':['Schedule server maintenance.',['Task name','Schedule (UTC)','Action'],['Create scheduled task']],
'Resource manager':['Manage installed FiveM resources.',['Resource name','State','Version'],['Start resource','Stop resource','Restart resource']],
'Framework installer':['Choose a framework for future installation.',['Qbox','ESX Legacy','QBCore','Standalone'],['Install framework']],
'Database manager':['Manage databases and access details.',['Hostname','Port','Database name','Username'],['Create database','Reset password']],
 'txAdmin access':['Manage FXServer using txAdmin.',['Panel address: not assigned','Connection: disconnected'],['Open txAdmin']],
'Event log':['Review server lifecycle and management events.',['Timestamp','Action','Actor','No remote events available'],['Refresh events']],
'Log files':['Inspect server and application logs.',['Log filename','Last modified','No remote logs available'],['Download log']],
'CPU usage':['Monitor processor utilization.',['CPU allocation: unverified','Current CPU: unavailable'],[]],
'Memory usage':['Monitor RAM allocation and consumption.',['RAM allocation: unverified','Current memory: unavailable'],[]],
'Storage usage':['Monitor disk consumption.',['Disk allocation: unverified','Used storage: unavailable'],[]],
'Player activity':['Review connected players and session activity.',['Online players: unavailable','Player name','Session duration'],[]],
'Network information':['Review networking and service endpoints.',['IP address','Game port','Query port','RCON port','Protection: unverified'],[]],
'Up-/Downgrade':['Compare service allocations before changing plans.',['Current plan','New plan','Billing difference: unavailable'],['Confirm plan change']],
Reinstall:['Reinstalling may erase all server data. Back up first.',['Installation image','Backup status: unknown'],['Reinstall server']],
'Switch game':['Changing games may replace installed files.',['Current game','New game'],['Switch game']],
'Monetize your server':['Review official monetization requirements before selling in-game benefits.',['Provider setup: not connected'],[]],
'Support tickets':['Prepare a local support draft. No ticket is sent.',['Subject','Message'],[]],
Help:['Find answers and troubleshooting resources.',['Server offline: verify hosting provider and startup configuration','Never share registration keys or passwords'],[]],
'Knowledge base':['Getting started with your hosting service.',['1. Connect an authorized hosting node','2. Install FXServer','3. Configure your own Cfx.re registration key','4. Configure txAdmin and test connectivity'],[]],
'Cfx Marketplace':['Browse official resources and manage entitlements through Cfx.re.',['Account linking: not configured'],[]]};
export default function Sections({tab,id}:{tab:string,id:string}){const [draft,setDraft]=useState('');const [notice,setNotice]=useState('');const [desc,fields,actions]=specs[tab]||['Server management',[],[]];return <><div className="control-panel"><h3>{tab}</h3><p>{desc}</p><p className="eyebrow">{tab==='Support tickets'?'LOCAL DRAFT ONLY':'NO LIVE HOSTING CONNECTION'}</p>{fields.map(f=><div className="detail-line" key={f}>{f}</div>)}{['CPU usage','Memory usage','Storage usage','Player activity'].includes(tab)&&<div className="empty-graph">No telemetry</div>}{tab==='Console'&&<pre className="terminal">Disconnected — awaiting authorized node.</pre>}<div className="actions">{actions.map(a=><button key={a} disabled>{a}</button>)}</div>{tab==='Cfx Marketplace'&&<a href="https://portal.cfx.re/" target="_blank" rel="noreferrer">Open official Cfx.re Portal ↗</a>}{tab==='Monetize your server'&&<a href="https://www.tebex.io/" target="_blank" rel="noreferrer">Visit Tebex ↗</a>}{tab==='Support tickets'&&<><textarea value={draft} onChange={e=>setDraft(e.target.value)} placeholder="Subject and message (no secrets)"/><button onClick={()=>{try{localStorage.setItem('vantex-draft-'+id,draft);setNotice('Draft saved locally. Not sent.')}catch{setNotice('Could not save draft.')}}}>Save local draft</button><button onClick={()=>{try{setDraft(localStorage.getItem('vantex-draft-'+id)||'');setNotice('Local draft loaded.')}catch{setNotice('Could not load draft.')}}}>Load draft</button><p role="status">{notice}</p></>}</div><div className="control-panel"><h3>Connection requirements</h3><p>Remote operations remain disabled until a secure authenticated provider integration is configured. No server data is fabricated.</p></div></>}
