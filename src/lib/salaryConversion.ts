export function formatSalaryRange(salaryRange: string) {
  if (!salaryRange) return '';
  const cleaned = salaryRange.replace(/₹/g, '').replace(/\s/g, '');
  const [minStr, maxStr] = cleaned.split('-');
  const min = parseInt(minStr, 10);
  const max = parseInt(maxStr, 10);
  if (isNaN(min) || isNaN(max)) return '';
  const formatLPA = (value: number) => {
    const inLakhs = value / 100000;
    return inLakhs % 1 === 0 ? inLakhs.toString() : inLakhs.toFixed(1);
  };
  return {
    salaryRange: `${formatLPA(min)}-${formatLPA(max)} LPA`,
    minSalary: min,
    maxSalary: max,
  };
}
