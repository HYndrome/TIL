function dXmasEveCounter() {
  // calculate the d-days, ...d-seconds by Date()
  const dateXmasEve = new Date("2023-12-24T00:00:00");
  const dateNow = new Date();
  let leftsecond = Math.floor((dateXmasEve - dateNow) / 1000);
  const dDays = Math.floor(leftsecond / (60 * 60 * 24));
  leftsecond %= 60 * 60 * 24;
  const dHours = Math.floor(leftsecond / (60 * 60));
  leftsecond %= 60 * 60;
  const dMinutes = Math.floor(leftsecond / 60);
  leftsecond %= 60;
  const dSecond = leftsecond;
  // paint caluated value to html
  // use padStart to match digit
  const dDaysindicator = document.querySelector("#days");
  dDaysindicator.innerText = String(dDays).padStart(3, 0);
  const dHoursindicator = document.querySelector("#hours");
  dHoursindicator.innerText = String(dHours).padStart(2, 0);
  const dMinutesindicator = document.querySelector("#minutes");
  dMinutesindicator.innerText = String(dMinutes).padStart(2, 0);
  const dSecondsindicator = document.querySelector("#seconds");
  dSecondsindicator.innerText = String(dSecond).padStart(2, 0);
}

dXmasEveCounter();
setInterval(dXmasEveCounter, 1000);
