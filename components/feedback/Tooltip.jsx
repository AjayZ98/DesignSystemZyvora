import React from 'react';
export function Tooltip({label,children,side='top'}){
const [show,setShow]=React.useState(false);
const pos=side==='top'?{bottom:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)'}:side==='bottom'?{top:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)'}:side==='left'?{right:'calc(100% + 8px)',top:'50%',transform:'translateY(-50%)'}:{left:'calc(100% + 8px)',top:'50%',transform:'translateY(-50%)'};
return React.createElement('span',{style:{position:'relative',display:'inline-flex'},onMouseEnter:()=>setShow(true),onMouseLeave:()=>setShow(false)},
children,
show&&React.createElement('span',{style:{position:'absolute',...pos,background:'var(--ink-900)',color:'var(--text-on-inverse)',fontSize:'var(--text-caption)',padding:'6px 10px',borderRadius:'var(--radius-sm)',whiteSpace:'nowrap',boxShadow:'var(--shadow-md)',zIndex:10}},label));
}
