import { createPortal } from 'react-dom';

interface PortalProps {
  children?: React.ReactNode;
}
export default function Portal({ children }: PortalProps) {
  const portalRoot = document.getElementById('portal-root') as Element | DocumentFragment;
  return createPortal(<div data-component="portal">{children}</div>, portalRoot);
}
