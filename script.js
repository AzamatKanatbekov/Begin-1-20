//Ввод и вывод данных, оператор присваивания

// //Begin1°. Дана сторона квадрата a. Найти его периметр P = 4·a.
// let a = 3
// let P = 4 * a
// console.log(`Периметр:${P}`)

// //Begin2°. Дана сторона квадрата a. Найти его площадь S = a2.
// let a = 4
// let S = a**2
// console.log(`Площадь:${S}`)

// //Begin3°. Даны стороны прямоугольника a и b. Найти его площадь S = a·b и периметр P = 2·(a + b).
// let a = 5
// let b = 5
// let S  = a * b
// let P = 2*(a+b)
// console.log(`Площадь:${S}, Периметр:${P}`)

// //Begin4°. Дан диаметр окружности d. Найти ее длину L = π·d. В качестве значения π использовать 3.14.
// let d = 5
// let L = 3.14 * d
// console.log(`Длина:${L}`)

// //Begin5°. Дана длина ребра куба a. Найти объем куба V = a3 и площадь его поверхности S = 6·a2.
// let a = 4
// let V = a**3
// let S = 6**2
// console.log(`Объем:${V} Площадь:${S}`)

// //Begin6°. Даны длины ребер a, b, c прямоугольного параллелепипеда. 
// //Найти его объем V = a·b·c и площадь поверхности S = 2·(a·b + b·c + a·c).
// let a = 7
// let b = 4
// let c = 4
// let V = a * b * c
// let S = 2*(a*b + b*c + a*c)
// console.log(`Объем: ${V} Площадь поверхности: ${S}`)

// //Begin7°. Найти длину окружности L и площадь круга S заданного радиуса R:
// //L = 2·π·R,        S = π·R2.
// //В качестве значения π использовать 3.14.
// let R = 4
// let L = 2*3.14*R
// let S = 3.14*R**2
// console.log(`Длина:${L} Площадь: ${S}`);

// //Begin8°. Даны два числа a и b. Найти их среднее арифметическое: (a + b)/2.
// let a = 7
// let b = 5
// let r = (a+b)/2
// console.log(`Середина:${r}`);

// //Begin9°. Даны два неотрицательных числа a и b. 
// //Найти их среднее геометрическое, т. е. квадратный корень из их произведения: (a·b)1/2.
//  let a = 5
//  let b = 5
//  let k = (a * b)**1/2
//  console.log(`Середина: ${k}`);

// //Begin10°. Даны два ненулевых числа. Найти сумму, разность, произведение и частное их квадратов.
// let a = 4
// let b = 4
// let c = a*a + b*b
// let d = a*a - b*b
// let e = a*a * b*b
// let m = a*a / b*b
// console.log(`Сумма: ${c} Разность ${d} Произведение: ${e} Частное: ${m}`)

// //Begin11°. Даны два ненулевых числа. Найти сумму, разность, произведение и частное их модулей.
// let a = -9
// let b = 8
// let c = Math.abs(a+b)
// let d = Math.abs(a-b)
// let e = Math.abs(a*b)
// let m = Math.abs(a/b)
// console.log(`Сумма: ${c} Разность ${d} Произведение: ${e} Частное: ${m}`)

// //Begin12°. Даны катеты прямоугольного треугольника a и b. Найти его гипотенузу c и периметр P:
// //c = (a2 + b2)1/2,        P = a + b + c.
// let a = 4
// let b = 5
// let c = (a**2 + b**2)**1/2
// let P = a + b + c
// console.log(`Гипотеза:${c} Приметр:${P}`);

// //Begin13°. Даны два круга с общим центром и радиусами R1 и R2 (R1 > R2). 
// //Найти площади этих кругов S1 и S2, а также площадь S3 кольца, внешний радиус которого равен R1, 
// //а внутренний радиус равен R2:
// //S1 = π·(R1)2,        S2 = π·(R2)2,        S3 = S1 − S2.
// //В качестве значения π использовать 3.14.
// let R1 = 5
// let R2 = 10
// let S1 = 3.14*(R1)**2
// let S2 = 3.14*(R2)**2
// let S3 = S1-S2
// console.log(`Площадь1: ${S1} Площадь2: ${S2} Площадь кольца: ${S3}`);


