// mainの期間限定とfooterのform
const mainAndFooter = (() => {
  // マウスオーバーで画像を入れ替え
  // 画像表示場所とそれぞれの画像を取得
  const imageReplace = () => {
    const imageList = document.querySelectorAll("[data-img]");
    const imagePlace = document.getElementById("js-img-place");

    // 画像をmouseover(hover)した時の処理
    imageList.forEach((img) => {
      img.addEventListener("mouseover", () => {
        if (imagePlace.src !== img.src) {
          setTimeout(() => {
            imagePlace.src = img.src;
          }, 250);

          imagePlace.animate(
            [{ opacity: "1" }, { opacity: "0" }, { opacity: "1" }],
            500
          );
        }
      });
    });
  };
  imageReplace();

  // 予約フォーム

  // 入力内容のチェック

  // input要素とbutton要素を取得
  const $doc = document;
  const $nameForm = $doc.getElementById("rf-name");
  const $phoneForm = $doc.getElementById("rf-phone");
  const $mailForm = $doc.getElementById("rf-mail");
  const $dateForm = $doc.getElementById("js-rf-date");
  const $timeForm = $doc.getElementById("rf-date-time");
  const $personsForm = $doc.getElementById("rf-persons");
  const $rfButton = $doc.getElementById("js-formButton");
  const $rfAlertArray = document.querySelectorAll('[date-alert*="alert"]');

  $rfButton.addEventListener("click", () => {
    // 正しく入力されているか否かで処理を分ける関数
    const alertDisplay = (rfEle, index) => {
      if (rfEle) {
        $rfAlertArray[index].style.display = "block";
      } else {
        $rfAlertArray[index].style.display = "none";
      }
    };
    // 名前のform
    const $name = $nameForm.value;
    alertDisplay(!$name, 0);
    //　電話番号のform
    const $phone = $phoneForm.value;
    const phoneRegex = new RegExp(/[^0-9]/g);
    alertDisplay(phoneRegex.test($phone), 1);
    // メールのform
    const $mail = $mailForm.value;
    const mailRegex =
      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    alertDisplay(!mailRegex.test($mail), 2);
    // 予約日のform
    const $date = $dateForm.value;
    const $time = $timeForm.value;
    alertDisplay(!$time || !$date, 3);
    // 来店人数のform
    const $persons = $personsForm.value;
    alertDisplay(!$persons, 4);

    // すべて正しく入力されているかチェック
    const alertAll = () => {
      if (
        !$name ||
        phoneRegex.test($phone) ||
        !mailRegex.test($mail) ||
        !$time ||
        !$date ||
        !$persons
      ) {
        alert("※未入力または正しく入力されていない箇所があります。");
      } else {
        alert("予約が完了しました。（サンプル）");
      }
    };
    alertAll();
  });

  // カレンダー機能追加
  const datePick = () => {
    $("#js-rf-date").datepicker({
      duration: 250,
      showAnim: "fadeIn",
    });
  };
  datePick();

  // 希望する席選択時の処理
  // ラジオボタン(カウンター席)とpタグ(注意書き)を取得
  const $counterSeat = $doc.getElementById("rf-seat-2");
  const $description1 = $doc.getElementById("js-formDescription");

  return {
    seatDescript: () => {
      if ($counterSeat.checked) {
        $description1.style.display = "block";
      } else {
        $description1.style.display = "none";
      }
    },
  };
})();
