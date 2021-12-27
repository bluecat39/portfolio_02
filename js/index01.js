// ヘッダーからmainのカテゴリー別まで
const headerAndMain = (() => {
  // ハンバーガーメニュー
  const hamburgerTriger = () => {
    // ハンバーガークリック時の処理
    document.getElementById("hamburger").addEventListener("click", () => {
      hamburger();
    });

    // ナビのaタグを取得
    const $navA = document.querySelectorAll("#js-headerNav a");

    // ナビのaタグをクリック時の処理
    const navLength = $navA.length;
    let index = 0;
    while (index < navLength) {
      $navA[index].addEventListener("click", () => {
        hamburger();
      });
      index++;
    }
  };
  hamburgerTriger();

  // ハンバーガーとナビを操作
  const hamburger = () => {
    const line3 = document.querySelectorAll("[id*=line]");
    const lineLength = line3.length;
    let index = 0;
    while (index < lineLength) {
      line3[index].classList.toggle("line_" + (index + 1));
      index++;
    }
    document.getElementById("js-headerNav").classList.toggle("in");
  };


  // ランキングのスライダー
  const carouselModule = (() => {
    const swiper = new Swiper(".swiper", {
      // オプション追加↓
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      slidesPerView: 1.1,
      spaceBetween: 10,
      speed: 500,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        660: {
          slidesPerView: 2,
          spaceBetween: 15,
          centeredSlides: false,
          autoplay: {
            delay: 5000,
          },
        },
        980: {
          slidesPerView: 3,
          spaceBetween: 20,
          centeredSlides: false,
          autoplay: {
            delay: 5000,
          },
        },
      },
    });
  })();


  // カテゴリー別にタブ表示
  const categoryTab = () => {
    // タブの要素を取得
    const $doc = document;
    const $tab = $doc.getElementById("js-tab");
    const $nav = $tab.querySelectorAll("[data-nav]");
    const $contents = $tab.querySelectorAll("[data-contents]");
    const ACTIVE_CLASS = "is-active";
    const navLen = $nav.length;
  
    // 初期状態
    const init = () => {
      $contents[0].style.display = "flex";
    };
    init();
  
    // クリックしたら起こるイベント
    const handlerClick = (e) => {
      e.preventDefault();

      // クリックされたnavとそのdataを取得
      const $this = e.target;
      const targetVal = $this.dataset.nav;

      // 対象外のnav,contentsをすべて一旦リセットする
      let index = 0;

      while (index < navLen) {
        const $conStyle = $contents[index].style;
        $conStyle.display = "none";
        $nav[index].classList.remove(ACTIVE_CLASS);
        index++;
      }
  
      // 対象のコンテンツをアクティブ化する
      const $tabStyle = $tab.querySelector(
        '[data-contents="' + targetVal + '"]'
      ).style;
      $tabStyle.display = "flex"
      $nav[targetVal].classList.add(ACTIVE_CLASS);
    };
  
    // 全部のnav要素に対して関数を適応
    let navIndex = 0;
    while (navIndex < navLen) {
      $nav[navIndex].addEventListener("click", (e) => {
        handlerClick(e);
      });
      navIndex++;
    }
  };
  categoryTab();

})();
