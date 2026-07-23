import React from 'react';
const sizes={sm:32,md:38,lg:44};
export function IconButton({icon,size='md',variant='ghost',disabled=false,onClick,'aria-label':ariaLabel}){
const [hover,setHover]=React.useState(false);
const d=sizes[size]||sizes.md;
const bg=variant==='filled'?(hover?'var(--brand-primary-hover)':'var(--brand-primary)'):(hover?'var(--surface-sunken)':'transparent');
const color=variant==='filled'?'var(--text-on-brand)':'var(--text-heading)';
return React.createElement('button',{
onClick,disabled,'aria-label':ariaLabel,
onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),
style:{width:d,height:d,display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:'var(--radius-md)',border:variant==='outline'?'1px solid var(--border-strong)':'1px solid transparent',background:bg,color,cursor:disabled?'default':'pointer',opacity:disabled?0.4:1,transition:'background var(--duration-fast) var(--ease-standard)'}
},icon);
}
