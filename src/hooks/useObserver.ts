import { useRef, useCallback } from "react";

/**
 * @param onIntersect 요소가 화면에 나타났을 때 실행할 함수
 * @param options IntersectionObserver의 옵션 (threshold, rootMargin 등)
 */
export const useScrollObserver = (
  onIntersect: (target: HTMLElement) => void,
  options?: IntersectionObserverInit
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  // useCallback을 사용하여 컴포넌트가 리렌더링되어도 함수가 재생성되지 않게 합니다.
  const setRef = useCallback(
    (el: HTMLElement | null) => {
      if (!el) return;

      // 1. 관찰자 초기화
      if (!observerRef.current) {
        observerRef.current = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // 외부에서 주입받은 함수 실행
              onIntersect(entry.target as HTMLElement);

              // 한 번 애니메이션이 실행된 후 관찰을 중단하고 싶다면 아래 주석 해제
              // observerRef.current?.unobserve(entry.target);
            }
          });
        }, options || { threshold: 0.1 });
      }

      // 2. 엘리먼트 관찰 시작
      observerRef.current.observe(el);
    },
    [onIntersect, options]
  );

  return setRef;
};
