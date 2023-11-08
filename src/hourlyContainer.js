import hourlyCard from './hourlyCard';

export default function hourlyContainer(data, imperial) {
  const component = document.createElement('div');
  component.className = 'hourly-container';

  const hourlyData = data.forecast.forecastday[0].hour;

  hourlyData.forEach((hourData) => {
    const impTemp = parseFloat(hourData.temp_f);
    const tempf = Math.round(impTemp);

    const metricTemp = parseFloat(hourData.temp_c);
    const tempc = Math.round(metricTemp);

    const card = hourlyCard(
      hourData.time,
      hourData.condition.icon,
      imperial ? `${tempf}°f` : `${tempc}°C`
    );
    component.append(card);
  });

  return component;
}
