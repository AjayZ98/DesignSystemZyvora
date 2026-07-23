const {Button,IconButton,Card,Badge,Switch}=window.ZyvoraDesignSystem_548474;
const Icon=({name,size=20,color})=>React.createElement('i',{'data-lucide':name,style:{width:size,height:size,display:'block',color}});
const TABS=[{k:'home',icon:'layout-dashboard',label:'Home'},{k:'campaigns',icon:'megaphone',label:'Campaigns'},{k:'insights',icon:'bar-chart-3',label:'Insights'},{k:'profile',icon:'user',label:'Profile'}];

function StatusBar(){
return React.createElement('div',{style:{height:44,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 20px',fontSize:13,fontWeight:700,color:'var(--text-heading)'}},
React.createElement('span',null,'9:41'),React.createElement('span',null,'●●●  ᯓ  ▮'));
}
function TabBar({active,setActive}){
return React.createElement('div',{style:{position:'absolute',bottom:0,left:0,right:0,display:'flex',justifyContent:'space-around',padding:'10px 8px 26px',background:'var(--surface-card)',borderTop:'1px solid var(--border-default)'}},
TABS.map(t=>React.createElement('button',{key:t.k,onClick:()=>setActive(t.k),style:{border:'none',background:'none',display:'flex',flexDirection:'column',alignItems:'center',gap:4,cursor:'pointer',color:active===t.k?'var(--brand-primary)':'var(--text-muted)'}},
React.createElement(Icon,{name:t.icon,size:22}),React.createElement('span',{style:{fontSize:11,fontWeight:600}},t.label))));
}
function Header({title,onBack}){
return React.createElement('div',{style:{display:'flex',alignItems:'center',gap:12,padding:'8px 20px 16px'}},
onBack&&React.createElement(IconButton,{icon:React.createElement(Icon,{name:'chevron-left',size:18}),'aria-label':'Back',onClick:onBack}),
React.createElement('h1',{style:{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'var(--text-h2)',letterSpacing:'var(--tracking-tight)',color:'var(--text-heading)',margin:0}},title));
}

const FEED=[
{name:'Summer launch',status:'Live',tone:'success',stat:'128K reach · +12%'},
{name:'Retargeting — cart drop',status:'Live',tone:'success',stat:'64K reach · +6%'},
{name:'Q3 webinar series',status:'Scheduled',tone:'warning',stat:'Starts Aug 3'},
];
function Home({onOpen}){
return React.createElement('div',{style:{padding:'0 20px 100px',overflowY:'auto',height:'100%'}},
React.createElement(Header,{title:'Good morning, Priya'}),
React.createElement('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginBottom:20}},
React.createElement(Card,{elevation:'sm',padding:'16px'},React.createElement('div',{style:{fontSize:'var(--text-caption)',color:'var(--text-muted)',fontWeight:700}},'REACH'),React.createElement('div',{style:{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'var(--text-h2)',color:'var(--text-heading)'}},'482K')),
React.createElement(Card,{elevation:'sm',padding:'16px'},React.createElement('div',{style:{fontSize:'var(--text-caption)',color:'var(--text-muted)',fontWeight:700}},'CONV. RATE'),React.createElement('div',{style:{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'var(--text-h2)',color:'var(--text-heading)'}},'4.6%'))),
React.createElement('div',{style:{fontWeight:700,color:'var(--text-heading)',margin:'8px 0 10px'}},'Active campaigns'),
React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:10}},
FEED.map(f=>React.createElement(Card,{key:f.name,elevation:'sm',interactive:true,onClick:onOpen,padding:'14px'},
React.createElement('div',{style:{display:'flex',justifyContent:'space-between',marginBottom:6}},
React.createElement('div',{style:{fontWeight:700,color:'var(--text-heading)',fontSize:'var(--text-body-s)'}},f.name),
React.createElement(Badge,{tone:f.tone},f.status)),
React.createElement('div',{style:{fontSize:'var(--text-caption)',color:'var(--text-muted)'}},f.stat)))));
}

