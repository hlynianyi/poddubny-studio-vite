import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import { Database, Resource } from "@adminjs/sequelize";
import { Sequelize, DataTypes } from "sequelize";
import express from "express";
import { russianTranslations } from "./ruLocale.js";

// Регистрация адаптера
AdminJS.registerAdapter({ Database, Resource });

const app = express();
// const sequelize = new Sequelize("postgres://admin:password@db:5432/monorepo"); // if docker-compose
const sequelize = new Sequelize(
  "postgres://admin:password@host.docker.internal:5432/monorepo"
); // if run-dev

// Пример модели
const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Настройка AdminJS
const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  locale: {
    language: "ru",
    availableLanguages: ["en", "ru"],
    localeDetection: true,
    ...russianTranslations,
  },
});

const adminRouter = AdminJSExpress.buildRouter(adminJs);

app.use(adminJs.options.rootPath, adminRouter);
app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000/admin");
});
// Синхронизация базы данных
sequelize.sync({ force: true }).then(() => {
  console.log("Database synced");
});
