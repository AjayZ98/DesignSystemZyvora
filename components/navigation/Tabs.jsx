import React from 'react';
export function Tabs({tabs=[],active,onChange}){
return React.createElement('div',{style:{display:'flex',gap:24,borderBottom:'1px solid var(--border-default)',fontFamily:'var(--font-body)'}},
tabs.map(t=>React.createElement('button',{key:t.value,onClick:()=>onChange&&onChange(t.value),
style:{background:'none',border:'none',padding:'10px 2px',fontSize:'var(--text-body)',fontWeight:600,cursor:'pointer',color:active===t.value?'var(--text-heading)':'var(--text-muted)',borderBottom:active===t.value?'2px solid var(--brand-primary)':'2px solid transparent',marginBottom:-1,transition:'color var(--duration-fast)'}
},t.label)));
}
