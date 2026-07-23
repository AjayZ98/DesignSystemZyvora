import React from 'react';
export function Switch({checked=false,onChange,disabled=false,label}){
return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'default':'pointer',opacity:disabled?0.5:1,fontFamily:'var(--font-body)',fontSize:'var(--text-body)',color:'var(--text-heading)'}},
React.createElement('span',{onClick:()=>!disabled&&onChange&&onChange(!checked),style:{width:38,height:22,borderRadius:'var(--radius-full)',background:checked?'var(--brand-primary)':'var(--ink-100)',position:'relative',transition:'background var(--duration-normal) var(--ease-standard)',flexShrink:0}},
React.createElement('span',{style:{position:'absolute',top:2,left:checked?18:2,width:18,height:18,borderRadius:'50%',background:'#fff',boxShadow:'var(--shadow-sm)',transition:'left var(--duration-normal) var(--ease-out)'}})),
label);
}
