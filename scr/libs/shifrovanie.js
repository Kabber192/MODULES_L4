const bcrypt = require('bcrypt');

const passwords = [
  'dfmnipwefw', 'pppppp', 'wef', '234-02984092f', 'sd]pvnsilvnsvsdv',
  'pass12345677889', 'password7', 'RADEICHROMAN', 'Roman', 'Radevich',
  '9973261783123', 'passrofkwejf', '12312341231231'
];

const parols = 10;

async function hashPasswords(passwords) {
  const hashedPasswords = [];
  for (const password of passwords) {
    const start = Date.now();
    const hashedPassword = await bcrypt.hash(password, parols);
    const end = Date.now();
    const timeTaken = end - start;
    hashedPasswords.push({ password, hashedPassword, timeTaken });
    console.log(`Пароль: ${password}, Время: ${timeTaken}ms`);
  }
  return hashedPasswords;
}

hashPasswords(passwords).then(hashedPasswords => {
  console.log('Дата:', hashedPasswords);
});