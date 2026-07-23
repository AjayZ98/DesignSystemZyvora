const {Button,Badge,Card,Tag,Tabs}=window.ZyvoraDesignSystem_548474;
const Icon=({name,size=20})=>React.createElement('i',{'data-lucide':name,style:{width:size,height:size,display:'block'}});

function Header(){
const [open,setOpen]=React.useState(false);
return React.createElement('header',{style:{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'20px 56px',position:'sticky',top:0,background:'var(--surface-app)',zIndex:50,borderBottom:'1px solid var(--border-default)'}},
React.createElement('img',{src:'../../assets/logo.png',style:{height:26}}),
React.createElement('nav',{style:{display:'flex',gap:32,fontSize:'var(--text-body-s)',fontWeight:600,color:'var(--text-body)'}},
['Product','Solutions','Pricing','Docs'].map(l=>React.createElement('a',{key:l,href:'#',style:{color:'inherit',textDecoration:'none'}},l))),
React.createElement('div',{style:{display:'flex',gap:12}},
React.createElement(Button,{variant:'ghost',size:'sm'},'Sign in'),
React.createElement(Button,{variant:'primary',size:'sm'},'Start free')));
}

function Hero(){
return React.createElement('section',{style:{padding:'96px 56px 80px',textAlign:'center',maxWidth:920,margin:'0 auto'}},
React.createElement(Badge,{tone:'purple'},'Now with real-time attribution'),
React.createElement('h1',{style:{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'var(--text-display-xl)',letterSpacing:'var(--tracking-tighter)',lineHeight:'var(--leading-tight)',color:'var(--text-heading)',margin:'20px 0'}},'Marketing that moves at your speed.'),
React.createElement('p',{style:{fontSize:'var(--text-body-l)',color:'var(--text-body)',maxWidth:560,margin:'0 auto 32px',lineHeight:'var(--leading-relaxed)'}},'Zyvora unifies campaigns, analytics, and automation into one bold workspace — built for teams who ship fast and never guess.'),
React.createElement('div',{style:{display:'flex',gap:14,justifyContent:'center'}},
React.createElement(Button,{size:'lg'},'Start free trial'),
React.createElement(Button,{size:'lg',variant:'secondary',icon:React.createElement(Icon,{name:'play',size:16})},'Watch demo')));
}

function LogoStrip(){
return React.createElement('div',{style:{padding:'0 56px 80px',display:'flex',gap:48,justifyContent:'center',alignItems:'center',opacity:.55,filter:'grayscale(1)',flexWrap:'wrap'}},
['Northwind','Halcyon','Fenwick','Orbitly','Marrow'].map(n=>React.createElement('span',{key:n,style:{fontFamily:'var(--font-display)',fontWeight:700,fontSize:22,color:'var(--ink-500)'}},n)));
}