// //Begin14°. Дана длина L окружности. Найти ее радиус R и площадь S круга, ограниченного этой окружностью, учитывая, 
// //что L = 2·π·R,    S = π·R2. В качестве значения π использовать 3.14.
// let L = 24
// let R = L / (2*3.14)
// let S = 3.14*R**2
// console.log(`Радиус:${R.toFixed()} Площадь:${S.toFixed()}`);


// //Begin15°. Дана площадь S круга. Найти его диаметр D и длину L окружности, ограничивающей этот круг, 
// //учитывая, что L = π·D,    S = π·D2/4. В качестве значения π использовать 3.14.

// let S = 8
// let D = 3.14*S/4
// let L = 3.14*D
// console.log(`Диаметр:${D.toFixed()} Длина:${L.toFixed()}`);

// //Begin16°. Найти расстояние между двумя точками с заданными координатами x1 и x2 на числовой оси: |x2 − x1|.
// let x1 = 12
// let x2 = 5
// let c = Math.abs(x2 - x1)
// console.log(c);

// //Begin17°. Даны три точки A, B, C на числовой оси. Найти длины отрезков AC и BC и их сумму.
// let A = 30
// let B = 50
// let C = 10
// let a = A - C
// let b = B - C
// let result = a + b
// console.log(`Длина отрезков AC:${a}  Длина отрезков BC:${b}  Cумму:${result}`);

// //Begin18°. Даны три точки A, B, C на числовой оси. 
// //Точка C расположена между точками A и B. Найти произведение длин отрезков AC и BC.
// let A = 30
// let B = 50
// let C = 10
// let a = A - C
// let b = B - C
// let result = a * b
// console.log(`Длина отрезков AC:${a}  Длина отрезков BC:${b}  Произведение отрезков AC и BC равно:${result}`);

// //Begin19°. Даны координаты двух противоположных вершин прямоугольника: (x1, y1), (x2, y2). 
// //Стороны прямоугольника параллельны осям координат. Найти периметр и площадь данного прямоугольника.
// let x1 = 10
// let y1 = 8
// let x2 = 8
// let y2 = 8
// let P = 2*(Math.abs(x1-x2) + Math.abs(y1-y2))
// let S = Math.abs(x1-x2) * Math.abs(y1-y2)
// console.log(`Периметр прямоугольника равен:${P} Площадь прямоугольника равна:${S}`);

// //Begin20°. Найти расстояние между двумя точками с заданными координатами (x1, y1) и (x2, y2) на плоскости. 
// //Расстояние вычисляется по формуле ((x2 − x1)2 + (y2 − y1)2)1/2.
// let x1 = 10
// let y1 = 8
// let x2 = 8
// let y2 = 8
// let P = ((x2 - x1)**2 + (y2 - y1)**2)**1/2
// console.log(`Расстояние между точками равно:${P}`);

//Begin21°. Даны координаты трех вершин треугольника: (x1, y1), (x2, y2), (x3, y3). 
//Найти его периметр и площадь, используя формулу для расстояния между двумя точками на плоскости (см. задание Begin20). 
//Для нахождения площади треугольника со сторонами a, b, c использовать формулу Герона:

//S = (p·(p − a)·(p − b)·(p − c))1/2, где p = (a + b + c)/2 — полупериметр.

// let x1 = 1
// let y1 = 3

// let x2 = 8
// let y2 = 8

// let x3 = 10
// let y3 = 3

// let a = ((x3 - x1)**2 + (y3 - y1)**2)
// let b = ((x2 - x1)**2 + (y2 - y1)**2)
// let c = ((x3 - x2)**2 + (y3 - y2)**2)

// let p = a+b+c

// let g = (a+b+c)/2
// let s = (g*(g-a)*(g-b)*(g-c))

// console.log(s);



