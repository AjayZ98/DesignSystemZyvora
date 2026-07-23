import React from 'react';
export function Input({label,placeholder,value,onChange,error,helpText,disabled=false,type='text'}){
const [focus,setFocus]=React.useState(false);
return React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:6,fontFamily:'var(--font-body)'}},
label&&React.createElement('label',{style:{fontSize:'var(--text-body-s)',fontWeight:600,color:'var(--text-heading)'}},label),
React.createElement('input',{
type,value,placeholder,disabled,
onChange:e=>onChange&&onChange(e.target.value),
onFocus:()=>setFocus(true),onBlur:()=>setFocus(false),
style:{padding:'10px 14px',fontSize:'var(--text-body)',fontFamily:'var(--font-body)',borderRadius:'var(--radius-md)',border:`1px solid ${error?'var(--danger-500)':focus?'var(--border-focus)':'var(--border-default)'}`,boxShadow:focus?'var(--shadow-glow)':'none',background:disabled?'var(--surface-sunken)':'var(--surface-card)',color:'var(--text-heading)',outline:'none',transition:'box-shadow var(--duration-fast),border-color var(--duration-fast)'}
}),
(error||helpText)&&React.createElement('span',{style:{fontSize:'var(--text-caption)',color:error?'var(--danger-500)':'var(--text-muted)'}},error||helpText));
}
