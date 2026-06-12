/** Tailwind col-span classes keyed by track count (must be static for JIT). */
const COL_SPAN: Record<number, Record<string, string>> = {
  2: { '': 'col-span-2', sm: 'sm:col-span-2', lg: 'lg:col-span-2' },
  3: { '': 'col-span-3', sm: 'sm:col-span-3', lg: 'lg:col-span-3' },
  4: { '': 'col-span-4', sm: 'sm:col-span-4', lg: 'lg:col-span-4' },
  6: { '': 'col-span-6', sm: 'sm:col-span-6', lg: 'lg:col-span-6' },
  8: { '': 'col-span-8', sm: 'sm:col-span-8', lg: 'lg:col-span-8' },
}

/** Tailwind grid-cols classes keyed by track count (must be static for JIT). */
const GRID_COLS: Record<number, Record<string, string>> = {
  4: { '': 'grid-cols-4', sm: 'sm:grid-cols-4', lg: 'lg:grid-cols-4' },
  6: { '': 'grid-cols-6', sm: 'sm:grid-cols-6', lg: 'lg:grid-cols-6' },
  8: { '': 'grid-cols-8', sm: 'sm:grid-cols-8', lg: 'lg:grid-cols-8' },
}

function spanClass(tracks: number, breakpoint = ''): string {
  return COL_SPAN[tracks]?.[breakpoint] ?? COL_SPAN[2][breakpoint]
}

/**
 * Grid column count using 2× tracks so incomplete last rows can split evenly
 * (e.g. 2 items in a 3-col grid each span 3 of 6 tracks = half the row).
 */
export function balancedGridCols(columns: number, breakpoint = ''): string {
  const tracks = columns * 2
  return GRID_COLS[tracks]?.[breakpoint] ?? ''
}

/** Col-span for one item in a balanced grid. */
export function balancedGridSpan(
  index: number,
  total: number,
  columns: number,
  breakpoint = '',
): string {
  const tracks = columns * 2
  const remainder = total % columns
  const unitSpan = 2

  if (remainder === 2 && index >= total - 2) {
    return spanClass(tracks / 2, breakpoint)
  }
  if (remainder === 1 && index === total - 1) {
    return spanClass(tracks, breakpoint)
  }
  return spanClass(unitSpan, breakpoint)
}

/** Full-width span for a balanced grid row (footers, CTAs, etc.). */
export function balancedGridFullSpan(columns: number, breakpoint = ''): string {
  return spanClass(columns * 2, breakpoint)
}
