// app/page.tsx
import RegionInfo from "@/components/utils/RegionInfo";
import WeatherInput from "@/components/utils/WeatherInput";

export default function Home() {
  // Get region and timezone server-side
  const localeOptions = Intl.DateTimeFormat().resolvedOptions();
  const locale = localeOptions.locale;
  const regionCode = locale.split('-')[1] || locale;
  const timeZone = localeOptions.timeZone;

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Weather App</h1>

      <RegionInfo region={regionCode} timeZone={timeZone} />

      <WeatherInput />
    </div>
  );
}
