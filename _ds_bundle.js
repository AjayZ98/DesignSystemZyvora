/* @ds-bundle: {"format":4,"namespace":"ZyvoraDesignSystem_548474","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"498e49cbf4b0","components/core/Button.jsx":"d45c64bb6154","components/core/Card.jsx":"6684ca3a2f8a","components/core/IconButton.jsx":"3892d3845efe","components/core/Tag.jsx":"fac93fdad1d4","components/feedback/Dialog.jsx":"d38af8ca0048","components/feedback/Toast.jsx":"cd1fd65206e0","components/feedback/Tooltip.jsx":"1f30147396bd","components/forms/Checkbox.jsx":"6a3851c89654","components/forms/Input.jsx":"c21738d55d38","components/forms/Radio.jsx":"40c8e98234ef","components/forms/Select.jsx":"55a08dff6724","components/forms/Switch.jsx":"ee754f224072","components/navigation/Tabs.jsx":"b77af1d7fa83","ui_kits/marketing/Marketing.jsx":"5e1aec6aae69","ui_kits/mobile/Mobile.jsx":"68b592ce24c2","ui_kits/webapp/Dashboard.jsx":"d20f42458e36"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ZyvoraDesignSystem_548474 = window.ZyvoraDesignSystem_548474 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const tones = {
  neutral: ['var(--ink-50)', 'var(--ink-500)'],
  purple: ['var(--purple-100)', 'var(--purple-700)'],
  success: ['var(--success-100)', 'var(--success-500)'],
  warning: ['var(--warning-100)', 'var(--warning-500)'],
  danger: ['var(--danger-100)', 'var(--danger-500)']
};
function Badge({
  tone = 'neutral',
  children
}) {
  const [bg, fg] = tones[tone] || tones.neutral;
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 10px',
      borderRadius: 'var(--radius-full)',
      fontSize: 'var(--text-caption)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      background: bg,
      color: fg
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizes = {
  sm: {
    padding: '8px 14px',
    fontSize: 'var(--text-body-s)',
    gap: 6
  },
  md: {
    padding: '11px 20px',
    fontSize: 'var(--text-body)',
    gap: 8
  },
  lg: {
    padding: '15px 28px',
    fontSize: 'var(--text-body-l)',
    gap: 10
  }
};
const variants = {
  primary: {
    background: 'var(--brand-primary)',
    color: 'var(--text-on-brand)',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-heading)',
    border: '1px solid var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-heading)',
    border: '1px solid transparent'
  },
  accent: {
    background: 'var(--brand-accent)',
    color: 'var(--text-on-brand)',
    border: '1px solid transparent'
  },
  danger: {
    background: 'var(--danger-500)',
    color: '#fff',
    border: '1px solid transparent'
  }
};
const hoverBg = {
  primary: 'var(--brand-primary-hover)',
  secondary: 'var(--surface-sunken)',
  ghost: 'var(--surface-sunken)',
  accent: 'var(--brand-accent-hover)',
  danger: 'var(--danger-500)'
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  disabled = false,
  children,
  onClick,
  style,
  ...rest
}) {
  const s = sizes[size] || sizes.md,
    v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  return React.createElement('button', {
    onClick,
    disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-tight)',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'default' : 'pointer',
      transition: 'background var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard),opacity var(--duration-fast)',
      opacity: disabled ? 0.45 : 1,
      background: hover && !disabled ? hoverBg[variant] : v.background,
      color: v.color,
      border: v.border,
      transform: hover && !disabled ? 'translateY(-1px)' : 'none',
      ...style
    },
    ...rest
  }, icon, children != null ? React.createElement('span', null, children) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  padding = 'var(--space-6)',
  elevation = 'md',
  interactive = false,
  children,
  style,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const shadow = elevation === 'none' ? 'none' : elevation === 'lg' ? 'var(--shadow-lg)' : elevation === 'sm' ? 'var(--shadow-sm)' : 'var(--shadow-md)';
  return React.createElement('div', {
    onClick,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-default)',
      padding,
      boxShadow: hover ? 'var(--shadow-lg)' : shadow,
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--duration-normal) var(--ease-out),transform var(--duration-normal) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const sizes = {
  sm: 32,
  md: 38,
  lg: 44
};
function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  disabled = false,
  onClick,
  'aria-label': ariaLabel
}) {
  const [hover, setHover] = React.useState(false);
  const d = sizes[size] || sizes.md;
  const bg = variant === 'filled' ? hover ? 'var(--brand-primary-hover)' : 'var(--brand-primary)' : hover ? 'var(--surface-sunken)' : 'transparent';
  const color = variant === 'filled' ? 'var(--text-on-brand)' : 'var(--text-heading)';
  return React.createElement('button', {
    onClick,
    disabled,
    'aria-label': ariaLabel,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      border: variant === 'outline' ? '1px solid var(--border-strong)' : '1px solid transparent',
      background: bg,
      color,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  color = 'var(--purple-500)'
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 8px 4px 10px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-body-s)',
      fontWeight: 500,
      background: 'var(--surface-sunken)',
      color: 'var(--text-heading)',
      border: '1px solid var(--border-default)'
    }
  }, React.createElement('span', {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: color
    }
  }), children, onRemove && React.createElement('button', {
    onClick: onRemove,
    'aria-label': 'Remove',
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 14,
      lineHeight: 1,
      padding: 0
    }
  }, '×'));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  footer
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--surface-overlay)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    },
    onClick: onClose
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-8)',
      width: 420,
      maxWidth: '90vw',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    }
  }, React.createElement('h3', {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      color: 'var(--text-heading)'
    }
  }, title), React.createElement('button', {
    onClick: onClose,
    'aria-label': 'Close',
    style: {
      border: 'none',
      background: 'none',
      fontSize: 20,
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, '×')), React.createElement('div', {
    style: {
      color: 'var(--text-body)',
      fontSize: 'var(--text-body)',
      marginBottom: footer ? 20 : 0
    }
  }, children), footer && React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const tones = {
  success: ['var(--success-100)', 'var(--success-500)'],
  danger: ['var(--danger-100)', 'var(--danger-500)'],
  info: ['var(--info-100)', 'var(--info-500)'],
  neutral: ['var(--ink-50)', 'var(--ink-600)']
};
function Toast({
  tone = 'info',
  title,
  message,
  onDismiss
}) {
  const [bg, fg] = tones[tone] || tones.info;
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: '14px 16px',
      width: 340,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('span', {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: fg,
      marginTop: 6,
      flexShrink: 0
    }
  }), React.createElement('div', {
    style: {
      flex: 1
    }
  }, title && React.createElement('div', {
    style: {
      fontWeight: 700,
      color: 'var(--text-heading)',
      fontSize: 'var(--text-body-s)',
      marginBottom: 2
    }
  }, title), React.createElement('div', {
    style: {
      color: 'var(--text-body)',
      fontSize: 'var(--text-body-s)'
    }
  }, message)), onDismiss && React.createElement('button', {
    onClick: onDismiss,
    'aria-label': 'Dismiss',
    style: {
      border: 'none',
      background: 'none',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      fontSize: 16
    }
  }, '×'));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  side = 'top'
}) {
  const [show, setShow] = React.useState(false);
  const pos = side === 'top' ? {
    bottom: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  } : side === 'bottom' ? {
    top: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  } : side === 'left' ? {
    right: 'calc(100% + 8px)',
    top: '50%',
    transform: 'translateY(-50%)'
  } : {
    left: 'calc(100% + 8px)',
    top: '50%',
    transform: 'translateY(-50%)'
  };
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement('span', {
    style: {
      position: 'absolute',
      ...pos,
      background: 'var(--ink-900)',
      color: 'var(--text-on-inverse)',
      fontSize: 'var(--text-caption)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-heading)'
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 18,
      height: 18,
      borderRadius: 5,
      border: checked ? 'none' : '1px solid var(--border-strong)',
      background: checked ? 'var(--brand-primary)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast)',
      flexShrink: 0
    }
  }, checked && React.createElement('svg', {
    width: 11,
    height: 11,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: '#fff',
    strokeWidth: 3
  }, React.createElement('path', {
    d: 'M5 13l4 4L19 7'
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  error,
  helpText,
  disabled = false,
  type = 'text'
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('label', {
    style: {
      fontSize: 'var(--text-body-s)',
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, label), React.createElement('input', {
    type,
    value,
    placeholder,
    disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      padding: '10px 14px',
      fontSize: 'var(--text-body)',
      fontFamily: 'var(--font-body)',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${error ? 'var(--danger-500)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      boxShadow: focus ? 'var(--shadow-glow)' : 'none',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: 'var(--text-heading)',
      outline: 'none',
      transition: 'box-shadow var(--duration-fast),border-color var(--duration-fast)'
    }
  }), (error || helpText) && React.createElement('span', {
    style: {
      fontSize: 'var(--text-caption)',
      color: error ? 'var(--danger-500)' : 'var(--text-muted)'
    }
  }, error || helpText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-heading)'
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(),
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: checked ? '5px solid var(--brand-primary)' : '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      flexShrink: 0,
      transition: 'border var(--duration-fast)'
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  value,
  onChange,
  options = [],
  disabled = false
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('label', {
    style: {
      fontSize: 'var(--text-body-s)',
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, label), React.createElement('div', {
    style: {
      position: 'relative'
    }
  }, React.createElement('select', {
    value,
    disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      appearance: 'none',
      padding: '10px 36px 10px 14px',
      fontSize: 'var(--text-body)',
      fontFamily: 'var(--font-body)',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
      boxShadow: focus ? 'var(--shadow-glow)' : 'none',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: 'var(--text-heading)',
      outline: 'none'
    }
  }, options.map(o => React.createElement('option', {
    key: o.value,
    value: o.value
  }, o.label))), React.createElement('span', {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 11
    }
  }, '▾')));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-heading)'
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 38,
      height: 22,
      borderRadius: 'var(--radius-full)',
      background: checked ? 'var(--brand-primary)' : 'var(--ink-100)',
      position: 'relative',
      transition: 'background var(--duration-normal) var(--ease-standard)',
      flexShrink: 0
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 18 : 2,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-normal) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 24,
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-body)'
    }
  }, tabs.map(t => React.createElement('button', {
    key: t.value,
    onClick: () => onChange && onChange(t.value),
    style: {
      background: 'none',
      border: 'none',
      padding: '10px 2px',
      fontSize: 'var(--text-body)',
      fontWeight: 600,
      cursor: 'pointer',
      color: active === t.value ? 'var(--text-heading)' : 'var(--text-muted)',
      borderBottom: active === t.value ? '2px solid var(--brand-primary)' : '2px solid transparent',
      marginBottom: -1,
      transition: 'color var(--duration-fast)'
    }
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Marketing.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  Tag,
  Tabs
} = window.ZyvoraDesignSystem_548474;
const Icon = ({
  name,
  size = 20
}) => React.createElement('i', {
  'data-lucide': name,
  style: {
    width: size,
    height: size,
    display: 'block'
  }
});
function Header() {
  const [open, setOpen] = React.useState(false);
  return React.createElement('header', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 56px',
      position: 'sticky',
      top: 0,
      background: 'var(--surface-app)',
      zIndex: 50,
      borderBottom: '1px solid var(--border-default)'
    }
  }, React.createElement('img', {
    src: '../../assets/logo.png',
    style: {
      height: 26
    }
  }), React.createElement('nav', {
    style: {
      display: 'flex',
      gap: 32,
      fontSize: 'var(--text-body-s)',
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, ['Product', 'Solutions', 'Pricing', 'Docs'].map(l => React.createElement('a', {
    key: l,
    href: '#',
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, l))), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12
    }
  }, React.createElement(Button, {
    variant: 'ghost',
    size: 'sm'
  }, 'Sign in'), React.createElement(Button, {
    variant: 'primary',
    size: 'sm'
  }, 'Start free')));
}
function Hero() {
  return React.createElement('section', {
    style: {
      padding: '96px 56px 80px',
      textAlign: 'center',
      maxWidth: 920,
      margin: '0 auto'
    }
  }, React.createElement(Badge, {
    tone: 'purple'
  }, 'Now with real-time attribution'), React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-display-xl)',
      letterSpacing: 'var(--tracking-tighter)',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--text-heading)',
      margin: '20px 0'
    }
  }, 'Marketing that moves at your speed.'), React.createElement('p', {
    style: {
      fontSize: 'var(--text-body-l)',
      color: 'var(--text-body)',
      maxWidth: 560,
      margin: '0 auto 32px',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, 'Zyvora unifies campaigns, analytics, and automation into one bold workspace — built for teams who ship fast and never guess.'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center'
    }
  }, React.createElement(Button, {
    size: 'lg'
  }, 'Start free trial'), React.createElement(Button, {
    size: 'lg',
    variant: 'secondary',
    icon: React.createElement(Icon, {
      name: 'play',
      size: 16
    })
  }, 'Watch demo')));
}
function LogoStrip() {
  return React.createElement('div', {
    style: {
      padding: '0 56px 80px',
      display: 'flex',
      gap: 48,
      justifyContent: 'center',
      alignItems: 'center',
      opacity: .55,
      filter: 'grayscale(1)',
      flexWrap: 'wrap'
    }
  }, ['Northwind', 'Halcyon', 'Fenwick', 'Orbitly', 'Marrow'].map(n => React.createElement('span', {
    key: n,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--ink-500)'
    }
  }, n)));
}
const FEATURES = [{
  icon: 'zap',
  title: 'Automate the busywork',
  body: 'Trigger campaigns from real user behavior — no spreadsheets, no waiting on engineering.'
}, {
  icon: 'bar-chart-3',
  title: 'See what actually works',
  body: 'Attribution across every channel, updated live, down to the dollar.'
}, {
  icon: 'users',
  title: 'Built for teams',
  body: 'Shared workspaces, approvals, and comments — everyone stays in sync.'
}, {
  icon: 'shield-check',
  title: 'Enterprise-grade control',
  body: 'SSO, audit logs, and granular permissions from day one.'
}];
function Features() {
  return React.createElement('section', {
    style: {
      padding: '0 56px 96px',
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, FEATURES.map(f => React.createElement(Card, {
    key: f.title,
    elevation: 'sm',
    interactive: true
  }, React.createElement('div', {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--purple-100)',
      color: 'var(--purple-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, React.createElement(Icon, {
    name: f.icon,
    size: 20
  })), React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      margin: '0 0 8px',
      color: 'var(--text-heading)'
    }
  }, f.title), React.createElement('p', {
    style: {
      fontSize: 'var(--text-body-s)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)',
      margin: 0
    }
  }, f.body)))));
}
function Testimonial() {
  return React.createElement('section', {
    style: {
      background: 'var(--ink-900)',
      padding: '88px 56px',
      textAlign: 'center'
    }
  }, React.createElement('p', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-h1)',
      color: 'var(--cream-50)',
      maxWidth: 760,
      margin: '0 auto 24px',
      lineHeight: 'var(--leading-snug)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, '"We replaced four tools with Zyvora and cut campaign turnaround from weeks to days."'), React.createElement('div', {
    style: {
      color: 'var(--ink-200)',
      fontSize: 'var(--text-body-s)',
      fontWeight: 600
    }
  }, 'Priya Ramesh, VP Growth at Halcyon'));
}
function Pricing() {
  const [annual, setAnnual] = React.useState(true);
  const tiers = [{
    name: 'Starter',
    price: annual ? 29 : 39,
    desc: 'For solo marketers getting started.',
    cta: 'Start free',
    features: ['1 workspace', '3 campaigns', 'Basic analytics']
  }, {
    name: 'Growth',
    price: annual ? 89 : 109,
    desc: 'For teams scaling paid + lifecycle.',
    cta: 'Start free trial',
    features: ['5 workspaces', 'Unlimited campaigns', 'Full attribution', 'Slack alerts'],
    highlight: true
  }, {
    name: 'Enterprise',
    price: null,
    desc: 'For orgs that need control at scale.',
    cta: 'Talk to sales',
    features: ['SSO & SCIM', 'Audit logs', 'Dedicated CSM']
  }];
  return React.createElement('section', {
    style: {
      padding: '96px 56px',
      maxWidth: 1080,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-display-m)',
      color: 'var(--text-heading)',
      letterSpacing: 'var(--tracking-tight)',
      margin: '0 0 12px'
    }
  }, 'Pricing that scales with you'), React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      margin: '20px 0 44px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-full)',
      padding: 4
    }
  }, [['Monthly', false], ['Annual — save 20%', true]].map(([label, val]) => React.createElement('button', {
    key: label,
    onClick: () => setAnnual(val),
    style: {
      border: 'none',
      cursor: 'pointer',
      padding: '8px 18px',
      borderRadius: 'var(--radius-full)',
      fontSize: 'var(--text-body-s)',
      fontWeight: 700,
      background: annual === val ? 'var(--brand-primary)' : 'transparent',
      color: annual === val ? '#fff' : 'var(--text-body)'
    }
  }, label))), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      textAlign: 'left'
    }
  }, tiers.map(t => React.createElement(Card, {
    key: t.name,
    elevation: t.highlight ? 'lg' : 'sm',
    style: t.highlight ? {
      border: '2px solid var(--brand-primary)'
    } : {}
  }, React.createElement('div', {
    style: {
      fontWeight: 700,
      color: 'var(--text-heading)',
      marginBottom: 4
    }
  }, t.name), React.createElement('div', {
    style: {
      fontSize: 'var(--text-body-s)',
      color: 'var(--text-muted)',
      marginBottom: 20
    }
  }, t.desc), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h1)',
      fontWeight: 800,
      color: 'var(--text-heading)',
      marginBottom: 20
    }
  }, t.price ? `$${t.price}` : 'Custom', t.price && React.createElement('span', {
    style: {
      fontSize: 'var(--text-body-s)',
      fontWeight: 500,
      color: 'var(--text-muted)'
    }
  }, '/mo')), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginBottom: 24
    }
  }, t.features.map(f => React.createElement('div', {
    key: f,
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      fontSize: 'var(--text-body-s)',
      color: 'var(--text-body)'
    }
  }, React.createElement(Icon, {
    name: 'check',
    size: 15
  }), f))), React.createElement(Button, {
    variant: t.highlight ? 'primary' : 'secondary',
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, t.cta)))));
}
function Footer() {
  return React.createElement('footer', {
    style: {
      padding: '56px',
      borderTop: '1px solid var(--border-default)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement('img', {
    src: '../../assets/logo.png',
    style: {
      height: 20,
      opacity: .8
    }
  }), React.createElement('div', {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, '© 2026 Zyvora, Inc.'));
}
function MarketingSite() {
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  }, []);
  return React.createElement('div', null, React.createElement(Header), React.createElement(Hero), React.createElement(LogoStrip), React.createElement(Features), React.createElement(Testimonial), React.createElement(Pricing), React.createElement(Footer));
}
window.MarketingSite = MarketingSite;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Marketing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/Mobile.jsx
try { (() => {
const {
  Button,
  IconButton,
  Card,
  Badge,
  Switch
} = window.ZyvoraDesignSystem_548474;
const Icon = ({
  name,
  size = 20,
  color
}) => React.createElement('i', {
  'data-lucide': name,
  style: {
    width: size,
    height: size,
    display: 'block',
    color
  }
});
const TABS = [{
  k: 'home',
  icon: 'layout-dashboard',
  label: 'Home'
}, {
  k: 'campaigns',
  icon: 'megaphone',
  label: 'Campaigns'
}, {
  k: 'insights',
  icon: 'bar-chart-3',
  label: 'Insights'
}, {
  k: 'profile',
  icon: 'user',
  label: 'Profile'
}];
function StatusBar() {
  return React.createElement('div', {
    style: {
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, React.createElement('span', null, '9:41'), React.createElement('span', null, '●●●  ᯓ  ▮'));
}
function TabBar({
  active,
  setActive
}) {
  return React.createElement('div', {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px 8px 26px',
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-default)'
    }
  }, TABS.map(t => React.createElement('button', {
    key: t.k,
    onClick: () => setActive(t.k),
    style: {
      border: 'none',
      background: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      cursor: 'pointer',
      color: active === t.k ? 'var(--brand-primary)' : 'var(--text-muted)'
    }
  }, React.createElement(Icon, {
    name: t.icon,
    size: 22
  }), React.createElement('span', {
    style: {
      fontSize: 11,
      fontWeight: 600
    }
  }, t.label))));
}
function Header({
  title,
  onBack
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 20px 16px'
    }
  }, onBack && React.createElement(IconButton, {
    icon: React.createElement(Icon, {
      name: 'chevron-left',
      size: 18
    }),
    'aria-label': 'Back',
    onClick: onBack
  }), React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-h2)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, title));
}
const FEED = [{
  name: 'Summer launch',
  status: 'Live',
  tone: 'success',
  stat: '128K reach · +12%'
}, {
  name: 'Retargeting — cart drop',
  status: 'Live',
  tone: 'success',
  stat: '64K reach · +6%'
}, {
  name: 'Q3 webinar series',
  status: 'Scheduled',
  tone: 'warning',
  stat: 'Starts Aug 3'
}];
function Home({
  onOpen
}) {
  return React.createElement('div', {
    style: {
      padding: '0 20px 100px',
      overflowY: 'auto',
      height: '100%'
    }
  }, React.createElement(Header, {
    title: 'Good morning, Priya'
  }), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginBottom: 20
    }
  }, React.createElement(Card, {
    elevation: 'sm',
    padding: '16px'
  }, React.createElement('div', {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)',
      fontWeight: 700
    }
  }, 'REACH'), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-h2)',
      color: 'var(--text-heading)'
    }
  }, '482K')), React.createElement(Card, {
    elevation: 'sm',
    padding: '16px'
  }, React.createElement('div', {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)',
      fontWeight: 700
    }
  }, 'CONV. RATE'), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-h2)',
      color: 'var(--text-heading)'
    }
  }, '4.6%'))), React.createElement('div', {
    style: {
      fontWeight: 700,
      color: 'var(--text-heading)',
      margin: '8px 0 10px'
    }
  }, 'Active campaigns'), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, FEED.map(f => React.createElement(Card, {
    key: f.name,
    elevation: 'sm',
    interactive: true,
    onClick: onOpen,
    padding: '14px'
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 6
    }
  }, React.createElement('div', {
    style: {
      fontWeight: 700,
      color: 'var(--text-heading)',
      fontSize: 'var(--text-body-s)'
    }
  }, f.name), React.createElement(Badge, {
    tone: f.tone
  }, f.status)), React.createElement('div', {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, f.stat)))));
}
function CampaignDetail({
  onBack
}) {
  return React.createElement('div', {
    style: {
      padding: '0 20px 100px',
      overflowY: 'auto',
      height: '100%'
    }
  }, React.createElement(Header, {
    title: 'Summer launch',
    onBack
  }), React.createElement(Badge, {
    tone: 'success'
  }, 'Live'), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 6,
      height: 110,
      margin: '20px 0'
    }
  }, [40, 55, 50, 70, 66, 85, 100].map((h, i) => React.createElement('div', {
    key: i,
    style: {
      flex: 1,
      height: `${h}%`,
      background: 'var(--purple-300)',
      borderRadius: '4px 4px 0 0'
    }
  }))), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['Reach', '128,204'], ['Clicks', '9,842'], ['Conversions', '412'], ['Spend', '$4,120']].map(([k, v]) => React.createElement('div', {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: '1px solid var(--border-default)'
    }
  }, React.createElement('span', {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-body-s)'
    }
  }, k), React.createElement('span', {
    style: {
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, v)))), React.createElement(Button, {
    style: {
      width: '100%',
      justifyContent: 'center',
      marginTop: 20
    }
  }, 'Pause campaign'));
}
function Campaigns({
  onOpen
}) {
  return React.createElement('div', {
    style: {
      padding: '0 20px 100px',
      overflowY: 'auto',
      height: '100%'
    }
  }, React.createElement(Header, {
    title: 'Campaigns'
  }), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, FEED.map(f => React.createElement(Card, {
    key: f.name,
    elevation: 'sm',
    interactive: true,
    onClick: onOpen,
    padding: '14px'
  }, React.createElement('div', {
    style: {
      fontWeight: 700,
      color: 'var(--text-heading)',
      fontSize: 'var(--text-body-s)',
      marginBottom: 4
    }
  }, f.name), React.createElement(Badge, {
    tone: f.tone
  }, f.status)))));
}
function Insights() {
  return React.createElement('div', {
    style: {
      padding: '0 20px 100px',
      overflowY: 'auto',
      height: '100%'
    }
  }, React.createElement(Header, {
    title: 'Insights'
  }), React.createElement(Card, {
    elevation: 'sm'
  }, React.createElement('div', {
    style: {
      fontWeight: 700,
      marginBottom: 10
    }
  }, 'Top channel'), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-h2)',
      color: 'var(--brand-primary)'
    }
  }, 'Paid social'), React.createElement('div', {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-body-s)'
    }
  }, '58% of conversions this month')));
}
function Profile() {
  const [notif, setNotif] = React.useState(true);
  return React.createElement('div', {
    style: {
      padding: '0 20px 100px',
      overflowY: 'auto',
      height: '100%'
    }
  }, React.createElement(Header, {
    title: 'Profile'
  }), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 24
    }
  }, React.createElement('div', {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--clay-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 18
    }
  }, 'PR'), React.createElement('div', null, React.createElement('div', {
    style: {
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, 'Priya Ramesh'), React.createElement('div', {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-body-s)'
    }
  }, 'Halcyon Co.'))), React.createElement(Switch, {
    label: 'Push notifications',
    checked: notif,
    onChange: setNotif
  }));
}
function MobileApp() {
  const [tab, setTab] = React.useState('home');
  const [detail, setDetail] = React.useState(false);
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  }, [tab, detail]);
  return React.createElement('div', {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement(StatusBar), React.createElement('div', {
    style: {
      flex: 1,
      position: 'relative',
      overflow: 'hidden'
    }
  }, detail ? React.createElement(CampaignDetail, {
    onBack: () => setDetail(false)
  }) : tab === 'home' ? React.createElement(Home, {
    onOpen: () => setDetail(true)
  }) : tab === 'campaigns' ? React.createElement(Campaigns, {
    onOpen: () => setDetail(true)
  }) : tab === 'insights' ? React.createElement(Insights) : React.createElement(Profile)), !detail && React.createElement(TabBar, {
    active: tab,
    setActive: setTab
  }));
}
window.MobileApp = MobileApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/Mobile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webapp/Dashboard.jsx
try { (() => {
const {
  Button,
  IconButton,
  Card,
  Badge,
  Tag,
  Tabs,
  Input,
  Select,
  Switch,
  Dialog
} = window.ZyvoraDesignSystem_548474;
const Icon = ({
  name,
  size = 18
}) => React.createElement('i', {
  'data-lucide': name,
  style: {
    width: size,
    height: size,
    display: 'block'
  }
});
const NAV = [{
  k: 'overview',
  label: 'Overview',
  icon: 'layout-dashboard'
}, {
  k: 'campaigns',
  label: 'Campaigns',
  icon: 'megaphone'
}, {
  k: 'audiences',
  label: 'Audiences',
  icon: 'users'
}, {
  k: 'settings',
  label: 'Settings',
  icon: 'settings'
}];
function Sidebar({
  view,
  setView
}) {
  return React.createElement('aside', {
    style: {
      width: 232,
      background: 'var(--ink-900)',
      color: 'var(--cream-50)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 14px',
      flexShrink: 0
    }
  }, React.createElement('img', {
    src: '../../assets/logo.png',
    style: {
      height: 20,
      filter: 'brightness(0) invert(1)',
      margin: '6px 10px 28px'
    }
  }), NAV.map(n => React.createElement('button', {
    key: n.k,
    onClick: () => setView(n.k),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 12px',
      borderRadius: 'var(--radius-md)',
      border: 'none',
      background: view === n.k ? 'var(--purple-700)' : 'transparent',
      color: view === n.k ? '#fff' : 'var(--ink-100)',
      fontSize: 'var(--text-body-s)',
      fontWeight: 600,
      cursor: 'pointer',
      textAlign: 'left',
      marginBottom: 2
    }
  }, React.createElement(Icon, {
    name: n.icon,
    size: 16
  }), n.label)), React.createElement('div', {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: 12,
      borderRadius: 'var(--radius-md)',
      background: 'var(--ink-800)'
    }
  }, React.createElement('div', {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--clay-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 12
    }
  }, 'PR'), React.createElement('div', {
    style: {
      fontSize: 'var(--text-caption)'
    }
  }, React.createElement('div', {
    style: {
      fontWeight: 700
    }
  }, 'Priya Ramesh'), React.createElement('div', {
    style: {
      color: 'var(--ink-300)'
    }
  }, 'Halcyon Co.'))));
}
function Topbar({
  title,
  action
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 32px',
      borderBottom: '1px solid var(--border-default)',
      background: 'var(--surface-app)'
    }
  }, React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-h1)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, title), action);
}
const STATS = [{
  label: 'Active campaigns',
  value: '12',
  delta: '+3'
}, {
  label: 'Reach this month',
  value: '482K',
  delta: '+18%'
}, {
  label: 'Conversion rate',
  value: '4.6%',
  delta: '+0.4pt'
}, {
  label: 'Spend',
  value: '$18.2K',
  delta: '-6%'
}];
function Overview() {
  return React.createElement('div', {
    style: {
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, STATS.map(s => React.createElement(Card, {
    key: s.label,
    elevation: 'sm'
  }, React.createElement('div', {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      marginBottom: 10
    }
  }, s.label), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h2)',
      fontWeight: 800,
      color: 'var(--text-heading)'
    }
  }, s.value), React.createElement(Badge, {
    tone: s.delta.startsWith('-') ? 'danger' : 'success'
  }, s.delta))))), React.createElement(Card, {
    elevation: 'sm'
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, React.createElement('div', {
    style: {
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, 'Reach over time'), React.createElement(Tag, null, 'Last 30 days')), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8,
      height: 140
    }
  }, [38, 52, 44, 60, 72, 66, 80, 70, 90, 84, 96, 100].map((h, i) => React.createElement('div', {
    key: i,
    style: {
      flex: 1,
      height: `${h}%`,
      background: 'var(--purple-300)',
      borderRadius: '4px 4px 0 0'
    }
  })))));
}
const CAMPAIGNS = [{
  name: 'Summer launch',
  status: 'Live',
  channel: 'Email + Paid',
  reach: '128K',
  tone: 'success'
}, {
  name: 'Retargeting — cart drop',
  status: 'Live',
  channel: 'Paid social',
  reach: '64K',
  tone: 'success'
}, {
  name: 'Q3 webinar series',
  status: 'Scheduled',
  channel: 'Email',
  reach: '—',
  tone: 'warning'
}, {
  name: 'Referral program',
  status: 'Draft',
  channel: 'In-app',
  reach: '—',
  tone: 'neutral'
}];
function Campaigns({
  onNew
}) {
  return React.createElement('div', {
    style: {
      padding: 32
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: 16
    }
  }, React.createElement(Button, {
    icon: React.createElement(Icon, {
      name: 'plus',
      size: 16
    }),
    onClick: onNew
  }, 'New campaign')), React.createElement(Card, {
    elevation: 'sm',
    padding: '0'
  }, React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, React.createElement('thead', null, React.createElement('tr', null, ['Campaign', 'Status', 'Channel', 'Reach', ''].map(h => React.createElement('th', {
    key: h,
    style: {
      textAlign: 'left',
      padding: '14px 20px',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, h)))), React.createElement('tbody', null, CAMPAIGNS.map(c => React.createElement('tr', {
    key: c.name
  }, React.createElement('td', {
    style: {
      padding: '16px 20px',
      fontWeight: 600,
      color: 'var(--text-heading)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, c.name), React.createElement('td', {
    style: {
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, React.createElement(Badge, {
    tone: c.tone
  }, c.status)), React.createElement('td', {
    style: {
      padding: '16px 20px',
      color: 'var(--text-body)',
      fontSize: 'var(--text-body-s)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, c.channel), React.createElement('td', {
    style: {
      padding: '16px 20px',
      color: 'var(--text-body)',
      fontSize: 'var(--text-body-s)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, c.reach), React.createElement('td', {
    style: {
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-default)',
      textAlign: 'right'
    }
  }, React.createElement(IconButton, {
    icon: React.createElement(Icon, {
      name: 'more-horizontal',
      size: 16
    }),
    'aria-label': 'More'
  }))))))));
}
function Audiences() {
  const segs = [{
    name: 'High-intent visitors',
    size: '34,200',
    tone: 'purple'
  }, {
    name: 'Lapsed customers',
    size: '11,940',
    tone: 'neutral'
  }, {
    name: 'Newsletter subscribers',
    size: '82,410',
    tone: 'purple'
  }];
  return React.createElement('div', {
    style: {
      padding: 32,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, segs.map(s => React.createElement(Card, {
    key: s.name,
    elevation: 'sm',
    interactive: true
  }, React.createElement(Badge, {
    tone: s.tone
  }, 'Segment'), React.createElement('div', {
    style: {
      fontWeight: 700,
      fontSize: 'var(--text-body-l)',
      color: 'var(--text-heading)',
      margin: '14px 0 4px'
    }
  }, s.name), React.createElement('div', {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-body-s)'
    }
  }, s.size, ' contacts'))));
}
function Settings() {
  const [tab, setTab] = React.useState('general');
  const [notif, setNotif] = React.useState(true);
  const [weekly, setWeekly] = React.useState(false);
  return React.createElement('div', {
    style: {
      padding: 32,
      maxWidth: 640
    }
  }, React.createElement(Tabs, {
    active: tab,
    onChange: setTab,
    tabs: [{
      value: 'general',
      label: 'General'
    }, {
      value: 'notifications',
      label: 'Notifications'
    }, {
      value: 'billing',
      label: 'Billing'
    }]
  }), React.createElement('div', {
    style: {
      marginTop: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, tab === 'general' && React.createElement(React.Fragment, null, React.createElement(Input, {
    label: 'Workspace name',
    value: 'Halcyon Co.'
  }), React.createElement(Select, {
    label: 'Timezone',
    value: 'pst',
    options: [{
      value: 'pst',
      label: 'Pacific Time'
    }, {
      value: 'est',
      label: 'Eastern Time'
    }]
  })), tab === 'notifications' && React.createElement(React.Fragment, null, React.createElement(Switch, {
    label: 'Email notifications',
    checked: notif,
    onChange: setNotif
  }), React.createElement(Switch, {
    label: 'Weekly performance digest',
    checked: weekly,
    onChange: setWeekly
  })), tab === 'billing' && React.createElement(Card, {
    elevation: 'sm'
  }, React.createElement('div', {
    style: {
      fontWeight: 700,
      marginBottom: 6
    }
  }, 'Growth plan — $89/mo'), React.createElement('div', {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-body-s)'
    }
  }, 'Renews Aug 12, 2026'))));
}
function Dashboard() {
  const [view, setView] = React.useState('overview');
  const [newOpen, setNewOpen] = React.useState(false);
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  }, [view]);
  const titles = {
    overview: 'Overview',
    campaigns: 'Campaigns',
    audiences: 'Audiences',
    settings: 'Settings'
  };
  return React.createElement('div', {
    style: {
      display: 'flex',
      minHeight: '100vh'
    }
  }, React.createElement(Sidebar, {
    view,
    setView
  }), React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement(Topbar, {
    title: titles[view]
  }), view === 'overview' && React.createElement(Overview), view === 'campaigns' && React.createElement(Campaigns, {
    onNew: () => setNewOpen(true)
  }), view === 'audiences' && React.createElement(Audiences), view === 'settings' && React.createElement(Settings)), React.createElement(Dialog, {
    open: newOpen,
    title: 'New campaign',
    onClose: () => setNewOpen(false),
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      variant: 'secondary',
      onClick: () => setNewOpen(false)
    }, 'Cancel'), React.createElement(Button, {
      onClick: () => setNewOpen(false)
    }, 'Create'))
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, React.createElement(Input, {
    label: 'Campaign name',
    placeholder: 'e.g. Fall promo'
  }), React.createElement(Select, {
    label: 'Channel',
    value: 'email',
    options: [{
      value: 'email',
      label: 'Email'
    }, {
      value: 'paid',
      label: 'Paid social'
    }]
  }))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webapp/Dashboard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
