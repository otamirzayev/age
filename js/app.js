let btn = document.getElementById("activBtn");
btn.onclick = () => {
  let day_val = document.getElementById("day").value;
  let month_val = document.getElementById("month").value;
  let year_val = document.getElementById("year").value;
  let current_date = new Date();
  let birth_date = new Date(year_val, month_val - 1, day_val);
  let differenceInMs = current_date - birth_date;

  const ageInYears = Math.floor(
    differenceInMs / (1000 * 60 * 60 * 24 * 365.25)
  );
  const monthsLeft = Math.floor(
    (differenceInMs % (1000 * 60 * 60 * 24 * 365.25)) /
      (1000 * 60 * 60 * 24 * 30.44)
  );
  const daysLeft = Math.floor(
    (differenceInMs % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
  );

  document.getElementById("yearsLabel").textContent = ageInYears;
  document.getElementById("monthsLabel").textContent = monthsLeft;
  document.getElementById("daysLabel").textContent = daysLeft;
};
