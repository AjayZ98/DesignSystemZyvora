const {Button,IconButton,Card,Badge,Tag,Tabs,Input,Select,Switch,Dialog}=window.ZyvoraDesignSystem_548474;
const Icon=({name,size=18})=>React.createElement('i',{'data-lucide':name,style:{width:size,height:size,display:'block'}});
const NAV=[{k:'overview',label:'Overview',icon:'layout-dashboard'},{k:'campaigns',label:'Campaigns',icon:'megaphone'},{k:'audiences',label:'Audiences',icon:'users'},{k:'settings',label:'Settings',icon:'settings'}];

function Sidebar({view,setView}){
return React.createElement('aside',{style:{width:232,background:'var(--ink-900)',color:'var(--cream-50)',display:'flex',flexDirection:'column',padding:'20px 14px',flexShrink:0}},
React.createElement('img',{src:'../../assets/logo.png',style:{height:20,filter:'brightness(0) invert(1)',margin:'6px 10px 28px'}}),
NAV.map(n=>React.createElement('button',{key:n.k,onClick:()=>setView(n.k),style:{display:'flex',alignItems:'center',gap:12,padding:'10px 12px',borderRadius:'var(--radius-md)',border:'none',background:view===n.k?'var(--purple-700)':'transparent',color:view===n.k?'#fff':'var(--ink-100)',fontSize:'var(--text-body-s)',fontWeight:600,cursor:'pointer',textAlign:'left',marginBottom:2}},React.createElement(Icon,{name:n.icon,size:16}),n.label)),
React.createElement('div',{style:{marginTop:'auto',display:'flex',alignItems:'center',gap:10,padding:12,borderRadius:'var(--radius-md)',background:'var(--ink-800)'}},
React.createElement('div',{style:{width:30,height:30,borderRadius:'50%',background:'var(--clay-500)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:12}},'PR'),
React.createElement('div',{style:{fontSize:'var(--text-caption)'}},React.createElement('div',{style:{fontWeight:700}},'Priya Ramesh'),React.createElement('div',{style:{color:'var(--ink-300)'}},'Halcyon Co.'))));
}

function Topbar({title,action}){
return React.createElement('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'24px 32px',borderBottom:'1px solid var(--border-default)',background:'var(--surface-app)'}},
React.createElement('h1',{style:{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'var(--text-h1)',letterSpacing:'var(--tracking-tight)',color:'var(--text-heading)',margin:0}},title),
action);
}

const STATS=[{label:'Active campaigns',value:'12',delta:'+3'},{label:'Reach this month',value:'482K',delta:'+18%'},{label:'Conversion rate',value:'4.6%',delta:'+0.4pt'},{label:'Spend',value:'$18.2K',delta:'-6%'}];
function Overview(){
return React.createElement('div',{style:{padding:32,display:'flex',flexDirection:'column',gap:24}},
React.createElement('div',{style:{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}},
STATS.map(s=>React.createElement(Card,{key:s.label,elevation:'sm'},
React.createElement('div',{style:{fontSize:'var(--text-caption)',color:'var(--text-muted)',fontWeight:700,textTransform:'uppercase',letterSpacing:'var(--tracking-wide)',marginBottom:10}},s.label),
React.createElement('div',{style:{display:'flex',alignItems:'baseline',gap:8}},
React.createElement('div',{style:{fontFamily:'var(--font-display)',fontSize:'var(--text-h2)',fontWeight:800,color:'var(--text-heading)'}},s.value),
React.createElement(Badge,{tone:s.delta.startsWith('-')?'danger':'success'},s.delta))))),
React.createElement(Card,{elevation:'sm'},
React.createElement('div',{style:{display:'flex',justifyContent:'space-between',marginBottom:20}},
React.createElement('div',{style:{fontWeight:700,color:'var(--text-heading)'}},'Reach over time'),
React.createElement(Tag,null,'Last 30 days')),
React.createElement('div',{style:{display:'flex',alignItems:'flex-end',gap:8,height:140}},
[38,52,44,60,72,66,80,70,90,84,96,100].map((h,i)=>React.createElement('div',{key:i,style:{flex:1,height:`${h}%`,background:'var(--purple-300)',borderRadius:'4px 4px 0 0'}})))));
}

const CAMPAIGNS=[
{name:'Summer launch',status:'Live',channel:'Email + Paid',reach:'128K',tone:'success'},
{name:'Retargeting — cart drop',status:'Live',channel:'Paid social',reach:'64K',tone:'success'},
{name:'Q3 webinar series',status:'Scheduled',channel:'Email',reach:'—',tone:'warning'},
{name:'Referral program',status:'Draft',channel:'In-app',reach:'—',tone:'neutral'},
];
function Campaigns({onNew}){
return React.createElement('div',{style:{padding:32}},
React.createElement('div',{style:{display:'flex',justifyContent:'flex-end',marginBottom:16}},
React.createElement(Button,{icon:React.createElement(Icon,{name:'plus',size:16}),onClick:onNew},'New campaign')),
React.createElement(Card,{elevation:'sm',padding:'0'},
React.createElement('table',{style:{width:'100%',borderCollapse:'collapse'}},
React.createElement('thead',null,React.createElement('tr',null,['Campaign','Status','Channel','Reach',''].map(h=>React.createElement('th',{key:h,style:{textAlign:'left',padding:'14px 20px',fontSize:'var(--text-caption)',color:'var(--text-muted)',fontWeight:700,textTransform:'uppercase',letterSpacing:'var(--tracking-wide)',borderBottom:'1px solid var(--border-default)'}},h)))),
React.createElement('tbody',null,CAMPAIGNS.map(c=>React.createElement('tr',{key:c.name},
React.createElement('td',{style:{padding:'16px 20px',fontWeight:600,color:'var(--text-heading)',borderBottom:'1px solid var(--border-default)'}},c.name),
React.createElement('td',{style:{padding:'16px 20px',borderBottom:'1px solid var(--border-default)'}},React.createElement(Badge,{tone:c.tone},c.status)),
React.createElement('td',{style:{padding:'16px 20px',color:'var(--text-body)',fontSize:'var(--text-body-s)',borderBottom:'1px solid var(--border-default)'}},c.channel),
React.createElement('td',{style:{padding:'16px 20px',color:'var(--text-body)',fontSize:'var(--text-body-s)',borderBottom:'1px solid var(--border-default)'}},c.reach),
React.createElement('td',{style:{padding:'16px 20px',borderBottom:'1px solid var(--border-default)',textAlign:'right'}},React.createElement(IconButton,{icon:React.createElement(Icon,{name:'more-horizontal',size:16}),'aria-label':'More'}))))))));
}

function Audiences(){
const segs=[{name:'High-intent visitors',size:'34,200',tone:'purple'},{name:'Lapsed customers',size:'11,940',tone:'neutral'},{name:'Newsletter subscribers',size:'82,410',tone:'purple'}];
return React.createElement('div',{style:{padding:32,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}},
segs.map(s=>React.createElement(Card,{key:s.name,elevation:'sm',interactive:true},
React.createElement(Badge,{tone:s.tone},'Segment'),
React.createElement('div',{style:{fontWeight:700,fontSize:'var(--text-body-l)',color:'var(--text-heading)',margin:'14px 0 4px'}},s.name),
React.createElement('div',{style:{color:'var(--text-muted)',fontSize:'var(--text-body-s)'}},s.size,' contacts'))));
}

function Settings(){
const [tab,setTab]=React.useState('general');
const [notif,setNotif]=React.useState(true);
const [weekly,setWeekly]=React.useState(false);
return React.createElement('div',{style:{padding:32,maxWidth:640}},
React.createElement(Tabs,{active:tab,onChange:setTab,tabs:[{value:'general',label:'General'},{value:'notifications',label:'Notifications'},{value:'billing',label:'Billing'}]}),
React.createElement('div',{style:{marginTop:28,display:'flex',flexDirection:'column',gap:20}},
tab==='general'&&React.createElement(React.Fragment,null,
React.createElement(Input,{label:'Workspace name',value:'Halcyon Co.'}),
React.createElement(Select,{label:'Timezone',value:'pst',options:[{value:'pst',label:'Pacific Time'},{value:'est',label:'Eastern Time'}]})),
tab==='notifications'&&React.createElement(React.Fragment,null,
React.createElement(Switch,{label:'Email notifications',checked:notif,onChange:setNotif}),
React.createElement(Switch,{label:'Weekly performance digest',checked:weekly,onChange:setWeekly})),
tab==='billing'&&React.createElement(Card,{elevation:'sm'},React.createElement('div',{style:{fontWeight:700,marginBottom:6}},'Growth plan — $89/mo'),React.createElement('div',{style:{color:'var(--text-muted)',fontSize:'var(--text-body-s)'}},'Renews Aug 12, 2026'))));
}

function Dashboard(){
const [view,setView]=React.useState('overview');
const [newOpen,setNewOpen]=React.useState(false);
React.useEffect(()=>{window.lucide&&window.lucide.createIcons();},[view]);
const titles={overview:'Overview',campaigns:'Campaigns',audiences:'Audiences',settings:'Settings'};
return React.createElement('div',{style:{display:'flex',minHeight:'100vh'}},
React.createElement(Sidebar,{view,setView}),
React.createElement('div',{style:{flex:1,display:'flex',flexDirection:'column'}},
React.createElement(Topbar,{title:titles[view]}),
view==='overview'&&React.createElement(Overview),
view==='campaigns'&&React.createElement(Campaigns,{onNew:()=>setNewOpen(true)}),
view==='audiences'&&React.createElement(Audiences),
view==='settings'&&React.createElement(Settings)),
React.createElement(Dialog,{open:newOpen,title:'New campaign',onClose:()=>setNewOpen(false),footer:React.createElement(React.Fragment,null,React.createElement(Button,{variant:'secondary',onClick:()=>setNewOpen(false)},'Cancel'),React.createElement(Button,{onClick:()=>setNewOpen(false)},'Create'))},
React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:16}},
React.createElement(Input,{label:'Campaign name',placeholder:'e.g. Fall promo'}),
React.createElement(Select,{label:'Channel',value:'email',options:[{value:'email',label:'Email'},{value:'paid',label:'Paid social'}]}))));
}
window.Dashboard=Dashboard;