const FEATURES=[
{icon:'zap',title:'Automate the busywork',body:'Trigger campaigns from real user behavior — no spreadsheets, no waiting on engineering.'},
{icon:'bar-chart-3',title:'See what actually works',body:'Attribution across every channel, updated live, down to the dollar.'},
{icon:'users',title:'Built for teams',body:'Shared workspaces, approvals, and comments — everyone stays in sync.'},
{icon:'shield-check',title:'Enterprise-grade control',body:'SSO, audit logs, and granular permissions from day one.'},
];
function Features(){
return React.createElement('section',{style:{padding:'0 56px 96px',maxWidth:1180,margin:'0 auto'}},
React.createElement('div',{style:{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:24}},
FEATURES.map(f=>React.createElement(Card,{key:f.title,elevation:'sm',interactive:true},
React.createElement('div',{style:{width:40,height:40,borderRadius:'var(--radius-md)',background:'var(--purple-100)',color:'var(--purple-600)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:16}},React.createElement(Icon,{name:f.icon,size:20})),
React.createElement('h3',{style:{fontFamily:'var(--font-display)',fontSize:'var(--text-h4)',margin:'0 0 8px',color:'var(--text-heading)'}},f.title),
React.createElement('p',{style:{fontSize:'var(--text-body-s)',color:'var(--text-body)',lineHeight:'var(--leading-normal)',margin:0}},f.body)))));
}

function Testimonial(){
return React.createElement('section',{style:{background:'var(--ink-900)',padding:'88px 56px',textAlign:'center'}},
React.createElement('p',{style:{fontFamily:'var(--font-display)',fontWeight:600,fontSize:'var(--text-h1)',color:'var(--cream-50)',maxWidth:760,margin:'0 auto 24px',lineHeight:'var(--leading-snug)',letterSpacing:'var(--tracking-tight)'}},'"We replaced four tools with Zyvora and cut campaign turnaround from weeks to days."'),
React.createElement('div',{style:{color:'var(--ink-200)',fontSize:'var(--text-body-s)',fontWeight:600}},'Priya Ramesh, VP Growth at Halcyon'));
}

function Pricing(){
const [annual,setAnnual]=React.useState(true);
const tiers=[
{name:'Starter',price:annual?29:39,desc:'For solo marketers getting started.',cta:'Start free',features:['1 workspace','3 campaigns','Basic analytics']},
{name:'Growth',price:annual?89:109,desc:'For teams scaling paid + lifecycle.',cta:'Start free trial',features:['5 workspaces','Unlimited campaigns','Full attribution','Slack alerts'],highlight:true},
{name:'Enterprise',price:null,desc:'For orgs that need control at scale.',cta:'Talk to sales',features:['SSO & SCIM','Audit logs','Dedicated CSM']},
];
return React.createElement('section',{style:{padding:'96px 56px',maxWidth:1080,margin:'0 auto',textAlign:'center'}},
React.createElement('h2',{style:{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'var(--text-display-m)',color:'var(--text-heading)',letterSpacing:'var(--tracking-tight)',margin:'0 0 12px'}},'Pricing that scales with you'),
React.createElement('div',{style:{display:'inline-flex',alignItems:'center',gap:10,margin:'20px 0 44px',background:'var(--surface-card)',border:'1px solid var(--border-default)',borderRadius:'var(--radius-full)',padding:4}},
[['Monthly',false],['Annual — save 20%',true]].map(([label,val])=>React.createElement('button',{key:label,onClick:()=>setAnnual(val),style:{border:'none',cursor:'pointer',padding:'8px 18px',borderRadius:'var(--radius-full)',fontSize:'var(--text-body-s)',fontWeight:700,background:annual===val?'var(--brand-primary)':'transparent',color:annual===val?'#fff':'var(--text-body)'}},label))),
React.createElement('div',{style:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,textAlign:'left'}},
tiers.map(t=>React.createElement(Card,{key:t.name,elevation:t.highlight?'lg':'sm',style:t.highlight?{border:'2px solid var(--brand-primary)'}:{}},
React.createElement('div',{style:{fontWeight:700,color:'var(--text-heading)',marginBottom:4}},t.name),
React.createElement('div',{style:{fontSize:'var(--text-body-s)',color:'var(--text-muted)',marginBottom:20}},t.desc),
React.createElement('div',{style:{fontFamily:'var(--font-display)',fontSize:'var(--text-h1)',fontWeight:800,color:'var(--text-heading)',marginBottom:20}},t.price?`$${t.price}`:'Custom',t.price&&React.createElement('span',{style:{fontSize:'var(--text-body-s)',fontWeight:500,color:'var(--text-muted)'}},'/mo')),
React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:10,marginBottom:24}},t.features.map(f=>React.createElement('div',{key:f,style:{display:'flex',gap:8,alignItems:'center',fontSize:'var(--text-body-s)',color:'var(--text-body)'}},React.createElement(Icon,{name:'check',size:15}),f))),
React.createElement(Button,{variant:t.highlight?'primary':'secondary',style:{width:'100%',justifyContent:'center'}},t.cta)))));
}

function Footer(){
return React.createElement('footer',{style:{padding:'56px',borderTop:'1px solid var(--border-default)',display:'flex',justifyContent:'space-between',alignItems:'center'}},
React.createElement('img',{src:'../../assets/logo.png',style:{height:20,opacity:.8}}),
React.createElement('div',{style:{fontSize:'var(--text-caption)',color:'var(--text-muted)'}},'© 2026 Zyvora, Inc.'));
}

function MarketingSite(){
React.useEffect(()=>{window.lucide&&window.lucide.createIcons();},[]);
return React.createElement('div',null,React.createElement(Header),React.createElement(Hero),React.createElement(LogoStrip),React.createElement(Features),React.createElement(Testimonial),React.createElement(Pricing),React.createElement(Footer));
}
window.MarketingSite=MarketingSite;
