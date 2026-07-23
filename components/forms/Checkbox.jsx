import React from 'react';
export function Checkbox({label,checked=false,onChange,disabled=false}){
return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'default':'pointer',opacity:disabled?0.5:1,fontFamily:'var(--font-body)',fontSize:'var(--text-body)',color:'var(--text-heading)'}},
React.createElement('span',{onClick:()=>!disabled&&onChange&&onChange(!checked),style:{width:18,height:18,borderRadius:5,border:checked?'none':'1px solid var(--border-strong)',background:checked?'var(--brand-primary)':'var(--surface-card)',display:'inline-flex',alignItems:'center',justifyContent:'center',transition:'background var(--duration-fast)',flexShrink:0}},
checked&&React.createElement('svg',{width:11,height:11,viewBox:'0 0 24 24',fill:'none',stroke:'#fff',strokeWidth:3},React.createElement('path',{d:'M5 13l4 4L19 7'}))),
label);
}
