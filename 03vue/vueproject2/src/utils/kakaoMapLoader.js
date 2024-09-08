const KAKAO_MAP_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
  import.meta.env.VITE_KAKAO_API_KEY
}&autoload=false`;

export const loadKakaoMapSDK = () => {
  return new Promise((resolve, reject) => {
    if (window.kakao && window.kakao.maps) {
      resolve(window.kakao.maps);
    } else {
      const script = document.createElement("script");
      script.src = KAKAO_MAP_SDK_URL;
      script.type = "text/javascript";
      script.onload = () => {
        window.kakao.maps.load(() => {
          resolve(window.kakao.maps);
        });
      };
      script.onerror = (error) => {
        reject(new Error("Failed to load Kakao Maps SDK"));
      };
      document.head.appendChild(script);
    }
  });
};