//Begin22°. Поменять местами содержимое переменных A и B и 
//вывести новые значения A и B.

// let a = 5  // a=8
// let b = 3 
// a = a + b  // a=5+3=8
// b = a - b  // b=8-3=5
// a = a - b  // a=8-5=3

// console.log(`Значение: a${a} Значение: b${b}`);


//Begin23°. Даны переменные A, B, C. 
//Изменить их значения, переместив содержимое 
//A в B, B — в C, C — в A, 
//и вывести новые значения переменных A, B, C.

// let a = 5
// let b = 3 
// let c = 4
// a = a + b // a=5+3=8
// b = a - b // b=8-3=5
// a = a - b // a=8-5=3
// c = c + a // c=4+5=9
// a = c - a // a=9-5=4
// c = c - a // c=9-4=5

// console.log(`Значение: a${a} Значение: b${b} Значение: c${c}`)

//Begin24°. Даны переменные A, B, C. 
//Изменить их значения, переместив содержимое 
//A в C, C — в B, B — в A, 
//и вывести новые значения переменных A, B, C.

// let a = 5
// let b = 3 
// let c = 4
// a = a + c // a=5+4=9
// c = a - c // c=9-4=5
// b = a + b // b=9+3=12
// a = b - a // a=12-9=3
// b = b - c // b=12-5=7
// b = b - a // b=7-3=4
// console.log(`Значение: a${a} Значение: b${b} Значение: c${c}`)

//Begin25°. Найти значение функции y = 3x6 − 6*x2 − 7 
//при данном значении x.

// let x = 2
// let y = 3*x**6-6*x**2-7

// console.log(y);

//Begin26°. Найти значение функции y = 4(x−3)6 − 7*(x−3)3 + 2 
//при данном значении x.

// let x = 1
// let y = 4*(x-3)**6-7*(x-3)**3+2

// console.log(y);

//Begin27°. Дано число A. Вычислить A8, 
//используя вспомогательную переменную и три операции умножения. 
//Для этого последовательно находить A2, A4, A8. 
//Вывести все найденные степени числа A.

// let a = 2
// let a2 = a**2
// let a4 = a**4
// let a8 = a**8

// console.log(`Значение A в степени 2 равно:${a2} Значение A в степени 4 равно:${a4} Значение A в степени 8 равно:${a8}`);

//Begin28°. Дано число A. Вычислить A15, используя две вспомогательные переменные и пять операций умножения. 
//Для этого последовательно находить A2, A3, A5, A10, A15. Вывести все найденные степени числа A.

// let a = 2
// let a2 = a*a
// let a3 = a2*a
// let a5 = a3*a2
// let a10 = a5*a5
// let a15 = a*a10

// let a = 2
// let a2 = a**2
// let a3 = a**3
// let a5 = a**5
// let a10 = a**10
// let a15 = a**15

// console.log(`Значение A в степени 2 равно:${a2} 
// Значение A в степени 3 равно:${a3}
// Значение A в степени 5 равно:${a5} 
// Значение A в степени 10 равно:${a10} 
// Значение A в степени 15 равно:${a15}`);

//Begin29°. Дано значение угла α в градусах (0 ≤ α < 360).
//Определить значение этого же угла в радианах, учитывая, что 180° = π радианов. В качестве значения π использовать 3.14.

// let g = 90
// const PI = 3.14
// let r = PI*g/180
// console.log(`Pадиан:${r}`);

//Begin30°. Дано значение угла α в радианах (0 ≤ α < 2·π). Определить значение этого же угла в градусах, учитывая, 
//что 180° = π радианов. В качестве значения π использовать 3.14.

// let r = 1.57
// let g = 180*r/3.14
// console.log(`Градус:${g}`);


//Begin31°. Дано значение температуры T в градусах Фаренгейта.
//Определить значение этой же температуры в градусах Цельсия. Температура по Цельсию TC и температура по
//Фаренгейту TF связаны следующим соотношением: TC = (TF − 32)·5/9.

