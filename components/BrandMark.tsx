import { Icons } from './Icons';

export function BrandMark() {
  return (
    <span className="brand-link">
      <span className="brand-mark"><Icons.Logo /></span>
      <span className="brand-name">
        ExpenseFlow <span className="ai"><span>A</span><span className="i">I</span></span>
      </span>
    </span>
  );
}
