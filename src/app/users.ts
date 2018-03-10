import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {delay} from 'rxjs/operators';

const user = [{
  'profileName': 'mihail-ivanov',
  'firstName': 'Михаил',
  'surname': 'Иванов',
  'photo': 'https://i.imgur.com/sHNVHws.jpg',
  'country': 'ru'
}, {'profileName': 'alexey-franchko', 'firstName': 'Алексей', 'surname': 'Франчко', 'country': 'ru'}, {
  'profileName': 'armen',
  'firstName': 'Armen',
  'surname': 'Tarlamazyan',
  'photo': 'http://i.imgur.com/yjZBlds.jpg',
  'country': 'ua'
}, {
  'profileName': 'fedor-dydykin',
  'firstName': 'Федор',
  'surname': 'Дыдыкин',
  'photo': 'http://i.imgur.com/VjqYamq.jpg',
  'country': 'ru'
}, {'profileName': 'mariya0', 'firstName': 'Maria', 'surname': 'Melnikova', 'country': 'ru'}, {
  'profileName': 'polina-rakcheeva',
  'firstName': 'Полина',
  'surname': 'Ракчеева',
  'photo': 'https://i.imgur.com/vzXMh8X.jpg',
  'country': 'ru'
}, {
  'profileName': 'aleksandr-boldyrev',
  'firstName': 'Болдырев',
  'surname': 'Александр',
  'photo': 'https://i.imgur.com/727J5T0.jpg',
  'country': 'ru'
}, {
  'profileName': 'konstantin21',
  'firstName': 'Константин',
  'surname': 'Максимов',
  'photo': 'https://i.imgur.com/INDE52V.jpg',
  'country': 'ru'
}, {
  'profileName': 'vadym-tsupko',
  'firstName': 'Вадим',
  'surname': 'Цупко',
  'photo': 'https://i.imgur.com/6LEA0ZV.jpg',
  'country': 'cy'
}, {'profileName': 'svetlana38', 'firstName': 'Светлана', 'surname': 'Шарипова', 'country': 'ru'}, {
  'profileName': 'andrusova-k',
  'firstName': 'Ксения',
  'surname': 'Андрусова',
  'country': 'ru'
}, {'profileName': 'grigoriy2', 'firstName': 'Григорий', 'surname': 'Шишминцев', 'country': 'ru'}, {
  'profileName': 'yuriykaz',
  'firstName': 'Юрий',
  'surname': 'Казакевич',
  'country': 'by'
}, {'profileName': 'dima94', 'firstName': 'Дмитрий', 'surname': 'Калдузов', 'country': 'ru'}, {
  'profileName': 'konstantin873',
  'firstName': 'Константин',
  'surname': 'Рыбалко',
  'photo': 'https://i.imgur.com/6nnBrd5.jpg',
  'country': 'ru'
}];
export const users$ = Observable.of(user)
  .pipe(delay(2000));
