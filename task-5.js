let userAnswer = prompt(`Введите страну для доставки`).toLowerCase();

switch(userAnswer) {

   case 'китай':
     console.log(`Доставка в 'китай' будет стоить 100 кредитов`);
     break;

   case 'чили':
     console.log(`Доставка в 'чили' будет стоить 250 кредитов`);
     break;

   case 'австралия':
     console.log(`Доставка в 'австралия' будет стоить 170 кредитов`);
     break;

   case 'индия':
     console.log(`Доставка в 'индия' будет стоить 80 кредитов`);
     break;

   case 'ямайка':
     console.log(`Доставка в 'ямайка' будет стоить 120 кредитов`);
     break;

   default:
     console.log(`В вашей стране доставка не доступна`);
}