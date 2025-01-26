// const express = require("express");
// const AdminJS = require("adminjs");
// const AdminJSExpress = require("@adminjs/express");
// const { Database, Resource } = require("@adminjs/sequelize"); // <-- Исправленный импорт
// const { Sequelize, DataTypes } = require("sequelize");
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import { Database, Resource } from "@adminjs/sequelize";
import { Sequelize, DataTypes } from "sequelize";
import express from "express";

// Регистрация адаптера
AdminJS.registerAdapter({ Database, Resource });

const app = express();
const sequelize = new Sequelize("postgres://admin:password@db:5432/monorepo");

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
});

const adminRouter = AdminJSExpress.buildRouter(adminJs);

app.use(adminJs.options.rootPath, adminRouter);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});

// Синхронизация базы данных
sequelize.sync({ force: true }).then(() => {
  console.log("Database synced");
});
