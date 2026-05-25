import { Icons } from './Icons';

export function BrandMark() {
  return (
    <a className="brand-link" href="#">
      <span className="brand-mark"><Icons.Logo /></span>
      <span className="brand-name">
        ExpenseFlow <span className="ai"><span>A</span><span className="i">I</span></span>
      </span>
    </a>
  );
}