//https://wl-beridelai.cf.tsp.li/resize/728x/jpg/64c/625/cd877f5acf8dcd9bcae330d016.jpg таблица

// let tf = 158
// let tc = (tf - 32)*5/9
// console.log(`Цельсий: ${tc}`);

//Begin32°. Дано значение температуры T в градусах Цельсия. 
//Определить значение этой же температуры в градусах Фаренгейта. 
//Температура по Цельсию TC и температура по Фаренгейту TF связаны следующим соотношением: TC = (TF − 32)·5/9.

// let tc = 70
// let tf = 9/5*tc+32
// console.log(`Фаренгейт: ${tf}`);


//Begin33°. Известно, что X кг конфет стоит A рублей. Определить, сколько стоит 1 кг и Y кг этих же конфет.

// let x = 2
// let a = 200
// let price = a/x
// let y = 1
// let c = y*price
// console.log(`${x} кг конфет стоит:${a} сом, ${y} кг этих же конфе будет ${c}`);


//Begin34°. Известно, что X кг шоколадных конфет стоит A рублей, а Y кг ирисок стоит B рублей. 
//Определить, сколько стоит 1 кг шоколадных конфет, 1 кг ирисок, а также во сколько раз шоколадные конфеты дороже ирисок.

// let x = 5
// let a = 1200
// let y = 5
// let b = 1000
// let candy = a/x
// let iris = b/y
// let result = candy / iris

// console.log(`Цена 1 кг шоколадных конфет:${candy} сом 
// Цена 1 кг ирисок:${iris} сом
// Шоколадные конфеты дороже в:${result} раз`);


//Begin35°. Скорость лодки в стоячей воде V км/ч, скорость течения реки U км/ч (U < V).
//Время движения лодки по озеру T1 ч, а по реке (против течения) — T2 ч. Определить путь S, 
//пройденный лодкой (путь = время · скорость). Учесть, что при движении против течения 
//скорость лодки уменьшается на величину скорости течения.

// let v = 20
// let u = 16
// let t1 = 1
// let t2 = 1
// let s = v*t1+(v-u)*t2

// console.log(`Лодка прошла путь равный:${s}км`);

//Begin36°. Скорость первого автомобиля V1 км/ч, второго — V2 км/ч, расстояние между ними S км. 
//Определить расстояние между ними через T часов, если автомобили удаляются друг от друга, 
//двигаясь в противоположных направлениях. Данное расстояние равно сумме начального расстояния и общего пути, 
//проделанного автомобилями; общий путь = время · суммарная скорость.

// let v1 = 140
// let v2 = 80
// let s = 10
// let t = 1
// let result = s+v1*t+v2*t

// console.log(`Расстояние между автомабилями:${result}км`);

//Begin37°. Скорость первого автомобиля V1 км/ч, второго — V2 км/ч, расстояние между ними S км. 
//Определить расстояние между ними через T часов, если автомобили первоначально 
//движутся навстречу друг другу. Данное расстояние равно модулю разности начального расстояния и общего пути, 
//проделанного автомобилями; общий путь = время · суммарная скорость.

// let v1 = 120
// let v2 = 100
// let s = 150
// let t = 1
// let result = Math.abs(s-(t*v1+t*v2))
// console.log(`Расстояние между автомабилями:${result}`);

//Begin38°. Решить линейное уравнение A·x + B = 0, заданное своими коэффициентами A и B (коэффициент A не равен 0).

// let a = 5
// let b = 4
// let x = (-1)*a/b
// console.log(`x =${x}`);

//Begin39°. Найти корни квадратного уравнения A·x2 + B·x + C = 0, заданного своими коэффициентами A, B, C (A > 0), 
//если известно, что дискриминант уравнения положителен. Вывести вначале меньший, а затем больший из найденных корней.
//Корни квадратного уравнения находятся по формуле x1, 2 = (−B ± (D)1/2)/(2·A), где D — дискриминант, равный B2 − 4·A·C.

