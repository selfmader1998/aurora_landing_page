interface KakaoChannel {
  addChannel: (settings: { channelPublicId: string }) => void;
  chat: (settings: { channelPublicId: string }) => void;
  createAddChannelButton: (settings: {
    container: string | HTMLElement;
    channelPublicId: string;
    size?: "small" | "large";
    supportMultipleDensities?: boolean;
  }) => void;
  // 필요한 다른 메서드들을 여기에 추가할 수 있습니다.
}

interface Kakao {
  init: (appKey: string) => void;
  isInitialized: () => boolean;
  Channel: KakaoChannel;
  // Cleanup 등을 위해 추가 기능이 필요하면 정의 가능
}

interface Window {
  Kakao: Kakao;
}
