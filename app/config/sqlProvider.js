const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  users: {
    all: sql('./sql/user/all.sql'),
    find: sql('./sql/user/find.sql'),
    create: sql('./sql/user/create.sql'),
    delete: sql('./sql/user/delete.sql'),
  },
  animations: {
    all: sql('./sql/animation/all.sql'),
    create: sql('./sql/animation/create.sql'),
    delete: sql('./sql/animation/delete.sql'),
    find: sql('./sql/animation/find.sql'),
  },
};

module.exports = sqlProvider;
