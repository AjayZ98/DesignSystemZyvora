import React from 'react';
const tones={neutral:['var(--ink-50)','var(--ink-500)'],purple:['var(--purple-100)','var(--purple-700)'],success:['var(--success-100)','var(--success-500)'],warning:['var(--warning-100)','var(--warning-500)'],danger:['var(--danger-100)','var(--danger-500)']};
export function Badge({tone='neutral',children}){
const [bg,fg]=tones[tone]||tones.neutral;
return React.createElement('span',{style:{display:'inline-flex',alignItems:'center',padding:'3px 10px',borderRadius:'var(--radius-full)',fontSize:'var(--text-caption)',fontWeight:700,letterSpacing:'var(--tracking-wide)',textTransform:'uppercase',background:bg,color:fg}},children);
}
