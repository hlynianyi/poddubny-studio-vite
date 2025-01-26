// translations.js
export const russianTranslations = {
  language: "ru",
  translations: {
    ru: {
      messages: {
        welcomeOnBoard_title: "Добро пожаловать в панель управления сайтом",
        welcomeOnBoard_subtitle:
          "Для управления наполнением сайта необходимо кликнуть на кнопку меню в верхнем левом углу",
      },
      actions: {
        new: "Создать",
        edit: "Редактировать",
        show: "Детали",
        list: "Список",
      },
      buttons: {
        save: "Сохранить",
        confirmRemovalMany_1: "Подтвердить удаление {{count}} записи",
        confirmRemovalMany_2: "Подтвердить удаление {{count}} записей",
        resetFilter: "Сбросить фильтр",
        filter: "Фильтр",
        applyChanges: "Применить изменения",
      },
      properties: {
        name: "Название",
        nested: "Вложенные",
        createdAt: "Дата создания",
        updatedAt: "Дата обновления",
        from: "От",
        to: "До",
        "nested.width": "Ширина",
        "isAdmin.true": "администратор",
        "isAdmin.false": "обычный",
        "companySize.small": "малый",
        "companySize.medium": "средний",
        "companySize.big": "большой",
        "tags.addNewItem": "Добавить новый тег",
      },
      labels: {
        dashboard: "Панель управления",
        Comment: "Комментарии",
        db: "База данных",
        Users: "Пользователи",
        navigation: "Навигация",
        filters: "Фильтры",
      },
      resources: {
        Comment: {
          properties: {
            name: "Заголовок",
          },
        },
      },
      components: {
        LanguageSelector: {
          availableLanguages: ["ru", "en"],
        },
      },
    },
  },
};
