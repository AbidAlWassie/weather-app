// app/page.tsx
import { authOptions } from "@/auth/authOptions";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/ui/Navbar";
import RegionInfo from "@/components/utils/RegionInfo";
import WeatherInput from "@/components/utils/WeatherInput";
import { getServerSession } from 'next-auth';

export default async function Home() {
  // Get region and timezone server-side
  const localeOptions = Intl.DateTimeFormat().resolvedOptions();
  const locale = localeOptions.locale;
  const regionCode = locale.split('-')[1] || locale;
  const timeZone = localeOptions.timeZone;
  
  const session = await getServerSession(authOptions);
  
  return (
    <div style={{ textAlign: 'center' }}>
      
      <Navbar
        brandName="oneManDev"
        profileImage={session?.user?.image as string}
        onLogoutClick={"/api/auth/signout"}
        onProfileClick={"/userCourse/"}
        onSettingsClick={""}
      />
      
      {session?.user?.name}

      {/* {session?.user?.image} */}

      <Button href="/api/auth/signin" text="Login"/>
      
      <h1>Weather App</h1>

      <RegionInfo region={regionCode} timeZone={timeZone} />

      <WeatherInput />
    </div>
  );
}