// let a=1;
// let b=-4;
// let c=-5;
// let d=Math.sqrt((b)**2-4*a*c);
// let x1=((-1)*b+(d))/(2*a);
// let x2=((-1)*b-(d))/(2*a);
// console.log(`D=${d}; x1=${x1}; x2=${x2};`);
// if (x2<x1){
//     console.log(`Small x2= ${x2}`);
//     console.log(`Big x1= ${x1}`);
// } 
// else {
//     console.log(`Small x1= ${x1}`);
//     v(`Big x2= ${x2}`);
// }

//Begin40°. Найти решение системы линейных уравнений вида
//A1·x + B1·y = C1,
//A2·x + B2·y = C2,
//заданной своими коэффициентами A1, B1, C1, A2, B2, C2, если известно, 
//что данная система имеет единственное решение. Воспользоваться формулами
//x = (C1·B2 − C2·B1)/D,        y = (A1·C2 − A2·C1)/D, где D = A1·B2 − A2·B1.

// let a1 = 5
// let b1 = 3
// let c1 = 1
// let a2 = 6
// let b2 = 4
// let c2 = 2
// let d = a1*b2-a2*b1
// let x = (c1*b2-c2*b1)/d
// let y = (a1*c2-a2*c1)/d
// console.log(`X равен:${x}, Y равен:${y}`);

//Целые числа

//Integer1°. Дано расстояние L в сантиметрах. Используя операцию деления нацело, 
//найти количество полных метров в нем (1 метр = 100 см).

// let l = 100
// const M = 100
// let result = l/M
// console.log(`${l}см: ${result} метр`);

//Integer2°. Дана масса M в килограммах. Используя операцию деления нацело, 
//найти количество полных тонн в ней (1 тонна = 1000 кг).

// let m = 10000
// const T = 1000
// let result = m/T

// console.log(`${m}кг: ${result} тонна`); 

//Integer3°. Дан размер файла в байтах. Используя операцию деления нацело, 
//найти количество полных килобайтов, которые занимает данный файл (1 килобайт = 1024 байта).

// let b = 10
// const K = 1024
// let result = b/K
// console.log(`${b} байт: ${result.toFixed(1)} килобайт`);

//Integer4°. Даны целые положительные числа A и B (A > B). 
//На отрезке длины A размещено максимально возможное количество отрезков длины B (без наложений). 
//Используя операцию деления нацело, найти количество отрезков B, размещенных на отрезке A.

// let a = 45
// let b = 20
// let result = a/b
// console.log(`${result}`);

//Integer5°. Даны целые положительные числа A и B (A > B). На отрезке длины A размещено максимально возможное количество отрезков длины B 
//(без наложений). Используя операцию взятия остатка от деления нацело, найти длину незанятой части отрезка A.

// let a = 20
// let b = 45
// let result = b/a
// console.log(`${result}`);

//Integer6°. Дано двузначное число. Вывести вначале его левую цифру (десятки), а затем — его правую цифру (единицы). 
//Для нахождения десятков использовать операцию деления нацело, для нахождения единиц — операцию взятия остатка от деления.

// let a = 38
// let b = a/10
// let c = a%10
// console.log(`Левая:${b} Правая:${c}`);

//Integer7°. Дано двузначное число. Найти сумму и произведение его цифр.

// let a = 44
// let c = (a/10)+(a%10)
// let p = (a/10)*(a%10)
// console.log(`Сумма:${c}, Произведение:${p}`);

//Integer8°. Дано двузначное число. Вывести число, полученное при перестановке цифр исходного числа.

// let a = 10
// let result = (a/10)+(a%10)*10
// console.log(`${result}`);

//Integer9°. Дано трехзначное число. Используя одну операцию деления нацело, вывести первую цифру данного числа (сотни).

// let a = 800
// let result = a/100
// console.log(`${result}`);

//Integer10°. Дано трехзначное число. Вывести вначале его последнюю цифру (единицы), а затем — его среднюю цифру (десятки).

// let a = 547
// let b = a % 10
// let c = a % 100 / 10
// console.log(`Трехзначное число:${a} Последняя цифра:${b} - Средняя цифра:${c}`);

