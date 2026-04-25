export type StravaActivity = {
  id: number;
  name: string;
  sport_type: string;
  start_date: string;
  distance: number;
  moving_time: number;
  total_elevation_gain: number;
  average_speed: number;
  average_heartrate?: number;
};

export function formatDistance(meters: number): string {
  return (meters / 1000).toFixed(2) + " km";
}

export function formatPace(metersPerSecond: number): string {
  const minPerKm = 1000 / 60 / metersPerSecond;
  const mins = Math.floor(minPerKm);
  const secs = Math.round((minPerKm - mins) * 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m ${s.toString().padStart(2, "0")}s`;
}

export function formatActivityDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

const RUN_TYPES = new Set(["Run", "VirtualRun", "TrailRun"]);

export async function getStravaActivities(): Promise<StravaActivity[]> {
  const clientId = process.env.STRAVA_CLIENT_ID;
  const clientSecret = process.env.STRAVA_CLIENT_SECRET;
  const refreshToken = process.env.STRAVA_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) return [];

  try {
    const tokenRes = await fetch("https://www.strava.com/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      }),
    });

    if (!tokenRes.ok) return [];

    const { access_token } = await tokenRes.json();

    const res = await fetch(
      "https://www.strava.com/api/v3/athlete/activities?per_page=20",
      { headers: { Authorization: `Bearer ${access_token}` } }
    );

    if (!res.ok) return [];

    const all: StravaActivity[] = await res.json();
    return all.filter((a) => RUN_TYPES.has(a.sport_type)).slice(0, 8);
  } catch {
    return [];
  }
}
