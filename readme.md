## Теоретичні питання

1. Опишіть своїми словами різницю між функціями `setTimeout()` і `setInterval(`)`.
        ```
        setTimeout дозволяє викликати функцію один раз через певний проміжок часу.
        setInterval дозволяє викликати функцію регулярно, повторюючи виклик через певний проміжок часу.
        ```
2. Що станеться, якщо в функцію `setTimeout()` передати нульову затримку? Чи спрацює вона миттєво і чому?
        ```
        Це планує виконання func якнайшвидше. Але планувальник буде викликати функцію тільки після завершення виконання поточного коду.
        ```

3. Чому важливо не забувати викликати функцію `clearInterval()`, коли раніше створений цикл запуску вам вже не потрібен?
        ```
        Для setInterval функція залишається в пам’яті до виклику clearInterval.
        Функція посилається на зовнішнє лексичне середовище, тому, поки вона живе, зовнішні змінні також живуть. Вони можуть зайняти набагато більше пам’яті, ніж сама функція. Тому, коли нам більше не потрібна запланована функція, краще її скасувати, навіть якщо вона дуже мала.
        ```

## Завдання

Реалізувати програму, яка циклічно показує різні картинки. Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.

#### Технічні вимоги:

- У папці `banners` лежить HTML код та папка з картинками.
- При запуску програми на екрані має відображатись перша картинка.
- Через 3 секунди замість неї має бути показано друга картинка.
- Ще через 3 секунди – третя.
- Ще через 3 секунди – четверта.
- Після того, як будуть показані всі картинки - цей цикл має розпочатися наново.
- Після запуску програми десь на екрані має з'явитись кнопка з написом `Припинити`.
- Після натискання на кнопку `Припинити` цикл завершується, на екрані залишається показаною та картинка, яка була там при натисканні кнопки.
- Поруч із кнопкою `Припинити` має бути кнопка `Відновити показ`, при натисканні якої цикл триває з тієї картинки, яка в даний момент показана на екрані.
- Розмітку можна змінювати, додавати потрібні класи, ID, атрибути, теги. 

#### Необов'язкове завдання підвищеної складності
- При запуску програми на екрані повинен бути таймер з секундами та мілісекундами, що показує, скільки залишилося до показу наступної картинки.
- Робити приховування картинки та показ нової картинки поступовим (анімація fadeOut/fadeIn) протягом 0.5 секунди.

#### Література:
- [setTimeout и setInterval](https://learn.javascript.ru/settimeout-setinterval)
