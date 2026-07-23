import React from 'react';
const tones={success:['var(--success-100)','var(--success-500)'],danger:['var(--danger-100)','var(--danger-500)'],info:['var(--info-100)','var(--info-500)'],neutral:['var(--ink-50)','var(--ink-600)']};
export function Toast({tone='info',title,message,onDismiss}){
const [bg,fg]=tones[tone]||tones.info;
return React.createElement('div',{style:{display:'flex',gap:12,alignItems:'flex-start',background:'var(--surface-card)',border:'1px solid var(--border-default)',borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-lg)',padding:'14px 16px',width:340,fontFamily:'var(--font-body)'}},
React.createElement('span',{style:{width:8,height:8,borderRadius:'50%',background:fg,marginTop:6,flexShrink:0}}),
React.createElement('div',{style:{flex:1}},
title&&React.createElement('div',{style:{fontWeight:700,color:'var(--text-heading)',fontSize:'var(--text-body-s)',marginBottom:2}},title),
React.createElement('div',{style:{color:'var(--text-body)',fontSize:'var(--text-body-s)'}},message)),
onDismiss&&React.createElement('button',{onClick:onDismiss,'aria-label':'Dismiss',style:{border:'none',background:'none',color:'var(--text-muted)',cursor:'pointer',fontSize:16}},'×'));
}
