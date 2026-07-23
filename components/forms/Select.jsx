import React from 'react';
export function Select({label,value,onChange,options=[],disabled=false}){
const [focus,setFocus]=React.useState(false);
return React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:6,fontFamily:'var(--font-body)'}},
label&&React.createElement('label',{style:{fontSize:'var(--text-body-s)',fontWeight:600,color:'var(--text-heading)'}},label),
React.createElement('div',{style:{position:'relative'}},
React.createElement('select',{
value,disabled,onChange:e=>onChange&&onChange(e.target.value),
onFocus:()=>setFocus(true),onBlur:()=>setFocus(false),
style:{width:'100%',appearance:'none',padding:'10px 36px 10px 14px',fontSize:'var(--text-body)',fontFamily:'var(--font-body)',borderRadius:'var(--radius-md)',border:`1px solid ${focus?'var(--border-focus)':'var(--border-default)'}`,boxShadow:focus?'var(--shadow-glow)':'none',background:disabled?'var(--surface-sunken)':'var(--surface-card)',color:'var(--text-heading)',outline:'none'}
},options.map(o=>React.createElement('option',{key:o.value,value:o.value},o.label))),
React.createElement('span',{style:{position:'absolute',right:14,top:'50%',transform:'translateY(-50%)',pointerEvents:'none',color:'var(--text-muted)',fontSize:11}},'▾')));
}
