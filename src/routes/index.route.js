/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright IBM Corporation 2020
*/

const express = require('express');
const cars = require('./cars.route');
const accounts = require('./accounts.route');
const swagger = require('./swagger.route');
const { response } = require('express');

const router = express.Router();

router.use('/cars', cars);
router.use('/accounts', accounts);
router.use('/', swagger);

router.get('/', (req, res) => res.send('Hi Welcome to Main Page'));
router.get('/health', (req, res) => {
  const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
  };
  res.send(JSON.stringify(healthcheck));
});

router.get("/myname", function (req, res) {
    let name = req.query.name;
    res.send({
      name: name
    })
}  )

module.exports = router;