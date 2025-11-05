/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_1320738795",
        "hidden": false,
        "id": "relation3677897630",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "usuario_id",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_2687480828",
        "hidden": false,
        "id": "relation865562746",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "categoria_id",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "select1882004807",
        "maxSelect": 1,
        "name": "tipo",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "gasto",
          "ingreso"
        ]
      },
      {
        "hidden": false,
        "id": "number282232229",
        "max": null,
        "min": null,
        "name": "monto",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "select3601604499",
        "maxSelect": 1,
        "name": "frecuencia",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "diaria",
          "semanal",
          "quincenal",
          "mensual",
          "trimestral",
          "anual"
        ]
      },
      {
        "hidden": false,
        "id": "date4160667101",
        "max": "",
        "min": "",
        "name": "proxima_fecha",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "hidden": false,
        "id": "date1792144186",
        "max": "",
        "min": "",
        "name": "fecha_fin",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text2687119104",
        "max": 0,
        "min": 0,
        "name": "descripcion",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "bool2882213148",
        "name": "activo",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "bool"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_859106215",
    "indexes": [],
    "listRule": null,
    "name": "transacciones_recurrentes",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_859106215");

  return app.delete(collection);
})
