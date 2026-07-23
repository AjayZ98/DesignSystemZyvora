import React from 'react';
export function Dialog({open,title,children,onClose,footer}){
if(!open)return null;
return React.createElement('div',{style:{position:'fixed',inset:0,background:'var(--surface-overlay)',backdropFilter:'blur(6px)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1000},onClick:onClose},
React.createElement('div',{onClick:e=>e.stopPropagation(),style:{background:'var(--surface-card)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-lg)',padding:'var(--space-8)',width:420,maxWidth:'90vw',fontFamily:'var(--font-body)'}},
React.createElement('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}},
React.createElement('h3',{style:{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-h3)',color:'var(--text-heading)'}},title),
React.createElement('button',{onClick:onClose,'aria-label':'Close',style:{border:'none',background:'none',fontSize:20,cursor:'pointer',color:'var(--text-muted)'}},'×')),
React.createElement('div',{style:{color:'var(--text-body)',fontSize:'var(--text-body)',marginBottom:footer?20:0}},children),
footer&&React.createElement('div',{style:{display:'flex',justifyContent:'flex-end',gap:10}},footer)));
}
