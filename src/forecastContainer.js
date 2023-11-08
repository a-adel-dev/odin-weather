import forecastCard from './forecastCard';

export default function forecastContainer(data, imperial) {
  const component = document.createElement('div');
  component.className = 'forecast-container';

  const forecastData = data.forecast.forecastday;

  forecastData.forEach((forecast) => {
    const maxImpTemp = parseFloat(forecast.day.maxtemp_f);
    const maxtempF = Math.round(maxImpTemp);

    const minImpTemp = parseFloat(forecast.day.mintemp_f);
    const mintempF = Math.round(minImpTemp);

    const maxMetricTemp = parseFloat(forecast.day.maxtemp_c);
    const maxTempC = Math.round(maxMetricTemp);

    const minMetricTemp = parseFloat(forecast.day.mintemp_c);
    const minTempC = Math.round(minMetricTemp);

    const card = forecastCard(
      forecast.date,
      forecast.day.condition.icon,
      imperial ? `${maxtempF}°f` : `${maxTempC}°C`,
      imperial ? `${mintempF}°f` : `${minTempC}°C`
    );
    component.append(card);
  });

  return component;
}
