# StarWars Site

## Ссылки

- [Ссылка на проект](https://andreytorkhov.github.io/starwars-site/)
- [Ссылка на репозиторий](https://github.com/AndreyTorkhov/starwars-site/)
- [Ссылка на storybook](https://andreytorkhov.github.io/starwars-site/storybook/)

## Скрипты

```bash
# Install
npm i                    # install dependencies

# General
npm run start            # run app in the development mode
npm run storybook        # run storybook
npm run deploy           # deploy app on Github Pages

# Deploy (part of "deploy" script)
npm run build            # builds the app for production
npm run build-storybook  # storybook build
npm run build-gh-pages   # deploy on Github Pages
```

## API

- [основное API](https://swapi.dev) (https://swapi.dev)
- [изображения для API](https://starwars-visualguide.com) (https://starwars-visualguide.com)

## Технологии

### React.js

- Разворачивание приложения с create-react-app
- Состояние компонента (хук useState)
- Жизненный цикл компонента (хук useEffect)
- Context API (хук useContext)
- Рефы и DOM (хук useRef)
- Мемоизация (хук useCallback)
- Создание собственных хуков
- Фрагменты
- Паттерн Higher-Order Component
- Паттерн Подъём состояния
- Обработка событий
- Controlled Components
- Подключение CSS, css-modules, библиотека classnames
- Списки и ключи, Reconciliation Algorithm
- Отложенная загрузка компонентов React.lazy()
- Библиотека prop-types для валидации props

### React Router

- Базовый роутинг
- URL Parameters
- Query Parameters
- Обработка страницы 404 (Not Found)
- Хуки useLocation и useHistory

### Redux

- Базовая структура react-redux-приложения
- Хуки useDispatch, useSelector
- Redux Middleware
- Создание асинхронных action с библиотекой redux-thunk
- Отслеживание состояния store с redux-devtools-extension

### Общее

- Задание Alias в React-приложении (библиотека react-app-rewire-alias)
- Деплой приложения на GitHub Pages (библиотека gh-pages)
- Создание Ui-Kit из визуальных компонентов и публикация в @storybook
- Библиотека lodash с готовыми функциями
- Visual Studio Code. Сниппеты и плагины

### JavaScript

- Методы работы с массивами: map, filter, forEach
- Асинхронность: Promise, Async Functions
- ES6-модули (import и export)
- Оператор разворота для объектов (props для компонента)
- Деструктуризация массивов и объектов
- Тернарные операторы
- Работа с Local Storage
- Работа с API с использованием Fetch

### Вёрстка

- CSS Custom Properties, изменение через JavaScript
- CSS Filters
- CSS Flexbox
- CSS Multi Columns
- Стилизация скроллбара
