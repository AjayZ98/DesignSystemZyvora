import React from 'react';
export function Tag({children,onRemove,color='var(--purple-500)'}){
return React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:6,padding:'4px 8px 4px 10px',borderRadius:'var(--radius-sm)',fontSize:'var(--text-body-s)',fontWeight:500,background:'var(--surface-sunken)',color:'var(--text-heading)',border:'1px solid var(--border-default)'}},
React.createElement('span',{style:{width:6,height:6,borderRadius:'50%',background:color}}),
children,
onRemove&&React.createElement('button',{onClick:onRemove,'aria-label':'Remove',style:{border:'none',background:'none',cursor:'pointer',color:'var(--text-muted)',fontSize:14,lineHeight:1,padding:0}},'×'));
}
