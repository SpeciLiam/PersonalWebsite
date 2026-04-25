import { SiteHeader } from "@/components/SiteHeader";
import {
  getStravaActivities,
  formatDistance,
  formatPace,
  formatDuration,
  formatActivityDate,
} from "@/lib/strava";
import styles from "../page.module.css";

export const revalidate = 3600;

const STRAVA_PROFILE = "https://www.strava.com/athletes/109662176";

export default async function RunningPage() {
  const runs = await getStravaActivities();

  const totalKm = runs.reduce((sum, r) => sum + r.distance / 1000, 0);
  const totalTime = runs.reduce((sum, r) => sum + r.moving_time, 0);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <SiteHeader currentPath="/running" />
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>running</p>
            <h1>running.</h1>
            <p className={styles.summary}>
              recent activity logged on{" "}
              <a
                href={STRAVA_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.inlineLink}
              >
                strava
              </a>
              . data refreshes every hour.
            </p>
          </div>
        </section>

        {runs.length > 0 && (
          <>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <p className={styles.sectionEyebrow}>recent runs</p>
              </div>
              <div className={styles.activityList}>
                {runs.map((activity) => (
                  <div key={activity.id} className={styles.activityRow}>
                    <div className={styles.activityMeta}>
                      <span className={styles.activityTitle}>
                        {activity.name}
                      </span>
                      <span className={styles.activityDate}>
                        {formatActivityDate(activity.start_date)}
                      </span>
                    </div>
                    <div className={styles.activityStats}>
                      <div className={styles.statChip}>
                        <span className={styles.statValue}>
                          {formatDistance(activity.distance)}
                        </span>
                        <span className={styles.statLabel}>dist</span>
                      </div>
                      <div className={styles.statChip}>
                        <span className={styles.statValue}>
                          {formatPace(activity.average_speed)}
                        </span>
                        <span className={styles.statLabel}>/km</span>
                      </div>
                      <div className={styles.statChip}>
                        <span className={styles.statValue}>
                          {formatDuration(activity.moving_time)}
                        </span>
                        <span className={styles.statLabel}>time</span>
                      </div>
                      {activity.total_elevation_gain > 0 && (
                        <div className={styles.statChip}>
                          <span className={styles.statValue}>
                            ↑{Math.round(activity.total_elevation_gain)}m
                          </span>
                          <span className={styles.statLabel}>elev</span>
                        </div>
                      )}
                      {activity.average_heartrate && (
                        <div className={styles.statChip}>
                          <span className={styles.statValue}>
                            {Math.round(activity.average_heartrate)}
                          </span>
                          <span className={styles.statLabel}>bpm</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <p className={styles.sectionEyebrow}>
                  last {runs.length} runs
                </p>
              </div>
              <div className={styles.runSummaryRow}>
                <div className={styles.runStat}>
                  <span className={styles.runStatValue}>
                    {totalKm.toFixed(1)} km
                  </span>
                  <span className={styles.runStatLabel}>total distance</span>
                </div>
                <div className={styles.runStat}>
                  <span className={styles.runStatValue}>
                    {formatDuration(totalTime)}
                  </span>
                  <span className={styles.runStatLabel}>total time</span>
                </div>
                <div className={styles.runStat}>
                  <span className={styles.runStatValue}>
                    {formatPace(
                      runs.reduce((sum, r) => sum + r.average_speed, 0) /
                        runs.length
                    )}
                  </span>
                  <span className={styles.runStatLabel}>avg pace /km</span>
                </div>
              </div>
            </section>
          </>
        )}

        {runs.length === 0 && (
          <section className={styles.section}>
            <p className={styles.summary}>
              no recent runs found. check{" "}
              <a
                href={STRAVA_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.inlineLink}
              >
                strava
              </a>{" "}
              directly.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
