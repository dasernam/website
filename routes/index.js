/**
 * * Copyright (c) 2016, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 */
"use strict";

const fs = require('fs');
const express = require('express');
let router = express.Router();

/* GET landing page. */
router.get('/', (req, res, next) => {
  const basePath = process.env.BASE || process.cwd().replace(/^.*?([^/]*)$/, '/$1/');
  /* Replace {{base}} in index.html with the basePath
   * We don't really use handlebars, but the syntax is nice for this specific
   * usage */
  const index = fs.readFileSync('./index.html', 'utf8').replace(/\{\{base\}\}/, basePath);

  res.send(index);
});

module.exports = router;