function CampaignDetail({onBack}){
return React.createElement('div',{style:{padding:'0 20px 100px',overflowY:'auto',height:'100%'}},
React.createElement(Header,{title:'Summer launch',onBack}),
React.createElement(Badge,{tone:'success'},'Live'),
React.createElement('div',{style:{display:'flex',alignItems:'flex-end',gap:6,height:110,margin:'20px 0'}},
[40,55,50,70,66,85,100].map((h,i)=>React.createElement('div',{key:i,style:{flex:1,height:`${h}%`,background:'var(--purple-300)',borderRadius:'4px 4px 0 0'}}))),
React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:12}},
[['Reach','128,204'],['Clicks','9,842'],['Conversions','412'],['Spend','$4,120']].map(([k,v])=>React.createElement('div',{key:k,style:{display:'flex',justifyContent:'space-between',padding:'12px 0',borderBottom:'1px solid var(--border-default)'}},React.createElement('span',{style:{color:'var(--text-muted)',fontSize:'var(--text-body-s)'}},k),React.createElement('span',{style:{fontWeight:700,color:'var(--text-heading)'}},v)))),
React.createElement(Button,{style:{width:'100%',justifyContent:'center',marginTop:20}},'Pause campaign'));
}

function Campaigns({onOpen}){
return React.createElement('div',{style:{padding:'0 20px 100px',overflowY:'auto',height:'100%'}},
React.createElement(Header,{title:'Campaigns'}),
React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:10}},
FEED.map(f=>React.createElement(Card,{key:f.name,elevation:'sm',interactive:true,onClick:onOpen,padding:'14px'},
React.createElement('div',{style:{fontWeight:700,color:'var(--text-heading)',fontSize:'var(--text-body-s)',marginBottom:4}},f.name),
React.createElement(Badge,{tone:f.tone},f.status)))));
}

function Insights(){
return React.createElement('div',{style:{padding:'0 20px 100px',overflowY:'auto',height:'100%'}},
React.createElement(Header,{title:'Insights'}),
React.createElement(Card,{elevation:'sm'},React.createElement('div',{style:{fontWeight:700,marginBottom:10}},'Top channel'),React.createElement('div',{style:{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'var(--text-h2)',color:'var(--brand-primary)'}},'Paid social'),React.createElement('div',{style:{color:'var(--text-muted)',fontSize:'var(--text-body-s)'}},'58% of conversions this month')));
}

function Profile(){
const [notif,setNotif]=React.useState(true);
return React.createElement('div',{style:{padding:'0 20px 100px',overflowY:'auto',height:'100%'}},
React.createElement(Header,{title:'Profile'}),
React.createElement('div',{style:{display:'flex',alignItems:'center',gap:14,marginBottom:24}},
React.createElement('div',{style:{width:56,height:56,borderRadius:'50%',background:'var(--clay-500)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:18}},'PR'),
React.createElement('div',null,React.createElement('div',{style:{fontWeight:700,color:'var(--text-heading)'}},'Priya Ramesh'),React.createElement('div',{style:{color:'var(--text-muted)',fontSize:'var(--text-body-s)'}},'Halcyon Co.'))),
React.createElement(Switch,{label:'Push notifications',checked:notif,onChange:setNotif}));
}

function MobileApp(){
const [tab,setTab]=React.useState('home');
const [detail,setDetail]=React.useState(false);
React.useEffect(()=>{window.lucide&&window.lucide.createIcons();},[tab,detail]);
return React.createElement('div',{style:{height:'100%',display:'flex',flexDirection:'column'}},
React.createElement(StatusBar),
React.createElement('div',{style:{flex:1,position:'relative',overflow:'hidden'}},
detail?React.createElement(CampaignDetail,{onBack:()=>setDetail(false)}):
tab==='home'?React.createElement(Home,{onOpen:()=>setDetail(true)}):
tab==='campaigns'?React.createElement(Campaigns,{onOpen:()=>setDetail(true)}):
tab==='insights'?React.createElement(Insights):React.createElement(Profile)),
!detail&&React.createElement(TabBar,{active:tab,setActive:setTab}));
}
window.MobileApp=MobileApp;
