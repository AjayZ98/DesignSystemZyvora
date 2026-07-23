import React from 'react';
export function Radio({label,checked=false,onChange,disabled=false}){
return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'default':'pointer',opacity:disabled?0.5:1,fontFamily:'var(--font-body)',fontSize:'var(--text-body)',color:'var(--text-heading)'}},
React.createElement('span',{onClick:()=>!disabled&&onChange&&onChange(),style:{width:18,height:18,borderRadius:'50%',border:checked?'5px solid var(--brand-primary)':'1px solid var(--border-strong)',background:'var(--surface-card)',flexShrink:0,transition:'border var(--duration-fast)'}}),
label);
}
