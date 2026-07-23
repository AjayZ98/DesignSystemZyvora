import React from 'react';
export function Card({padding='var(--space-6)',elevation='md',interactive=false,children,style,onClick}){
const [hover,setHover]=React.useState(false);
const shadow=elevation==='none'?'none':elevation==='lg'?'var(--shadow-lg)':elevation==='sm'?'var(--shadow-sm)':'var(--shadow-md)';
return React.createElement('div',{
onClick,
onMouseEnter:()=>interactive&&setHover(true),onMouseLeave:()=>interactive&&setHover(false),
style:{background:'var(--surface-card)',borderRadius:'var(--radius-lg)',border:'1px solid var(--border-default)',padding,boxShadow:hover?'var(--shadow-lg)':shadow,transform:hover?'translateY(-2px)':'none',transition:'box-shadow var(--duration-normal) var(--ease-out),transform var(--duration-normal) var(--ease-out)',cursor:interactive?'pointer':'default',...style}
},children);
}
