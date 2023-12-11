# Обновления Vue 3.3

Этот репозиторий содержит код и документацию для проекта "Обновления Vue 3.3". Мы исследуем и реализуем последние предложенные функции и улучшения в Vue 3.3.

## Структура проекта

Проект организован следующим образом:

- **/src**: В этом каталоге находится исходный код новых функций Vue 3.3, включая примеры и рекомендации по использованию.

- **/examples**: Реальные примеры и применение новых функций Vue 3.3 в ваших веб-приложениях.

## Функции

1. **Поддержка импортированных и сложных типов в макросах**: Компилятор теперь может разрешать импортированные типы и поддерживает ограниченный набор сложных типов.

2. **Обобщенные компоненты**: Компоненты, использующие <script setup>, теперь могут принимать параметры обобщенных типов через атрибут generic.

3. **Более эргономичный defineEmits**: Новый более эргономичный способ объявления эмитов с помощью типов.

4. **Типизированные слоты с defineSlots**: Новый макрос defineSlots можно использовать для объявления ожидаемых слотов и соответствующих им параметров.

5. **Реактивная деструктуризация пропсов**: Эта функция позволяет деструктурированным пропсам сохранять реактивность и обеспечивает более эргономичный способ объявления значений пропсов по умолчанию.

6. **defineModel**: Макрос автоматически регистрирует проп и возвращает ref, который может быть непосредственно изменен.

7. **Улучшенная поддержка геттеров с помощью toRef и toValue**: toRef был улучшен для поддержки нормализации значений / геттеров / существующих refs внутри refs. Новый метод toValue обеспечивает обратное, нормализуя значения/геттеры/рефы в значения.

8. **Поддержка импорта исходного кода JSX**: Теперь Vue поддерживает указание пространства имен JSX через опцию jsxImportSource в TypeScript.

9. **defineOptions**: Новый макрос defineOptions позволяет объявлять опции компонента непосредственно в <script setup>, не требуя отдельного блока <script>.

## Начало работы

1. Склонируйте репозиторий на свой локальный компьютер:

2. Изучите каталог `/src` для исходного кода новых функций.

3. Обратитесь к каталогу `/examples` для практических примеров использования и кодовых образцов.

## Примеры

Примеры использования новых функций ECMAScript 2023 доступны в каталоге `/examples`. Вот некоторые из них:

- `/examples/typeMacroExample.js`: Пример того что компилятор теперь может разрешать импортированные типы и поддерживает ограниченный набор сложных типов.

- `/examples/genericComponentExample.js`: Пример того как компоненты, использующие <script setup>, теперь могут принимать параметры обобщенных типов через атрибут generic

- `/examples/defineEmitsExample.js`: Пример более эргономичного способа объявления эмитов с помощью типов.

- `/examples/defineSlotsExample.js`: Пример использования нового макроса defineSlots.

- `/examples/destructuringPropsExample.js`: Пример реактивной деструктуризации пропсов.

- `/examples/defineModelExample.js`: Пример использования нового макроса defineModel.

- `/examples/toRefExample.js`: Пример использования улучшенного toRef и toValue.

- `/examples/jsxImportSourceExample.js`: Пример использования улучшенного jsxImportSource.

- `/examples/defineOptionsExample.js`: Пример использования нового макроса defineOptions.