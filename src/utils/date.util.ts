export const calculateDate = (from: string, to: string) => {
  const startDate = new Date(from);
  const endDate = to === "Present" ? new Date() : new Date(to);

  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth() + 1;

  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth() + 1;

  let yearDiff = endYear - startYear;
  let monthDiff = endMonth - startMonth;

  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }

  let result = "";

  if (yearDiff > 0) {
    result += yearDiff + "y ";
  }

  if (monthDiff > 0 || (yearDiff === 0 && monthDiff === 0)) {
    result += monthDiff + "mos";
  }

  return result;
};
