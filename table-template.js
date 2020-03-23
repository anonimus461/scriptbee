// Распространение шаблона.
(функция (селектор) {
  var template = document .querySelector (селектор);
  var arrayDataProvider = getJsonAsArray ();
  arrayDataProvider.forEach (function (element) {
    var templateClone = template.content.cloneNode ( true );
    templateClone.querySelector ( '.name> span' ) .textContent + =
       '' + element.name;
    templateClone.querySelector ( '.age> span' ) .textContent + =
       '' + element.age;
    templateClone.querySelector ( '.email> span' ) .textContent + =
       '' + element.email;
    templateClone.querySelector ( '.phone> span' ) .textContent + =
       '' + element.phone;
    templateClone.querySelector ( '.address> span' ) .textContent + =
       '' + element.address;
    document .body.appendChild (templateClone);
  });
}) ( '# table-template' );

function getJsonAsArray () {
  вернуть JSON.parse (` [
    {
      "имя" : "Иван" ,
       "возраст" : "32" ,
       "электронная почта" : "ivan@ivanov.ru" ,
       "телефон" : "+7 (954) 148-45-73" ,
       "адрес" : " Торфяная ул. 7/4 "
    },
    {
      "имя" : "Екатерина" ,
       "возраст" : "24" ,
       "электронная почта" : "katja@yandex.ru" ,
       "телефон" : "+7 (956) 172-12-23" ,
       "адрес" : " Никитинская ул. 12б "
    },
    {
      "имя" : "Федор" ,
       "возраст" : "45" ,
       "электронная почта" : "fedor@sidirov.ru" ,
       "телефон" : "+7 (911) 760-45-35" ,
       "адрес" : " Ленинский пр-т. 74/3 "
    },
    {
      "имя" : "Станислав" ,
       "возраст" : "19" ,
       "электронная почта" : "stas@fedorov.ru" ,
       "телефон" : "+7 (954) 343-55-55" ,
       "адрес" : " Московский пр-т. 14/4 "
    },
    {
      "имя" : "Евгений" ,
       "возраст" : "28" ,
       "электронная почта" : "evgeny@gmail.com" ,
       "телефон" : "+7 (918) 577-98-89" ,
       "адрес" : " Советская ул. 60 "
    },
    {
      "имя" : "Елена" ,
       "возраст" : "22" ,
       "электронная почта" : "elena@mail.ru" ,
       "телефон" : "+7 (931) 466-77-19" ,
       "адрес" : " Есенина ул. 4 "
    }
  ] `);
}
