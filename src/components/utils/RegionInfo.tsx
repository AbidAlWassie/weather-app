// components/RegionInfo.tsx
"use client";

interface RegionInfoProps {
  region: string;
  timeZone: string;
}

export default function RegionInfo({ region, timeZone }: RegionInfoProps) {
  return (
    <div>
      <p>Your Region: {region}</p>
      <p>Your Time Zone: {timeZone}</p>
    </div>
  );
}