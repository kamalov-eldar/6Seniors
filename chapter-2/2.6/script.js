/*
--2.6--

    модальное блокирует выполнение скриптов и блокирует браузер недавая взаимодействовать с интерфейсом


    alert

        alert("Hello");
        - невозможно кастомизировать дизайн
        - имеет только 1 кнопку, ограничен функциональность


    prompt
        Функция prompt принимает два аргумента:

        result = prompt(title, [default]);
        Этот код отобразит модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена.

        title
            Текст для отображения в окне.
        default
            Необязательный второй параметр, который устанавливает начальное значение в поле для текста в окне.

        result:
         - в случае ввода, результат ввода в виде текста
         - в случае отмены на кнопку «Отмена» значением result станет null

    confirm

        confirm отображает модальное окно с текстом вопроса question и двумя кнопками: OK и Отмена.
        confirm возвращает true/false при ок/отмена

        result = confirm(question);

    alert,prompt,confirm - только для браузера.
    находятся в глобальном объекте window

*/
alert("alert 2.6");
let result = prompt("prompt title", 100);
console.log("result 2.6: ", result);
let resConfirm = confirm("Какой сейчас час");
console.log("resConfirm: ", resConfirm);