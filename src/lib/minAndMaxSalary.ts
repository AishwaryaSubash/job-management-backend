export function parseSalaryRange(salaryRange: string): {
  minSalary: number;
  maxSalary: number;
} {
  if (!salaryRange) {
    return { minSalary: 0, maxSalary: 0 };
  }

  // Check if it ends with 'LPA'
  const isLPA = salaryRange.toUpperCase().endsWith('LPA');
  if (isLPA) {
    salaryRange = salaryRange.replace(/LPA/i, '');
  }

  const [minStr, maxStr] = salaryRange.split('-');

  let min = parseFloat(minStr);
  let max = parseFloat(maxStr);

  // If it's in LPA, convert to actual rupees (1 LPA = 100000 rupees)
  if (isLPA) {
    min = Math.round(min * 100000);
    max = Math.round(max * 100000);
  }

  return { minSalary: min, maxSalary: max };
}
