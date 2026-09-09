/* menu.js - 화이트리스트 보안, 레퍼럴 유지 및 테마 선택 제어 */
(function () {
  // =========================================================
  // [메뉴 테마 선택] 1, 2, 3, 4 중 원하는 번호를 지정하십시오.
  // 1: Neumorphism (소프트 3D 입체 버튼)
  // 2: Modern Capsule (라운드 캡슐 버튼)
  // 3: Cyber Glossy (입체 광택 볼륨 버튼)
  // 4: Minimal Outline (카드형 아웃라인 버튼)
  // =========================================================
  const CURRENT_THEME = 2;

  const defaultRef = "KRAQ767727-0";

  // 승인된 ID
  const allowedRefs = [
    "KRAQ917863-0",
  ];

  // 1. URL에서 ?ref= 파라미터 값 읽어오기
  const urlParams = new URLSearchParams(window.location.search);
  let userRef = urlParams.get('ref');

  // 2. URL에 ref가 있으면 세션 저장소에 보관, 없으면 기존 저장값 가져오기
  if (userRef) {
    sessionStorage.setItem('saved_ref', userRef);
  } else {
    userRef = sessionStorage.getItem('saved_ref');
  }

  // 3. 화이트리스트 검증
  let finalRef = defaultRef;
  if (userRef && allowedRefs.includes(userRef)) {
    finalRef = userRef;
  }

  // 타 스크립트에서 참조할 수 있도록 전역 변수 등록
  window.FINAL_REF = finalRef;

  // 4. 내부 링크용 쿼리 스트링
  const internalRefQuery = (userRef && allowedRefs.includes(userRef)) ? `?ref=${userRef}` : '';

  // 상단 메뉴 데이터
  const topMenu = [
    { name: "계산기", link: "compound_calculator.html", bg: "#d7bde2", target: "_self" },
    { name: "뉴스", link: `youtube_anal_mobile.html`, bg: "#ffc4d7", target: "_self" },
    { name: "메뉴", link: `akgnews.html${internalRefQuery}`, bg: "#d7bde2", target: "_self" },
    { name: "메뉴", link: `landing_apply.html${internalRefQuery}`, bg: "#ffc4d7", target: "_self" }
  ];

  // 하단 메뉴 데이터
  const bottomMenu = [
    { name: "메뉴", link: `./${internalRefQuery}`, bg: "#ffccaa", target: "_self" },
    { name: "메뉴", link: "https://www.nextstarglobal.com/", bg: "#a3e4d7", target: "_blank" },
    { name: "메뉴", link: `guide_join.html${internalRefQuery}`, bg: "#a3e4d7", target: "_self" },
    { name: "메뉴", link: `guide_register.html${internalRefQuery}`, bg: "#ffccaa", target: "_self" }
  ];


  function buildMenu() {
    const themeClass = `theme-${CURRENT_THEME}`;

    const topTargets = document.querySelectorAll('.cell-nav, #top-nav-container');
    topTargets.forEach(el => {
      el.className = `cell-nav ${themeClass}`;
      el.innerHTML = topMenu.map(m =>
        `<a href="${m.link}" class="cell-item" style="background-color: ${m.bg};" target="${m.target}" rel="noopener noreferrer">${m.name}</a>`
      ).join('');
    });

    const bottomTargets = document.querySelectorAll('.cell-nav-bottom, #bottom-nav-container');
    bottomTargets.forEach(el => {
      el.className = `cell-nav-bottom ${themeClass}`;
      el.innerHTML = bottomMenu.map(m =>
        `<a href="${m.link}" class="cell-item" style="background-color: ${m.bg};" target="${m.target}" rel="noopener noreferrer">${m.name}</a>`
      ).join('');
    });
  }

  // DOM 완료 시 1회만 실행
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildMenu);
  } else {
    buildMenu();
  }
})();
