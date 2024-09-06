import { useStore } from "vuex";

export default calDayNight = () => {
  const DAY_START = 6;
  const DAY_END = 18;

  const store = useStore();

  const currentTimestamp = Math.floor(Date.now() / 1000);
  const localTime = new Date((currentTimestamp + store.timezone) * 1000);

  const hour = localTime.getUTCHours();

  return hour >= DAY_START && hour < DAY_END;
};
