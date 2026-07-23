import React from 'react';
const sizes={sm:{padding:'8px 14px',fontSize:'var(--text-body-s)',gap:6},md:{padding:'11px 20px',fontSize:'var(--text-body)',gap:8},lg:{padding:'15px 28px',fontSize:'var(--text-body-l)',gap:10}};
const variants={
primary:{background:'var(--brand-primary)',color:'var(--text-on-brand)',border:'1px solid transparent'},
secondary:{background:'var(--surface-card)',color:'var(--text-heading)',border:'1px solid var(--border-strong)'},
ghost:{background:'transparent',color:'var(--text-heading)',border:'1px solid transparent'},
accent:{background:'var(--brand-accent)',color:'var(--text-on-brand)',border:'1px solid transparent'},
danger:{background:'var(--danger-500)',color:'#fff',border:'1px solid transparent'},
};
const hoverBg={primary:'var(--brand-primary-hover)',secondary:'var(--surface-sunken)',ghost:'var(--surface-sunken)',accent:'var(--brand-accent-hover)',danger:'var(--danger-500)'};
export function Button({variant='primary',size='md',icon,disabled=false,children,onClick,style,...rest}){
const s=sizes[size]||sizes.md,v=variants[variant]||variants.primary;
const [hover,setHover]=React.useState(false);
return React.createElement('button',{
onClick,disabled,
onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),
style:{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:s.gap,padding:s.padding,fontSize:s.fontSize,fontFamily:'var(--font-body)',fontWeight:600,letterSpacing:'var(--tracking-tight)',borderRadius:'var(--radius-md)',cursor:disabled?'default':'pointer',transition:'background var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard),opacity var(--duration-fast)',opacity:disabled?0.45:1,background:hover&&!disabled?hoverBg[variant]:v.background,color:v.color,border:v.border,transform:hover&&!disabled?'translateY(-1px)':'none',...style},
...rest
},icon,children!=null?React.createElement('span',null,children):null);
}
