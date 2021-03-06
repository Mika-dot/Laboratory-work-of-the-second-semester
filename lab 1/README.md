# Лабораторная работа №1

JavaScript: типы данных, операторы, переменные, условное и циклическое выполнение

**Цель:** изучить основы языка программирования JavaScript: типы данных, переменные, операторы; приобрести навыки написания кода и работы с инструментами разработчика и консолью браузера.

## Содержание и порядок выполнения лабораторной работы:

1. Подготовка к выполнению лабораторной работы:
    - изучение основ языка программирования JavaScript:
        - Основные типы данных
        - Операторы
        - Динамическая типизация и приведение типов данных.
        - Объявление переменных и присваивание значений.
        - Допустимые имена переменных.
    - конструкции:
        - условные:
            - if...else
            - switch
            - for
        - циклические:
           - while
           - do-while

2. Для выполнения работы необходимо:
    - Создать документ html с H1 заголовком «ФИО - Лабораторная работа №1».
    - Решить предложенные задачи используя JS.
    - Подключить решения к созданной странице.

3. Зафиксировать результаты работы с помощью системы контроля версий git и отправить репозиторий на github.
Загрузить проект на Netlify.

Требования к JS:

- Все задачи имеют решение и требуемый в них вывод.
- Отсутствуют ошибки в консоли браузера при работе с веб-страницей.

## Результаты выполнения лабораторной работы:

Статические веб-страницы на хостинге, со структурой и оформлением, которые соответствует требованиям и сохранены в системе контроля версий.
    
## Источники

- [«Современный учебник JavaScript»](https://learn.javascript.ru/)
- [doka.guide](https://doka.guide/css/)
- [Руководство по JavaScript на русском](https://developer.mozilla.org/ru/docs/Web/JavaScript)
- [Марейн Хавербек «Выразительный Javascript»](https://eloquent-javascript.karmazzin.ru/)

## Задачи

### Задача №1 Приведение типов данных

В коде в комментариях напротив "Предположение" напишите предполагаемые результаты выполнения, затем в консоли браузера выполните отдельные строки кода и напритив комментариев "Фактический" напишите, что вывелось в консоль.


#### Пример:
```
typeof("салат")
// Предположение: Data
// Фактический: String
```

#### Задача
```
typeof(9)
// Предположение:
// Фактический:

typeof(1.2)
// Предположение:
// Фактический:

typeof(NaN)
// Предположение:
// Фактический:

typeof("Hello World")
// Предположение:
// Фактический:

typeof(true)
// Предположение:
// Фактический:

typeof(2 != 1)
// Предположение:
// Фактический:


"сыр" + "ы"
// Предположение:
// Фактический:

"сыр" - "ы"
// Предположение:
// Фактический:

"2" + "4"
// Предположение:
// Фактический:

"2" - "4"
// Предположение:
// Фактический:

"Сэм" + 5
// Предположение:
// Фактический:

"Сэм" - 5
// Предположение:
// Фактический:

99 * "шары"
// Предположение:
// Фактический:
```

### Задача №2 Прямоугольник
По двум длинам сторонам прямоугольника рассчитать его периметр, площадь и отношение периметра к площади. Вывести в консоль длины стороны и результаты расчетов.

#### Пример вывода:
```
> 2 3
> 10
> 6
> 1.6666666666666667
```

### Задача №3 Конвертация единиц измерения
Создать две переменные для температуры в градусах цельсия и фаренгейта. Произвести пересчет из градусов цельсия в фаренгейты и из фаренгейта в цельсии. Вывести информацию в консоль с помощью шаблонных литералов и подстановки. Код для знака градус - xB0.

#### Пример вывода:
```
> 25°C соответствует 77°F
> 66.2°F соответствует 19°C
```

### Задача №4 Високосный год
С помощью функции prompt запросить год, с помощью тернарного оператора проверить високосный ли это год. Используя функцию alert вывести результат проверки (true/false).
Если год не делится на 4, значит он обычный. Иначе надо проверить не делится ли год на 100. Если не делится, значит это не столетие и можно сделать вывод, что год високосный.

### Задача №5 Проверка
Проверить два числа и вывести истина если одно из чисел равно 10 или если их сумма 10.

### Задача №6 Считаем овец
С помощью функции prompt запросить у пользователя число. Пользователь введет натуральное число, например 3, и нужно в консоль вывести одной строкой строкой "1 овечка...2 овечка...3 овечка...".

#### Пример вывода:
```
>2
>1 овечка...2 овечка...
```

### Задача №7 Четное-нечетное
Напишите цикл, который проходит по числам от 0 до 15. В каждом цикле проверяется, если текущее число четно или нечетно и в консоль выводится сообщение.

#### Пример вывода:
```

> "0 четное"
> "1 нечетное"
> "2 четное"
```

### Задача №8 Елка к новому году
Напишите программу, которая создает строку, представляющую елку, используя для разделения строк символы новой строки. В слоях елки чередуются "*" и "#" и на каждой строке символов больше на один.

#### Пример вывода:
```
>
*
##
***
####
*****
######
*******
########
*********
##########
***********
############
```

### Задача №9 Сортировка
Напишите условный оператор для сортировки трех чисел. Выведите в консоль результат.
Числа для примера: 0, -3, 1

#### Пример вывода:
```
> -3, 0, 1
```

### Задача №10 Максимальное значение
Напишите условный оператор для нахождения наибольшего числа из пяти. Выведите в консоль результат.
Числа для примера : 2, -1, 0, -5, -4

#### Пример вывода:
```
> 2
```
