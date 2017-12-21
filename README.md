# Тестовое задание
## Описание задачи
Было решено вести учет сотрудников компании. Каждый имеет фотографию, имя, фамилию, пол, дату рождения, должность, навыки, краткую характеристику. При добавлении сотрудника, просмотре его профиля подробно или в списке сотрудников, руководитель должен видеть насколько заполнен профиль в процентах. Удалить сотрудника, перейти к редактированию профиля можно как из списка, так и в профиле пользователя. Также необходимо реализовать поиск и фильтрацию сотрудников в списке.

## Описание данных
**Сотрудник**

Может иметь несколько навыков, но не более пяти.

Состояние | Обязательно к заполнению | Заполняет профиль на, %
----------|--------------------------|------------------------
Фотография | Нет | 20
Имя | Да | 5
Фамилия | Да | 5
Пол | Да | 5
Дата рождения | Да | 5
Должность | Нет | 10
Навык | Нет | 5 (каждый)
Характеристика | Нет | 10

## Этапы разработки
### Базовая реализация
*Время выполнения 8 часов*

1. Форкнуть проект на в свой гитхаб

2. Подготавливает минимальный набор тестов (frontend: protractor, karma, jasmine, etc)

3. Подготавливает заглушку для API, с помощью которого можно получить список всех пользователей, добавить нового, удалить сотрудника и обновить данные сотрудника, используя популярный мок сервер (добавлена ссылка на один из ресурсов, json-server)

4. Реализует интерфейс со списком сотрудников, возможностью добавления, удаления и просмотра

5. Добавляет валидацию формы, динамически изменяет уровень заполнения профиля, реализует *autocomplete* для навыков

6. Отправить пул реквест в основной репозиторий

## Технические требования
### Базовая реализация
* комитить процесс разработки не реже одного раза в течение получаса
* в праве использовать любой шаблон, библиотеку или решение
* использовать сервис для заглушек фотографий, при создании нового пользователя аватар использует заглушку, реализовывать загрузку картинок не нужно
* тесты на выбор: несколько юнит тестов или/и пара e2e тестов
* сотрудник на стороне сервера появляется сразу после перехода к его созданию, но не появляется в списке до тех пор, пока не будет сохранен. В процессе заполнения формы данные обновляются в базе, если была выбрана отмена создания, сотрудник удаляется на сервере
* в процессе ввода навыков появляется подсказки, которыми можно воспользоваться
* приложение может быть собрано (возможность создания production версии с минификацией и т.п.), плюсом будет размещение production версии на heroku, firebase или github-pages
* мокапы расположены в pdf файле, pixel perfect и mobile first не требуется, плюсом будет использование google material design правил

## Ссылки
[JSON Server](https://github.com/typicode/json-server)
